import '../styles/globals.css'
import Navbar from './Components/Navbar'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from 'next/head';

config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Shankar Web Developer</title>
      <meta name="description" content="Goutham sankar web developer ui/ux designer shankarg webdeveloper kerala India webdeveloper kerala react developer kerala google " />
      <meta name="keywords" content="gouthamsankar, shankar, goutham, webdeveloper, react, tailwindcss, python, blender,  figma, github, nextjs, shankar, gouthamsankar,  " />
      <meta name="robots" content="index, follow" />
     
      <meta name="author" content="GOUTHAM SANKAR" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />

      <html lang='en'></html>
      

    </Head>

    <Navbar />
    <p className='box-content inline-block h-auto mt-10 ml-2 space-x-10 font-semibold text-gray-500 bg-transparent sm:mr-20 sm:ml-20 font-Rampart'>{"<body>"}</p>
    <Component {...pageProps} />
    <p className='mt-10 ml-2 space-x-10 font-semibold text-gray-500 bg-transparent sm:mr-20 sm:align-text-bottom sm:ml-20 font-Rampart '>{"</body>"}</p>
  </>

}

export default MyApp
