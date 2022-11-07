import React from "react";
import image from '../assetes/me.png';
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link} from 'react-scroll'


const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4 ">

                <div className="m-4 mb-5">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developper</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    Junior full stack developer passionate about learning new technologies 
                    and working in a team to create user-friendly web applications.
                     I have some  experience including front-end and back-end technologies. 
                     Eager to develop skills in a fast-paced environment and contribute to business success.
                    </p>
                    <div>
                        
                        <Link to="Portfolio" smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            portfolio
                            <span className="hover:rotate-90 duration-300">
                                <IoMdArrowRoundForward size={25} className="ml-1" />
                            </span>
                        </Link>
                        
                        
                    </div>
                </div>
                    <div >
                        <img  className="hidden rounded-2xl mx-auto px-2 mx-2 w-2/3 md:w-full w-20 mx-auto " src={image} alt='it is me'
                        ></img>


                    </div>


            </div>
        </div>
    )
}


export default Home;