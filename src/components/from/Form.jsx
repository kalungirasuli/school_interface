
import React from 'react'

export default function Form({heading,action,method,functions}) {
  return (
    <> 
         <h3>{heading}</h3>
        <form action={action} method={method} onSubmit={functions}>

        </form>
    </>
  )
}
