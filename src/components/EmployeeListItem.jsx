import React from 'react'
import './EmployeeListItem.css'

const EmployeeListItem = ({employee}) => {
  return (
    <div className='employee-list-item'>
        <div className='employee-info'>
            <h5 className='employee-name'>{employee.eName}</h5>
            <p className='employee-occupation'>{employee.occupation}</p>
        </div>
    </div>
  )
}

export default EmployeeListItem