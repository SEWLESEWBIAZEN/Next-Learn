import React from 'react'
import Link from 'next/link'

const LinkComponent = ({ children, href }) =>
{
    const linkStyle = {
        color: "blue",
        textDecoration: "underline"

    }
    return (
        <Link style={linkStyle} href={href}>{children}</Link>
    )
}

export default LinkComponent