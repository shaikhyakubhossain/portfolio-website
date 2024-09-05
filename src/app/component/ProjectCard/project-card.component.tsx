import styles from './project-card.module.scss';
import Button from '../Button/button.component';
import Link from 'next/link';
import type { projectList } from '@/app/constants/Types/api-data';



const ProjectCard = (props: projectList) => {
    return (
        <div className={`${styles.mainContainer} flex flex-col w-96 bg-slate-600 mx-4 my-2`}>
            <div className={`${styles.projectImageContainer}`}><img className={`${styles.projectImage} w-full h-52`} src={props.projectImageUrl} alt="" /></div>
            <div className={`${styles.projectTitle} text-2xl`}>{props.projectTitle}</div>
            <div className={`${styles.projectDescription}`}>{props.projectDescription}</div>
            <div className={`${styles.projectTechStackContainer} flex flex-wrap`}>Tech Stack:
                {
                    props.projectTechStack.map((item, index) => <div key={index}>{item}</div>)
                }
            </div>
            <div className={`${styles.projectLinksContainer} flex flex-wrap justify-evenly`}>
                {
                    props.projectLinks.map((item, index) => <div key={index}><Link href={item.url}><Button>{item.name}</Button></Link></div>)
                }
            </div>
        </div>
    )
}

export default ProjectCard;