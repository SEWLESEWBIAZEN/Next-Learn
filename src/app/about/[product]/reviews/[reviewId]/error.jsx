'use client'

import React from 'react'
const error = ({ error, reset }) =>
{

    return (
        <div>
            {error.message}<br />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={reset}>try again</button>
        </div>
    )
}

export default error