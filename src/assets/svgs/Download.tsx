import React from 'react'
import { BtnProps } from './BtnInterface'


export const DownloadBtn: React.FC<BtnProps> = ({ color, background, onMouseEnter, onMouseLeave, onClickEvent }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48" height="48"
      viewBox="0 0 24 24"
      style={{ fill: color, backgroundColor: background, transform: ";msFilter:" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClickEvent}
    >
      <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
    </svg>
  )
}
