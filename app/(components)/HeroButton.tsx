import { ButtonLinkComponentProps } from "../(types)/index.types"

const HeroButton = ({ text, className, link }: ButtonLinkComponentProps) => {
    return (
        <button className={`${className} group hover:scale-110 md:origin-bottom-left transition-all font-bold duration-300`}>
            <a href={link}>
                {text}
            </a>
            <span className="md:block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gray-50"></span>
        </button>
    )
}

export default HeroButton