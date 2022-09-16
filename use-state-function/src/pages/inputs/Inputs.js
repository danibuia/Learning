import React from 'react'
import './Inputs.css'
// import img from './ceva.jpg'

const Inputs = () => {
  return (
    <> 
    <div className='inputs-container'>
    <label htmlFor='email'>Email</label>
        <input type="email"/>
        <label htmlFor='text'>Text</label>
        <input type="text"/> 
        <label htmlFor='password'>Password</label>
        <input type="password"/>
        <label htmlFor='PhoneNumber'>PhoneNumber</label>
        <input type="tel"/>
        <label htmlFor='button'>Button</label>
        <input type="button"/>
        <label htmlFor='submit'>Submit</label>
        <input type="submit"/>
        <label htmlFor='CheHidden'>Checkbox</label>
        <input type="checkbox"/>
        <label htmlFor='Datetime-local'>Datetime-local</label>
        <input type="datetime-local"/>
        <label htmlFor='Month'>Month</label>
        <input type="month"/>
        <label htmlFor='Time'>Time</label>
        <input type="time"/>
        <label htmlFor='Week'>Week</label>
        <input type="week"/>
        <label htmlFor='file'>File</label>
        <input type="file"/>
        <label htmlFor='Hidden'>Hidden</label>
        <input type="hidden"/>
        <label htmlFor='Image'>Image</label>
        <input type="image"  src="" alt='img'/>
        <label htmlFor='Number'>Number</label>
        <input type="number"/>
        <label htmlFor='Radio'>Radio</label>
        <input type="radio"/>
        <label htmlFor='Range'>Range</label>
        <input type="range"/>
        <label htmlFor='Reset'>Reset</label>
        <input type="reset"/>
        <label htmlFor='Search'>Search</label>
        <input type="search"/>
        <label htmlFor='Url'>Url</label>
        <input type="url"/>
        <label htmlFor='Color'>Color</label>
        <input type="color"/>
        <label htmlFor='Hidden'>Hidden</label>
        <input type="hidden"/>
        
       
   
    </div>
  </>
  )
}

export default Inputs;