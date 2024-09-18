import React from 'react'
import Homepage from './components/Homepage'
import EmployeePage from './components/EmployeePage'
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <Homepage/>
      <EmployeePage/>
    </div>
  )
}

export default App