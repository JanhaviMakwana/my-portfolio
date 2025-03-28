'use client';
import clsx from "clsx";
import 'tailwindcss/index.css'
import '@/styles/globals.css';
import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/ui/Header";
import local from "next/font/local";

const graphik = local({
  src: [
    {
      path: '../../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold'
    }
  ],
  variable: '--font-graphik',
  display: 'swap'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-foreground bg-background dark:text-foreground dark:bg-background transition ease-in-out',
        graphik.variable
      )}
    >
      <body
        className="transition ease-in-out min-h-screen"
      >
        <HeroUIProvider>
          <SessionProvider>
            <Header/>
          </SessionProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
