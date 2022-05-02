import {useState} from 'react'

export const useForm = (initialState) => {
  return [
      value,
      (e)=> {
          setValue({
              ...value,
              [e.target.name] : [e.target.value],
          });
      }
  ]
}
