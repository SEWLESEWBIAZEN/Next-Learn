'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import LinkComponent from '../_components/LinkComponent'

const Page = () =>
{
    let router = useRouter()
    return (
        <div className='justify-center mt-20 md:mt-10'>
            <button className=' 
            bg-blue-500 hover:bg-blue-700 mt-10 md:mt-0
            text-white font-bold py-2 px-4 rounded'
                onClick={() => router.push("/home")}
            >Go to Home</button>

            <h2>
                <LinkComponent href="about/1/reviews/2">product 1</LinkComponent>
            </h2>
            <h2>
                <LinkComponent href="about/2/reviews/200">product 2</LinkComponent>
            </h2>
            <h2>
                <LinkComponent href="about/3/reviews/30">product 3</LinkComponent>
            </h2>
        </div>
    )
}

export default Page

