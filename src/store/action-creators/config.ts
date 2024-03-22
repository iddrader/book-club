import { Dispatch } from "redux"
import { ConfigActions, configActionTypes } from "../../types/config"


export const setIsAuth = () => {
    return (dispatch: Dispatch<ConfigActions>) => {
        dispatch({type: configActionTypes.SET_AUTH})
    }
}

export const setMenuShowing = () => {
    return (dispatch: Dispatch<ConfigActions>) => {
        dispatch({type: configActionTypes.SET_MENU_SHOWING})
    }
}