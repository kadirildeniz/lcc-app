import React from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

function LoginPage() {
  const signInUser = () => {
    signInWithPopup(auth, provider).catch((err) => console.log(err.message))
  }
  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center flex-col">
      <h1 className="font-extralight text-[70px] text-white bg-gray-900 pl-5 pr-5 tracking-widest">loserclub</h1>
      <button onClick={signInUser} className="transition-all duration-500  text-white font-bold text-[13px] bg-gray-900 p-4 mt-5 hover:bg-gray-600 ">Sign in with Google</button>
    </div>
  )
}

export default LoginPage
