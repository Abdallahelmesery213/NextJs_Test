import React from 'react';
import Head from 'next/head';
import Navbar from '../pages/components/Navbar'
import Footer from '../pages/components/Footer';
 const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>My App </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

            </Head>
            <Navbar />
            <div className="main">

            {children}
            
            </div>
            <Footer />
        </div>
    )
}
export default Layout;