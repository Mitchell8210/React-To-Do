import React from 'react'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import Axios from 'axios'
import {listItems} from '../actions/action'
import { useDispatch } from 'react-redux'
import {deleteItem} from '../actions/action'
import {completeItem} from '../actions/action'
export default function(props){
    const items = useSelector(appState => appState.Reducer.items)
    
    const dispatch = useDispatch()

    function del(id) {
        dispatch(deleteItem(id))
    }

    useEffect(() => {
        dispatch(listItems())
    }, [])

    function complete(id){
        dispatch(completeItem(id))
    }
    return ( 
        <div>
            <h1>Items</h1>
            <p>Item Count: {items.length}</p>
            
            <ul className="listContainer">
            {items.map((item, i) => (
                <div key={'item'+ i}>
                    <li className="itemList">
                        <div className="complete" onClick={(e)=>complete(item.id)}>complete</div>
                    {item.name}
                    <button className="delete" type="reset" onClick={(e)=>del(item.id) }>X</button>
                    </li>
                    
                </div>
                
            ))}
            </ul>

        </div>
    )
}

