import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

function Header() {
  const [user] = useAuthState(auth)
  return (
    <div>
      <div className="bg-gray-700 p-5 flex items-center justify-between">
        <p className="text-white text-[15px]">Welcome  <span className="font-bold">{user?.displayName}</span></p>
        <div onClick={() => auth.signOut()}>
            <img className="w-10 h-10 rounded-full cursor-pointer transition-all duration-500 hover:brightness-50" src={user?.photoURL}/>
        </div>
      </div>
    </div>
  )
}

export default Header
