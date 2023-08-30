import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  image: string;
}

export function Preview({ image }: IPreviewProps) {
  // previewSrc =
  //   (previewSrc === null)
  //     ? 'https://cdn.dribbble.com/users/555368/screenshots/3756584/media/6e467f1acd72b43f143a20f895f0c9ce.jpg'
  //     : previewSrc;

  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={image}
        alt="post image"
      />
    </div>
  );
}
