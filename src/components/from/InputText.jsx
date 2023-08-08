
import React from 'react'

export default function InputText({placeholder,name,defaultValue,onchange,value}) {
  return (
    <>
    <div className="inputdiv">
    <input className=" inputs" type="text" placeholder={placeholder} value={value} name={name} defaultValue={defaultValue} onChange={onchange}/>
    </div>
     
    </>
  )
}