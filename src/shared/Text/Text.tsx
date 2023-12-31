import React from 'react';
import styles from './text.css';
import classNames from 'classnames';
import { EColors } from './EColors';

export type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    color = EColors.black,
    children,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
    bold = false,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    { [styles.bold]: bold },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  return <As className={classes}>{children}</As>;
}
