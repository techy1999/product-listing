import Footer from '@@/components/footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Products',
  description: 'This the Products page',
}


export default function RootLayout({
  children, params
}: any) {

  return (
    <html lang={params.lang}>

      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>
          {children}
        </main>
        <Footer lang={params.lang} />
      </body>

    </html>
  )
}
