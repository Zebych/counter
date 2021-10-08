type InitStateType = typeof initState
type ActionType = StartValueActionType

export type StartValueActionType = {
    type: 'START_VALUE',
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
    valueMax: 0,
    valueStart:0,
}

export const customCounterReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'START_VALUE': {
            return {
                ...state,
                valueStart: action.value
                // value: action.value
            }
        }
        // case 'INC_VALUE': {
        //     return {
        //         ...state,
        //         // value: ++action.value
        //     }
        // }
        // case 'RESET_VALUE': {
        //     return {
        //         ...state,
        //         // value: action.value
        //     }
        // }
        default:
            return state
    }
}

export const setStartValueC = (parseValue: number) => ({type: 'START_VALUE', parseValue} as const)
// export const incValue = (value: number) => ({type: 'INC_VALUE', value} as const)
// export const resetValue = (value: number) => ({type: 'RESET_VALUE', value} as const)
