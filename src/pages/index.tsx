import { Inter } from 'next/font/google'
import Button from '@/components/Button'
import Avatar from '@/components/Avatar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="p-4 flex flex-col">
      <div className="flex flex-col flex-1 justify-center items-center">
        <h1 className="animate-[fadeIn_1s_ease] mb-10 text-white text-3xl font-extrabold">
          Hi I&apos;m Nathan
        </h1>
        <Avatar
          className="opacity-0 animate-[fadeIn_1s_ease_0.5s_forwards] mb-10"
          src="/nathan.webp"
          alt="nathan"
          size={156}
        />
        <h2 className="opacity-0 animate-[fadeIn_1s_ease_1s_forwards] mb-10 text-white text-lg font-semibold">
          Mobile Software Engineer Intern
        </h2>
      </div>
      <Button
        className="opacity-0 animate-[fadeIn_1s_ease_2s_1_forwards]"
        onClick={() => {}}
      >
        Next
      </Button>
    </div>
  )
}
