import {Dispatch} from "redux";
import {incValue, startValueC} from "./counterReducer";

type InitStateType = typeof initState
type ActionType = StartValueActionType | MaxValueActionType

export type StartValueActionType = {
    type: 'START_VALUE',
    valueS: number,
}
export type MaxValueActionType = {
    type: 'MAX_VALUE',
    maxValue: number,
}

const initState = {
    valueMax: 24,
    valueStart:0,
}

export const customCounterReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'START_VALUE': {
            return {
                ...state,
                valueStart: action.valueS
                // value: action.value
            }
        }
        case 'MAX_VALUE': {
            return {
                ...state,
                valueMax: action.maxValue
            }
        }
        default:
            return state
    }
}

export const setStartValueC = (valueS: number) => ({type: 'START_VALUE', valueS} as const)
export const maxValueC = (maxValue: number) => ({type: 'MAX_VALUE', maxValue} as const)
//thunk
export const setStartValueTC=(valueS:number)=>(dispatch:Dispatch)=>{
    // localStorage.setItem('app-state',JSON.stringify(valueS))
    // if (valueS) {
    //     dispatch(startValueC(valueS))
    // }
    dispatch(setStartValueC(valueS))
}