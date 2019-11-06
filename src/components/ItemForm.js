import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import {addItem} from '../actions/action'
import {addFilter} from '../actions/action'
import {useSelector} from 'react-redux'
import {clearCompleted} from '../actions/action'
export default function (props){

const [item, setItem]= useState('')
const dispatch = useDispatch()
const items = useSelector(appState=> appState.Reducer.items.filter(item=>{
    return  item.active
 }))
// console.log('filtered items:',items)

    function handleSubmit(e){
        e.preventDefault()
        if(item === ''){
        alert('Please insert text into New Item box')
        } else{
            dispatch(addItem(item))
            setItem('')
        }
       
    }

    function showCompleted(){
        dispatch(addFilter('completed'))
    }

    function showActive(){
        dispatch(addFilter('active'))
    }

    function clear(items){
        dispatch(clearCompleted(items))
    }

    function showAll(){
        dispatch(addFilter('all'))
    }
    return (
        <div className="formContainer">
        <form className="formContainer" onSubmit={handleSubmit}>

            <input placeholder="New Item" type="text" id="item" name="item" value={item} onChange={e=> setItem(e.target.value)}/>
            </form>
           <div className="buttons">
            <button  onClick={showCompleted}>Completed</button>
            <button  onClick={showActive}>Active</button>
            <button onClick={showAll}>Show All</button>
            <button onClick={(e)=> clear(items)}>Clear Completed</button>
            </div>
        </div>
    )
} 