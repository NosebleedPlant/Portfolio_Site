import styles from '@/styles/portfolioNav.module.css'

export default function PortfolioNav () {
    return(
        <div className={styles.navbar}>
            <ul>
                <li>UX/UR</li>
                <li>TechArt</li>
                <li>Games</li>
            </ul>
        </div>
    )
}