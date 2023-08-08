
import React from 'react'
import {useId} from 'react'
export default function Radio({lable,radiovalue}) {
    const radioId=useId()
  return (
    <>
      <input type="radio" id={radioId} name="gender" value={radiovalue} />
      <label htmlFor={radioId}>{lable}</label>
    </>
  )
}
