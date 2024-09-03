import styles from './project-card.module.scss';
import Button from '../Button/button.component';
import Link from 'next/link';
import type { projectList } from '@/app/constants/Types/api-data';



const ProjectCard = (props: projectList) => {
    return (
        <div className={styles.mainContainer}>
            <div className={`${styles.projectImageContainer}`}><img src={props.projectImageUrl} alt="" /></div>
            <div className={`${styles.projectTitle}`}>{props.projectTitle}</div>
            <div className={`${styles.projectDescription}`}>{props.projectDescription}</div>
            <div className={`${styles.projectTechStackContainer}`}>
                {
                    props.projectTechStack.map((item, index) => <div key={index}>{item}</div>)
                }
            </div>
            <div className={`${styles.projectLinksContainer}`}>
                {
                    props.projectLinks.map((item, index) => <div key={index}><Link href={item.url}><Button>{item.name}</Button></Link></div>)
                }
            </div>
        </div>
    )
}

export default ProjectCard;