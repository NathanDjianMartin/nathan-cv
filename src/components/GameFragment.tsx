import Stack from '@/components/Stack'
import Heading from '@/components/typography/Heading'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function GameFragment() {
  const imageStyleClasses = 'mb-6'
  const paragraphStyleClasses = 'text-white text-base px-4'
  return (
    <div className='flex flex-col items-center bg-neutral-900'>
      <Heading size="xlarge" className="text-center">
        It all started with a video game.
      </Heading>
      <p className={paragraphStyleClasses}>
        In Minecraft you can write Java plugins to improve your players
        experience.
      </p>
      <Image
        src="/minecraft.webp"
        alt="minecraft logo"
        width={500}
        height={1000}
        className={imageStyleClasses}
      ></Image>
      <p className={paragraphStyleClasses}>
        At the <b>age of 14</b> I wrote
        <b> my first Java plugin</b> from scratch.
      </p>
      <Image
        src="/nathan-minecraft.webp"
        alt="young nathan playing minecraft"
        width={500}
        height={1000}
        className={imageStyleClasses}
      ></Image>      
    </div>
  )
}
