import React, { useState } from 'react'
import Header from '../components/Header'
import Message from '../components/Message'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

function HomePage() {
  const [input,setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = () => {
    addDoc(collection(db, "chat"),{
        sender: user?.displayName,
        message: input,
        time: serverTimestamp(),
    }).then(() => {
      setInput("")
    })
    .catch((err) => alert(err.message));
  };

  return (
    <div>
      <Header/>
      {/* Body */}
      <div>
        {/* Messages */}
        <div className='max-w-2xl mx-auto mt-5'>
          <Message/>
        </div>
        {/* İnput */}
        <div className="fixed bottom-0 flex items-center justify-between w-full p-5">
        
        <input 
        value={input}
        onChange={e => setInput(e.target.value)}
        type="text" 
        placeholder="Enter a Message" 
        className="transition-all duration-500 border border-gray-300 flex-1 mr-4 p-2 outline-none bg-gray-200 focus:bg-gray-100" />
        
        <button 
        disabled={!input}
        onClick={sendMessage}
        className="bg-gray-700 pl-4 pr-4 p-2 text-white transition-all duration-500 hover:bg-gray-800 disabled:cursor-not-allowed	"
        >
          Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
