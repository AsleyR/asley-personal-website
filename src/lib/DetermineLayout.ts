export default function DetermineLayout(index: number): 'left' | 'right' {
    if (index % 2) {
        return "left"
    } else {
        return "right"
    }
}