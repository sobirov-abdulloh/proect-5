import React from 'react'
import "./Registor.css"
function Registor() {
  return (
    <div className='reg'>
      <input type="text" placeholder='name'/>
      <input type="email" placeholder='email'/>
      <input type="password" placeholder='parol' />
      <button>register</button>
    </div>
  )
}

export default Registor