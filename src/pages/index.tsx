import { Inter } from 'next/font/google'
import LandingFragment from '@/components/LandingFragment'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <LandingFragment />
    </div>
  )
}
