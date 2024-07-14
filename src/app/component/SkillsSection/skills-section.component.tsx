import styles from './skills-section.module.scss';



type propsType = {
    children: React.ReactNode 
}

export default function SkillsSection(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} text-center`}>
            <div className={`${styles.headingMySkills} text-4xl font-bold `} >My Skills</div>
            <div className={`${styles.skillsContainer} flex flex-wrap `}>
                {props.children}
            </div>
        </div>
    )
}