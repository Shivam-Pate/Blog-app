import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import {GoogleAuthProvider, signInWithPopup , getAuth} from 'firebase/auth'
import { app } from '../Firebase'
import { useDispatch } from 'react-redux'
import { siginSuccess } from '../Redux/Userslice'
import { useNavigate } from 'react-router-dom'

const Oauth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

 const handlergoogle = async () => {
         const auth = getAuth(app)
         const provider = new GoogleAuthProvider()
         provider.setCustomParameters({
             prompt: 'select_account'
         })
         try{
            const result = await signInWithPopup(auth, provider)
            
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    googlePhotoUrl: result.user.photoURL,
                }),
                })
                console.log(res)
            const data = await res.json()
            console.log(data)
            if (res.ok){
                dispatch(siginSuccess(data))
                navigate('/')
            }
         }
         catch(error){
            console.log(error)
         }
 }


  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handlergoogle}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
    </Button>
  )
}

export default Oauth