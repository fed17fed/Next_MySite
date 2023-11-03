import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <p>Я занимаюсь разработкой сайтов под ключ более 5лет.<br />
            На основе CMS WordPress, OpenCart.<br />
            Для этого использую:<br />
            - CSS3/HTML5,<br />
            - JavaScript/JQuery/Ajax,<br />
            - PHP, Sql, Bootstrap,<br />
            - Sass, Webpack,<br />
            - RegExp,<br />
            - Bem methodology и т.д.<br />
            Создаю и сопровождаю сайты разной сложности.<br />
            Так же использую технологии - React / Next(Gatsby) / Vercel(Netlify)<br />
            Этот сайт сделан с использованием - React / Next / Vercel </p>         
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Я Вас заинтересовал?</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
          </li>
          ))}
          <li className={utilStyles.listItem}>
            <Link href="/posts/first-post">Посмотрите мои работы ⇾</Link>
          </li>
        </ul>
      </section>
      <div className={utilStyles.textcorpor}>
         © 2023 Web-bit Все права защещены.<a href='https://github.com/fed17fed/test_mysite'>Github Repository.</a>
      </div>
    </Layout>
  );
}