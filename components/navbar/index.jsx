import Link from "next/link"
import Image from "next/image"
import { Nav, NavUL, NavLi, NavA } from "./navbar.style"
import { navbarData } from './navbarData'

const index = () => {
    return (
        <>
            <Nav>
                <Link href="/">
                    <Image
                        className="logo"
                        src="/logo.png"
                        height={40}
                        width={40}
                        alt="logo" />
                </Link>
                <NavUL>
                    {navbarData.map(item => (
                        <NavLi key={item.id}>
                            <Link href={item.path}>
                                <NavA>
                                    {item.title}
                                </NavA>
                            </Link>
                        </NavLi>
                    ))}
                </NavUL>
            </Nav>
        </>
    )
}

export default index