import React from 'react'

type HeadingSize = 'medium' | 'large' | 'xlarge' | 'xxlarge'

interface HeadingProps extends React.HTMLAttributes<HTMLTitleElement> {
  headingSize: HeadingSize
}

export default function Heading({
  headingSize,
  children,
  className,
}: HeadingProps) {
  switch (headingSize) {
    case 'medium':
      return (
        <h4 className={`text-white text-sm sm:text-lg font-bold ${className}`}>
          {children}
        </h4>
      )
    case 'large':
      return (
        <h3 className={`text-white text-lg sm:text-2xl font-bold ${className}`}>
          {children}
        </h3>
      )

    case 'xlarge':
      return (
        <h2
          className={`text-white text-2xl sm:text-4xl font-extrabold ${className}`}
        >
          {children}
        </h2>
      )

    case 'xxlarge':
      return (
        <h1
          className={`text-white text-4xl sm:text-6xl font-black ${className}`}
        >
          {children}
        </h1>
      )
  }
}
