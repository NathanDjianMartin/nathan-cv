import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <div className="flex items-center justify-center h-screen">
        <h1 className="animate-[slideFromLeft_1s_ease] text-white text-3xl font-extrabold">
          Hi I&apos;m Nathan
        </h1>
        <Button
          className="opacity-0 animate-[fadeIn_2s_ease_1s_1_forwards]"
          onClick={() => {}}
        >
          Next
        </Button>
      </div>
    </main>
  )
}
