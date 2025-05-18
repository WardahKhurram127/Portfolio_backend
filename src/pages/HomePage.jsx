

import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className="bg-gray-900 2xl:ml-56 pt-30 min-h-screen flex flex-col items-center justify-center text-white px-4">

      <div className="mb-6">
        <div className="  profile-container ">
          <img
            src="../../public/ppp.PNG" 
            alt=""
            className="profile-img transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-12"
          />
        </div>
      </div>


      <h1 className="text-4xl md:text-5xl font-semibold mb-2">Hi, It's Wardah</h1>
      <h2 className="text-xl md:text-3xl font-bold text-red-400 mb-2">
        I'M A <span className="text-red-500">COMPUTER SCIENCE STUDENT</span>
      </h2>
      <hr className="border-red-500 w-3/4 max-w-xl mb-6" />


      <p className="text-center max-w-2xl text-lg mb-6">
        I'm a computer science student passionate about building innovative software solutions
        and exploring new technologies. My portfolio showcases my skills, projects, and dedication
        to continuous learning in tech.
      </p>


      <div className="flex space-x-6 text-2xl mb-6">
        <a href="#" className="hover:text-red-400"><FaInstagram /></a>
        <a href="#" className="hover:text-red-400"><FaLinkedin /></a>
        <a href="#" className="hover:text-red-400"><FaGithub /></a>
        <a href="#" className="hover:text-red-400"><FaTwitter /></a>
      </div>


      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
        Hire Me
      </button>
    </div>
  );
}
