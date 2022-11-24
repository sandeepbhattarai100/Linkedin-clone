import React,{useState} from 'react'
import './Login.css';
import Linkedin from './images/rename.png';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profileUrl, setProfileUrl] = useState('')
    const dispatch = useDispatch();

    const LoginApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL
                
            }))
        }).catch(error => alert(error));
        
     };
    const register = () => { 
        if (!name) {
            return alert("Please enter full name")
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile(
                    {
                        displayName: name,
                        photoUrl: profileUrl
                    }
                ).then(() => {
                    dispatch(login({
                        email:userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl:profileUrl
                        
                    }));
                });
            }).catch(error => {
                alert(error);
            })
        
    };
    return (
   
        <div className='login-container'>
            <div className='brand'>
            <span><p>Linked</p></span>
               <img src={Linkedin} alt="Brand Image"/>
            </div>      
            <form>
            <input value={profileUrl} onChange={(e)=>setProfileUrl(e.target.value)} placeholder="Profile"/>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
          <button type='submit' onClick={LoginApp}>Sign In</button>
            </form>
            <p>Not a member ?
                <span className='login-register' onClick={register}>Register now</span>
            </p>

   </div>
  )
}
