import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SideBarChats from '../SideBarChats/SideBarChats'

// Importing icons
import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined'

const Sidebar = () => {
  const [sideBarChatName, setSideBarChatName] = useState([])

  return (
    <div className="sidebar">
      <div className="siderbar__header">
        <Avatar
          src=""
          className="sidebar__avatar"
          // onClick={logout}
        />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
        <RateReviewOutlinedIcon />
      </div>
      <div className="sidebar__chats">
        <SideBarChats />
      </div>
    </div>
  )
}

export default Sidebar
