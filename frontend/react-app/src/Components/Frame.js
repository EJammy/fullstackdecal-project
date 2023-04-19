import React, {useState, useEffect} from 'react';
import Post from "./Post";

import axios from "axios";

const Frame = () => {
  

   const [data, setData] = useState();

   const getPostsData = () => {
     axios
       .get("http://localhost:3002/posts") 
       .then((val) => setData(val.data)) 
       .catch((error) => console.log(error));  
   };

   useEffect(() => {
     getPostsData();
   }, [])

  // ====================

  return (
    
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        
        data && data.map(d =>
          <Post comments={d.comments} id={d.id} key={d.id} />
        )
      }

      
    </div>
  )

}


export default Frame;