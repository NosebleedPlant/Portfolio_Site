import Head from 'next/head'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/index.module.css'

const inter = Inter({ subsets: ['latin'] })

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
    <>
      <Head>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
          <Link href={`/blog/${id}`}>{title}</Link>
          <br />
          {id}
          <br />
          {date}
          </li>
        ))}
      </ul>
      </main>
    </>
  )
}