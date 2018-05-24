import React from 'react';


 function Title(props) {
  return (
    <div id='submit'>
      <p>Title</p>
      <input value={props.title} onChange={e=>props.submitTitleInput(e.target.value)}/>
      <p>Photo</p>
      <input value={props.photoURL} onChange={e=>props.submitPhotoURL(e.target.value)}/>
      <br/> 
      <br/>
      <button onClick={()=>props.postPhoto()}>submit!</button>
    </div>
  )
}

export default Title;
