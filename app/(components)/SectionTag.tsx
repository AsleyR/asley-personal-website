import { SectionTagComponentProps } from "../(types)/index.types"

const SectionTag = ({ id, text, className }: SectionTagComponentProps) => {
    return (
        <div id={id || ""} className={`${className} flex gap-3 mb-[4rem] items-center align-middle`}>
            <span className="block h-[1px] w-[50px] bg-black"></span>
            <p className="">{text}</p>
        </div>
    )
}

export default SectionTag