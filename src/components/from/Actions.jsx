
import React from 'react'
import {useId} from 'react'
export default function Actions({Green,Red,onclick}) {
  const actionId=useId()
  return (
    <div className='Actions'>
      <button className='actionbutton' id='green' type="submit">{Green}</button>
      <button className='actionbutton' id='red'onClick={onclick}>{Red}</button>
    </div>
  )
}
