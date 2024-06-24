import "./style.css";

import React from 'react'

const Layout = ({ model, children }) =>
{
    return (
        <div className="mt-10">
            {model}
            {children}
        </div>
    )
}

export default Layout
