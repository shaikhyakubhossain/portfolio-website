import styles from './skills-section.module.scss';



type propsType = {
    children: React.ReactNode 
}

export default function SkillsSection(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} `}>
            <div className={`${styles.headingMySkills} `} >My Skills</div>
            <div className={`${styles.skillsContainer} flex flex-wrap `}>
                {props.children}
            </div>
        </div>
    )
}