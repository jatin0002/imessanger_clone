import { Avatar } from '@material-ui/core'
import React from 'react'
import './SideBarChats.css'

const SideBarChats = ({ chatName }) => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h3>{chatName.chatName}</h3>
        <p>last massege sent</p>
        <small>timestamps</small>
      </div>
    </div>
  )
}

export default SideBarChats
