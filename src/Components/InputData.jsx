import React from 'react';
import InputDataPribadi from './InputDataPribadi';
import InputDataAlamat from './InputDataAlamat';
import InputDataKeluarga from './InputDataKeluarga';
import InputDataBpjs from './InputDataBpjs';

class InputData extends React.Component {

    render(){
        return(
            <div>
                <div className="h-auto w-full p-4">
                    <div className="bg-white h-auto rounded-md w-full p-4">
                        <div className="mb-4 border-2 border-purple-600 text-center rounded-md min-h-10 align-middle">
                            <h1 className="text-xl align-middle">Data Pekerja CV. Karya Hidup Sentosa</h1>
                        </div>
                        <div className="h-auto">
                            <InputDataPribadi />
                            <InputDataAlamat />
                            <InputDataKeluarga />
                            <InputDataBpjs />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputData;