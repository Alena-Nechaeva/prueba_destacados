import React from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';
import { postsContext } from '../context/postsContext';

export function CardsList() {
  const posts = React.useContext(postsContext);
  return (
    <ul className={styles.cardsList}>{posts && posts.map((post) => <Card key={post.id} post={post} />)}</ul>
  );
}
