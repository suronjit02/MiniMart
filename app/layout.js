import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'MiniMart - Your Online Shopping Destination',
  description: 'A clean, minimal web application for online shopping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}