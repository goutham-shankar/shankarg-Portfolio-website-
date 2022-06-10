

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faGithub,
  faInstagram,
  faLinkedin,
  faDribbble,

} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div >



      <div className='mx-auto '>

        <p className='box-content h-auto ml-2 space-x-10 font-semibold text-gray-500 bg-transparent mt-28 sm:mr-20 sm:ml-20 font-Rampart'>{"<h1>"}</p>
        <h1 className='container box-content items-center inline-block w-auto h-auto mx-auto space-x-10 font-mono text-5xl font-extrabold text-white bg-transparent sm:mr-20 sm:ml-20 sm:text-6xl'>Hi,<br />I&apos;am Shankar,<br />Web Developer
        </h1>
        <p className='inline-block font-semibold text-gray-500 bg-transparent sm:mr-20 font-Rampart '>{"</h1>"}</p>
        <p className='box-content h-auto ml-2 space-x-10 font-semibold text-gray-500 bg-transparent sm:mr-20 mt-7 sm:ml-20 font-Rampart'>{"<p>"}</p>
        <p className='box-content inline-block h-auto space-x-10 font-bold text-gray-300 bg-transparent sm:mr-20 sm:ml-20 font-Mono'>Front End Developer / Ui Designer</p>
        <p className='box-content inline-block h-auto ml-2 space-x-10 font-semibold text-gray-500 bg-transparent sm:mr-20 font-Rampart sm:ml-20'> {"</p>"}</p>
        <div className='space-x-5 ' >
          <p className='box-content h-auto mt-5 ml-2 space-x-10 text-lg font-semibold text-gray-500 bg-transparent sm:mr-20 font-Rampart sm:ml-20'> {"<social>"}</p>
          <div className='ml-10'>
            <div className='inline-block mt-1 space-x-5 sm:ml-14 '>
              <a href='https://github.com/shankarg1'>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: 30, color: "white" }}
                /></a>
              <a href='https://www.instagram.com/_shankar_g_/'>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ fontSize: 30, color: "white", backgroundColor: "transparent" }}
                /></a>
              <a href='https://www.linkedin.com/in/gouthamsankar/'>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: 30, color: "white" }}
                /></a>
              <a href='https://dribbble.com/shankar_g'>
                <FontAwesomeIcon
                  icon={faDribbble}
                  style={{ fontSize: 30, color: "white" }}
                /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gouthamsankarv@gmail.com">
                <FontAwesomeIcon

                  icon={faEnvelope}
                  style={{ fontSize: 30, color: "white", }}

                /></a>


            </div><p className='box-content inline-block h-auto ml-5 space-x-10 text-lg font-semibold text-gray-500 bg-transparent sm:mr-10 font-Rampart sm:ml-20'> {"</social>"}</p>

          </div>



        </div>




      </div>





    </div>
  )
}
