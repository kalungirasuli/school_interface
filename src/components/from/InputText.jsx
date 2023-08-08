
import React from 'react'

export default function InputText({placeholder,name,defaultValue}) {
  return (
    <>
    <div className="inputdiv">
    <input className=" inputs" type="text" placeholder={placeholder} name={name} defaultValue={defaultValue}/>
    </div>
     
    </>
  )
}