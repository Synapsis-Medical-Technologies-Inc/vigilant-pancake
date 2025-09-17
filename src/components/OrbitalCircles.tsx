import React from 'react'

interface OrbitalCirclesProps {
  width?: number | string
  height?: number | string
  className?: string
  [x: string]: any // For any other props
}

const OrbitalCircles: React.FC<OrbitalCirclesProps> = ({
  width = 690,
  height = 690,
  className = '',
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 690 690"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M344.973 91.402 A253.23 253.23 0 0 1 344.973 597.862"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="3.48485"
        fill="none"
      />
      <path
        d="M344.5 136.401 A207.758 207.758 0 0 1 344.5 551.917"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="3.48485"
        fill="none"
      />
      <path
        opacity="0.6"
        d="M345 45.812 A299.188 299.188 0 0 1 345 644.188"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="3.48485"
        fill="none"
      />
      <path
        opacity="0.4"
        d="M345 1.742 A343.258 343.258 0 0 1 345 688.258"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="3.48485"
        fill="none"
      />
    </svg>
  )
}

export default OrbitalCircles
