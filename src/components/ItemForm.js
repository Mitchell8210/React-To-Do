import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import {addItem} from '../actions/action'
import {showCompleted} from '../actions/action'
import {showActive} from '../actions/action'

export default function (props){

const [item, setItem]= useState('')
const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()

        dispatch(addItem(item))
        setItem('')
    }
    function showCompleted(e){
        

        dispatch(showCompleted(e))
    }
    function showActive(e){
        

        dispatch(showActive(e))
    }
    return (
        <form className="formContainer">
            <input type="text" id="item" name="item" value={item} onChange={e=> setItem(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button type="submit" onClick={showCompleted}>Completed</button>
            <button type="submit" onClick={showActive}>Active</button>
        </form>
    )
} 