import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';

interface ITextContentProps {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
}

export function TextContent({ id, name, status, species, image }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <Title postId={id} title={name} image={image} />
        <div>status: {status}</div>
        <div>specie: {species}</div>
      </div>
    </div>
  );
}
