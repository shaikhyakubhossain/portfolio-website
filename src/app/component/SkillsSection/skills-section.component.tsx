"use client";
import styles from './skills-section.module.scss';
import { useState } from 'react';



type propsType = {
    children: React.ReactNode 
}

 const SkillsSection = (props: propsType): JSX.Element => {

    const [expanded, setExpanded] = useState(true);

    return (
        <div id='Skills' className={`${styles.mainContainer} flex text-center mt-60 pt-40`}>
            <div className='my-auto'>
                <div className={`${styles.headingMySkills} text-4xl font-bold mb-12`} >My Skills</div>
                    <div className={`${styles.skillsContainer} flex flex-wrap px-20 justify-center overflow-hidden ${expanded ? "h-60" : ""}`}>
                    {props.children}
                    </div>
                <div className={`${styles.moreBtnContainer} mt-2`}><div className={`${expanded ? styles.moreBtnExpanded : styles.moreBtnMinimized } mx-auto`} onClick={() => setExpanded(!expanded)}></div></div>
            </div>
        </div>
    )
}

export default SkillsSection;