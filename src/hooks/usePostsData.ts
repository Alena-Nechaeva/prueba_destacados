import React, { useContext } from 'react';
import axios from 'axios';

interface IPostData {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
}

export function usePostsData() {
  const [postsData, setPostsData] = React.useState<Array<IPostData>>([]);

  React.useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((resp) => {
        const posts = resp.data.results.map((post: any) => {
          return <IPostData>{
            id: post.id,
            name: post.name,
            status: post.status,
            image: post.image,
            species: post.species,
          };
        });
        // posts.sort((a:IPostData, b: IPostData) => a.name.localeCompare(b.name));
        posts.sort((a: IPostData, b: IPostData) => {
          if (a.name < b.name) return -1;
          else return 1;
        });
        setPostsData(posts);
      })
      .catch(console.log);
  }, []);
  return [postsData];
}
