import React, { useState, useEffect } from "react";
import './likeDislike.css';
export default function LikeDislike(props) {
  const [like, setLike] = useState(100);
  const [dislike, setDislike] = useState(50);
  const [islike, setislike] = useState(false);
    const [isdislike, setisdislike] = useState(false)
    const AddLike = () => {
        if (islike == false) {
            setLike(like + 1);
            setislike(true); 

            if (isdislike == true) {
                setisdislike(false)
                setDislike(dislike - 1);

            }
        } else {
            setislike(false)
            setLike(like -1)
        }
   
  };
    const Dislike = () => {
        if (isdislike === false) {
            setDislike(dislike + 1); 
            setisdislike(true);
            if (islike == true) {
                setislike(false)
                setLike(like - 1);
                
            }
        } else {
            setisdislike(false);
            setDislike(dislike - 1);
        }

     
    }
 
    
  return (
    <div>
          <button onClick={AddLike} className={islike ? "likeDislike" : null}>Like |{like}</button>
          <button onClick={Dislike} className={isdislike ? "likeDislike" : null}>Dislike|{dislike}</button>
    </div>
  );
}
