export interface MobileNavLink {
    mobileNavLink: boolean;
}

export type MobileNavLinkType = {
    mobileNavLink: MobileNavLink['mobileNavLink']
    setMobileNavLink: (mobileNavLink: MobileNavLink['mobileNavLink']) => void;
}