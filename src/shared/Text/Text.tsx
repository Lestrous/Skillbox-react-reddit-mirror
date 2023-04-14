import React from 'react';
import styles from './text.scss';
import classNames from 'classnames';
import { EColors } from '../enums';

type TSizes = 10 | 12 | 14 | 16 | 20 | 28;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  className?: string;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  mobileColor?: EColors;
  tabletColor?: EColors;
  desktopColor?: EColors;
  bold?: boolean;
}

export function Text({
  As = 'span',
  children,
  className,
  size,
  mobileSize,
  tabletSize,
  desktopSize,
  color = EColors.black,
  mobileColor,
  tabletColor,
  desktopColor,
  bold = false,
}: ITextProps) {
  const classes = classNames(
    className,
    styles[`size_${size}`],
    { [styles[`size_m_${mobileSize}`]]: mobileSize },
    { [styles[`size_t_${tabletSize}`]]: tabletSize },
    { [styles[`size_d_${desktopSize}`]]: desktopSize },
    styles[`color_${color}`],
    { [styles[`color_m_${mobileColor}`]]: mobileColor },
    { [styles[`color_t_${tabletColor}`]]: tabletColor },
    { [styles[`color_d_${desktopColor}`]]: desktopColor },
    { [styles['bold']]: bold }
  );

  return <As className={classes}>{children}</As>;
}
