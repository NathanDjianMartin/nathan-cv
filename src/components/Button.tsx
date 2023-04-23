import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-white font-bold p-2 rounded-xl bottom-3 right-3 ${className}`}
    >
      {children}
    </button>
  )
}
