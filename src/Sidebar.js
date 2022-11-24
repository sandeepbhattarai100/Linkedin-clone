import { Avatar } from '@mui/material'
import React from 'react';
import './Sidebar.css';
import profile from './images/gradient.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);   

    const recentItems = (topic) => (
        <div className='sidebar-recentItems'>
            <span className='hashtag'>#</span>
            <p>{topic}</p>


        </div>
    );
    return (
       
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src={profile} alt='' />
                <Avatar src={user.photoUrl} className='sidebar-avatar' >{ user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>      
            
                <div className='sidebar-stats'>
                <div className='sidebar-stat'>
                    <p>Who Viewed you</p>
                    <p className='sidebar-statnumber'>1,056</p>
                    </div>
                    <div className='sidebar-stat'>
                    <p>Total Views</p>
                    <p className='sidebar-statnumber'>958</p>
                    </div>
                   
                
               
                </div>
                
            </div>
            <div className='sidebar-bottom'>
                <p>Recents</p>
                        {recentItems("Developer")}
                        {recentItems("programming")}
                        {recentItems("Engineering")}
                        {recentItems("Quotes")}
                        {recentItems("Trending")}
                    </div>
            
    </div>
 
    
  )
}

export default Sidebar