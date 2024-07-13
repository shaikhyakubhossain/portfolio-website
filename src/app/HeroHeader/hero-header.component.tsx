import styles from './hero-header.module.scss'

export default function HeroHeader() {
    return (
        <div className={`${styles.mainContainer} flex justify-between w-full h-96 px-32`}>
            <div className={`${styles.heroTextAndBtnContainer} my-auto`}>
                <div className={`${styles.heroText} text-2xl`}>I'M <span className={`${styles.heroName} text-4xl`}>Shaikh Yakub Hossain</span><br />Full Stack Developer</div>
            </div>
            <div className={`${styles.heroImage}`}><img className={`h-96`} src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png" alt="test-image" /></div>
        </div>
    )
}