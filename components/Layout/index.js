import React from "react";
import Head from "next/head";
import classnames from "classnames";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Head>
        <title>Vipul Singh Portfolio</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          type="text/css"
          rel="prefetch"
        />
        <link
          rel="prefetch"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="canonical" href="https://www.vipulsingh.in.net/" />
        <meta
          name="google-site-verification"
          content="I2pXOuorfYJ07tKwD4rpvkSEx5UKuBWDmR9Jt3za1XM"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="This is a portfolio website bootstraped with create-next-app using tailwindcss & animate.css."
        />
        <meta name="author" content="Vipul Singh" />
        <meta
          name="keywords"
          content="vipul singh vipul portfolio, vipul singh portfolio, vipul singh resume, vipul portfolio"
        />
        <meta name="theme-color" content="#0a192f" />
        <meta property="og:title" content="Vipul's Resume" />
        <meta property="og:description" content="This is a portfolio website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vipulsingh.in.net/" />
        <meta
          property="og:image"
          content="https://www.vipulsingh.in.net/_next/image?url=%2FVipul.jpg&w=384&q=75"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="My portfolio website created using tailwindcss & animate.css."
        />
        <meta name="twitter:title" content="Vipul Singh Portfolio" />
        <meta
          name="twitter:image"
          content="https://www.vipulsingh.in.net/_next/image?url=%2FVipul.jpg&w=384&q=75"
        />
        <meta name="twitter:site" content="@VipulSi78066437" />
        <meta name="robots" content="index, follow" />
        <style type="text/css">{`${process.env.BUILD_DATA}`}</style>
      </Head>
      <Header />
      <main className={classnames("overflow-x-hidden")}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
