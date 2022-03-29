import Link from "next/link";
import { Section } from "../../styles/common.style"
import { Header, P, Back } from "../../styles/user.style";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(member => {
        return {
            params: { id: member.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { member: data }
    }
}

const Details = ({ member }) => {
    return (
        <Section>
            <Header>{member.name}</Header>
            <P>{member.email}</P>
            <P>{member.website}</P>
            <P>{member.address.street}</P>
            <Link href="/members">
                <Back>back</Back>
            </Link>
        </Section>
    )
}

export default Details