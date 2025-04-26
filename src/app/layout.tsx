import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Montserrat } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "My Digital Map | Nurjahan Jhorna",
    template: "%s | My Digital Map",
  },
  description: "Exploring the digital frontier through web development and design - Nurjahan Jhorna's portfolio",
  authors: [{ name: "Nurjahan Jhorna" }],
  keywords: ["web development", "frontend developer", "portfolio", "digital explorer", "UI/UX design"],
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "32x32" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/favicon.svg?v=2" }
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a1128" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1128" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <MainNav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
