import './globals.css'

export const metadata = {
  title: 'Carolina Chávez',
  description: 'Psicología',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}