import { Menu } from '@/components/Menu'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-full h-screen'>
        <div className='flex'>
          <Menu />
          {children}
        </div>
      </body>
    </html>
  )
}
