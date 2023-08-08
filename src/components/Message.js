import moment from 'moment/moment'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

function Message({sender, message, time}) {
    const [user] = useAuthState(auth)
  return (
    <div 
    className={`${
        sender === user?.displayName
        ? "flex items-center justify-between bg-gray-200 mb-2 p-4 rounded-xl w-fit border"
        : "flex items-center justify-between bg-gray-100 mb-2 p-4 rounded-xl w-fit border"
    }`}
    >
      <p className="flex-1 mr-5">{message}</p>
      <div className="flex items-end justify-end flex-col">
        <p className="text-sm  text-gray-500">{sender}</p>
        <p className="text-xs text-gray-400">{ moment(time).format('LT') }</p>
      </div>
    </div>
  )
}

export default Message
