/**
|--------------------------------------------------
| Declare action
|--------------------------------------------------
*/

export enum UIActionTypes {
  TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR',
  SET_LOADING = 'SET_LOADING'
}
/**
|--------------------------------------------------
| Declare interface
|--------------------------------------------------
*/
interface ToggleSideBarAction {
  type: UIActionTypes.TOGGLE_SIDEBAR
  payload: null
}

interface IsLoading {
  type: UIActionTypes.SET_LOADING
  payload: { isLoading: boolean }
}

export type UIAction = ToggleSideBarAction | IsLoading
