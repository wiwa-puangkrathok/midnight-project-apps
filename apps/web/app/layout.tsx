import { Geist_Mono, Noto_Sans_Thai, Poppins } from 'next/font/google'

import '@workspace/ui/globals.css'

import { ThemeProvider } from '@/components/theme-provider'

import { cn } from '@workspace/ui/lib/utils'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(
        'antialiased',
        fontMono.variable,
        'font-sans',
        poppins.variable,
        notoSansThai.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
