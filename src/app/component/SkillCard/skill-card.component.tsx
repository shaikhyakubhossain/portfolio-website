import styles from './skill-card.module.scss';


type propsType = {
    skillIcon: string,
    skillTitle: string
}

export default function SkillCard(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} py-7 px-12 rounded shadow-lg shadow-slate-600`}>
            <div className={`${styles.skillIconContainer} mx-auto`}><img className={`${styles.skillIconImg}`} src={props.skillIcon} /></div>
            <div className={`${styles.skillTitle} mt-5`}>{props.skillTitle}</div>
        </div>
    )
}