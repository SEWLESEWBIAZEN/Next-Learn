
'use client'
import { useParams } from 'next/navigation'
import React from 'react'


const page = () =>
{
    let params=useParams()
  return (
      <div>The details product {params.product} in review {params.reviewId}</div>
  )
}

export default page