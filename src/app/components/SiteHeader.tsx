"use client";

import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { isDesktop } from './GetInfo';


export default function SiteHeader() {
    return (
        <header className="">
            <div className="flex h-14 items-center px-4">
                {isDesktop() ? <MainNav /> : <MobileNav/>}
            </div>
        </header>
    );
}