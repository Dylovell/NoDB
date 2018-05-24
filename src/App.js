import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Title from './components/Title.js'
import Photolist from './components/Photolist.js'

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      photos:[],
      header:[],
      likes: 1,
      title:'',
      photoURL:'',
    }

    this.submitTitleInput = this.submitTitleInput.bind(this)
    this.submitPhotoURL = this.submitPhotoURL.bind(this)
    this.postPhoto = this.postPhoto.bind(this)
    this.likeButton = this.likeButton.bind(this)
    this.deletePhoto = this.deletePhoto.bind(this)
    this.addComment = this.addComment.bind(this)
  } 
  
  componentDidMount() {
    axios.get('/api/getphotos').then(res =>{
      this.setState({photos: res.data})
    })
  }

  postPhoto() {
    axios.post('/api/postphoto', {
      title: this.state.title, 
      photoURL: this.state.photoURL
    }).then(res =>{this.setState({photos: res.data,title:'',photoURL:''})})
  }

  submitTitleInput(e){
    this.setState({title:e})
  }

  submitPhotoURL(e){
    this.setState({photoURL:e})
  }

  editTitleCard(id,newTitle){
    axios.put(`/api/edittitlecard/${id}`,{titleCard:newTitle}).then(res =>{
      this.setState({titleCard: res.data})
    })
  }

  addComment(postid,commentInput) {
    axios.post(`/api/addcomment/${postid}`,{comment:commentInput}).then(res =>{
      this.setState({photos: res.data})
    })
  }

  deletePhoto(postid) {
    axios.delete(`/api/removephoto/${postid}`).then(res =>{
      this.setState({photos: res.data})
    })
  }

  likeButton(postid) {
    axios.post(`/api/likephoto/${postid}`, {likes: this.state.likes}).then(res =>{
      this.setState({photos: res.data})
    })
  }

  render() {
    return (
      <div className='App'>  
        <header className="App-header">
          {/* <h1 className="App-title">{this.header[0].titleCard}</h1> */}
             <h1 className="App-title">Ghettogram!!</h1>
        </header>
        <div className='posts'>
          <Title 
            title={this.state.title} 
            submitTitleInput={this.submitTitleInput}
            submitPhotoURL={this.submitPhotoURL}
            photoURL={this.state.photoURL} 
            postPhoto={this.postPhoto}/>
          <Photolist 
            photos={this.state.photos}
            likeButton={this.likeButton}
            deletePhoto={this.deletePhoto}
            addComment={this.addComment}
            submitComment={this.submitComment}/>
        </div>
      </div>
    );
  }
}

export default App;
