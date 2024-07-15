import styles from './vertical-link.module.scss'


export default function VerticalLink (): JSX.Element {
    return (
        <div className={`${styles.mainContainer} absolute right-32 top-14`} >
            <div className={`${styles.verticalDashContainer} ab `}>
                <div className={`${styles.verticalDash} mx-auto`}></div>
            </div>
            <div>test1</div>
            <div>test2</div>
        </div>
    )
}