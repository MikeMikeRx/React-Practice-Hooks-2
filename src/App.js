import { useState, useEffect } from "react"


const App = () => {
  const [value, setValue] = useState(0)
  const [test, setTest] = useState(0)

  useEffect ( () =>{
    const button = document.querySelector(".btn")
    if (value >=1) {
      button.textContent = `Clicked ${value}x`
    } else { 
      button.textContent = "Click"
    }
    console.log("First-test")
  },[value]) // <---- #1
  
  
  useEffect( ()=> {
    document.title = `Test Title ${test}`
    console.log("Second-test")
  },[test]) // <----#2
    
  return (
    <div>
    <h1>Test</h1>
    <p>{value}</p>
    <button className="btn" onClick={ ()=> setValue (value + 1)}>Click</button>
    <button onClick={ ()=> setTest (test + 1)}>Title</button>
    </div>
  )
}

export default App
