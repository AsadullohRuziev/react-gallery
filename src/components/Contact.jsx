import React from 'react';
import { useForm } from '../custumHandler/useForm';

const initialState = {
    name : '',
    email : '',
    text : ''
}




const Contact = () => {
    const [value, handleChange] = useForm(initialState);
    const SubmitHandler = e => {
        e.preventDefault();
        console.log(value)
    }
  return (
    <form onSubmit={SubmitHandler}>
        <input type="text"  placeholder='Name' onChange={handleChange} value={value.name} name='name'/>
        <input type="email" placeholder='Email' onChange={handleChange} value={value.email} name='email'/>
        <input type="text" placeholder='Text ... ' onChange={handleChange} value={value.text} name='text'/>
        <button>GOGO</button>
    </form>
  )
}

export default Contact