import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css';
import { Avatar } from '@mui/material';


function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
  return (
      <div onClick={onClick} className='headerOption'>
          {Icon && <Icon className='headerOption-icon' />}
          {avatar && (<Avatar className='avatar' src={user?.photoUrl}>{user?.email[0]}</Avatar>)}
        
          <h3 className='headerOption-title'>
              {title}
          </h3>
      </div>
  )
}

export default HeaderOption