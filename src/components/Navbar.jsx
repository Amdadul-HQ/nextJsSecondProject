"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const links = [
        {
            path:'/',
            title:"Home"
        },
        {
            path:'/posts',
            title:"Posts"
        },
    ]
    const pathName = usePathname()
    
    return (
        <header className="bg-teal-400">
            <nav className="flex items-center text-xl  py-4 justify-between container mx-auto">
                <h1>Next js</h1>
                <ul className="space-x-10">
                    {
                        links.map(link => <Link href={link.path} className={`${pathName === link.path && 'text-white'}`} key={link.title}>{link.title}</Link>)
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;