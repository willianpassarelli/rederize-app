import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function LogoSvg({ size, color }) {
  const logo = `
  <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)">
  <rect width="180" height="180" fill="transparent"/>
  <path d="M156.46 69.4C156.46 80.56 153.46 90.34 147.46 98.74C141.58 107.02 133.24 113.2 122.44 117.28L143.5 154H99.4L81.58 122.32H71.14L64.84 154H22.36L47.56 28H104.08C120.64 28 133.48 31.66 142.6 38.98C151.84 46.18 156.46 56.32 156.46 69.4ZM113.44 73.54C113.44 65.02 108.16 60.76 97.6 60.76H83.38L77.44 90.28H94.9C100.78 90.28 105.34 88.84 108.58 85.96C111.82 82.96 113.44 78.82 113.44 73.54Z" fill="${color}"/>
  </g>
  <defs>
  <clipPath id="clip0">
  <rect width="180" height="180" fill="transparent"/>
  </clipPath>
  </defs>
  </svg>`;

  const Logo = () => <SvgXml xml={logo} width={size} height={size} />;
  return <Logo />;
}
