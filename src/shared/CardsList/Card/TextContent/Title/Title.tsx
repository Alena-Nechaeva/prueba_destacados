import React from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

interface ITitleProps {
  postId: string;
  title: string;
  image: string;
}

export function Title({postId, title, image} : ITitleProps) {
  const [isModalOpened, setModalOpened] = React.useState(false);
  const closeModal = () => setModalOpened(false);
  const openModal = () => setModalOpened(true);

  return (
    <h2 className={styles.title}>
      <button
        className={styles.postLink}
        onClick={openModal}
      >
        {title}
      </button> 

      {isModalOpened && (
        <Post postId={postId} title={title} onClose={closeModal} image={image}/>
      )}
    </h2>
  );
}
