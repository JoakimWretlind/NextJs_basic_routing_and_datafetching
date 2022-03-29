import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from "next/link"
import { FourOFour, H1, A } from "../styles/fourOfour"

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <FourOFour>
            <H1>404</H1>
            <Link href="/">
                <A>get back home</A>
            </Link>
        </FourOFour>
    )
}

export default NotFound
