import "../styles/globals.css";
import Navbar from "./Components/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import { userRouter } from "next/router";
import { useState, useEffect } from "react";

config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shankar Web Developer</title>
        <meta
          name="description"
          content="Goutham shankar web developer ui/ux designer shankarg webdeveloper kerala India webdeveloper kerala react developer kerala google "
        />
        <meta
          name="keywords"
          content="gouthamsankar, shankar, goutham, webdeveloper, react, tailwindcss, python, blender,  figma, github, nextjs, shankar, gouthamsankar,  "
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="author" content="GOUTHAM SHANKAR" />
        <meta name="description" content="Goutham shankar Portfolio website " />
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <html lang="en"></html>
      </Head>

      <Navbar />
      <p className="box-content inline-block h-auto mt-10 ml-2 space-x-10 font-semibold text-gray-500 bg-transparent sm:mr-20 sm:ml-20 font-Rampart">
        {"<body>"}
      </p>
      <Component {...pageProps} />
      <p className="mt-10 ml-2 space-x-10 font-semibold text-gray-500 bg-transparent sm:mr-20 sm:align-text-bottom sm:ml-20 font-Rampart ">
        {"</body>"}
      </p>
    </>
  );
}

export default MyApp;
