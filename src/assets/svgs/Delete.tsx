import React from 'react'
import { BtnProps } from './BtnInterface'


export const DeleteBtn: React.FC<BtnProps> = ({ color, background, onMouseEnter, onMouseLeave }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48" height="48"
      viewBox="0 0 24 24"
      style={{ fill: color, backgroundColor: background, transform: ";msFilter:" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
    </svg>
  )
}
