/**
|--------------------------------------------------
| Declare action
|--------------------------------------------------
*/

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD'
}

/**
|--------------------------------------------------
| Declare interface
|--------------------------------------------------
*/

interface LoginAction {
  type: AuthActionTypes.LOGIN
  payload: { user: object | null }
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT
  payload: { user?: null; isAuthenticated?: boolean }
}

export type AuthAction = LoginAction | LogoutAction
