import styles from './nav.module.scss'


export default function Nav(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex justify-between`}>
            <div className={`${styles.leftContainer} ${styles.portfolioTextContainer}`}><div>portfolio.</div></div>
            <div className={`${styles.rightContainer} flex`}>
                <div>Home</div>
                <div>About</div>
                <div>Skills</div>
                <div>Project</div>
                <div>Contact</div>
            </div>
        </div>
        )
}