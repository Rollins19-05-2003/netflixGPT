import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
      <div className="absolute z-10 bg-gradient-to-b from-black w-full flex justify-between">
        <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-1024.png" alt="logo" className=" w-40  "></img>
        
        {user && (<div className="flex items-center">
          <img src={user.photoURL} alt="usericon" className="w-10 h-10"/>
          <button onClick={handleSignOut} className="text-white p-2 mx-2 border border-black rounded-md">Sign out</button>
        </div>)}
      </div>
    )
  }
  
  export default Header;
  