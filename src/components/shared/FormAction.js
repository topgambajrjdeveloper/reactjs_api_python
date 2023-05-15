import React from 'react'

export default function FormAction({onSubmit, className, children}) {
  return (
    <form className={className} onSubmit={onSubmit}>
        {children}
    </form>
  )
}
