import styles from './project-card.module.scss';
import Button from '../Button/button.component';
import Link from 'next/link';
import type { projectList } from '@/app/constants/Types/api-data';

const ProjectCard = (props: projectList) => {
    return (
        <div className={`${styles.mainContainer} flex mx-4 my-2 hover:bg-slate-900 transition-colors duration-700`}>
            <div className={`${styles.projectImageContainer}`}><img className={`${styles.projectImage} max-[640px]:w-52 max-[640px]:h-52 sm:w-52 sm:h-52 md:w-96 md:h-96 lg:w-[720px] lg:h-[360px] `} src={props.projectImageUrl} alt="" /></div>
            <div className={`${styles.detailContainer} w-1/2`}>
            <div className={`${styles.projectDate} text-xs text-left`}>{props.projectDate}</div>
            <div className={`${styles.projectTitle} text-2xl`}>{props.projectTitle}</div>
            <div className={`${styles.projectDescription}`}>{props.projectDescription}</div>
            <div className={`${styles.projectTechStackContainer} flex flex-wrap`}><span className='text-lg'>Tech Stack:</span>
                {
                    props.projectTechStack.map((item, index) => <div key={index} className='bg-slate-300 text-black px-2 rounded mx-1 self-center'>{item}</div>)
                }
            </div>
            <div className={`${styles.projectLinksContainer} flex flex-wrap`}>
                {
                    props.projectLinks.map((item, index) => <div key={index}><Link href={item.url}><Button customTW={`mx-1 text-green-200 hover:text-black hover:bg-green-200 border-green-200`}>{item.name}</Button></Link></div>)
                }
            </div>
            </div>
        </div>
    )
}

export default ProjectCard;