import React, {useState} from 'react';
import {NextPage} from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import {AiFillHome, AiOutlineMenu, AiFillCloseCircle} from 'react-icons/ai';


const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState(true);


  return (
    <div>
      <div
       className="block xl:hidden m-2 ml-4 mt-3 text-xl"
       onClick = {() => setShowSidebar((prev => !prev))}
      
      >
        
        {showSidebar ? <AiFillCloseCircle /> : <AiOutlineMenu/>}

      </div>
      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col">

        </div>
      ) }
    </div>
  )
}

export default Sidebar