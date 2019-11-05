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
        axios.post('/items', {name:item}).then(resp =>{
            dispatch({
                type: "ADD_ITEM",
                payload: resp.data,
                completed: false
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
export function completeItem(id){
    return dispatch =>{
        axios.patch(`/items/${id}`,{completed:true}).then(resp =>{
            dispatch({
                type:'COMPLETED_ITEM',
                payload: resp.data
            })
        })
    }
}
export function showComplete(){
    return dispatch => {
        axios.get(`/items?completed=true`).then(resp =>{
            dispatch({
                type:'DISPLAY_COMPLETED',
                payload: resp.data
            })
        })
    }
}

export function showActive(){
    return dispatch => {
        axios.get(`/items`).then(resp => {
            dispatch({
                type: 'DISPLAY_AVTIVE',
                payload: resp.data
            })
        })
    }
}