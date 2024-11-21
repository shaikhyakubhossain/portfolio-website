"use client";
import styles from './skills-section.module.scss';
import { useState } from 'react';
import SectionHeader from '../SectionHeader/section-header.component';



type propsType = {
    children: React.ReactNode 
}

 const SkillsSection = (props: propsType): JSX.Element => {

    const [expanded, setExpanded] = useState(true);

    return (
        <div id='Skills' className={`${styles.mainContainer} flex text-center mt-60 pt-40`}>
            <div className='my-auto'>
            <SectionHeader title={'My Skills'} />
                    <div className={`${styles.skillsContainer} flex flex-wrap max-[640px]:px-2 max-[925px]:px-20 justify-center overflow-hidden ${expanded ? "h-60 max-[925px]:h-48 max-[640px]:h-36" : ""}`}>
                    {props.children}
                    </div>
                <div className={`${styles.moreBtnContainer} mt-2`}><div className={`${expanded ? styles.moreBtnExpanded : styles.moreBtnMinimized } mx-auto`} onClick={() => setExpanded(!expanded)}></div></div>
            </div>
        </div>
    )
}

export default SkillsSection;