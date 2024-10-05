import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaHome, FaWallet, FaYoutube } from 'react-icons/fa'
import { FaBagShopping } from 'react-icons/fa6'
import { IoIosChatboxes, IoIosNotifications } from 'react-icons/io'
import { RiLogoutBoxFill } from 'react-icons/ri'

const Sidebar = ({bgColor, color}) => {
  return (
    <>
    <div className="side_bar_content" style={{
      backgroundColor:`${bgColor}`,
      color:`${color}`
    }}>
      <div className="top_content">
        <div className="items"><FaHome className='icons'/>Home</div>
        <div className="items"><IoIosNotifications className='icons'/>Notification</div>
        <div className="items"><FaBagShopping className='icons'/>Shop</div>
        <div className="items"><IoIosChatboxes className='icons'/>Conversation</div>
        <div className="items"><FaWallet className='icons'/>Wallet</div>
        <div className="items"><FaYoutube className='icons'/>Subscription</div>
        <div className="items"><CgProfile className='icons'/>My Profile</div>
      </div>
      <div className="bottom_content items"><RiLogoutBoxFill className='icons'/>Log Out</div>
    </div>
    </>
  )
}

export default Sidebar