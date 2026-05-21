import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muhammad Saleh Hayat — Laravel & PHP Developer',
  description: 'Freelance Laravel & PHP Developer specializing in web applications, APIs, SaaS platforms, and custom dashboards. Based in Pakistan, available worldwide.',
  keywords: ['Laravel Developer', 'PHP Developer', 'Freelancer', 'Muhammad Saleh Hayat', 'API Development', 'Web Development Pakistan'],
  authors: [{ name: 'Muhammad Saleh Hayat' }],
  openGraph: {
    title: 'Muhammad Saleh Hayat — Laravel & PHP Developer',
    description: 'Premium freelance Laravel & PHP developer. Building fast, scalable, modern web applications.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="noise antialiased">{children}</body>
    </html>
  )
}
