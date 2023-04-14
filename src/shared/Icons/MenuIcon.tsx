import React from 'react';
import { IAllIconsProps } from '../interfaces';

export function MenuIcon({ className }: IAllIconsProps) {
  return (
    <svg
      width="5"
      height="20"
      viewBox="0 0 5 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="2.5" cy="2.5" r="2.5" />
      <circle cx="2.5" cy="10" r="2.5" />
      <circle cx="2.5" cy="17.5" r="2.5" />
    </svg>
  );
}
