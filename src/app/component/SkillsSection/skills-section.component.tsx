"use client";
import styles from './skills-section.module.scss';
import { useState } from 'react';



type propsType = {
    children: React.ReactNode 
}

 const SkillsSection = (props: propsType): JSX.Element => {

    const [expanded, setExpanded] = useState(true);

    const handleSkillSectionExpand = () => {
        
        expanded ? setExpanded(false) : setExpanded(true)
    }

    return (
        <div id='Skills' className={`${styles.mainContainer} flex text-center my-20`}>
            <div className='my-auto'>
                <div className={`${styles.headingMySkills} text-4xl font-bold mb-12`} >My Skills</div>
                    <div className={`${styles.skillsContainer} flex flex-wrap px-20 justify-center overflow-hidden ${expanded ? "h-56" : ""}`}>
                    {props.children}
                    </div>
                <div className={`${styles.moreBtnContainer}`}><div className={`${expanded ? styles.moreBtnExpanded : styles.moreBtnMinimized } mx-auto`} onClick={handleSkillSectionExpand}></div></div>
            </div>
        </div>
    )
}

export default SkillsSection;