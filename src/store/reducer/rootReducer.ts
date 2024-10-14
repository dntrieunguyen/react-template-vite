// src/reducer/rootReducer.ts
import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer
})

export type RootState = ReturnType<typeof rootReducer>
