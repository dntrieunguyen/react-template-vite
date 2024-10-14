// // import jwt_decode from 'jwt-decode'

// // Auth
// const acTokenKey = 'token'
// const rfTokenKey = 'rf_token'
// const auth = 'user'

// export const getAuth = () => {
//   return JSON.parse(localStorage.getItem(auth)) || null
// }
// export const setAuth = (auth_user) => {
//   localStorage.setItem(auth, auth_user)
// }
// export const removeAuth = () => {
//   localStorage.removeItem(auth)
// }
// export const getAcToken = () => {
//   return localStorage.getItem(acTokenKey) || ''
// }
// export const setAcToken = (token) => {
//   localStorage.setItem(acTokenKey, token)
// }
// export const removeAcToken = () => {
//   localStorage.removeItem(acTokenKey)
// }

// export const getRfToken = () => {
//   return localStorage.getItem(rfTokenKey)
// }
// export const setRfToken = (token) => {
//   localStorage.setItem(rfTokenKey, token)
// }
// export const removeRfToken = () => {
//   localStorage.removeItem(rfTokenKey)
// }

// // export const decodeToken = (token) => {
// //   const acToken = token || getAcToken()
// //   return jwt_decode(acToken)
// // }

// export const getItem = (name) => {
//   return localStorage.getItem(name)
// }

// export const setItem = (name, value) => {
//   return localStorage.setItem(name, value)
// }

// export const removeItem = (name) => {
//   localStorage.removeItem(name)
// }
