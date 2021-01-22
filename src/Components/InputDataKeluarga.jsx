import React from 'react';

class InputDataKeluarga extends React.Component {

    render(){
        return(
            <div className="w-full p-4 border-2 border-purple-600 rounded-md">
                <div className="formGroup">
                    <h1>Data Anggota Keluarga</h1>
                    <hr className="border-2 border-purple-600 w-5/6"></hr>
                </div>
                <div>
                    <div className=" hidden
                        md:grid md:grid-cols-12 
                        border border-purple-400 
                        bg-purple-400 text-white 
                        divide-x divide-white">
                        <div className="text-center">No.</div>
                        <div className="text-center col-span-2">Nama</div>
                        <div className="text-center col-span-3">Alamat</div>
                        <div className="text-center col-span-2">Hubungan Keluarga</div>
                        <div className="text-center">Tgl. Lahir</div>
                        <div className="text-center">Ditanggung</div>
                        <div className="text-center">Status Nikah</div>
                        <div className="text-center">Action</div>
                    </div>
                    <div className=" border-2 border-purple-400 p-4 
                            md:grid md:grid-cols-12 md:divide-x md:divide-purple-400 md:p-0">
                        <div>
                            <div className="tableLabel">no.</div>
                            <div className="tableValue md:text-center">1.</div>
                        </div>
                        <div className="md:col-span-2">
                            <div className="tableLabel">Nama :</div>
                            <div className="tableValue">Aji</div>
                        </div>
                        <div className="md:col-span-3">
                            <div className="tableLabel">Alamat :</div>
                            <div className="tableValue">Krajan</div>
                        </div>
                        <div className="md:col-span-2">
                            <div className="tableLabel">Hubungan Keluarga :</div>
                            <div className="tableValue">Anak ke-1</div>
                        </div>
                        <div>
                            <div className="tableLabel">Tanggal Lahir :</div>
                            <div className="tableValue md:text-center">21 jan 2021</div>
                        </div>
                        <div>
                            <div className="tableLabel">Ditanggung :</div>
                            <div className="tableValue md:text-center">Ya</div>
                        </div>
                        <div>
                            <div className="tableLabel">Status Menikah :</div>
                            <div className="tableValue md:text-center">Belum Menikah</div>
                        </div>
                        <div className="md:text-center">
                            <button className="bg-blue-600 text-white w-1/2 m-2 rounded-sm">Edit</button>
                            <button className="bg-red-600 text-white w-1/2 m-2 rounded-sm">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputDataKeluarga;