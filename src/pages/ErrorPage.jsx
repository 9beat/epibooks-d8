import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <>
        <br /><br /><br /><br /><br />
        <h1 className='d-flex justify-content-center'>Ooops... something went wrong!</h1>
        <br />
        <h3 className='d-flex justify-content-center'>This page doesn't exist</h3>
        <br />
        <h6 className='d-flex justify-content-center'>Please back  <Link to="/" className='text-decoration-none mx-1'> home </Link>. </h6>
        <br /><br /><br /><br />
        </>
    )
}
