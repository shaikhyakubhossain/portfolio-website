import styles from './project-card.module.scss';
import Button from '../Button/button.component';
import Link from 'next/link';
import Image from 'next/image';
import type { projectList } from '@/app/constants/Types/api-data';

const ProjectCard = (props: projectList) => {
    return (
        <div className={`${styles.mainContainer} min-[925px]:flex mx-4 my-2 hover:bg-slate-900 transition-colors duration-700`}>
            <div className={`${styles.projectImageContainer}`}><Image loading='lazy' width={720} height={360} className={`${styles.projectImage} w-[50dvw] h-[25dvw] max-[925px]:w-[100dvw] max-[925px]:h-[50dvw]`} src={props.projectImageUrl} alt="" /></div>
            <div className={`${styles.detailContainer} w-1/2 max-[925px]:w-full`}>
            <div className={`${styles.projectDate} text-xs text-left`}>{props.projectDate}</div>
            <div className={`${styles.projectTitle} text-2xl font-semibold`}>{props.projectTitle}</div>
            <div className={`${styles.projectDescription}`}>{props.projectDescription}</div>
            <div className={`${styles.projectTechStackContainer} flex flex-wrap`}><span className='text-lg font-extralight bg-yellow-200 text-black px-2 rounded'>Tech Stack:</span>
                {
                    props.projectTechStack.map((item, index) => <div key={index} className='bg-slate-300 text-black px-2 rounded mx-1 self-center'>{item}</div>)
                }
            </div>
            <div className={`${styles.projectLinksContainer} flex flex-wrap`}>
                {
                    props.projectLinks.map((item, index) => <div key={index}><Link href={item.url}><Button customTW={`mx-1 text-green-200 hover:!text-black hover:bg-green-200 border-green-200`}>{item.name}</Button></Link></div>)
                }
            </div>
            </div>
        </div>
    )
}

export default ProjectCard;