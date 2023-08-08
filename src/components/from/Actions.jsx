
import React from 'react'
export default function Actions({Green,Red,Caution}) {
  return (
    <div className='Actions'>
      <button className='green' type="submit">{Green}</button>
      <button className='red' onClick={Caution}>{Red}</button>
    </div>
  )
}
