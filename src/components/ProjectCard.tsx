import React from 'react'
import Image from 'next/image'
import Heading from '@/components/typography/Heading'
import { Icon } from '@iconify/react'

// icons https://icon-sets.iconify.design/logos/

type GithubIconProps = {
  githubLink: string
}

function GithubIcon({ githubLink }: GithubIconProps) {
  return (
    <div className="bg-white rounded-md p-[2px]">
      <a href={githubLink} target="_blank">
        <Icon icon="logos:github-icon" className="text-xl" />
      </a>
    </div>
  )
}

type ProjectCardProps = {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  githubLink: string
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center bg-neutral-800 max-w-lg rounded-md overflow-hidden">
      <Image src={imageUrl} alt={imageAlt} height={1080} width={1000} />
      <div className="p-4">
        <div className="flex items-center">
          <Heading size="large" className="self-start mr-2">
            {title}
          </Heading>
          <GithubIcon githubLink={githubLink} />
        </div>
        <p className="text-white">{description}</p>
      </div>
    </div>
  )
}
