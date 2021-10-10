//https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e

//загрузка состояния из localStorage
import {AppRootStateType} from "../state/store";

export const LoadState = () => {
  try{
      const serializedState=localStorage.getItem('app-state')
      if(serializedState===null){
          return undefined
      }
      return JSON.parse(serializedState)
  }catch (err){
      return undefined
  }
}

// сохранение состояния в localStorage
export const saveState = (state:AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('app-state', serializedState);
    } catch {
        // ignore write errors
    }
}


