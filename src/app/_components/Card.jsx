import React from 'react'

const Card = ({ children }) =>
{
    const cardStyle = {
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        border: "1px solid #ddd",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div className='p-[80px] md:p-[100px] lg:p-[200px]' style={cardStyle}>{children}</div>
    )
}

export default Card