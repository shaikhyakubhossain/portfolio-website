
import styles from './skills-section.module.scss';
import SkillCard from '../SkillCard/skill-card.component';



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
                            <SkillCard skillIcon={item.skillIcon} skillTitle={item.skillTitle} />
                        )
                    })
                }
            </div>
        </div>
    )
}