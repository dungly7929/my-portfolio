import React from 'react'
import { heroImage } from '../assets/portfolio'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full 
    bg-gradient-to-b from-black to-stone-600 via-black">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-red-500" >
                    I'm a Front End Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                    I have have 8 years of experience building and desgining software.
                    Currently, I love to work on web Applicaation using technologies like React, Tailwind, Redux, Next JS.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={600}
                    className="group text-white w-fit px-6 
                    py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500"
                    onClick={() => {}}>
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300"> 
                            <MdOutlineKeyboardArrowRight size={25}
                            className="ml-1"/> 
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={heroImage} alt="my_profile"
                className="rounded-2xl mx-auto w-2/3"/>
            </div>
        </div>
    </div>
  )
}

export default Home
