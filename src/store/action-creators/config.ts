import { Dispatch } from "redux"
import { ConfigActions, configActionTypes } from "../../types/config"


export const setIsAuth = (authState: boolean) => {
    return (dispatch: Dispatch<ConfigActions>) => {
        dispatch({type: configActionTypes.SET_AUTH, payload: authState})
    }
}

export const setMenuShowing = () => {
    return (dispatch: Dispatch<ConfigActions>) => {
        dispatch({type: configActionTypes.SET_MENU_SHOWING})
    }
}