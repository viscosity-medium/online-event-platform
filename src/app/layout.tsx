import "../styles/index.scss";
import cls from "./layout.module.scss"
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import {CommonLayout} from "@/components/CommonLayout";
import {MasterProvider} from "@/providers";

const font = localFont({src: "../fonts/rostelecom.woff2"})

export const metadata: Metadata = {
  title: 'Online Event Platform Prototype',
  description: 'Online Event Platform Prototype',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={
                	`${font.className} ${cls.Layout}`
                }
            >
                <MasterProvider>
                    <CommonLayout>
                    	{children}
                    </CommonLayout>
                </MasterProvider>
            </body>
        </html>
    )
}
