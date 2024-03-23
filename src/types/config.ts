export enum configActionTypes {
    SET_AUTH = "SET_AUTH",
    SET_MENU_SHOWING = "SET_MENU_SHOWING"
}


export interface IConfig {
    isAuth: boolean;
    menuShowing: boolean;
}

interface ISetAuth {
    type: configActionTypes.SET_AUTH;
}

interface ISetMenuSHowing {
    type: configActionTypes.SET_MENU_SHOWING;
}


export type ConfigActions = ISetAuth | ISetMenuSHowing;