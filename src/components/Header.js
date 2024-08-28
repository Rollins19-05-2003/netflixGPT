import { useEffect } from "react";
import {LOGO} from "../utils/constants";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL : photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  },[]);

  return (
      <div className="absolute z-10 bg-gradient-to-b from-black w-full flex justify-between">
        <img src={LOGO} alt="logo" className=" w-40  "></img>
        
        {user && (<div className="flex items-center">
          <img src={user.photoURL} alt="usericon" className="w-10 h-10 mr-8 rounded-full cursor-pointer" onClick={handleSignOut}/>
          {/* <button onClick={handleSignOut} className="text-white p-2 mx-2 border border-black rounded-md">Sign out</button> */}
        </div>)}
      </div>
    )
  }
  
  export default Header;
  