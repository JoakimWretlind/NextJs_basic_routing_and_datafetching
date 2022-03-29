import Link from "next/link";
import { Section, Header, Ninja, A } from "../../styles/user.style"

// runs at buildtime - never in the browser
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: { members: data }
    }
}

const Ninjas = ({ members }) => {
    return (
        <Section>
            <Header>all users</Header>
            {members.map(member => (
                <Link
                    href={'/members/' + member.id}
                    key={member.id}
                >
                    <Ninja >
                        <A>
                            {member.name}
                        </A>
                    </Ninja>
                </Link>
            ))}
        </Section>
    )
}

export default Ninjas