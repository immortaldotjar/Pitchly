import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./HomeComps/Button";
import { useNavigate } from "react-router";
import { MdMenu, MdClose } from "react-icons/md";

const navLinks = [
    { label: "Home", slug: "home", href: "/" },
    { label: "Features", slug: "features", href: "/features" },
    { label: "Community", slug: "community", href: "/community" },
    { label: "About", slug: "about", href: "/about" },
];

export default function NavBar() {

    const [active, setActive] = useState("Home")
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const handleClick = (link) => {
        navigate(`/${link.slug}`);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 h-nav_height z-50 backdrop-blur-md bg-surface/80 border border-outline-variant flex items-center px-margin_mobile md:px-margin_desktop m-2 rounded-xl">
            <ul className="max-w-max_width w-full mx-auto flex items-center justify-between">
                <li className="flex items-center gap-12">
                    <span className="font-headline-md text-headline-md font-bold text-primary center gap-3">
                        <img src="/logo.svg" alt="pitchly_logo" width={40} />Pitchly
                    </span>
                    <ul className="hidden md:flex gap-8 md:items-center">
                        {navLinks.map((link) => (
                            <li
                                key={link.label}
                                onClick={() => { setActive(link.label), navigate(link.href) }}

                                className={
                                    link.label == active
                                        ? "font-body-sm text-body-sm text-primary font-bold border-b-2 border-primary pb-1 cursor-pointer"
                                        : "font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-150 cursor-pointer"
                                }
                            >
                                {link.label}
                            </li>
                        ))}
                    </ul>
                </li>

                <li className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" className="px-6 py-2" onClick={() => { navigate("/auth/signin") }}>Sign In</Button>
                    <Button variant="primary" className="px-6 py-2" onClick={() => { navigate("/auth/signup") }}>Create Account</Button>
                </li>

                <button
                    className="md:hidden flex items-center justify-center w-10 h-10"
                    onClick={() => setOpen((o) => !o)}
                >
                    {open ? <MdClose size={24} /> : <MdMenu size={24} />}
                </button>

            </ul>
            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-nav_height left-0 right-0 bg-surface border border-outline-variant flex flex-col gap-4 p-6 md:hidden mt-2 rounded-xl "
                    >
                        {navLinks.map((link) => (
                            <li
                                key={link.label}
                                onClick={() => { setActive(link.label), navigate(link.href) }}

                                className={`${
                                    link.label == active
                                        ? "font-body-sm text-body-sm text-primary font-bold border-b-2 border-primary pb-1 cursor-pointer"
                                        : "font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors duration-150 cursor-pointer"
                                } text-center`}
                            >
                                {link.label}
                            </li>
                        ))}
                        <li className="flex flex-col justify-center gap-4">
                            <Button variant="secondary" className="px-6 py-2 " onClick={() => { navigate("/auth/signin") }}>Sign In</Button>
                            <Button variant="primary" className="px-6 py-2" onClick={() => { navigate("/auth/signup") }}>Create Account</Button>
                        </li>

                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}
