import Image from 'next/image'
import ScrollCommand from '@/components/scrollcommand';
import styles from '@/styles/hero.module.css'

export default function Hero () {
    return(
        <div className={styles.superhero}>
            <div className={styles.hero}>
                <Image
                    className={styles.title}
                    src="/Title.svg"
                    height={218}
                    width={1004}
                    layout="responsive"
                    fill={false}
                    alt="Picture of the author"
                />
                <h6>
                    Hello and welcome to my portfolio! its apleasure to meet you.
                    I am a student/gamedev that goes by <b>Yarrow</b> and <b>Nosebleed Plant</b> online. 
                    My specialties are <b>UX</b>, <b>UR</b> and <b>Tech Art</b>. Ive recently been dabbling in web-dev too. 
                    Scroll down to take a look at some of my work :D
                </h6>
            </div>
            <ScrollCommand/>
        </div>
    )
}