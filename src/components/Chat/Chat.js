import React, { useState, useEffect } from 'react'
import './Chat.css'

import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined'
import { IconButton } from '@material-ui/core'
const Chat = ({ id }) => {
  const [message, setMessage] = useState('')
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel name</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        <h4>this is message</h4>
        <h4>this is message</h4>
        <h4>this is message</h4>
        <h4>this is message</h4>
        <h4>this is message</h4>
      </div>
      <div className="chat__input">
        <form>
          <input
            placeholder="iMessage"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          />
          <button type="submit"></button>
        </form>
        <IconButton>
          <MicNoneOutlinedIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
