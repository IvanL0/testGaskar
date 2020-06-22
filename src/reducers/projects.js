const initialState = {
  // isFetching: false,
  items: [],
}

function projects(state = initialState, action){
  switch(action.type){
    case 'ADD_PROJECT':
      return {
        items: [
          ...state.items,
        action.payload,
        ]
      }
    default:
      return state
  }
}

export default projects