import React from 'react'

const Layout = ({ children,
  users,
  notifications,
  revenue,
  login
}) =>
{
  const isLoggedIn = true
  return isLoggedIn ? (
    <div>
      <div className='flex justify-center font-bold mt-20 md:mt-10'>{children}</div>
      <div className='flex justify-center flex-col sm:flex-row'>
        <div className='flex flex-row sm:flex-col'>
          <div>{users}</div>
          <div>{revenue}</div>

        </div>
        <div className='flex justify-center'>{notifications}</div>
      </div>

    </div>
  ) : (<div>{login}</div>);
}

export default Layout