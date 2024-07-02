import React, { Suspense } from 'react'
import {  DotLoader } from 'react-spinners'


export const Y=()=>{
    setTimeout(()=>{},30000)
    return <div> A</div>
}

const Page = () => {
    return (
        <div>
            <Suspense fallback={<DotLoader/>}>
                <Y/>
            </Suspense>

        </div>
    )
}

export default Page