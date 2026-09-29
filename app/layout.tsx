import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
const geist=Geist({subsets:["latin"],variable:"--font-geist"});
const mono=Geist_Mono({subsets:["latin"],variable:"--font-mono"});
export const metadata:Metadata={
  metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"https://orviainsight.co.uk"),
  title:{default:"ORVIA Insight",template:"%s | ORVIA Insight"},
  description:"Human reasoning, judgement and evidence-led assessment from ORVIA Oversight.",
  openGraph:{title:"ORVIA Insight",description:"Human reasoning, judgement and evidence-led assessment.",type:"website"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}><Header/><main>{children}</main><Footer/></body></html>}
