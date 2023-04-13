import { Inter } from 'next/font/google'
import LandingFragment from '@/components/LandingFragment'
import GameFragment from '@/components/GameFragment'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <LandingFragment />
      <GameFragment />
    </div>
  )
}
