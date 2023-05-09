import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from './components/Navbar/Navbar'
import { ReduxProvider } from '@/app/redux/Provider'
import { ToasterProvider } from './providers/ToasterProvider'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb new concept',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <ToasterProvider />
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
