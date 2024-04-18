import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate()

  const [formdata , setformdata] = useState({})
  const [errormesg , seterrormesg] = useState(null)
  const [loading , setloading] = useState(false)

 const handler = (e) => {
   setformdata({...formdata, [e.target.id] : e.target.value.trim()})
   
 }
 

 const handlersubmit = async (event) => {
  event.preventDefault()
  if(!formdata.password || !formdata.email){
    return seterrormesg('please fill out all  fields')
  }
  try{
    setloading(true)
    seterrormesg(null)
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formdata),
    });
      const data = await res.json()
    
      if(data.success === false){
        return seterrormesg(data.message)
      }
     setloading(false)
     if(res.ok){
      navigate('/')
     }
  }
  catch(error){
      seterrormesg(error.message)
      setloading(false)
  }
  
}




  return (
    <div className='min-h-screen mt-20 '>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link  className='  font-bold  dark:text-white' to='/'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white'>Shivam</span>
            Blog</Link>
            <p className=' text- mt-5'>  This is a demo project. You can sign in with your email and password
            or with Google.</p>
        </div>

        <div className='flex-1'>
         <form className='flex flex-col gap-4' onSubmit={handlersubmit}>
            <div>
            <Label value='Email' />
            <TextInput type='email' placeholder='name@company.con' id='email' onChange={handler}/>
            </div>
            <div>
            <Label value='Password' />
            <TextInput type='password' placeholder='*******' id='password' onChange={handler}/>
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' >
           Sign In
          </Button>
          </form>
          <div className='flex gap-2 mt-5 text-sm'>
            <span>Don't Have an account ?</span>
            <Link to='/sign-up' className='text-blue-500'>Sign up</Link>
          </div>
        {
          errormesg && (
            <Alert className=' mt-5' color='failure'>{errormesg}</Alert>
          )
        }
        </div>

      </div>
    </div>
  )
}

export default Signin