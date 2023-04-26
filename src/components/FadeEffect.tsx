import { Fade, FadeDirection } from "react-awesome-reveal"


export default function FadeEffect({ index, children }: { index: number, children: React.ReactNode }) {
    const fadeOptions: FadeDirection[] = ['up', 'left', 'right']
    return (
        <Fade direction={fadeOptions[index]} triggerOnce={true}>
            {children}
        </Fade>
    )
}