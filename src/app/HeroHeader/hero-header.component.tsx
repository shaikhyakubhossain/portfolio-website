import styles from './hero-header.module.scss'

export default function HeroHeader() {
    return (
        <div className={`${styles.mainContainer} h-8`}>
            <div className={`${styles.heroText} pl-24 text-2xl my-auto`}>I'M <span className={`${styles.heroName} text-4xl`}>Shaikh Yakub Hossain</span><br />Full Stack Developer</div>
            <div className={`${styles.heroImage}`}><img className={`h-96`} src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png" alt="test-image" /></div>
        </div>
    )
}