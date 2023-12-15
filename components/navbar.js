import styles from '@/styles/navbar.module.css'

export default function Navbar () {
    return(
        <div className={styles.navbar}>
            <ul>
                <li>Portfolio</li>
                <li>About</li>
            </ul>
        </div>
    )
}