import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div>
        <h1 className='text-red-500 text-bold '>404 - Page Not Found</h1>
        <Link to="/"><button className='mt-5  bg-[#132f48] text-white px-4 py-2 rounded-md hover:bg-[#f4a261] hover:text-[#132f48] transition'>return to home page</button></Link>
    </div>
  )
}

export default PageNotFound