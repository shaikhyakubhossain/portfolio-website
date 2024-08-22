import './globals.css'
import HeroHeader from "./component/HeroHeader/hero-header.component";
import About from './component/About/about.component';
import SkillsSection from './component/SkillsSection/skills-section.component';
import SkillCard from './component/SkillCard/skill-card.component';
import Nav from './component/Nav/nav.component';

type data = {
    name: string,
    subTitle: string,
    aboutMe: string,
    skillsList: skillListType[]
}

type skillListType = {
    skillIcon: string,
    skillTitle: string
}

export default async function Home(): Promise<JSX.Element> {

    const response = await fetch("http://localhost:4000/userSkillsData", { cache: "no-store" });
    const data: data = await response.json();

    return (
        <div className={`bg-slate-800 text-white`}>
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
        
        </div>
    );
};