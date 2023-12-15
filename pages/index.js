import Head from 'next/head'
import { Inter } from 'next/font/google'
import { getSortedPostsData } from '../lib/posts';

import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import PortfolioNav from '@/components/portfolioNav';
import Portfolio from '@/components/portfolio';

import styles from '@/styles/home.module.css'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home ({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Yarrow Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className={styles.page}>
        <Navbar/>        
        <div className={styles.content}>
          <Hero/>
          <PortfolioNav/>
          <Portfolio allPostsData = {allPostsData}/>
        </div>
      </div>
      </main> 
    </>
  )
}
