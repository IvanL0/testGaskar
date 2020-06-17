function user(state = {}, action){
  switch(action.type){
    case 'USER':
      return Object.assign({}, state, {
        ...action.payload,
      })
    case 'CLEAR':
      return null
    default:
      return state
  }
}

export default user