import React,{useEffect, useState} from 'react'
import './Feed.css'


import { FeedInputOption } from './FeedInputOption'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TodayIcon from '@mui/icons-material/Today';
import { Post } from './Post'
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';





function Feed() {   
    const user = useSelector(selectUser);
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);
// this retrives the data and shows in feed
    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map(doc =>(
            {
                id: doc.id,
                data:doc.data(),
            }
            )))
        ))
      
    }, []);
    // this sends data to firebase with the timestamp

    const sendPost = (e) => {

        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description: "softwaSre engineer",
            message: input,
            photoUrl: user.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
      
    };
    
  return (
      <div className="feedContainer">
          <div className='feedInputContainer'>
              <div className='feedInput'>
              
                  <form>
                      <input type="text" placeholder='what is on your mind ?' value={input} onChange={e=>setInput(e.target.value)} />
                      <button type='submit' onClick={sendPost}>Post</button>
                  </form>
              </div>
              <div className='feedInputOption'>
              <FeedInputOption Icon={HomeIcon} title="Photo" color="lightblue"  />
              <FeedInputOption Icon={ VideoLibraryIcon} title="Video" color="lightgreen"  />
              <FeedInputOption Icon={ TodayIcon} title="Event" color="brown"  />
              <FeedInputOption Icon={ AssignmentIcon } title="Write article" color="orange"  />
               
              </div>
              
          </div>
          {/* posts */}
          {
              posts.map(({id, data:{name, description,message,photoUrl}}) => (
                  <Post
                      key={id}
                      name={name}
                      description={description}
                      message={message}
                      photoUrl={photoUrl}
                  />
              ))
          }
        
   </div>
  )
}

export default Feed