import type { NextPage } from "next";
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import Head from "next/head";

// import containers
import { Footer, Hero } from "../containers";
// import components
import { Navbar } from "../components";
import { getFeatured } from "../redux/featuredSlice";

const Home: NextPage = () => {

  const dispatch = useDispatch()

// Get Featured data
useEffect(() => {
  dispatch(getFeatured())

},[]
)


  return (

    

    <div className="pb-4">
      <Head>
        <title>Wikipedia 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Navbar />
      <Hero />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
