import React, { useState } from "react";
import { useForm } from "../custumHandler/useForm";

const initialState = {
    ism : "",
    parol : ""
}

const Form = () => {

    const [value, handleChange] = useForm(initialState);

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(value)
    };
    return(
        <form onSubmit={SubmitHandler}>
            <input 
            type={"text"} 
            placeholder="ism"
            onChange={handleChange}
            value={value.ism}
            name="ism"
            />
            <input 
            type={"password"} 
            placeholder="Password"
            onChange={handleChange}
            value={value.parol}
            name="parol"
            />
            <button>Yuborish</button>
        </form>
    )
}
export default Form;

