import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Input from './components/Input'
import CountyInformation from './components/CountyInformation'
import './App.css'

function App() {
  const [county, setCounty] = useState("")
  const [state, setState] = useState("")

  CountyInformation.defaultProps = {
    county: 'cuming'
  };

  //Get county and state from input, pass to CountyInformation
  return (
    <div className="App">
      <h1>US County Information</h1>

      <Input stateChanger={setState} countyChanger={setCounty}/>
      <CountyInformation county={county} state={state}/>

    </div>
  )
}

export default App
