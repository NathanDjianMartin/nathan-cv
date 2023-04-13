import Avatar from '@/components/Avatar'
import Heading from '@/components/typography/Heading'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function LandingFragment() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col flex-1 justify-center items-center">
        <Heading
          headingSize="xxlarge"
          className="animate-[fadeIn_1s_ease] mb-10"
        >
          Hi I&apos;m Nathan
        </Heading>
        <Avatar
          className="opacity-0 animate-[fadeIn_1s_ease_0.5s_forwards] mb-10"
          src="/nathan.webp"
          alt="nathan"
          size={156}
        />
        <Heading
          headingSize="large"
          className="opacity-0 animate-[fadeIn_1s_ease_1s_forwards] mb-10"
        >
          Mobile Software Engineer
        </Heading>
      </div>
      <div className="animate-bounce flex flex-col justify-center items-center">
        <h3 className="text-white text-base">Learn about my story</h3>
        <ChevronDoubleDownIcon className="text-white" width={24} height={24} />
      </div>
    </div>
  )
}
