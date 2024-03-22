import { ConfigActions, IConfig, configActionTypes } from "../../types/config"

const InitialState: IConfig = {
    isAuth: false,
    menuShowing: false,
    loginModalShowing: false,
    registerModalShowing: false,
}

export const configReducer = (state = InitialState, action: ConfigActions): IConfig => {
    switch (action.type) {
        case configActionTypes.SET_AUTH:
            return { ...state, isAuth: !state.isAuth }
        case configActionTypes.SET_MENU_SHOWING:
            return { ...state, menuShowing: !state.menuShowing }
        case configActionTypes.SET_LOGIN_MODAL_SHOWING:
            return { ...state, loginModalShowing: !state.loginModalShowing }
        case configActionTypes.SET_REGISTER_MODAL_SHOWING:
            return { ...state, registerModalShowing: !state.registerModalShowing }
        default: 
            return state;
    }  
}