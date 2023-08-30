import React from 'react';
import styles from './menuitemslistportal.css';
import classNames from 'classnames';
import { LIST as listBase } from './dropdown-data';
import { generateId } from '../../../../utils/react/generateRandomString';
import { merge } from '../../../../utils/js/merge';
import { GenericList } from '../../../../GenericList';
import { EColors } from '../../../../Text/EColors';
import { EIcons } from '../../../../Icon/EIcons';
import { Text } from '../../../../Text';
import ReactDOM from 'react-dom';

interface IMenuItemsListPortalProps {
  postId: string;
  handleClose: () => void;
  top: number;
  left: number;
}

const LIST = listBase.map(generateId);

export function MenuItemsListPortal({ postId, handleClose, top, left }: IMenuItemsListPortalProps) {
  const mobileHiddenList = ['comments', 'share', 'save'];
  const [list, setList] = React.useState(LIST);
  const container = document.querySelector('#dropdown_root');
  if (!container) return null;

  function handleItemClick(id: string) {
    let item = list.find((item) => item.id === id);
    if (item !== undefined) {
      switch (item.action) {
        default:
          console.log(item.action);
          break;
      }
    } else {
      throw new Error('action is undefined!!');
    }
  }

  return ReactDOM.createPortal(
    <div className={styles.dropdown} style={{top: top, left: left}}>
      <ul className={styles.menuItemsList}>
        <GenericList
          list={list.map((item) => {
            const isHidden = mobileHiddenList.includes(item.action);
            const currentIcon = item.action as EIcons;
            const classes = classNames(styles.menuItem, { [styles.hideElem]: isHidden });
            return merge(item)({
              As: 'li' as const,
              size: 14,
              mobileSize: 12,
              color: EColors.grey99,
              onClick: handleItemClick,
              className: classes,
              dividerClassName: styles.divider,
              isIcon: true,
              iconName: currentIcon,
              iconSize: 16,
            });
          })}
        />
      </ul>
      <button
        className={`${styles.closeButton} ${styles.hideElem}`}
        onClick={handleClose}
      >
        <Text
          mobileSize={12}
          size={14}
          color={EColors.grey66}
        >
          Close
        </Text>
      </button>
    </div>,
    container
  );
}
