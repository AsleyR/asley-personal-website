import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center py-5 text-sm text-center bg-bggray">
            <p>This site was hand-crafted, with ❤️.</p>
            <p>Licensed under <Link className="underline hover:text-gray-500" href={'https://github.com/AsleyR/asley-personal-website/blob/main/LICENSE.md'} target={'_blank'}>GPL-3.0-or-later</Link>. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer
