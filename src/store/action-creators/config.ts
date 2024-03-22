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

export const setLoginModalShowing = () => {
    return (dispatch: Dispatch<ConfigActions>) => {
        dispatch({type: configActionTypes.SET_LOGIN_MODAL_SHOWING})
    }
}

export const setRegisterModalShowing = () => {
    return (dispatch: Dispatch<ConfigActions>) => {
        dispatch({type: configActionTypes.SET_REGISTER_MODAL_SHOWING})
    }
}