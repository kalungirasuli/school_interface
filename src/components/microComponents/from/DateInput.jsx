
import React from 'react'

export default function DateInput({Date}) {
  return (
    <>
    <div className="inputdiv">
    <input className="inputs" id="dateinput" type="date" value={Date}/>
    </div>
   
    </>
  )
}
