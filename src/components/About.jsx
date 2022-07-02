import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> About</p>
        </div>
        <p className="text-base mt-20">
          I am from Peru, I am 25 years old, I am passionate about programming. 
          My hobbies are going on trips, getting to know new work and personal 
          experiences. Currently I have 1 year learning Javascript, React, Node Js,
           Express.js, Redux, Postgres. I am also familiar with MySQL, Sequelize, 
           HTML, CSS, Bootstrap, Tailwind, Git, and GitHub.
        </p>
        <br />


      </div>

    </div>
  )
}

export default About