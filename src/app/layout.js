import './globals.css'

export const metadata = {
  title: 'Act Volleyball Map',
  description: 'That showing the schools that are attended by Act Volleyball Club players.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
