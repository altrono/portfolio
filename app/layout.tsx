import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { source } from "@/lib/fonts";





export const metadata: Metadata = {
  title: "I&apos;m Heri, a Next.js & React Native anthusiast ",
  description: "Experienced Full Stack Developer specializing in web  and mobile app development with expertise in   cutting-edge technologies like Next.js, Reactjs, React Native, AWS, Vercel, Goougle Cloud and more..",
  keywords: "Reactjs developer, React Native developer, Vercel expert, Next.js expert, AWS,  Google Cloud, mobile app developer, web  developer",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${source.className} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          
            {children}
          
       
          </ThemeProvider>
      </body>
    </html>
  );
}
// 52274006