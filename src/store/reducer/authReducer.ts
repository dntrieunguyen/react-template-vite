import { AuthAction, AuthActionTypes } from '../actions/authAction'

export interface AuthState {
  isAuthenticated: boolean
  user?: object | null
  accessToken?: string | null
  refreshToken?: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, isAuthenticated: true, user: action.payload.user || null }

    case AuthActionTypes.LOGOUT:
      return { ...state, isAuthenticated: false, user: null }

    default:
      return {
        isAuthenticated: false,
        user: null
      }
  }
}
