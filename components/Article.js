import Link from 'next/link';
import { WiStars } from 'react-icons/wi';
import { TiStar } from 'react-icons/ti';


import articleStyles from '../styles/Article.module.css';

const Article = ({article}) => {
  return (
    <Link href={"/article/[id]"} as={`/article/${article.id}`}>
      <div className={articleStyles.card}>
        <span className={articleStyles.arrow}><TiStar /></span>
        <h2>{article.title} &rarr;</h2>
        <p>{article.body}</p>
      </div>
    </Link>
  );
}

export default Article
