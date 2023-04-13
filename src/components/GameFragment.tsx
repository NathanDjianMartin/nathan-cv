import Heading from '@/components/typography/Heading'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function GameFragment() {
  const paragraphStyleClasses = 'text-white text-base mb-6'
  return (
    <div className="flex flex-col items-center bg-neutral-900 px-4">
      <Heading size="xlarge" className="text-center mt-12">
        It all started with a video game.
      </Heading>
      <Image
        src="/minecraft.webp"
        alt="minecraft logo"
        width={300}
        height={100}
      ></Image>
      <p className={paragraphStyleClasses}>
        In Minecraft you can write Java plugins to improve your players
        experience.
      </p>
      <p className={paragraphStyleClasses}>
        At the <b>age of 14</b>, I was running my own minecraft server and wrote
        <b> my first Java plugin</b>.
      </p>
      <p className={paragraphStyleClasses}>
        That&apos;s when I fell in love with computer science 😍.
      </p>
    </div>
  )
}
