import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/index.module.css'
import Link from 'next/link';

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
          <Link href={`/posts/${id}`}>{title}</Link>
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
