import React from 'react';
import { EColors } from '../enums';
import classNames from 'classnames';
import styles from './styles.scss';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BlockIcon,
  CommentsIcon,
  IconAnon,
  MenuIcon,
  SaveCircleIcon,
  SaveIcon,
  ShareCircleIcon,
  ShareIcon,
  WarningIcon,
} from '../Icons';

export enum EIcons {
  menu = 'menu',
  block = 'block',
  share = 'share',
  shareCircle = 'shareCircle',
  save = 'save',
  saveCircle = 'saveCircle',
  warning = 'warning',
  comments = 'comments',
  arrowDown = 'arrowDown',
  arrowUp = 'arrowUp',
  anon = 'anon',
}

type TSizes = 12 | 14 | 15 | 16 | 19 | 20 | 50;

interface IIconProps {
  name: EIcons;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  fill: EColors;
  mobileFill?: EColors;
  tabletFill?: EColors;
  desktopFill?: EColors;
  circleFill?: EColors;
}

export function Icon({
  name,
  size,
  mobileSize,
  tabletSize,
  desktopSize,
  fill,
  mobileFill,
  tabletFill,
  desktopFill,
  circleFill,
}: IIconProps) {
  const classes = classNames(
    styles[`size_${size}`],
    { [styles[`size_m_${mobileSize}`]]: mobileSize },
    { [styles[`size_t_${tabletSize}`]]: tabletSize },
    { [styles[`size_d_${desktopSize}`]]: desktopSize },
    styles[`fill_${fill}`],
    { [styles[`fill_m_${mobileFill}`]]: mobileFill },
    { [styles[`fill_t_${tabletFill}`]]: tabletFill },
    { [styles[`fill_d_${desktopFill}`]]: desktopFill }
  );

  const circleClass = classNames({
    [styles[`fill_${circleFill}`]]: circleFill,
  });

  switch (name) {
    case EIcons.menu:
      return <MenuIcon className={classes} />;
    case EIcons.block:
      return <BlockIcon className={classes} />;
    case EIcons.share:
      return <ShareIcon className={classes} />;
    case EIcons.shareCircle:
      return (
        <ShareCircleIcon className={classes} circleClassName={circleClass} />
      );
    case EIcons.save:
      return <SaveIcon className={classes} />;
    case EIcons.saveCircle:
      return (
        <SaveCircleIcon className={classes} circleClassName={circleClass} />
      );
    case EIcons.warning:
      return <WarningIcon className={classes} />;
    case EIcons.comments:
      return <CommentsIcon className={classes} />;
    case EIcons.arrowDown:
      return <ArrowDownIcon className={classes} />;
    case EIcons.arrowUp:
      return <ArrowUpIcon className={classes} />;
    case EIcons.anon:
      return <IconAnon className={classes} />;
  }
}
