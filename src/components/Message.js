import React from 'react'

function Message() {
  return (
    <div className='flex items-center justify-between'>
      <p className="flex-1 mr-5">Message</p>
      <div className="flex items-center justify-end flex-col">
        <p className="text-sm  text-gray-500">Sender Name</p>
        <p className="text-xs text-gray-400">Time</p>
      </div>
    </div>
  )
}

export default Message
