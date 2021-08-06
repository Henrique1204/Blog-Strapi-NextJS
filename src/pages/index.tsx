import React from 'react';
import { GetStaticProps } from 'next';
import getAllPosts from '../data/posts/get-all-posts';
import HomePage, { PropsHome } from '../containers/HomePage';

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: PropsHome;
}> => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: PropsHome) => {
  return <HomePage posts={posts}></HomePage>;
};

export default Home;
