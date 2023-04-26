import { useContext } from "react";
import ChangePageTitle from "../../lib/ChangePageTitle";
import { MobileMenuContextType } from "../../lib/types/context/MobileMenuContext";
import { MobileMenuContext } from "./Header";

const Logo = () => {
    const { mobileMenu, setMobileMenu } = useContext(MobileMenuContext) as MobileMenuContextType

    return (
        <div className='flex'>
            <a href="/#" onClick={() => { ChangePageTitle('Asley Robleto'); setMobileMenu(false) }}>
                <h1 className='font-source-serif text-4xl md:text-3xl font-bold cursor-pointer transition-all'>AR</h1>
            </a>
        </div>
    )
}

export default Logo
