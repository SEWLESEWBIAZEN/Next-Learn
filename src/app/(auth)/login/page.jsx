import React from 'react'
import LinkComponent from '@/app/_components/LinkComponent'
const Login = () =>
{

    return (

        <div className='my-[7rem]
            rounded-[1rem] border border-1
             border-e-black border-b-black justify-center flex-wrap'>
            <div className='p-10'>

                <tr className='flex flex-col'>
                    <td><label for="email">Email / Phone number: &nbsp;</label></td>
                    <td><input type="text" name="email" id="emai" placeholder='Email or phone'
                        className='rounded-md md:rounded-lg border border-black  
                     ps-3 text-start font-[15px] w-[10rem] h-[2rem] sm:w-[22rem] md:h-[3rem] my-3 ' /></td></tr>

                <tr className='flex flex-col'>
                    <td>
                        <label for="password">Password:  &nbsp;</label></td>
                    <td>
                        <input type="password" name="password" id="password" placeholder='Password'
                            className='rounded-md md:rounded-lg  border border-black
                     ps-3 text-start font-[15px] w-[10rem] h-[2rem] sm:w-[22rem] md:h-[3rem] my-3 '/>
                    </td>
                </tr>
                <tr className='flex md:flex-row flex-col justify-between'>
                    <td><LinkComponent href="#">Forgot Password?</LinkComponent></td>
                    <td>
                        <button className='mx-3 bg-blue-500 hover:bg-blue-700
                                         text-white font-bold py-2 px-4 rounded'>
                            Login
                        </button></td>
                </tr>
                <tr className='flex flex-row'>
                    <input type='checkbox' name="remember-me" id="remember-me" />&nbsp;<p>Remember me</p>
                </tr>
            </div>

        </div >


    )
}

export default Login