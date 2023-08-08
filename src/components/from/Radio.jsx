
import React from 'react'
import {useId} from 'react'
export default function Radio({lable,value}) {
    const radioId=useId()
  return (
    <>
    <input className='radio' type="radio" id={radioId} name="gender" value={value} />
      <label htmlFor={radioId} className='lable'>{lable}</label>
    </>
  )
}
