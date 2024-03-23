import { ConfigActions, IConfig, configActionTypes } from "../../types/config"

const InitialState: IConfig = {
    isAuth: false,
    menuShowing: false,
}

export const configReducer = (state = InitialState, action: ConfigActions): IConfig => {
    switch (action.type) {
        case configActionTypes.SET_AUTH:
            return { ...state, isAuth: !state.isAuth }
        case configActionTypes.SET_MENU_SHOWING:
            return { ...state, menuShowing: !state.menuShowing }
        default: 
            return state;
    }  
}