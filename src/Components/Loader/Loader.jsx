import React from 'react'
import { Triangle } from 'react-loader-spinner'
import './Loader.css'
 const Loader = () => {
  return (
    <div className='Loader'>
        <Triangle
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default Loader;
