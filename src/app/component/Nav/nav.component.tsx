import styles from './nav.module.scss'


export default function Nav(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex justify-between fixed left-0 right-0 px-20 bg-slate-600 h-12`}>
            <div className={`${styles.leftContainer} ${styles.portfolioTextContainer} my-auto`}><div>portfolio.</div></div>
            <div className={`${styles.rightContainer} flex my-auto`}>
                <div>Home</div>
                <div>About</div>
                <div>Skills</div>
                <div>Project</div>
                <div>Contact</div>
            </div>
        </div>
        )
}