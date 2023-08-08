
import React from 'react'

export default function InputText({placeholder,name,Inputvalue}) {
  return (
    <>
      <input type="text" placeholder={placeholder} name={name} value={Inputvalue}/>
    </>
  )
}