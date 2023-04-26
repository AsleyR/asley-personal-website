export interface IMobileMenu {
    mobileMenu: boolean;
}

export type MobileMenuContextType = {
    mobileMenu: IMobileMenu['mobileMenu'];
    setMobileMenu: (mobileMenu: IMobileMenu['mobileMenu']) => void;
}