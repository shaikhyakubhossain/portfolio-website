"use client";
import { useState } from "react";
import styles from './nav.module.scss'

export default function Nav(): JSX.Element {

    const [menuOpen, setMenuOpen] = useState(false);

    const menu = (mobile: boolean = false) => {
        return (
            <div className={`${styles.rightContainer} ${mobile ? "" : "flex"} my-auto text-left`}>
                <div><a href='#Home'>Home</a></div>
                <div><a href='#About'>About</a></div>
                <div><a href='#Skills'>Skills</a></div>
                <div><a href='#Project'>Project</a></div>
                <div><a href='#Contact'>Contact</a></div>
            </div>
        )
    }

    return (
        <div className={`${styles.mainContainer} flex justify-between font-semibold fixed top-0 left-0 right-0 px-20 bg-slate-800 shadow-lg h-12`}>
            <div className={`${styles.leftContainer} ${styles.portfolioTextContainer} my-auto`}><div>Portfolio.</div></div>
            <button className='min-[730px]:hidden' onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
            {menuOpen && <div className='absolute right-16 top-11 bg-slate-800 text-left p-4 pl-0 min-[730px]:hidden'>
                {menu(true)}
            </div>}
            <div className='flex max-[730px]:hidden'>
                {menu()}
            </div>
        </div>
        )
}