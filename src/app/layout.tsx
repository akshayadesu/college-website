import Navbar from "./navbar/page"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body>
      <header><Navbar /></header>
        {children}</body>
    </html>
  )
}