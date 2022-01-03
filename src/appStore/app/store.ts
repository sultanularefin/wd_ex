import {
    configureStore,
    ThunkAction,
    Action,
    combineReducers,
    AnyAction,
    Reducer,
    // getDefaultMiddleware,

} from '@reduxjs/toolkit';

// import authSlice from "../Reducers/authSlice";
import UserAnalyzerSlice from "../Reducers/UserAnalyzerSlice";



const rootReducer: Reducer = (state: RootState, action: AnyAction) => {

    // console.log("action.type: ", action.type);


    if (action.type === "auth/clearState") {
        console.log("action.type:=-========================= ", "auth/logout");
        state = {} as RootState;
    }
    return combinedReducer(state, action);
};



const combinedReducer = combineReducers({


    // authReducer: authSlice,
    UserAnalyzer_Reducer: UserAnalyzerSlice,


});
export const store = configureStore({


    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({

            serializableCheck: false,
        }),


    preloadedState: {},


});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>>;


