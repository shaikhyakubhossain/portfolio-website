"use client";
import { useState } from "react";
import Nav from "../Nav/nav.component";
import HeroHeader from "../HeroHeader/hero-header.component";
import About from "../About/about.component";
import SkillsSection from "../SkillsSection/skills-section.component";
import SkillCard from "../SkillCard/skill-card.component";
import ProjectsSection from "../ProjectsSection/projects-section.component";
import ContactMe from "../ContactMe/contact-me.component";
import CustomMouseCursor from "../CustomMouseCursor/custom-mouse-cursor.component";
import type { data, skillListType } from "../../constants/Types/api-data";

type propsType = { data: data };

export default function ComponentsWrapper(props: propsType): JSX.Element {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // console.log(mousePosition);
  return (
    <div
      className={`bg-black text-white h-dvh py-8 overflow-y-auto scroll-smooth cursor-none`}
      style={{ scrollbarWidth: "none" }}
      onMouseMove={(e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }}
    >
      <CustomMouseCursor mousePosition={mousePosition} />
      <Nav heroName={props.data.name} />
      <HeroHeader
        name={props.data.name}
        subTitles={props.data.subTitles}
        heroImage={props.data.heroImage}
        verticalLinks={props.data.verticalLink}
      />
      <About aboutMe={props.data.aboutMe} />
      <SkillsSection>
        {props.data.skillsList
          ? props.data.skillsList.map(
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
      {props.data.projectsList ? (
        <ProjectsSection projectList={props.data.projectsList} />
      ) : null}
      <ContactMe />
    </div>
  );
}
