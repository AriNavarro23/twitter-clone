import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />

        {/*feed*/}
        <Feed />

        {/*widgets*/}
      </main>
    </div>
  )
}

export default Home
