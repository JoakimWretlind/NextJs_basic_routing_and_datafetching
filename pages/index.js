import Head from 'next/head'
import HomePage from '../components/home/HomePage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>List</title>
        <meta name="description" content="Basic Routing" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <HomePage />
    </div>
  )
}
