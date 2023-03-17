import React from 'react'

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b
    from-stone-600 to-black via-stone-600">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4
            border-red-500 text-red-500"> 
                About 
            </p>
        </div>

            <p className="text-xl mt-5 text-white">
            Highly motivated and skilled JavaScript Developer with 1 year of experience building robust and scalable web applications. 
            Proficient in HTML, CSS, and jQuery, with extensive knowledge of React. Skilled in Agile methodology and version control with Git. 
            Strong problem-solving and debugging skills. Seeking a challenging position to utilize my skills and knowledge 
            in creating innovative and user-friendly web applications.
            </p>

      </div>
    </div>
  )
}

export default About
