import { UIAction, UIActionTypes } from '../actions/uiAction'

export interface UIState {
  isCollapse: boolean
  isLoading: boolean
}

const initialState: UIState = {
  isCollapse: false,
  isLoading: false
}

export const uiReducer = (state = initialState, action: UIAction): UIState => {
  switch (action.type) {
    case UIActionTypes.TOGGLE_SIDEBAR:
      return { ...state, isCollapse: !state.isCollapse }

    case UIActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload.isLoading }
    default:
      return state
  }
}
