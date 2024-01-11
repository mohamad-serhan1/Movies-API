import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "MoviesN",
  description: "Fetching movies API ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
    
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
      <section className=" pb-10">
        <Nav />
      </section>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
