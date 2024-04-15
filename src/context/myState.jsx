import React, { useState } from 'react'
import myContext from './myContext'



const Mystate = (props) => {

 const [loginstatus,setLoginStatus] = useState(false);
 const [UserImageURL,setUserImageURL] = useState(null);

 setUserImageURL

  return (
    <myContext.Provider value={{setLoginStatus,loginstatus,setUserImageURL,UserImageURL}}>
        {props.children}
    </myContext.Provider>
  )
}

export default Mystate