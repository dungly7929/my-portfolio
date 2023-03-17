import React from 'react'
import { musicImg, installNode,navBar, reactParallax,
reactSmooth, reactWeather } from '../assets/portfolio'


const Portfolio = () => 
{

    const Portfolios = [
        {
            id: 1,
            src: musicImg,
            name: 'Music Player',
        },
        {
            id: 2,
            src: reactParallax,
            name: 'React Parallax',
        },
        {
            id: 3,
            src: installNode,
            name: 'Install Node',
        },
        {
            id: 4,
            src: navBar,
            name: 'NavBar',
        },
        {
            id: 5,
            src: reactSmooth,
            name: 'React Smooth',
        },
        {
            id: 5,
            src: reactWeather,
            name: 'React Weather',
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-stone-600 w-full
    text-white md:h-screen via-stone">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full">
            <div className="pb-8">
                <p className="font-bold inline border-b-4 text-4xl
                text-red-500 border-red-500">
                    Portfolio
                    </p>
                <p className="py-6">
                    Check out some of my work right here
                    </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3
             gap-8 px-12 sm:px-0">
 {
                Portfolios.map(({src, id,name}) => 
                (
                    <div key={id} className="shadow-md shadow-black rounded-lg
                    font-bold ">
                    <img src={src} alt={name} 
                    className="rounded-md duration-200
                    hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <a className="w-1/2 px-10 py-3 
                        m-4 duration-200 hover:scale-105"
                        href="https://justmcmusic.netlify.app/"
                        >
                            Demo
                        </a>
                        <a className="w-1/2 px-6 py-3 
                        m-4 duration-200 hover:scale-105"
                        href="https://github.com/dungly7929/justmcmusic">
                            Code
                        </a>
                    </div>
                </div>
                ))}

            </div>
      </div>
    </div>
  )
}

export default Portfolio
