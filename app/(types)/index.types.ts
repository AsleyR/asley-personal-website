import { projects } from "@prisma/client";

export interface ComponentProps {
    text?: string;
    className?: string;
}

export interface ContainerProps extends ComponentProps {
    children: React.ReactNode
}

export interface NavbarComponentProps extends ComponentProps {
}

export interface NavLinkComponentProps extends ComponentProps {
    link: string;
    onClick?: (arg: any) => void;
}

export interface IconComponentProps extends ComponentProps {
}

export interface ButtonComponentProps extends ComponentProps {
    text: string
}

export interface ButtonLinkComponentProps extends ButtonComponentProps {
    link: string;
}

export interface SectionTagComponentProps extends ComponentProps {
    id?: string;
    text: string;
}

export interface PortfolioProject {
    title: string;
    role?: string;
    description: string;
    tags: string[];
    url?: string;
    repoUrl: string;
    image: string;
}

export interface ProjectsProps {
    projects: projects[]
}