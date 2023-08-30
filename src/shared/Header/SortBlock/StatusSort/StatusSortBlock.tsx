import React from 'react';
import styles from './statussortblock.css';
import { Dropdown } from '../../../Dropdown';
import { generateId } from '../../../utils/react/generateRandomString';
import { GenericList } from '../../../GenericList';
import { merge } from '../../../utils/js/merge';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { EColors } from '../../../Text/EColors';
import { EIcons } from '../../../Icon/EIcons';
import { useCloseDropOnResize } from '../../../../hooks/useCloseDropOnResize';
import axios from 'axios';

let LIST = [
  { value: 'all', action: 'best' },
  { value: 'alive', action: 'hot' },
  { value: 'dead', action: 'new' },
  { value: 'unknown', action: 'top' },
]
  .map((item) => generateId(item))
  .map((item) =>
    merge(item)({ As: 'li' as const, className: `${styles.dropdownElem} ${styles[item.action]}` })
  );

interface IPostData {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
}

export function StatusSortBlock() {
  const [index, setIndex] = React.useState(0);
  const [list, setList] = React.useState(LIST);
  const [isListOpened, setIsListOpened] = React.useState(false);
  const parent = React.useRef<HTMLDivElement>(null);
  const toggleDropByClick = () => setIsListOpened(!isListOpened);
  const openDropByClick = () => setIsListOpened(true);
  const closeDropByClick = () => setIsListOpened(false);

  function handleItemClick(id: string) {
    let index = list.findIndex((item) => item.id === id);
    setIndex(index);
    closeDropByClick();

    let status = list[index].value === 'all' ? '' : list[index].value;
    axios.get(`https://rickandmortyapi.com/api/character/?status=${status}`).then((resp) => {
      const posts = resp.data.results.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          status: item.status,
          image: item.image,
          species: item.species,
        };
      });
      posts.sort((a: IPostData, b: IPostData) => a.name.localeCompare(b.name));
      console.log(posts);
    });
  }

  useOutsideClick(parent, closeDropByClick);
  useCloseDropOnResize(closeDropByClick);

  return (
    <div className={styles.sortBlock} ref={parent}>
      <span>sort by status:</span>
      <Dropdown
        button={
          <button className={styles.selectBtn} onClick={toggleDropByClick}>
            {list[index].value}
          </button>
        }
        isOpen={isListOpened}
      >
        <ul className={styles.sortList}>
          <GenericList
            list={list.map((item) => {
              const currentIcon = item.action as EIcons;
              return merge(item)({
                As: 'li' as const,
                size: 14,
                mobileSize: 12,
                color: EColors.grey99,
                onClick: handleItemClick,
                className: styles.dropdownElem,
                isIcon: true,
                iconName: currentIcon,
                iconSize: 16,
              });
            })}
          />
        </ul>
      </Dropdown>
    </div>
  );
}
