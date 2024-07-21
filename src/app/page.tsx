import './globals.css'
import HeroHeader from "./component/HeroHeader/hero-header.component";
import About from './component/About/about.component';
import SkillsSection from './component/SkillsSection/skills-section.component';
import SkillCard from './component/SkillCard/skill-card.component';
import Nav from './component/Nav/nav.component';

export default function Home() {

    const testBase64:string = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KPHBhdGggZmlsbD0iIzIxMjEyMSIgZD0iTTE4Ljk3NCwzMS41YzAsMC44MjgtMC42NzEsMS41LTEuNSwxLjVzLTEuNS0wLjY3Mi0xLjUtMS41di0xNGMwLTAuNjUzLDAuNDIzLTEuMjMxLDEuMDQ1LTEuNDMgYzAuNjI1LTAuMTk4LDEuMzAyLDAuMDMsMS42NzksMC41NjNsMTYuNzc3LDIzLjcwNEM0MC42MTcsMzYuNzA5LDQ0LDMwLjczNSw0NCwyNGMwLTExLTktMjAtMjAtMjBTNCwxMyw0LDI0czksMjAsMjAsMjAgYzMuMTkyLDAsNi4yMDYtMC43NzcsOC44OS0yLjEyMkwxOC45NzQsMjIuMjE2VjMxLjV6IE0yOC45NzQsMTYuNWMwLTAuODI4LDAuNjcxLTEuNSwxLjUtMS41czEuNSwwLjY3MiwxLjUsMS41djEzLjg0bC0zLTQuMjI3IFYxNi41eiI+PC9wYXRoPgo8L3N2Zz4='

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
            <Nav />
            <HeroHeader />
            <About />
            <SkillsSection>
                {
                    skillTestArr.map((item, index): JSX.Element => {
                        return (
                            <SkillCard skillIcon={testBase64} skillTitle={item.skillTitle} />
                        )
                    })
                }
            </SkillsSection>
        
        </div>
    );
};