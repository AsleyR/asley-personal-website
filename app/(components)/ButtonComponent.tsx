import { ButtonComponentProps } from "../(types)/index.types"

const ButtonComponent = ({ text, className }: ButtonComponentProps) => {
    return (
        <button className={`${className} group hover:scale-110 md:origin-bottom-left transition-all font-bold duration-300`}>
            {text}
            <span className="md:block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
        </button>
    )
}

export default ButtonComponent