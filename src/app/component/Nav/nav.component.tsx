import styles from './nav.module.scss'


export default function Nav(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex justify-between fixed top-0 left-0 right-0 px-20 bg-slate-600 h-12`}>
            <div className={`${styles.leftContainer} ${styles.portfolioTextContainer} my-auto`}><div>portfolio.</div></div>
            <div className={`${styles.rightContainer} flex my-auto`}>
                <div><a href='#Home'>Home</a></div>
                <div><a href='#About'>About</a></div>
                <div><a href='#Skills'>Skills</a></div>
                <div><a href='#Project'>Project</a></div>
                <div><a href='#Contact'>Contact</a></div>
            </div>
        </div>
        )
}