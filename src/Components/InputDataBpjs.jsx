import React from 'react';

class InputDataBpjs extends React.Component {

    render(){
        return(
            <div className="w-full p-4 border-2 border-purple-600 rounded-md">
                <div className="formGroup">
                    <h1>Data BPJS Ketenagakerjaan & Kesehatan</h1>
                    <hr className="border-2 border-purple-600 w-5/6"></hr>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Nama Badan Usaha/Instansi/Asosiasi</label>
                    <input type="text" className="formControl md:w-3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Apakah sebelumnya sudah menjadi peserta ?</label>
                    <div className="formRadio">
                        <input id="rKepesertaanB" type="radio" name="rKepesertaan" value="Belum"/>
                        <label htmlFor="rKepesertaanB">Belum</label>
                    </div>
                    <div className="formRadio">
                        <input id="rKepesertaanS" type="radio" name="rKepesertaan" value="Sudah"/>
                        <label htmlFor="rKepesertaanS">Sudah</label>
                    </div>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Bila sudah, mohon lengkapi nomor referensi (nomor peserta) BPJS ketenagakerjaan</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Nama Lengkap Tenaga Kerja</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Tempat</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Tanggal Lahir</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Nama Ibu Kandung Tenaga Kerja</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Alamat Lengkap Tenaga Kerja</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Provinsi</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Kabupaten</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Kode Pos</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">No. Telephone / HP</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Alamat Email</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Nomor Pokok Wajib Pajak (NPWP)</label>
                    <input type="text" className="formControl md:3/5 lg:w-4/6"/>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Status Pegawai</label>
                    <select className="formSelect"></select>
                </div>
                <div className="formGroup">
                    <label className="formLabel lg:w-2/6">Kelas Rawat dan Faskes (Tingkat 1)</label>
                    <input type="text" className="formControl"/>
                </div>
                <div className="formGroup hidden md:block">
                    *Untuk kode Faskes dapat diakses dan lihat pada laman&nbsp;
                    <a 
                        className="text-blue-600 hover:text-purple-500"
                        href="https://faskes.bpjs-kesehatan.go.id/aplicares/#/app/pnama/bylocation" 
                        target="_blank"
                        rel="noreferrer">
                            https://faskes.bpjs-kesehatan.go.id/aplicares/#/app/pnama/bylocation
                        </a>
                </div>
                <div className="formGroup block md:hidden">
                    *Untuk melihat kode Faskes &nbsp;
                    <a 
                        className="text-blue-600 hover:text-purple-500"
                        href="https://faskes.bpjs-kesehatan.go.id/aplicares/#/app/pnama/bylocation" 
                        target="_blank"
                        rel="noreferrer">
                            klik disini!
                        </a>
                </div>
            </div>
        )
    }
}

export default InputDataBpjs;