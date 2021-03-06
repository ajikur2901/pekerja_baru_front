import React from 'react';
import { 
    Button, CircularProgress, makeStyles, Step, StepLabel, Stepper, Typography, 
    MobileStepper, Divider, Table, TableBody, TableRow, TableCell
} from '@material-ui/core';
import {
    useSelector, useDispatch
} from 'react-redux';
import {
    saveInputData
} from '../Actions/InputDataActions'

const InputDataPribadi      = React.lazy(() => import('./InputDataPribadi'));
const InputDataAlamat       = React.lazy(() => import('./InputDataAlamat'));
const InputDataKeluarga     = React.lazy(() => import('./InputDataKeluarga'));
const InputDataBpjs         = React.lazy(() => import('./InputDataBpjs'));

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}))

function getSteps() {
    return [
        'Input Data Pribadi',
        'Input Data Alamat Pekerja',
        'Input Data Anggota Keluarga',
        'Input Data BPJS Kesehatan & Ketenagakerjaan'
    ]
}

function getStepContent(stepIndex){
    switch(stepIndex){
        case 0:
            return <InputDataPribadi />;
        case 1:
            return <InputDataAlamat />;
        case 2:
            return <InputDataKeluarga />;
        case 3: 
            return <InputDataBpjs />;
        default:
            return 'Unkown StepIndex';
    }
}


function InputData(){
    const inputDataStore = useSelector(state => state.inputDataReducer);
    const dispatch = useDispatch();

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [requiredData, setRequiredData] = React.useState('');
    const steps = getSteps();

    const handleBack = () => {
        setActiveStep((activeStep) => activeStep - 1);
    }

    const handleNext = () => {
        let completed = false;
        let unCompleted = '';
        switch(activeStep){
            case 0:
                if(inputDataStore.dataPribadi){
                    if(inputDataStore.dataPribadi.nik.length > 0){
                        completed = true
                    }else{
                        unCompleted += "NIK, "
                        completed = false
                    }

                    if(inputDataStore.dataPribadi.noKk.length > 0){
                        completed = true
                    }else{
                        unCompleted += "No. KK, "
                        completed = false
                    }

                    if(inputDataStore.dataPribadi.nama.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Nama, "
                        completed = false
                    }

                    if(inputDataStore.dataPribadi.jenKel.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Jenis Kelamin, "
                        completed = false
                    }

                    if(inputDataStore.dataPribadi.agama.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Agama, "
                        completed = false
                    }

                    if(inputDataStore.dataPribadi.nationality.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Kewarganegaraan, "
                        completed = false
                    }

                    if(inputDataStore.dataPribadi.tmpLahir.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Tempat Lahir, "
                        completed = false
                    }

                    if(inputDataStore.dataPribadi.tglLahir.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Tanggal Lahir, "
                        completed = false
                    }

                    if(inputDataStore.dataPribadi.golDarah.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Gol. Darah, "
                        completed = false
                    }

                    if(inputDataStore.dataPribadi.noHp.length > 0){
                        completed = true
                    }else{
                        unCompleted += "No. HP, "
                        completed = false
                    }

                    if(inputDataStore.dataPribadi.statNikah.length > 0){
                        if(inputDataStore.dataPribadi.statNikah === "1"){
                            if(inputDataStore.dataPribadi.tglNikah.length > 0){
                                completed = true
                            }else{
                                unCompleted += "Tanggal Nikah, "
                                completed = false
                            }

                            if(inputDataStore.dataPribadi.jmlAnak.length > 0){
                                completed = true
                            }else{
                                unCompleted += "Jumlah Anak, "
                                completed = false
                            }
                        }else{
                            completed = true
                        }
                    }else{
                        unCompleted += "Status Nikah, "
                        completed = false
                    }
                }else{
                    unCompleted = "Mohon Lengkapi Data bertanda bintang (*)"
                    completed = false
                }
                break
            case 1:
                if(inputDataStore.dataAlamat){
                    if(inputDataStore.dataAlamat.alamatKtp.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Alamat Rumah (KTP), "
                        completed = false
                    }
                    if(inputDataStore.dataAlamat.provKtp.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Provinsi (KTP), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.kabKtp.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Kabupaten (KTP), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.kecKtp.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Kecamatan (KTP), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.kelKtp.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Kelurahan (KTP), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.posKtp.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Kode POS (KTP), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.statRumahKtp.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Status Rumah (KTP), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.alamatDom.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Alamat Rumah (Domisili), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.provDom.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Provinsi (Domisili), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.kabDom.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Kabupaten (Domisili), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.kecDom.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Kecamatan (Domisili), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.kelDom.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Kelurahan (Domisili), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.posDom.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Kode POS (Domisili), "
                        completed = false
                    }

                    if(inputDataStore.dataAlamat.statRumahDom.length > 0) {
                        completed = true
                    }else{
                        unCompleted += "Status Rumah (Domisili), "
                        completed = false
                    }

                }else{
                    unCompleted = "Semua Isian ( Alamat, Provinsi, Kabupaten, Kecamatan, Kelurahan/Desa, Status Rumah, dan Kode Pos) KTP dan Domisili"
                    completed = false
                }
                break
            case 2:
                completed = true;
                break
            case 3:
                if (inputDataStore.dataBpjs) {
                    if(inputDataStore.dataBpjs.instansi.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Instansi, "
                        completed = false
                    }

                    if(inputDataStore.dataBpjs.peserta.length > 0){
                        if(inputDataStore.dataBpjs.peserta === "1"){
                            if(inputDataStore.dataBpjs.noPeserta.length > 0){
                                completed = true
                            }else{
                                unCompleted += "No Peserta BPJS, "
                                completed = false
                            }
                        }else{
                            completed = true
                        }
                    }else{
                        unCompleted += "Sudah Pernah Menjadi Peserta / Belum, "
                        completed = false
                    }

                    if(inputDataStore.dataBpjs.statPegawai.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Status Pegawai, "
                        completed = false
                    }

                    if(inputDataStore.dataBpjs.fasKes.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Fasilitas Kesehatan tingkat 1, "
                        completed = false
                    }

                    if(inputDataStore.dataBpjs.ibuKandung.length > 0){
                        completed = true
                    }else{
                        unCompleted += "Ibu Kandung, "
                        completed = false
                    }
                    
                }else{
                    unCompleted = "Sudah Pernah Menjadi Peserta / Belum, Status Pegawai,Ibu Kandung, Fasilitas Kesehatan tingkat 1"
                    completed = false
                }
                break
            default: completed = false
        }
        if(completed === true){
            setActiveStep((activeStep) => activeStep + 1)
            setRequiredData('')
        }else{
            setRequiredData(unCompleted)
        } 
    }

    const handleReset = () => {
        setActiveStep(0);
    }

    const handleSave = () => {
        dispatch(saveInputData(inputDataStore));
    }

    const handleLink = (data) => () => {
        setActiveStep(data);
    }

    return (
        <div className=" w-full min-h-screen h-full p-4">
            <div className="bg-white rounded-2xl h-full w-full p-4 shadow-2xl">
                <div className={classes.root}>
                    <div className="hidden md:block">
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {
                                steps.map((label) => (
                                    <Step key={label} >
                                        <StepLabel>
                                            {label}
                                        </StepLabel>
                                    </Step>
                                ))
                            }
                        </Stepper>
                    </div>
                    <div className="block w-full">
                        {
                            activeStep === steps.length ? (
                                <div className="text-center">
                                    <Typography component={'span'} className={classes.instructions}>
                                        Form Data Pekerja Baru sudah selesai di input.
                                        klik <b>Simpan</b> jika anda yakin dengan data yang anda input sudah sesuai, 
                                        akan tetapi jika masih anda belum yakin dengan data yang anda input klik <b>Kembali ke</b> 
                                        dan jika anda ingin input data dari awal, anda dapat klik <b>Reset</b> sehingga anda dapat mengulangi lagi dar awal
                                    </Typography>
                                    <Divider />
                                    <Button onClick={handleReset}>Reset</Button>
                                    <Button variant="contained" color="secondary" onClick={handleLink(0)}>Kembali ke Data Pribadi</Button>
                                    <Button variant="contained" color="secondary" onClick={handleLink(1)}>Kembali ke Data Alamat</Button>
                                    <Button variant="contained" color="secondary" onClick={handleLink(2)}>Kembali ke Data Keluarga</Button>
                                    <Button variant="contained" color="secondary" onClick={handleLink(3)}>Kembali ke Data BPJS</Button>
                                    <Button variant="contained" color="primary" onClick={handleSave}>Simpan</Button>
                                </div>
                            ) : (
                                <div>
                                    <Typography component={'span'} className={classes.instructions}>
                                        <React.Suspense fallback={<CircularProgress />} >
                                            <div>
                                                {getStepContent(activeStep)}
                                            </div>
                                        </React.Suspense>
                                        <div className={requiredData.length > 0 ? 'text-left text-red-500' : 'hidden'}>
                                            Mohon lengkapi data-data berikut ini sebelum melanjutkan ke isian berikutnya : {requiredData}
                                        </div>
                                    </Typography>
                                    <div className="md:pt-10 hidden md:block">
                                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton} variant="contained" color="secondary">
                                            Sebelumnya
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Selesai' : 'Selanjutnya'}
                                        </Button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="block md:hidden">
                        <MobileStepper
                            variant="progress"
                            steps={getSteps().length}
                            position="static"
                            activeStep={activeStep}
                            className={classes.root}
                            nextButton={
                                <Button size="small" variant="contained" color="primary" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            }
                            backButton={
                                <Button size="small" disabled={activeStep === 0} onClick={handleBack} className={classes.backButton} variant="contained" color="secondary">
                                    Back
                                </Button>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputData;