import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='min-h-screen mt-20 '>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link  className='  font-bold  dark:text-white' to='/'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white'>Shivam</span>
            Blog</Link>
            <p className=' text- mt-5'>  This is a demo project. You can sign up with your email and password
            or with Google.</p>
        </div>

        <div className='flex-1'>
         <form className='flex flex-col gap-4'>
          <div>
            <Label value='Username' />
            <TextInput type='text' placeholder='Username' id='username'/>
            </div>
            <div>
            <Label value='Email' />
            <TextInput type='email' placeholder='name@company.con' id='email'/>
            </div>
            <div>
            <Label value='Password' />
            <TextInput type='password' placeholder='Password' id='password'/>
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'>
            Sign Up
          </Button>
          <div className='flex gap-2 mt-5 text-sm'>
            <span>Have an account ?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign in</Link>
          </div>
         </form>
        </div>

      </div>
    </div>
  )
}

export default Signup