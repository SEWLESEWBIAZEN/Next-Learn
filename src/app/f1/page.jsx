import React from 'react'
import LinkComponent from '../_components/LinkComponent'

const F1 = () =>
{
    return (
        <div>
            <h1>F1</h1>
            <LinkComponent href="/f1/f2">F2</LinkComponent><br />
            <LinkComponent href="/f1/f4">F4</LinkComponent>
        </div>
    )
}

export default F1