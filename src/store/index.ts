import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { booksFetchedReducer } from "./reducers/booksFetchedReducer";

export const rootReducer = combineReducers({
    booksFetched: booksFetchedReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch