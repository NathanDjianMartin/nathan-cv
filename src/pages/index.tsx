import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <div className="flex items-center justify-center h-screen">
        <h1 className='text-white '>Hi I&apos;m Nathan</h1>
      </div>
    </main>
  )
}
