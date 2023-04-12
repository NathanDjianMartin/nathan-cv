import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="p-4 flex flex-col">
      <div className="flex flex-1 justify-center items-center">
        <h1 className="animate-[slideFromLeft_1s_ease] text-white text-3xl font-extrabold">
          Hi I&apos;m Nathan
        </h1>
      </div>
      <Button
        className="opacity-0 animate-[fadeIn_1s_ease_1s_1_forwards]"
        onClick={() => {}}
      >
        Next
      </Button>
    </div>
  )
}
