const express = require('express');
const bodyParser = require('body-parser');
const photoctrl = require('./photosctrl')

const app = express()

app.use( bodyParser.json());

app.get('/api/getphotos', photoctrl.getPhotos)

app.post('/api/postphoto', photoctrl.postPhoto)

app.put(`/api/edittitlecard/:id`, photoctrl.editTitleCard)

app.delete('/api/removephoto/:postid', photoctrl.removePhoto)
app.post('/api/likephoto/:postid', photoctrl.likePhoto)
app.post('/api/addcomment/:postid', photoctrl.addComment)


const port = 3030;
app.listen(port,()=>{
    console.log(`Receiving on port ${port}`)
})