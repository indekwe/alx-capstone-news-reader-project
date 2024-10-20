import './App.css'
import React from 'react'
import { BrowserRouter as Router,Routes, Route, useParams } from "react-router-dom";
import DynamicFetchingnews from './components/DynamicFetchingnews'
import Home from './components/Home';
function App() {
  //allow parameter to be extracted from url
const UseUrlSectionParameter=()=>{
  const {category}=useParams()
  return <DynamicFetchingnews category={category}></DynamicFetchingnews>
}
  return (
    //dynamic routes creation
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='category/:category' element={<UseUrlSectionParameter></UseUrlSectionParameter>}></Route>
      </Routes>
    </Router>
  )
}

export default App
