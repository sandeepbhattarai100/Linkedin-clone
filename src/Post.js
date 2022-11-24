import { Avatar } from '@mui/material'
import React from 'react'
import { FeedInputOption } from './FeedInputOption';
import './post.css';
import SendIcon from '@mui/icons-material/Send';
import LoopIcon from '@mui/icons-material/Loop';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


export const Post = ({ name, description, message, photoUrl }) => {

  return (
      <div className='post'>
          <div className='post-header'>
              <Avatar  className="profile css-2s90m6-MuiAvatar-root"src={photoUrl} >{name[0]}</Avatar>
              <div className='post-info'>
                  <h2>{name}</h2>
                  <p>{ description}</p>
              </div>
          </div>
          <div className='post-body'>
              <p>{ message}</p>
          </div>
          <div className='post-button'>
              <FeedInputOption Icon={ThumbUpIcon} title="Like" color="grey" />
              <FeedInputOption Icon={CommentIcon} title="Comment" color="grey" />
              <FeedInputOption Icon={LoopIcon} title="Repost" color="grey" />
              <FeedInputOption Icon={SendIcon } title="Send" color="grey" />
             
          </div>
    </div>
  )
}
