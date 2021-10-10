import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {counterReducer} from "./counterReducer";
import {customCounterReducer} from "./CustomCounterReducer";
import {LoadState, saveState} from "../utils/localStorage";

const rootReducer = combineReducers({
    counter:counterReducer,
    customCounter:customCounterReducer,
})

export const store = createStore(rootReducer,LoadState(),applyMiddleware(thunk));

store.subscribe(()=>{
    saveState({
        counter:store.getState().counter,
        customCounter:store.getState().customCounter,
    })
})
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
