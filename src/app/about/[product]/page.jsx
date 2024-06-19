"use client"
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = ({ product }) =>
{
    const router = useRouter()
    const param = useParams()
    return (
        <div>
            hgugu  {param.product}
            <button onClick={() => router.push("/test")}>Test</button>
        </div>
    )
}

export default Page

