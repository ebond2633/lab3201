import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
// import EmployeePage from './EmployeePage'
import './Homepage.css'


const Homepage = () => {
  return (
    <>
    <div className='homepage-container'>
         <Header/>
         <SearchBar/>
         <EmployeeList/>
         </div>
       </>
  )
}

export default Homepage