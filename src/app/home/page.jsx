import React from 'react'
import LinkComponent from '../_components/LinkComponent'
import Card from '../_components/Card'

const Home = () =>
{
    return (
        <div className='flex flex-row mt-20'>
            <div className='mt-10 md:mt-0'>
                <Card>This is the home page
                    <LinkComponent href="/about">About</LinkComponent>
                </Card>
            </div>


        </div>
    )
}

export default Home