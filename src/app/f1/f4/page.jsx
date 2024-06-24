import LinkComponent from '@/app/_components/LinkComponent'
import React from 'react'

const F4 = () =>
{
    return (
        <div>
            <h1>F4 page</h1>
            <LinkComponent href="/f1/f3">F3</LinkComponent><br />
            <LinkComponent href="/about">About</LinkComponent>
        </div>
    )
}

export default F4