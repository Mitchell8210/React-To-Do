import React from 'react'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {listItems} from '../actions/action'
import { useDispatch } from 'react-redux'
import {deleteItem} from '../actions/action'
import {completeItem} from '../actions/action'




export default function(props){
    
    const filter= useSelector(appState => appState.Reducer.filter)
    const count = useSelector(appState=> appState.Reducer.items.filter(item=>{
       return  !item.active
    })).length
    const items = useSelector(appState => {
        if(filter === 'all'){
            return appState.Reducer.items
        }  else if(filter === 'completed'){
            return appState.Reducer.items.filter(e=>{
                return e.active === true
            })
        } else if(filter === 'active'){
            return appState.Reducer.items.filter(e=>{
                return e.active === false
            })
        } 
        else{
            return appState.Reducer.items
        }
        
    })
    
    const dispatch = useDispatch()

    function del(id) {
        dispatch(deleteItem(id))
    }

    useEffect(() => {
        dispatch(listItems())
    }, [])

    function complete(id, status){
        dispatch(completeItem(id, status))
    }
    return ( 
        <div>
            <ul className="listContainer">
            <p className="count">Active Items: {count}</p>
            {items.map((item, i) => (
                <div key={'item'+ i}>
                    <li className="itemList">
                        <div className={item.active === false ? "complete" : "checked"} onClick={(e)=>complete(item.id,item.active)}>&#10004;</div>
                        <div className={item.active === false ? "noLine" : "line"}>{item.name}</div>
                    <button className="delete" onClick={(e)=>del(item.id) }>X</button>
                    </li>
                </div>
            ))}
            </ul>
        </div>
    )
}

