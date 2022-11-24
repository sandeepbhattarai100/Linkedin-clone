import { Adjust, Newspaper } from '@mui/icons-material';
import React from 'react'
import './Widgets.css';

function Widgets() {
    const article = (heading, title) => (
        <div className='widgets-article'>
            <div className='article-left'><Adjust/></div>
            <div className='article-right'>
                <h4>{heading}</h4>
                <p>{title}</p>
            </div>
        
    </div>
        
    )
  return (
      <div className='widgets'>
          <div className='widgets-header'>
             <h4> LinkedIn News</h4>
              <Newspaper/>
          </div>
          {article("InternSathi","job snipper")}
          {article("Job Axle","job founder")}
          {article("Elon Musk","SPACE-X ceo")}
          {article("leapfrog technology","Developer")}
    </div>
  )
}

export default Widgets
