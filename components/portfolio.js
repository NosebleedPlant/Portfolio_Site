'use client'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/portfolio.module.css'; 

export default function Portfolio({ allPostsData }) {
  const post_previews = allPostsData.map(
    ({ id, title, tools, duration, description}) => (
      <div key={id} className={styles.card}>

      <Image
        className={styles.thumbnail}
        src="/images/SpaceAndBodies.png"
        height={290}
        width={570}
        layout="responsive"
        fill={false}
        alt="Picture of the author"
      />

      <div className={styles.content}>
        <h4>{title}</h4>
        <p className={styles.description}>{description}</p>
        <Link className={styles.button} href={`https://www.youtube.com/watch?v=eBGIQ7ZuuiU`}><p>Read More.</p></Link>
      </div>

      </div>
    )
  )
  return (
    <div className={styles.portfolio}>
      {post_previews}
    </div>
  )
}