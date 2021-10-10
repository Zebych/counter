import {Dispatch} from "redux";
import {AppRootStateType} from "./store";

export type CountValueActionType = {
    type: 'VALUE',
    value: number,
}
export type IncValueActionType = {
    type: 'INC_VALUE',
    value: number,
}
export type ResetValueActionType = {
    type: 'RESET_VALUE',
    value: number,
}
type ActionType = CountValueActionType | IncValueActionType | ResetValueActionType
type InitStateType = typeof initState

const initState = {
    value: 0
}

export const counterReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'VALUE': {
            return {
                ...state,
                value: action.value
            }
        }
        case 'INC_VALUE': {
            return {
                ...state,
                value: ++state.value
            }
        }
        case 'RESET_VALUE': {
            return {
                ...state,
                value: action.value
            }
        }
        default:
            return state
    }
}
//Action
export const startValueC = (value: number) => ({type: 'VALUE', value} as const)
export const incValue = () => ({type: 'INC_VALUE'} as const)
export const resetValue = (value: number) => ({type: 'RESET_VALUE', value} as const)

//Thunk
export const incValuesTC = () => (dispatch: Dispatch) => {
    dispatch(incValue())
}
export const startValueFromLocalStorageTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    let value = getState().customCounter.valueStart
    dispatch(startValueC(value))
}
export const resetValueTC=()=>(dispatch:Dispatch,getState: () => AppRootStateType)=>{
    let value=getState().customCounter.valueStart
    dispatch(resetValue(value))
}
