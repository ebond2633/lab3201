import React from 'react'
import './Employeepage.css'

const EmployeePage = () => {
  return (
    <div className='employee-page'>
        <div className='header'>
            <h1 className='title'>Employee</h1>
        </div>
        <div className='content'>
            <div className='profile-container'>
                <div className='profile-info'>
                   <img src="{img}" alt="Employee" className='profile-pic' />
                   <div className='employee-details'>
                    <h1 className='employee-name'>Julie Taylor</h1>
                    <p className='employee-position'>VP of Marketing</p>
                   </div>
                </div>
            </div>
            <div className='contact-info'>
                <h1 className='info-label'>Call Office</h1>
                <p className='info-value'>781-000-0002</p>
            </div>
            <div className='contact-info'>
                <h1 className='info-label'>Call Mobile</h1>
                <p className='info-value'>781-000-0002</p>
            </div>
            <div className='contact-info'>
                <h1 className='info-label'>SMS</h1>
                <p className='info-value'>617-000-0002</p>
            </div>
            <div className='contact-info'>
                <h1 className='info-label'>Email</h1>
                <p className='info-value'>jtaylor@fakeemail.com</p>
            </div>
        </div>
    </div>
  )
}

export default EmployeePage