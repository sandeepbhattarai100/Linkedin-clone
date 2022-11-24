import React from 'react'
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';
import logo from './images/rename.png';
import HeaderOption from './HeaderOption';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Avatar from './images/avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';







function Header() {
  const dispatch = useDispatch()
  const logoutOfApp = () =>{
    dispatch(logout())
    auth.signOut();
  };
  return (
    <div className='header'>
     
       <div className='header-left'>
              <img src={logo} alt="logo" />
              
        <div className='header-search'>
        <SearchIcon />
                 
             

                  <input type=""/>
              </div>
       </div>
      <div className='header-right'>
        <HeaderOption Icon={ HomeIcon} title="Home"/>
        <HeaderOption Icon={ GroupIcon} title="My Network"/>
        <HeaderOption Icon={ WorkIcon} title="jobs"/>
        <HeaderOption Icon={ MessageRoundedIcon} title="messaging"/>
        <HeaderOption Icon={ NotificationsRoundedIcon} title="notification"/>
        <HeaderOption avatar={Avatar} title="me" onClick={logoutOfApp}/>
              
              {/* <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/> */}

       </div>
    </div>
  )
}

export default Header