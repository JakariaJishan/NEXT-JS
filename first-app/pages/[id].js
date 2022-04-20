import Head from 'next/head';
import { useRouter } from "next/router";
import React from 'react';
const Home = () => {
    const router = useRouter();
    const {id} = router.query;
    console.log(id);
    return (
        <div>
            <Head>
               <title>{id}</title>
            </Head>
            this is home dynamic - {id}
        </div>
    );
};

export default Home;