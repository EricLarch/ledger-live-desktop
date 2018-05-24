// @flow

import React from 'react'

export default () => (
  <svg>
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" />
        <stop offset="100%" stopColor="#FFF" />
      </linearGradient>
      <rect id="b" width="41.711" height="238.384" rx="4" />
      <path
        id="c"
        d="M5.773 5l2.541-2.541a.235.235 0 0 0 0-.332l-.441-.441a.235.235 0 0 0-.332 0L5 4.226l-2.541-2.54a.235.235 0 0 0-.332 0l-.441.441a.235.235 0 0 0 0 .332L4.226 5l-2.54 2.541a.235.235 0 0 0 0 .332l.441.441c.092.092.24.092.332 0L5 5.774l2.541 2.54c.092.092.24.092.332 0l.441-.441a.235.235 0 0 0 0-.332L5.774 5z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        stroke="#1D2027"
        strokeWidth="2"
        d="M127.356 30a1 1 0 0 1-1 1H100.13a5 5 0 0 1-5-5v-8.486a5 5 0 0 1 5-5h26.225a1 1 0 0 1 1 1V30z"
      />
      <path stroke="#142533" strokeWidth="2" d="M94.747 24.792H83.818v-6.436h10.93v6.436z" />
      <path
        stroke="#1D2027"
        strokeWidth="2"
        d="M127.423 27.287V16.032l6.977.082a1 1 0 0 1 .988 1v9.267a1 1 0 0 1-1.012.988l-6.953-.082z"
      />
      <path
        fill="url(#a)"
        d="M6.836 53.925h1.616v82.65H6.836v-82.65zm5.657 0h1.616v82.65h-1.616v-82.65z"
        transform="matrix(0 -1 -1 0 137 32)"
      />
      <g transform="rotate(-90 85 -42)">
        <rect width="4.492" height="17.12" x="38.336" y="15.505" fill="#142533" rx="2" />
        <rect width="4.492" height="17.12" x="38.336" y="70.094" fill="#142533" rx="2" />
        <use fill="#FFF" />
        <rect
          width="39.711"
          height="236.384"
          x="1"
          y="1"
          fill="#FCE0E4"
          stroke="#142533"
          strokeLinejoin="square"
          strokeWidth="2"
          rx="4"
        />
        <rect
          width="20.176"
          height="61.019"
          x="10.767"
          y="21.173"
          fill="#FFF"
          stroke="#EA2E49"
          rx="1.6"
        />
        <path
          fill="#FFF"
          stroke="#142533"
          strokeWidth="2"
          d="M20.856 95.966C9.89 95.966 1 104.856 1 115.822v118.562a3 3 0 0 0 3 3h33.711a3 3 0 0 0 3-3V115.822c0-10.966-8.89-19.856-19.855-19.856z"
        />
        <ellipse cx="21.016" cy="116.123" stroke="#EA2E49" rx="10.57" ry="10.644" />
        <g transform="translate(16.066 26.884)">
          <mask id="d" fill="#fff">
            <use xlinkHref="#c" />
          </mask>
          <use fill="#000" fillRule="nonzero" xlinkHref="#c" />
          <g fill="#EA2E49" mask="url(#d)">
            <path d="M0 0h10v10H0z" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)
