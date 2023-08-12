import React from 'react'
import './articles.css'
import { Link } from 'react-router-dom'

function articles({src, name, text, price, id}) {
  return (
    <div className='article_unit'>
      <div className='article_unit_image'>
        <img src={src} alt="boff" />
      </div>
      <div className='article_unit_infos'>
        <h2>{name}</h2>
        <p>{text}</p>
        <h4>{price}</h4>
        <Link to={`/articles/${id}`}><button type="button">show details</button></Link>
      </div>
    </div>
  )
}

export default articles