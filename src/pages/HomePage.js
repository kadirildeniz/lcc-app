import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Message from '../components/Message'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { addDoc, collection, orderBy, query, serverTimestamp } from 'firebase/firestore';
import {useCollection} from 'react-firebase-hooks/firestore'

function HomePage() {
  const [input,setInput] = useState("");
  const [user] = useAuthState(auth);
  const lastMessageDiv = useRef(null)

  const sendMessage = () => {
    addDoc(collection(db, "chat"),{
        sender: user?.displayName,
        message: input,
        time: serverTimestamp(),
    }).then(() => {
      setInput("");
      scrollToBottom()
    })
    .catch((err) => alert(err.message));
  };

  const [messages, loading] = useCollection(
    query(collection(db ,'chat'), orderBy("time","asc"))
    );

  const scrollToBottom = () => {
    lastMessageDiv.current.scrollIntoView({
      behaviour:"smooth"
    })
  }  
  return (
    <div>
      <Header/>
      {/* Body */}
      <div>
        {/* Messages */}
        <div className='max-w-2xl mx-auto mt-5 ml-5 mr-5'>
          { messages?.docs?.map(
            (message) => (
            <Message
            key={message.id} 
            sender={message.data().sender} 
            message={message.data().message} 
            time={message?.data()?.time?.toDate().getTime()}
            
            />
            ))
            }
            <div ref={lastMessageDiv} className='mb-[100px]'/>
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
