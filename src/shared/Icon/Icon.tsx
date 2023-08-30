import React from 'react';
import classNames from 'classnames';
import styles from './icon.css';
import { EIcons, iconsMap } from './EIcons';

export type TISizes = 50 | 20 | 18 | 16 | 14 | 12 | 10;

interface IIconProps {
  As?: 'span' | 'div';
  name?: EIcons;
  size?: TISizes;
}

export function Icon(props: IIconProps) {
  const { As = 'span', name = EIcons.share, size = 16 } = props;

  const SvgComponent = iconsMap[name];

  const classes = classNames(styles.icon, styles[`s${size}`]);

  return (
    <As className={classes}>
      <SvgComponent />
    </As>
  );
}
