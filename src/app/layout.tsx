export const metadata = {
  title: 'Shaikh Yakub Hossain | Full Stack Developer',
  description: 'Portfolio of Shaikh Yakub Hossain, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and building modern web applications',
  keywords: ['Yakub Hossain', 'Shaikh Yakub Hossain', 'Shaikh Yakub', 'Shaikh', 'Yakub', 'Hossain', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Developer Portfolio'],
  authors: [{ name: 'Shaikh Yakub Hossain' }],
  openGraph: {
    title: 'Shaikh Yakub Hossain | Full Stack Web Developer',
    description:
      'Portfolio of Shaikh Yakub Hossain – showcasing web development skills in React, Next.js, and Node.js.',
    url: 'https://yakubhossain.vercel.app',
    siteName: 'Shaikh Yakub Hossain Portfolio',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/74724579?v=4',
        width: 1200,
        height: 630,
        alt: 'Shaikh Yakub Hossain Portfolio Screenshot',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
