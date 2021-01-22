import React from 'react';

class InputDataAlamat extends React.Component {

    render(){
        return(
            <div className="w-full p-4 border-2 border-purple-600 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                    <div>
                        <div className="formGroup">
                            <h1>Alamat Sesuai KTP</h1>
                            <hr className="border-2 border-purple-600 w-5/6"></hr>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Alamat Rumah</label>
                            <textarea className="formTextArea md:w-3/5"></textarea>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Provinsi</label>
                            <select className="formSelect md:w-3/5"></select>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Kabupaten/Kota</label>
                            <select className="formSelect md:w-3/5"></select>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Kecamatan</label>
                            <select className="formSelect md:w-3/5"></select>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Desa</label>
                            <input type="text" className="formControl md:w-3/5"/>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Status Rumah</label>
                            <select className="formSelect md:w-3/5"></select>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Kode Pos</label>
                            <input type="text" className="formControl md:w-3/5"/>
                        </div>
                    </div>
                    <div>
                        <div className="formGroup">
                            <h1>Alamat Sesuai Domisili</h1>
                            <input type="checkbox" />
                            <label className="text-red-600">Centang jika sama dengan alamat KTP</label>
                            <hr className="border-2 border-purple-600 w-5/6"></hr>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Alamat Rumah</label>
                            <textarea className="formTextArea md:w-3/5"></textarea>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Provinsi</label>
                            <select className="formSelect md:w-3/5"></select>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Kabupaten/Kota</label>
                            <select className="formSelect md:w-3/5"></select>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Kecamatan</label>
                            <select className="formSelect md:w-3/5"></select>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Desa</label>
                            <input type="text" className="formControl md:w-3/5"/>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Status Rumah</label>
                            <select className="formSelect md:w-3/5"></select>
                        </div>
                        <div className="formGroup">
                            <label className="formLabel">Kode Pos</label>
                            <input type="text" className="formControl md:w-3/5"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputDataAlamat;