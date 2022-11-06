import React from 'react'

const HelpLinksLoader = props => (
  <svg
  role="img"
  width="175"
  height="150"
  aria-labelledby="loading-aria"
  viewBox="0 0 175 150"
  preserveAspectRatio="none"
>
  <title id="loading-aria">Loading...</title>
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    clipPath="url(#clip-path)"
    style={{fill: 'url("#fill")'}}
  ></rect>
  <defs>
    <clipPath id="clip-path">
        <circle cx="10" cy="20" r="4" /> 
        <rect x="25" y="15" rx="5" ry="5" width="125" height="10" /> 
        <circle cx="10" cy="50" r="4" /> 
        <rect x="25" y="45" rx="5" ry="5" width="125" height="10" /> 
        <circle cx="10" cy="80" r="4" /> 
        <rect x="25" y="75" rx="5" ry="5" width="125" height="10" /> 
        <circle cx="10" cy="110" r="4" /> 
        <rect x="25" y="105" rx="5" ry="5" width="125" height="10" />
    </clipPath>
    <linearGradient id="fill">
      <stop
        offset="0.599964"
        stopColor="#f3f3f3"
        stopOpacity="1"
      >
        <animate
          attributeName="offset"
          values="-2; -2; 1"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="1.59996"
        stopColor="#ecebeb"
        stopOpacity="1"
      >
        <animate
          attributeName="offset"
          values="-1; -1; 2"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
      <stop
        offset="2.59996"
        stopColor="#f3f3f3"
        stopOpacity="1"
      >
        <animate
          attributeName="offset"
          values="0; 0; 3"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"
        ></animate>
      </stop>
    </linearGradient>
  </defs>
</svg>
)


export default HelpLinksLoader