import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { booksFetchedReducer } from "./reducers/booksFetchedReducer";
import { configReducer } from "./reducers/configReducer";

export const rootReducer = combineReducers({
    booksFetched: booksFetchedReducer,
    config: configReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch