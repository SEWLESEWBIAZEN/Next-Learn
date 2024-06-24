'use client'

import { useRouter } from 'next/navigation';
import React from 'react'


const OrderProduct = () =>
{
    const router = useRouter();

    const handleOrder = () =>
    {
        console.log("Order Submitted Successfully!");
        router.push("/dashboard");
    }
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleOrder}>order product</button>
        </div>
    )
}

export default OrderProduct