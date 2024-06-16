import './global.css';
import {Toaster} from "shared/src/components/ui/sonner"
import { Metadata } from 'next';
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { ThemeProvider } from 'apps/safe-llm/src/app/provider/ThemeProvider';


const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};


export async function GetMetadata({ params: { locale } }: Props) {

}




export const metadata: Metadata = {
  title: 'Welcome to safe-llm',
  description: 'Application that runs LLM`s with safe guardrails',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
