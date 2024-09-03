import styles from './projects-section.module.scss';
import ProjectCard from '../ProjectCard/project-card.component';


const ProjectsSection = () => {
    return (
        <div className={`${styles.mainContainer} flex text-center`}>
            <div className='m-auto'>
                <div className={`${styles.headingMyProjects} text-4xl font-bold mb-12`}>My Projects</div>
                <div>
                    { // array.map here
                        <ProjectCard />
                    }
                </div>
            </div>
        </div>
    )   
}

export default ProjectsSection;