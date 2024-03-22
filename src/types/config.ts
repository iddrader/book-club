export enum configActionTypes {
    SET_AUTH = "SET_AUTH",
    SET_MENU_SHOWING = "SET_MENU_SHOWING",
    SET_LOGIN_MODAL_SHOWING = "SET_LOGIN_MODAL_SHOWING",
    SET_REGISTER_MODAL_SHOWING = "SET_REGISTER_MODAL_SHOWING"
}


export interface IConfig {
    isAuth: boolean;
    menuShowing: boolean;
    loginModalShowing: boolean;
    registerModalShowing: boolean;
}

interface ISetAuth {
    type: configActionTypes.SET_AUTH;
}

interface ISetMenuSHowing {
    type: configActionTypes.SET_MENU_SHOWING;
}

interface ISetLoginModalShowing {
    type: configActionTypes.SET_LOGIN_MODAL_SHOWING;
}

interface ISetRegisterModalShowing {
    type: configActionTypes.SET_REGISTER_MODAL_SHOWING;
}

export type ConfigActions = ISetAuth | ISetMenuSHowing | ISetLoginModalShowing | ISetRegisterModalShowing;