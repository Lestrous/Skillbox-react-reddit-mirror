import React from 'react';
import { IAllIconsProps } from '../interfaces';

export function ArrowUpIcon({ className }: IAllIconsProps) {
  return (
    <svg
      width="19"
      height="10"
      viewBox="0 0 19 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M9.5 0L0 10H19L9.5 0Z" />
    </svg>
  );
}
