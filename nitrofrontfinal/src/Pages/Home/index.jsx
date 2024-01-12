import React from 'react'
import { Helmet } from 'react-helmet-async'
import FetchSection from '../../Components/HomeSection/FetchSection'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <main>
    <FetchSection/>
    </main>
    </>
  )
}

export default Home