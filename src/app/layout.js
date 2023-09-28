import { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Act Volleyball Map',
  description: 'That showing the schools that are attended by Act Volleyball Club players.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-pattern'>
        <div className='min-h-[73vh]'>
          {children}
        </div>
      </body>
    </html>
  )
}
