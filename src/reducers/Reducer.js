const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: [...state.items, action.payload] }
    case 'LIST_ITEMS': 
      return {...state, items: action.payload}
    case 'COMPLETED_ITEM':
      return {...state}
    case 'DISPLAY_COMPLETED':
      return {...state}
    case 'DISPLAY_ALL':
      return {...state, items: action.payload}
    case 'DISPLAY_ACTIVE':
      return {...state, items: action.payload}
    // actions
    default:
      return state
  }
}
