import React from 'react';
import {
    TextField,CircularProgress
} from '@material-ui/core';
import {
    Autocomplete
} from '@material-ui/lab';

const SelectDaerah = (props) => {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading =  open && options.length === 0;

    const getLink = (label) => {
        switch(label){
            case 'Provinsi':
                return 'https://api-pb.tuturcinatur.xyz/api/provinsi';
            case 'Kabupaten':
                const provId = encodeURIComponent(props.provinsi.id ? props.provinsi.id : '');
                return 'https://api-pb.tuturcinatur.xyz/api/kabupaten/search?provinsi_id=' + provId;
            case 'Kecamatan':
                const kabId = encodeURIComponent(props.kabupaten.id ? props.kabupaten.id : '');
                return 'https://api-pb.tuturcinatur.xyz/api/kecamatan/search?kabupaten_id=' + kabId;
            case 'Kelurahan':
                const kecId = encodeURIComponent(props.kecamatan.id ? props.kecamatan.id : '');
                return 'https://api-pb.tuturcinatur.xyz/api/kelurahan/search?kecamatan_id=' + kecId;
            default: return ;
        }
    }

    React.useEffect(() => {
        let active = true;

        if(!loading){
            return undefined;
        }

        (async () => {
            const response = await fetch(getLink(props.label), {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });
            const daerah = await response.json();

            if(active){
                setOptions(daerah);
            }
        })(); 

        return () => {
            active = false;
        }
    },[loading])

    React.useEffect(() => {
        if(!open) {
            setOptions([]);
        }
    },[open]);

    const handleInputChange = (event,newValue) => {
        // setValue(newValue);
        props.onChange(newValue);
    }

    const handleOptionLabel = (option) => {
        switch(props.label){
            case 'Provinsi':
                return option.nama_provinsi ? option.nama_provinsi : '';
            case 'Kabupaten':
                return option.nama_kabupaten ? option.nama_kabupaten : '';
            case 'Kecamatan':
                return option.nama_kecamatan ? option.nama_kecamatan : '';
            case 'Kelurahan':
                return option.nama_kelurahan ? option.nama_kelurahan : '';
            default: 
                return '';
        }
    }
    
    return(
        <Autocomplete 
            id={props.id}
            open={open}
            onOpen={() => {
                setOpen(true)
            }}
            onClose={() => {
                setOpen(false)
            }}
            getOptionSelected={(option,value) => option.id === value.id}
            getOptionLabel={(option) => handleOptionLabel(option)}
            options={options}
            loading={loading}
            value={props.value}
            onChange={handleInputChange}
            renderInput={(params) => (
                <TextField
                    { ...params}
                    label={props.label}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null }
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}

export default SelectDaerah;
