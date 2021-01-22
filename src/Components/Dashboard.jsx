import React from 'react';
import { 
    Link
} from "react-router-dom";
import fountainPen from './img/fountainPen.jpg';

class Dashboard extends React.Component {

    render(){
        return(
            <div>
                <div className="absolute w-full h-full p-4">
                    <div className="bg-white rounded-md h-full w-full p-4">
                        <div className="mb-4">
                            <h1 className="text-3xl">Pendataan Pekerja Baru</h1>
                            <hr></hr>
                        </div>
                        <div>
                            <Link to="/InputData">
                                <div className="h-60 w-full
                                    md:max-h-20 md:w-80">
                                    <div className="
                                        h-full w-full border-2 border-purple-600 align-middle bg-no-repeat bg-cover
                                        md:float-left md:w-32" 
                                        style={{ backgroundImage: `url(${fountainPen})` }}
                                        >
                                    </div>
                                    <div className="h-1/3 w-full border-2 border-purple-600
                                        md:float-left md:h-full md:w-48 md:border-l-0">
                                        <h1 className="text-2xl border-b-2 border-purple-400">Input Data Pekerja Baru</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;