import React from 'react'
import './FeedInputOption.css'

export const FeedInputOption = ({Icon,title,color}) => {
    return (
        <div className='InputOption' >
            <Icon style={{ color: color }} />
            <h4>{title}</h4>      
</div>
  );
}
