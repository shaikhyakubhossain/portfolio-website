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

    const url = "https://portfolio-website-backend-in-nodejs.vercel.app/userSkillsData"
    // const url = "http://localhost:4000/userSkillsData"

    const response = await fetch(url, { 
        method: "GET",
        headers: {
          "code": `${process.env.ACCESS_CODE}`
        },
        cache: "no-cache"
     });
    const data: data = await response.json();
    
    return data.error ? (
      <div className='bg-black text-center items-center text-2xl flex justify-center font-semibold text-red-400 h-dvh py-8'>{data.error}</div>
    ) : (
      <div
        className={`bg-black text-white h-dvh py-8 overflow-y-auto scroll-smooth`}
        style={{ scrollbarWidth: "none" }}
      >
        <Nav />
        <HeroHeader
          name={data.name}
          subTitles={data.subTitles}
          heroImage={data.heroImage}
          verticalLinks={data.verticalLink}
        />
        <About aboutMe={data.aboutMe} />
        <SkillsSection>
          {data.skillsList
            ? data.skillsList.map(
                (item: skillListType, index: number): JSX.Element | false => {
                  return (
                    item.skillIcon !== "" && (
                      <SkillCard
                        key={index}
                        skillIcon={item.skillIcon}
                        skillTitle={item.skillTitle}
                      />
                    )
                  );
                }
              )
            : null}
        </SkillsSection>
        {data.projectsList ? (
          <ProjectsSection projectList={data.projectsList} />
        ) : null}
        <ContactMe />
      </div>
    );
};