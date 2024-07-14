import styles from './skills-section.module.scss';



type propsType = {
    children: React.ReactNode 
}

export default function SkillsSection(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} text-center mb-8`}>
            <div className={`${styles.headingMySkills} text-4xl font-bold mb-12`} >My Skills</div>
            <div className={`${styles.skillsContainer} flex flex-wrap px-20`}>
                {props.children}
            </div>
        </div>
    )
}