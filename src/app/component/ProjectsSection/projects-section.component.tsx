import styles from './projects-section.module.scss';
import ProjectCard from '../ProjectCard/project-card.component';
import type { projectList } from '@/app/constants/Types/api-data';


type propsType = {
    projectList: projectList[]
}

const ProjectsSection = (props: propsType) => {
    return (
        <div id='Project' className={`${styles.mainContainer} flex mt-60 pt-40`}>
            <div className='m-auto'>
                <div className={`${styles.headingMyProjects} text-center text-4xl font-bold mb-12`}>My Projects</div>
                <div className={`${styles.projectsContainer}`}>
                    { 
                        props.projectList.map((item, index) => <ProjectCard key={index} projectTitle={item.projectTitle} projectImageUrl={item.projectImageUrl} projectDescription={item.projectDescription} projectTechStack={item.projectTechStack} projectLinks={item.projectLinks} projectDate={item.projectDate} />)
                    }
                </div>
            </div>
        </div>
    )   
}

export default ProjectsSection;