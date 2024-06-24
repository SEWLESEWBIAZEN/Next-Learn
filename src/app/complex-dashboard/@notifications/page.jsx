import Card from '@/app/_components/Card'
import React from 'react'
import LinkComponent from '@/app/_components/LinkComponent'

const Notifications = () =>
{
    return (
        <Card>
            <div>Notification</div>
            <LinkComponent href="/complex-dashboard/archived">Archived</LinkComponent>
        </Card>
    )
}

export default Notifications