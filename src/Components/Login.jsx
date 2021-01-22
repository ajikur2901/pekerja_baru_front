import React from 'react';
import quickHarvester from './img/quickHarvester.jpg';

class Login extends React.Component {

    render(){
        return(
            <div>
                <div className="
                    invisible 
                    absolute inset-y-0 h-full
                    md:visible md:w-full
                    lg:left-6 lg:w-3/5 lg:content-center lg:p-6 lg:align-middle ">
                    <img src={quickHarvester} alt="Produk Quick Tractor" className="w-full lg:rounded-md"/>
                </div>
                <div className="
                    absolute inset-y-0 w-full h-full p-4
                    md:left-6 md:w-80 md:h-3/5 md:bottom-0 md:inset-y-auto
                    lg:left-auto lg:right-6 lg:bottom-auto lg:h-full
                    ">
                    <div className="bg-white rounded-md h-full w-full p-4">
                        <div className="mb-4">
                            <label className="w-full h-8 font-semibold">Username</label>
                            <input type="text" className="border-2 border-gray-600 rounded-md w-full h-8 focus:border-purple-600" />
                        </div>
                        <div className="mb-4">
                            <label className="w-full h-8 font-semibold">Password</label>
                            <input type="password" className="border-2 border-gray-600 rounded-md w-full h-8 focus:border-purple-600" />
                        </div>
                        <div className="mb-4">
                            <button type="button" className="bg-purple-500 font-semibold w-full h-8 rounded-md text-white " >Masuk</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;