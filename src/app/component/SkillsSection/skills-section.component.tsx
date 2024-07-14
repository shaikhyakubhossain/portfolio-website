
import styles from './skills-section.module.scss';


type propsType = {
    skillsList: string[]
}

export default function SkillsSection(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} `}>
            <div className={`${styles.headingMySkills} `} >My Skills</div>
            <div className={`${styles.skillsContainer} flex flex-wrap `}>
                {
                    props.skillsList.map((item, index): JSX.Element => {
                        return (
                            <div></div>
                        )
                    })
                }
            </div>
        </div>
    )
}