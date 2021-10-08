import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counterReducer";
import {customCounterReducer} from "./CustomCounterReducer";

const rootReducer = combineReducers({
    count:counterReducer,
    customCounter:customCounterReducer,
})
export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
