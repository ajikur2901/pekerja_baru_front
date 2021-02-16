import React from 'react';
import { 
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

    render(){
        return(
            <div className="absolute w-full min-h-screen h-full p-4">
                <div className="bg-white rounded-2xl h-full w-full p-4 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-full">
                        <div>
                            <div className="bg-blue-400 rounded-xl h-full p-4 w-full min-h-40 text-center">
                                <h1 className="text-3xl text-white">Pendataan Pekerja Baru</h1>
                                <h1 className="text-3xl text-white">..Company Name..</h1>
                                <h1 className="text-3xl text-white">{this.props.userReducer.user.name}</h1>
                                <h1 className="text-sm text-white" >{this.props.userReducer.user.email}</h1>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl w-full h-96 p-4">
                                    <div className="h-full grid grid-rows-6 gap-4">
                                        <div>
                                            <h1 className="text-2xl text-white">Input Data Pekerja Baru</h1>
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            Data Pribadi
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            Alamat
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            Anggota Keluarga
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            BPJS
                                        </div>
                                        <div>
                                            <Link to="/InputData">
                                                <button type="button" className="w-full h-full bg-white text-blue-700 font-bold rounded-lg text-2xl border-2 border-blue-600">
                                                    Mulai Mengisi
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl w-full h-96 p-4">
                                    <div className="h-full grid grid-rows-6 gap-4">
                                        <div>
                                            <h1 className="text-2xl text-white">Input Data Pekerja Baru</h1>
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            Data Pribadi
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            Alamat
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            Anggota Keluarga
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            BPJS
                                        </div>
                                        <div>
                                            <Link to="/InputData">
                                                <button type="button" className="w-full h-full bg-white text-blue-700 font-bold rounded-lg text-2xl border-2 border-blue-600">
                                                    Mulai Mengisi
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl w-full h-96 p-4">
                                    <div className="h-full grid grid-rows-6 gap-4">
                                        <div>
                                            <h1 className="text-2xl text-white">Input Data Pekerja Baru</h1>
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            Data Pribadi
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            Alamat
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            Anggota Keluarga
                                        </div>
                                        <div className="text-xl text-white">
                                            <FontAwesomeIcon icon={faCheckSquare} className="mr-2"/>
                                            BPJS
                                        </div>
                                        <div>
                                            <Link to="/InputData">
                                                <button type="button" className="w-full h-full bg-white text-blue-700 font-bold rounded-lg text-2xl border-2 border-blue-600">
                                                    Mulai Mengisi
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}


export default connect(mapStateToProps)(Dashboard);