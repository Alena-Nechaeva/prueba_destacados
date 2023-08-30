import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';

interface IPostData {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
}

interface ICardProps {
  post: IPostData;
}

export function Card({ post }: ICardProps) {
  const { id, name, image, status, species } = post;

  return (
    <li className={styles.card}>
      <TextContent
        id={id}
        name={name}
        status={status}
        species={species}
        image={image}
      />
      <Preview image={image} />
      <Menu />
    </li>
  );
}
