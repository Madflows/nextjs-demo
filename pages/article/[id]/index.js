import { useRouter } from 'next/router';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { server } from '../../../config';

const article = ({article}) => {
    // const router = useRouter();
    // const { id } = router.query;
  return (
    <>
      <Head>
        <title>{article.title} - Web3Dev News</title>
        <meta name="description" content={article.body} />
      </Head>
      <NextSeo
        title={`${article.title} | Web3Dev News`}
        description={article.description}
        key={article.title}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: article.createdAt,
            modifiedTime: article.updatedAt,
            expirationTime: article.expirationDate,
            section: 'Web3Dev',
            tags: ['Web3Dev', 'News'],
          },
        }}
      />
      <div className="w-full max-w-[750px] flex flex-col items-center gap-3">
        <span className="text-xs text-slate-600 text-center">
          ARTICLE #{article.id}
        </span>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">
          <div className="py-3 px-6 rounded-full leading-none border-2 border-white ring-slate-900 focus:ring-3 bg-slate-800 text-white cursor-pointer">
            Back to Home
          </div>
        </Link>
      </div>
    </>
  );
}

export default article;

export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.query.id}`);
    const article = await res.json();

    return {
        props: {
            article,
        }
    }
}



