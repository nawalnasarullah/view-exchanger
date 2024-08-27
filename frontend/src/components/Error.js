import React from 'react'

function Error({errorMessage}) {
  return (
    <div className='my-5 py-5 font-weight-bold font-style-1 d-flex justify-content-center align-item-center'>
      
        <h3>{errorMessage}</h3>

    </div>
  )
}

export default Error