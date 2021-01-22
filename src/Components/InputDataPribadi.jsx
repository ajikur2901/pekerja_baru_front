import React from 'react';

class InputDataPribadi extends React.Component {

    render(){
        return(
            <div className="w-full p-4 border-2 border-purple-600 rounded-md">
                <div className="formGroup">
                    <h1>Data Pribadi</h1>
                    <hr className="border-2 border-purple-600 w-5/6"></hr>
                </div>
                <div className="formGroup">
                    <label className="formLabel">NIK</label>
                    <input type="text" className="formControl"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel">No. KK</label>
                    <input type="text" className="formControl"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel">No. NPWP</label>
                    <input type="text" className="formControl"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Nama Lengkap</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Jenis Kelamin</label>
                    <div className="formRadio">
                        <input id="rJenKelL" type="radio" name="rJenKel" value="L"/>
                        <label htmlFor="rJenKelL">Laki-Laki</label>
                    </div>
                    <div className="formRadio">
                        <input id="rJenKelP" type="radio" name="rJenKel" value="P"/>
                        <label htmlFor="rJenKelP">Perempuan</label>
                    </div>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Agama</label>
                    <select className="formSelect"></select>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Kewarganegaraan</label>
                    <div className="formRadio">
                        <input id="rNatWNI" type="radio" name="rJenKel" value="WNI"/>
                        <label htmlFor="rNatWNI">WNI</label>
                    </div>
                    <div className="formRadio">
                        <input id="rNatWNA" type="radio" name="rJenKel" value="WNA"/>
                        <label htmlFor="rNatWNA">WNA</label>
                    </div>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Tempat Lahir</label>
                    <input type="text" className="formControl"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Tanggal Lahir</label>
                    <input type="text" className="formControl"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Gol. Darah</label>
                    <select className="formSelect"></select>
                </div>
                <div className="formGroup">
                    <label className="formLabel">No. Handphone</label>
                    <input type="text" className="formControl"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel">No. Telephone</label>
                    <input type="text" className="formControl"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Email</label>
                    <input type="text" className="formControl"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Status Nikah</label>
                    <div className="formRadio">
                        <input id="rNikahYes" type="radio" name="rJenKel" value="Ya"/>
                        <label htmlFor="rNikahYes">Menikah</label>
                    </div>
                    <div className="formRadio">
                        <input id="rNikahNo" type="radio" name="rJenKel" value="Tidak"/>
                        <label htmlFor="rNikahNo">Belum Menikah</label>
                    </div>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Tanggal Nikah</label>
                    <input type="text" className="formControl"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel">Jumlah Anak</label>
                    <input type="text" className="formControl"/>
                </div>
            </div>
        )
    }
}

export default InputDataPribadi;