import {Dispatch} from "redux";

type ActionType = StartValueActionType | MaxValueActionType
export type StartValueActionType = {
    type: 'START_VALUE',
    valueS: number,
}
export type MaxValueActionType = {
    type: 'MAX_VALUE',
    maxValue: number,
}
type InitStateType = typeof initState

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
//Action
export const setStartValueC = (valueS: number) => ({type: 'START_VALUE', valueS} as const)
export const maxValueC = (maxValue: number) => ({type: 'MAX_VALUE', maxValue} as const)

//Thunk
export const setStartValueTC=(valueS:number)=>(dispatch:Dispatch)=>{
    dispatch(setStartValueC(valueS))
}
export const maxValueTC=(valueS:number)=>(dispatch:Dispatch)=>{
    dispatch(maxValueC(valueS))
}