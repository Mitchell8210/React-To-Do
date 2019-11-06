import axios from 'axios'
// import {useState} from 'react-router-dom'
// import { dispatch } from 'react-router-dom'

// export function addItem(item){
//     return (
//         {
//             type: "ADD_ITEM",
//             payload: item
//         }
//     )
// }

export function addItem(item){
    return dispatch =>{
        axios.post('/items', {name:item , active:false}).then(resp =>{
            dispatch({
                type: "ADD_ITEM",
                payload: resp.data
            })
        })
    }
}

export function deleteItem(id){
    return dispatch => {
        axios.delete(`/items/${id}`).then(resp =>{
            dispatch(listItems())
        })
    }
    
}
export function listItems(){
    return dispatch =>{
        axios.get('/items').then(resp =>{
            dispatch({
                type: "LIST_ITEMS",
                payload: resp.data
            })
        })
    }
}
export function completeItem(id,status){
    return dispatch =>{
        if(status === false){
        axios.patch(`/items/${id}`,{active:true}).then(resp =>{
            dispatch({
                type:'COMPLETED_ITEM',
                payload: resp.data,
                id:id
            })
        })
    } else {
        axios.patch(`/items/${id}`,{active:false}).then(resp =>{
            dispatch({
                type:'COMPLETED_ITEM',
                payload: resp.data,
                id:id
            })
        })
    }
    }
}

export function addFilter(filter){
    return dispatch =>{
        dispatch({
            type: 'FILTER',
            payload:filter
            
        })
    }
}

export function clearCompleted(items){
    return dispatch =>{
        axios.all([
            items.map(e=>{
                axios.delete(`/items/${e.id}`).then(resp=>{
                    dispatch(listItems())
                })
            })
            
        ])
            // axios.delete(`items?active=true`).then(resp=>{
            //     dispatch(listItems())
            // }) 
    }
}

// export function showAll(){
//     return dispatch =>{
//         dispatch(listItems())
//     }
// }