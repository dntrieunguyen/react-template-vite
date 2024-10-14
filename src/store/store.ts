import { applyMiddleware, compose, legacy_createStore } from 'redux'
import { rootReducer } from './reducer/rootReducer'
import { thunk } from 'redux-thunk'

// Khai báo interface mở rộng cho window
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

// Sử dụng Redux DevTools nếu có, nếu không thì dùng compose mặc định
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Tạo store với middleware Thunk
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
