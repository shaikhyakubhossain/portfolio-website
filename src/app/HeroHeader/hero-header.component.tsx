import styles from './hero-header.module.scss'

export default function HeroHeader() {
    return (
        <div className={`${styles.mainContainer}`}>
            <div className={`${styles.heroText} pl-24`}>I'M Shaikh Yakub Hossain<br />Full Stack Developer</div>
            <div className={`${styles.heroImage}`}></div>
        </div>
    )
}