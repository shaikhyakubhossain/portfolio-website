"use client";
import styles from './skills-section.module.scss';
import { useState } from 'react';



type propsType = {
    children: React.ReactNode 
}

export default function SkillsSection(props: propsType): JSX.Element {

    const [expanded, setExpanded] = useState(true);

    const handleSkillSectionExpand = () => {
        
        expanded ? setExpanded(false) : setExpanded(true)
    }

    return (
        <div className={`${styles.mainContainer} text-center mb-8`}>
            <div className={`${styles.headingMySkills} text-4xl font-bold mb-12`} >My Skills</div>
            <div className={`${styles.skillsContainer} flex flex-wrap px-20 justify-center overflow-hidden ${expanded ? "h-56" : null}`}>
                {props.children}
            </div>
            <div className={`${styles.moreBtnContainer}`}><div className={`${expanded ? styles.moreBtnExpanded : styles.moreBtnMinimized } mx-auto`} onClick={handleSkillSectionExpand}></div></div>
        </div>
    )
}