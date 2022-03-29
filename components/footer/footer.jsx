import { Footer, P } from './style'

export const FooterSection = () => {
    const yearNow = new Date().getFullYear();
    return (
        <Footer>
            <P>&copy; Joakim Wretlind 2018-{yearNow}</P>
        </Footer>
    )
}
