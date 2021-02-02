import React from 'react';
import { Button, CircularProgress, makeStyles, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
// import InputDataPribadi from './InputDataPribadi';
// import InputDataAlamat from './InputDataAlamat';
// import InputDataKeluarga from './InputDataKeluarga';
// import InputDataBpjs from './InputDataBpjs';

const InputDataPribadi  = React.lazy(() => import('./InputDataPribadi'));
const InputDataAlamat   = React.lazy(() => import('./InputDataAlamat'));
const InputDataKeluarga = React.lazy(() => import('./InputDataKeluarga'));
const InputDataBpjs     = React.lazy(() => import('./InputDataBpjs'));

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
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleBack = () => {
        setActiveStep((activeStep) => activeStep - 1);
    }

    const handleNext = () => {
        setActiveStep((activeStep) => activeStep + 1);
    }

    const handleReset = () => {
        setActiveStep(0);
    }

    return (
        <div className=" w-full min-h-screen h-full p-4">
            <div className="bg-white rounded-2xl h-full w-full p-4 shadow-2xl">
                <div className={classes.root}>
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
                    <div className="block w-full">
                        {
                            activeStep === steps.length ? (
                                <div>
                                    <Typography component={'span'} className={classes.instructions}>All Steps Complete</Typography>
                                    <Button onClick={handleReset}>Reset</Button>
                                    <Button variant="contained" color="primary" onClick={handleReset}>Simpan</Button>
                                </div>
                            ) : (
                                <div>
                                    <Typography component={'span'} className={classes.instructions}>
                                        <React.Suspense fallback={<CircularProgress />} >
                                            <div>
                                                {getStepContent(activeStep)}
                                            </div>
                                        </React.Suspense>
                                    </Typography>
                                    <div className="pt-10">
                                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
                                            Back
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputData;