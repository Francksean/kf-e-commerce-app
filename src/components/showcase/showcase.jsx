import React from 'react'
import {Link} from 'react-router-dom'
import Articles from './articles/articles.jsx'
import './showcase.css'


import img1 from '../../assets/bandeau1.jpg'
import img2 from '../../assets/bandeau2.jpg'
import img3 from '../../assets/bandeau3.jpg'
import img4 from '../../assets/bandeau4.jpg'


function showcase(){
  return (
    <div className='showcase'>
       <div className='showcase_header'>
        <h1>THE BEST DEALS IN THIS SEASON</h1>
        <Link to={"/arrivals"} className="arrivals" >SHOP NEW ARRIVALS</Link>
      </div>
      <div className='showcase_body'>
        <Articles 
        src={img1} 
        name="Sample Headline"
        text="Sample text. Click to select the text box."
        price="$ 150"
        id="b1"/>
        <Articles 
        src={img2} 
        name="Sample Headline"
        text="Sample text. Click to select the text box."
        price="$ 170"
        id="b2"/>
        <Articles 
        src={img3} 
        name="Sample Headline"
        text="Sample text. Click to select the text box."
        price="$ 150"
        id="b3"/>
        <Articles 
        src={img4} 
        name="Sample Headline"
        text="Sample text. Click to select the text box."
        price="$ 200"
        id="b4"/>
      </div>
      <div className='showcase_footer'>
        <p>Par Franck Djissou Happi (ViteJS + ReactJs)</p>
      </div>
    </div>
  )
}

export default showcase