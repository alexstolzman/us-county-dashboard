import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Input from './components/Input'
import './App.css'

function App() {
  const [county, setCounty] = useState("")
  const [state, setState] = useState("")

  //Get county and state from input, pass to CountyInformation
  return (
    <div className="App">
      <h1>US County Information</h1>

      <Input stateChanger={setState} countyChanger={setCounty}/>
      <h1>{county.value}</h1>
      <h1>{state.value}</h1>

    </div>
  )
}

export default App
