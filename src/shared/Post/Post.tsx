import React from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { EIcons } from '../Icon/EIcons';

interface IPostProps {
  postId: string;
  title: string;
  onClose: () => void;
  image: string;
}

export function Post({ postId, title, onClose, image }: IPostProps) {
  const container = document.querySelector('#modal_root');

  let scrollPos = false;
  if (window.scrollY > 100) scrollPos = true;

  const modalParent = React.useRef(null);
  if (!container) return null;

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  useOutsideClick(modalParent, onClose);

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.content} style={{ marginTop: scrollPos ? '30px' : '100px' }} ref={modalParent}>
        <button className={styles.closeBtn} onClick={onClose}>
          <Icon name={EIcons.close}></Icon>
        </button>
        <Text As="h2" size={20}>
          {title}
        </Text>
        <Text As="p" size={14}>
          Some description here
        </Text>
        <div className={styles.postImage}>
          <img src={image} alt="post image" />
        </div>
      </div>
    </div>,
    container
  );
}
