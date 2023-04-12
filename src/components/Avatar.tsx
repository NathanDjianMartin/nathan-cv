import React, { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

interface AvatarProps {
  src: string
  size: number
  alt: string
  className?: string
}

export default function Avatar({ src, alt, size, className }: AvatarProps) {
  return (
    <Image
      className={`rounded-full ${className}`}
      src={src}
      alt={alt}
      width={size}
      height={size}
    />
  )
}
