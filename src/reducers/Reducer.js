
const initialState = {
  items: [],
  filter: 'all'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: [...state.items, action.payload] }
    case 'LIST_ITEMS': 
      return {...state, items: action.payload}
    case 'COMPLETED_ITEM':
        return {...state, items: state.items.map(item =>{
          if(item.id === action.id){
            item.active = !item.active
          }  
          return item
        })}
    case 'DISPLAY_COMPLETED':
       return {...state, items:action.payload}
    case 'DISPLAY_ALL':
      return {...state, items: action.payload}
    case 'FILTER':
      return {...state, filter: action.payload}
    case 'CLEAR':
      return {...state, items: action.payload}
    // actions
    default:
      return state 
  }
}
