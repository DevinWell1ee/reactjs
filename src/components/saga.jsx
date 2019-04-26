import React from 'react'

const Saga = function ({ value, change }) {
  return (
    <div>
      <p>Value: { value }</p>
      <button onClick={ change }>change</button>
    </div>
  )
}

export default Saga