import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SPYK Health - Revolutionizing Remote Patient Monitoring',
  description:
    'SPYK Health is an innovative remote patient monitoring platform that helps healthcare providers deliver more efficient, effective, and personalized care.',
  keywords:
    'remote patient monitoring, healthcare, RPM, patient care, telehealth, health technology, SPYK Health',
  openGraph: {
    title: 'SPYK Health - Revolutionizing Remote Patient Monitoring',
    description:
      'SPYK Health is an innovative remote patient monitoring platform that helps healthcare providers deliver more efficient, effective, and personalized care.',
    url: 'https://spykhealth.com',
    siteName: 'SPYK Health',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SPYK Health Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
