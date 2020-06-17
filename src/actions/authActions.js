const USER = 'USER'
const RES_ERR = 'RES_ERR'

export const auth = (login, password) => async dispatch => {
  let loginCheck = 'admin'
  let passwordCheck = 'admin'
  
  if(login === loginCheck && password === passwordCheck){
    localStorage.setItem('test', 'token')
    dispatch({type: USER, payload: {login: login}})
  } else {
    dispatch({type: RES_ERR, payload: 'Invalid login or password'})
  }
}