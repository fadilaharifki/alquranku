import { ADD_DATA_FAVORITE, ADD_DATA_FAVORITE_LOADING, ADD_DATA_FAVORITE_ERROR } from "../actionType";

export function addDataFavorite(input) {
    return {
        type: ADD_DATA_FAVORITE,
        payload: input
    }
}

export function addDataFavoriteLoading(input) {
    return {
        type: ADD_DATA_FAVORITE_LOADING,
        payload: input
    }
}

export function addDataFavoriteError(input) {
    return {
        type: ADD_DATA_FAVORITE_ERROR,
        payload: input
    }
}
