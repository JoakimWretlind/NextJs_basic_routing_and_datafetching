import Navbar from '../navbar/index'
import { FooterSection } from '../footer/footer'

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
            <FooterSection />
        </>
    )
}

export default Layout