import React from 'react'
// import { useNavigate } from "react-router-dom";
import Events from './Events';
import hero from '../images/HERO.png'
const Home = () => {
    // const history = useNavigate();

    // const clicked = () => {
    //     history('/events')
    // }
    return (
        <div>
            {/* <section className="text-gray-400 bg-gradient-to-r from-gray-900 to-indigo-400 body-font">
                <div className="container mx-auto flex px-24 py-14 pb-28 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-2xl text-3xl mb-1 font-medium text-white" id="heading" data-aos="fade-up">ENTREPRENEURSHIP
                            DEVELOPMENT CELL
                        </h1>
                        <h1 className="title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-200" id="tagline" data-aos="fade-up">VENTURE. LEARN .CONQUER

                        </h1>
                        <p className="mb-8 leading-relaxed" data-aos="fade-up">The initiative is to address the rising trend of corporate job culture and
                            establish a platform to pursue ideas and businesses at an early stage. We at EDC host various workshops,
                            speaker sessions, competitions to develop skill sets and provide essential resources to take up
                            entrepreneurship as a career. </p>
                        <div className="flex justify-center">
                            <a href="#mission">
                                <button
                                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" data-aos="fade-up">Know
                                    More</button>
                            </a>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={hero} data-aos="fade-up"/>
                    </div>
                </div>
            </section> */}
            <Events />       
        </div>

            )
}

            export default Home;