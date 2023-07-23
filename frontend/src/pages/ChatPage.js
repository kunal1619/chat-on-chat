import React, { useEffect } from 'react'
import axios from 'axios'

const ChatPage = () => {

    useEffect(()=>{
        axios.get('/api/chat').then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div>
      chat
    </div>
  )
}

export default ChatPage
