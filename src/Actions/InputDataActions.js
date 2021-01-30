// action creator

const setDataPribadi = (payload) => ({type:"SET_DATA_PRIBADI", payload});

// methods

export const saveDataPribadi = (data) => dispatch => {
    dispatch(setDataPribadi(data));
}