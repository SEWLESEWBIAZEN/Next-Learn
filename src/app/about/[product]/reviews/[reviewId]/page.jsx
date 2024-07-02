
'use client'
import { useParams } from 'next/navigation'
import React from 'react'
const getRandomInt = (count) =>
{
  return Math.floor(Math.random() * count);
}

const Page = () =>
{
  const random = getRandomInt(2);

  if (random === 1)
  {
    throw new Error("Error loading review");
  }
    let params=useParams()
  return (
      <div>The details product {params.product} in review {params.reviewId}</div>
  )
}
export default Page