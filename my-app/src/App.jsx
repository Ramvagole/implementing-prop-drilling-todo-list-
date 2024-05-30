import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Display } from './Layout'
function App() {
  const [count, setCount] = useState([])
  function fetchData(){
    fetch("http://localhost:3000/posts").then((res)=>res.json()).then((res)=>{setCount(res)})
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    
    <Display data={count} fetchData={fetchData}/>
    </>
  )
}

export default App
