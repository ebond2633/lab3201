import React from 'react'
import EmployeeListItem from './EmployeeListItem';
import './EmployeeList.css'

const EmployeeList = () => {
    const employeeList = [
        {eName: "James King", occupation: "President and CEO"},
        {eName: "Julie Taylor", occupation: "VP of Marketing"},
        {eName: "Eugene Lee", occupation: "CFO"},
        {eName: "John Williams", occupation: "VP of Engineering"},
        {eName: "Ray Moore", occupation: "VP of Sales"},
        {eName: "Paul Jones", occupation: "QA ManagerS"},
    ];
  return (
    <div className='employee-list'>
        {employeeList.map((employee, index) =>(
        <EmployeeListItem key={index} employee={employee}/>
        ))}
    </div>
  )
}

export default EmployeeList