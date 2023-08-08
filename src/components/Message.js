import React from 'react'

function Message({sender, message, time}) {
  return (
    <div className='flex items-center justify-between bg-gray-200 mb-2 p-4 rounded-xl'>
      <p className="flex-1 mr-5">{message}</p>
      <div className="flex items-center justify-end flex-col">
        <p className="text-sm  text-gray-500">{sender}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </div>
  )
}

export default Message
