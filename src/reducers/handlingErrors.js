const initialState = {
  status: null,
  message: null,
}

function handlingErrors(state = initialState, action){
  switch (action.type){
    case 'RES_ERR':
      return Object.assign({}, state, {
        status: 422,
        message: action.payload,
      })
    default:
      return state
  }
}

export default handlingErrors