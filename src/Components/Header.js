import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FunctionsOutlinedIcon from '@material-ui/icons/FunctionsOutlined';
class Header extends Component {
    componentDidMount(){
        const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});
    }
    render() {
        return (
            <nav>
                <div className="max-w-5xl mx-auto ">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div className="flex items-center py-5">
                                    <FunctionsOutlinedIcon style={{ fill:"indigo" }} className="mr-2"></FunctionsOutlinedIcon>
                                    <Link to="/"  className="font-semibold text-gray-500 text-lg">Quantom Calculations</Link>

                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                {/* py-4 px-2 text-indigo-500 border-b-4 border-indigo-500 font-semibold */}
                                <Link to="/" className="py-2 px-2 text-gray-500 hover:text-indigo-800 border-b-2 hover:border-indigo-800 font-semibold">Home </Link>
                                <Link to="/test" className="py-2 px-2 text-gray-500 hover:text-indigo-800 border-b-2 hover:border-indigo-800 font-semibold ">Test </Link>

                                {/* <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">Services</a> */}
                                {/* <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">About</a> */}
                                {/* <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">Contact Us</a> */}
                            </div>
                        </div>
                        {/* <div className="hidden md:flex items-center space-x-3 ">
                            <a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-indigo-500 hover:text-white transition duration-300">Log In</a>
                            <a href="" className="py-2 px-2 font-medium text-white bg-indigo-500 rounded hover:bg-indigo-600 transition duration-300">Call to action</a>
                        </div> */}
                        
                        {/* Beloow is for the menu button for mobile */}
                        <div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button">
                            <svg className=" w-6 h-6 text-gray-500 hover:text-indigo-800 "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>

                <div className="hidden mobile-menu">
                    <ul className="">
                        <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-indigo-800 font-semibold">Home</a></li>
                        {/* <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-indigo-500 transition duration-300">Services</a></li> */}
                        {/* <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-indigo-500 transition duration-300">About</a></li> */}
                        {/* <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-indigo-500 transition duration-300">Contact Us</a></li> */}
                    </ul>
                </div>
                <hr className="max-w-5xl mx-auto" />
            </nav>
        );
    }
}

export default Header;
