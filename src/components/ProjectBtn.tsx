interface ProjectBtnProps {
    text: string;
    className?: string;
    link?: string
}

const ProjectBtn = ({ text, className, link }: ProjectBtnProps) => {
    return (
        <button className={`
        ${className || ""} bg-gray-200 border text-gray-600 rounded px-4 py-1
        hover:bg-black/80 hover:text-white hover:scale-105 active:scale-95 transition-all
        `}>
            <a
                className=""
                href={link || "/"}
                target={'_blank'}
            >
                {text}
            </a>
        </button>
    )
}

export default ProjectBtn
