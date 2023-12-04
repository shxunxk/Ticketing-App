import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './(components)/Nav'
import {Link} from 'next/link'

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ticketing App',
  description: 'Generated by Shaunak Nagvenkar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex flex-col h-screen max-h-screen">
          <Nav/>
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}