
import React from 'react'
import {useId} from 'react'
export default function Radio({lable,value,checked,onchange}) {
    const radioId=useId()
  return (
    <>
    <input className='radio' type="radio" id={radioId} name="gender" value={value} checked={checked} onChangeCapture={onchange}/>
      <label htmlFor={radioId} className='lable'>{lable}</label>
    </>
  )
}
