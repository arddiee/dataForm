import React from 'react'
import './App.css'
import FormPage from './FormPage'
import Table from './Table'
import { Route, Switch} from 'react-router-dom'

function App(props) {
  return(
    <div>
      <Switch>
    <Route path="/" component={FormPage}/>
    <Route path="/table" component={Table}/>
      </Switch>
    </div>
  
  )
}
export default App