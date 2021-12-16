import Head from 'next/head'

const Layout = ({children}) => {

    return (
        <>
            <Head>
                <title>Online Puissance 4</title>
                <meta name="keywords" content="puissance4 online, puissance4 en ligne, puissance4 tournament"/>
            </Head>
            {children}
        </>

    );
};

export default Layout;
