import React from 'react';
import Commentslist from './Commentslist.js'

function Photolist(props) {
    return(
      props.photos.map((el,i) =>
      <div key={i + el} id='post'>
          <p id='photoTitle'>{el.title}</p>
          <img id='currentPhoto' src={el.photoURL} alt=''/>
          <p>Number of Likes:  {el.likes}</p>
          <button onClick={()=>
            props.likeButton(el.postid)}>like!</button>
          <Commentslist
            addComment={props.addComment}
            el={el}
          />
          <button onClick={()=>
            props.deletePhoto(el.postid)}>Delete Post</button>
        </div>
      )
    )
}
  
  

export default Photolist;
