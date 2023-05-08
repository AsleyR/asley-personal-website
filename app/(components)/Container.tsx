import { ContainerProps } from '../(types)/index.types'

const Container = ({ className, children }: ContainerProps) => {
    return (
        <div className={`${className} px-mobilex lg:px-normalx`}>
            {children}
        </div>
    )
}

export default Container
