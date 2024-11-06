export type data = {
    name: string,
    subTitle: string,
    aboutMe: string,
    skillsList: skillListType[],
    projectsList: projectList[],
    verticalLink: verticalLink[]
}

export type skillListType = {
    skillIcon: string,
    skillTitle: string
}

export type projectList = {
    projectTitle: string,
    projectImageUrl: string,
    projectDescription: string,
    projectTechStack: string[],
    projectLinks: projectLinks[],
    projectDate: string
}

export type projectLinks = {
    name: string,
    url: string
}

export type verticalLink = {
    name: string,
    url: string,
    icon: string
}