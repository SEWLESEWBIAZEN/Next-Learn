'use client'
import Link from 'next/link'
import React from 'react'
import LinkComponent from './LinkComponent'
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Gallery", href: "/photo-feed" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/complex-dashboard" },
];

const Header = () =>
{
    const pathname = usePathname();
    return (
        <header style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            position: "fixed",
            right: 0,
            top: 0,
            left: 0,
            opacity: "65%"


        }}>
            <div className='flex justify-between'>

                <Link className='
                       mx-3 bg-blue-500 hover:bg-blue-700
                 text-white font-bold py-2 px-4 rounded'
                    href="/home">Go to Home</Link>
                <div className='flex justify-end'>
                    <LinkComponent href="#">Sign Up</LinkComponent> &nbsp;|&nbsp;
                    <LinkComponent href="/login">Login </LinkComponent>
                </div>
            </div>

            <div className='
            flex justify-center
            flex-col sm:flex-row
            ms-10 sm:ms-0 '>

                {navLinks.map(link =>
                {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link href={link.href} key={link.name} className="flex flex-row ">
                            <h5 className={isActive ? "font-bold mr-4 underline " : "mr-4"}>{link.name}</h5>
                        </Link>
                    );
                })}

            </div>

        </header>
    )
}

export default Header