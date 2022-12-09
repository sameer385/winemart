import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <section className='section errr-page'>
        <div className='error-container'>
            <h1>Oops! thats not found</h1>
            <Link to='/' className='btn btn-primary'>Back Home</Link>
        </div>
       
    </section>
  )
}

export default ErrorPage