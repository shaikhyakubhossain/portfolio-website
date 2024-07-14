import styles from './skill-card.module.scss';


type propsType = {
    skillIcon: React.ReactNode,
    skillTitle: string
}

export default function SkillCard(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} `}>
            <div>{props.skillIcon}</div>
            <div>{props.skillTitle}</div>
        </div>
    )
}