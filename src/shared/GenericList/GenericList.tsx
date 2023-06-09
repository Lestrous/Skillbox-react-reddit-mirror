import React from 'react';

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NOOP = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, onClick = NOOP, className, id, href }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}
