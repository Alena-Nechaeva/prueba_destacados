import React from 'react';
import { Text } from '../Text';
import { EColors } from '../Text/EColors';
import { EIcons } from '../Icon/EIcons';
import { Icon, TISizes } from '../Icon';
import { TSizes } from '../Text';

interface IItem {
  value: string;
  size: TSizes;
  color: EColors;
  action?: string;
  id: string;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  dividerClassName?: string;
  mobileSize?: TSizes;
  isIcon?: boolean;
  iconName?: EIcons;
  iconSize?: TISizes;
}

interface IGenericLIstProps {
  list: IItem[];
}

const noop = () => {};

export function GenericList({ list }: IGenericLIstProps) {
  return (
    <>
      {list.map(
        ({
          As = 'div',
          value,
          size,
          color,
          onClick = noop,
          className,
          id,
          mobileSize,
          isIcon = false,
          iconName,
          iconSize,
        }) => (
          <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
          >
            {isIcon && (
              <Icon
                name={iconName}
                size={iconSize}
              />
            )}
            <Text
              size={size}
              color={color}
              mobileSize={mobileSize}
            >
              {value}
            </Text>
          </As>
        )
      )}
    </>
  );
}
