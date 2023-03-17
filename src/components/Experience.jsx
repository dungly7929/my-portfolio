import React from 'react'
import { cssImg, githubImg, htmlImg,
javascriptImg, reactImg, tailwindImg,
javaImg,androidImg, reduxImg, bootstrapImg } from '../assets'


function Experience() {

    const expList = 
    [
        {
            id: 1,
            src: cssImg,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src: htmlImg,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: javascriptImg,
            title: 'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImg,
            title: 'React',
            style:'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwindImg,
            title: 'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id: 6,
            src: githubImg,
            title: 'Github',
            style:'shadow-gray-500'
        },
        {
            id: 7,
            src: javaImg,
            title: 'Java',
            style:'shadow-orange-300'
        },
        {
            id: 8,
            src: androidImg,
            title: 'Android',
            style:'shadow-green-400'
        },
        {
            id: 9,
            src: reduxImg,
            title: 'Redux',
            style:'shadow-violet-500'
        },
        {
            id: 10,
            src: bootstrapImg,
            title: 'Bootstrap',
            style:'shadow-violet-500'
        },
    ]


  return (
    <div name="experience"
    className="bg-gradient-to-b from-stone-600 to-black
    w-full h-screen">
      
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white">

            <div>
                <p className="text-4xl font-bold border-b-4
                inline border-red-500 text-red-500 p-2">
                    Experience
                    </p>
                <p className="py-6">
                    These are the tecjnologies I've worked with
                    </p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3
                    gap-8 text-center py-8 px-12 sm:px-0">
                {expList.map(({src, id,title, style}) => (

                <div key={id} className={`shadow-md hover:scale-50 duration-500 "+
                    "py-2 rounded-lg ${style}`}>

                    <img src={src} alt=""
                        className="w-20 mx-auto" />
                        
                            <p className="mt-4">
                                {title}
                            </p>
                </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Experience
