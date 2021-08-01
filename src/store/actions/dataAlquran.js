import { SET_DATA_ALQURAN, SET_DATA_ALQURAN_LOADING, SET_DATA_ALQURAN_ERROR } from "../actionType";

export function setDataAlquran(input) {
    return {
        type: SET_DATA_ALQURAN,
        payload: input
    }
}

export function setDataAlquranLoading(input) {
    return {
        type: SET_DATA_ALQURAN_LOADING,
        payload: input
    }
}

export function setDataAlquranError(input) {
    return {
        type: SET_DATA_ALQURAN_ERROR,
        payload: input
    }
}

export function fetchDataAlquran(id) {
    if (!id) {
        return (dispatch) => {
            dispatch(setDataAlquranLoading(true))
            fetch(`https://api.alquran.cloud/v1/surah`)
                .then((res) => res.json())
                .then((result) => {
                    dispatch(setDataAlquran(result))
                    dispatch(setDataAlquranLoading(false))
                })
                .catch((err) => {
                    dispatch(setDataAlquranError(true))
                    dispatch(setDataAlquranLoading(false))
                })
        }
    }
    return (dispatch) => {
        dispatch(setDataAlquranLoading(true))
        fetch(`https://api.alquran.cloud/v1/surah${id}`)
            .then((res) => res.json())
            .then((result) => {
                dispatch(setDataAlquran(result))
                dispatch(setDataAlquranLoading(false))
            })
            .catch((err) => {
                dispatch(setDataAlquranError(err))
                dispatch(setDataAlquranLoading(false))
            })
    }
}

