import Head from "next/head";

import styles from '../styles/Home.module.css';
import Article from "../components/Article";
import { server } from '../config';


export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="flex flex-col items-center justify-start gap-4">
      <Head>
        <title>Humanoid</title>
        <meta
          name="keywords"
          content="Web development, web newz, programming"
        />
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          posts.map((post) => (
            <div key={post.id}>
              <Article article={post} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);

  const posts = await res.json();

  return {
    props: {
      posts,
    }
  }
};
