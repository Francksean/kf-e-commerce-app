import articlesArray from '../articles.js'
import './articles_details.css'

import React, {useReducer} from 'react'
import { Outlet, useParams } from 'react-router-dom';



function reducer(state, action){
  switch(action.type){
    case 'plus':
      return state + 1;
    case 'moins':
      if(state<=1){
        return state
      }
      return state - 1;
  }
}

function articles_details() {

  const params =useParams()
  const id= params.id
  const unit = articlesArray.find(item => item.id === id)
  const [count, dispatch] = useReducer(reducer, 1)
  return (
    <div className='details_page'>
      <div className='details_page_left'>
        <img src={unit.icon} alt={unit.title} />
      </div>
      <div className='details_page_right'>
        <h2>{unit.title}</h2>
        <p className='details_page_right_description'>{unit.description}</p>
        <h4>{"$ "+(unit.price*count)}</h4>
        <div className='counter'>
          <p>je souhaite en prendre</p>
          <button type="button" onClick={()=> dispatch({type: 'moins'})}>-</button>
          <p>{count}</p>
          <button type="button" onClick={()=> dispatch({type: 'plus'})}>+</button>
        </div>
      </div>
      <Outlet/> 
    </div>
    
  )
}

export default articles_details