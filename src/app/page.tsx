import './globals.css'
import HeroHeader from "./component/HeroHeader/hero-header.component";
import About from './component/About/about.component';
import ContactMe from './component/ContactMe/contact-me.component';
import SkillsSection from './component/SkillsSection/skills-section.component';
import SkillCard from './component/SkillCard/skill-card.component';
import Nav from './component/Nav/nav.component';
import ProjectsSection from './component/ProjectsSection/projects-section.component';
import type { data, skillListType } from '../app/constants/Types/api-data'



export default async function Home(): Promise<JSX.Element> {

    const response = await fetch("http://localhost:4000/userSkillsData", { cache: "no-store" });
    const data: data = await response.json();

    return (
        <div className={`bg-slate-800 text-white h-dvh overflow-y-auto`} style={{ scrollbarWidth: "none" }}>
            <Nav />
            <HeroHeader name={data.name} subTitle={data.subTitle} />
            <About aboutMe={data.aboutMe}/>
            <SkillsSection>
                {
                    data.skillsList ? data.skillsList.map((item: skillListType, index: number): JSX.Element | false => {
                        return (
                            item.skillIcon !== "" && <SkillCard key={index} skillIcon={item.skillIcon} skillTitle={item.skillTitle} />
                        )
                    }) : null
                }
            </SkillsSection>
            {
                data.projectsList ? <ProjectsSection projectList={data.projectsList} /> : null
            }
            <ContactMe />
        </div>
    );
};