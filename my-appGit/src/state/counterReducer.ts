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
                value: ++action.value
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

export const countValue = (value: number) => ({type: 'VALUE', value} as const)
export const incValue = (value: number) => ({type: 'INC_VALUE', value} as const)
export const resetValue = (value: number) => ({type: 'RESET_VALUE', value} as const)
