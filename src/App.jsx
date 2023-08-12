import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';

import Showcase from './components/showcase/showcase'
import Articles from './components/showcase/articles/articles_details/articles_details.jsx'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={ <Showcase />}/>
        <Route path="/articles/:id" element= {<Articles />}/>
      </Routes>
    </div>
  )
}

export default App
