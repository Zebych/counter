import {Dispatch} from "redux";

type InitStateType = typeof initState
type ActionType = CountValueActionType | IncValueActionType | ResetValueActionType

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
//ACTIONS
export const startValueC = (value: number) => ({type: 'VALUE', value} as const)
export const incValue = () => ({type: 'INC_VALUE'} as const)
export const resetValue = (value: number) => ({type: 'RESET_VALUE', value} as const)

//THUNK
export const incValuesTC = () => (dispatch: Dispatch) => {
    dispatch(incValue())
}
export const startValueFromLocalStorageTC = (valueStart:number) => (dispatch: Dispatch) => {
    // let value = localStorage.getItem('app-state')
    // if (value) {
    //     dispatch(startValueC(JSON.parse(value)))
    // }
    // dispatch(incValue())
    dispatch(startValueC(valueStart))

}

