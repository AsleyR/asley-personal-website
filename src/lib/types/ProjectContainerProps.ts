export interface ProjectContainerProps {
    title: string;
    description: string;
    role?: string;
    imagePath: string;
    repoLink: string;
    link?: string;
    projectTags?: string[] | undefined
}