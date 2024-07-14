import './globals.css'
import HeroHeader from "./component/HeroHeader/hero-header.component";
import About from './component/About/about.component';
import SkillsSection from './component/SkillsSection/skills-section.component';
import SkillCard from './component/SkillCard/skill-card.component';

export default function Home() {

    type skillTestArrProps = {
        skillIcon: React.ReactNode,
        skillTitle: string
    }

    const skillTestArr: skillTestArrProps[] = [
        {
            skillIcon: "test",
            skillTitle: "testing"
        }
    ]

    return (
        <div className={`bg-slate-800 text-white`}>
            <HeroHeader />
            <About />
            <SkillsSection>
                {
                    skillTestArr.map((item, index): JSX.Element => {
                        return (
                            <SkillCard skillIcon={item.skillIcon} skillTitle={item.skillTitle} />
                        )
                    })
                }
            </SkillsSection>
        </div>
    );
};