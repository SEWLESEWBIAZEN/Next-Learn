import Card from '@/app/_components/Card'
import React from 'react'
import Link from '@/app/_components/LinkComponent'

const ArchivedNotifications = () =>
{
    return (
        <Card>
            <div>Archived Notifications</div>
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    )
}

export default ArchivedNotifications