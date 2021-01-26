import React from 'react';
import Komputer from './img/computer.jpg';

class Login extends React.Component {

    render(){
        return(
            <div className="absolute w-full min-h-screen h-full p-4">
                <div className="bg-white rounded-2xl h-full w-full p-4 shadow-2xl">
                    <div className="
                        invisible 
                        absolute inset-y-0 h-full
                        md:visible md:w-full md:h-auto
                        lg:left-6 lg:w-3/5 lg:content-center lg:p-6 lg:align-middle ">
                        <img src={Komputer} alt="http://www.freepik.com" className="w-full lg:rounded-md"/>
                        <a href="http://www.freepik.com" 
                            target="_blank" 
                            className="text-blue-400"
                            rel="noreferrer">
                            Designed by pch.vector / Freepik
                        </a>
                    </div>
                    <div className="
                        absolute w-full p-6 inset-auto
                        md:w-80 md:h-3/5 md:inset-y-auto
                        lg:left-auto lg:right-6 lg:bottom-auto
                        ">
                        <div className="rounded-xl h-full w-full bg-white p-4 border-2 border-blue-400">
                            <div className="mb-4">
                                <label className="w-full h-8 font-semibold">Username</label>
                                <input type="text" className="border-2 border-gray-600 rounded-md w-full h-8 focus:border-blue-600" />
                            </div>
                            <div className="mb-4">
                                <label className="w-full h-8 font-semibold">Password</label>
                                <input type="password" className="border-2 border-gray-600 rounded-md w-full h-8 focus:border-blue-600" />
                            </div>
                            <div className="mb-4">
                                <button type="button" className="bg-blue-500 font-semibold w-full h-8 rounded-md text-white " >Masuk</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;