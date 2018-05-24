let photos = [
    {
        postid: 0,
        photoURL:'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw1820a.jpg',
        title: 'SPAAAAAAACE!!!!',
        likes:1, 
        comments:['h','trippy man','dat boi sick','hella neet']
    },
    {
        postid: 1, 
        photoURL:'https://media.giphy.com/media/orTe0TlEDVo7gSycFD/giphy.gif',
        title: '#BF1',
        likes:1,
        comments:['g','wow!','lit fam']
    }
]

let header=[
    {
        id:1,
        titleCard:'GhettoGram!'
    }
]

let postid = 2;

module.exports = {
    getPhotos: (req,res) => {
        res.status(200).send(photos)
    },
    postPhoto: (req,res) => {
        console.log(req.body)
        photos.push({
            postid: postid,
            photoURL: req.body.photoURL,
            title: req.body.title,
            likes: 1,
            comments:[],
        })
        postid++
        
        res.status(200).send(photos)
    },
	removePhoto: (req,res) => {
            let postid = photos.findIndex(e => {
            return e.postid == req.params.postid;
            });
            photos.splice(postid, 1);          

        res.status(200).send(photos)
    },
	likePhoto: (req,res) => {
        for(i=0;i<photos.length; i++){
            photos[i].postid == req.params.postid ? 
            photos[i].likes++:
            null;  
        }
         res.status(200).send(photos) 
    },
	addComment: (req,res) => {
        for(i=0;i<photos.length; i++){
            photos[i].postid == req.params.postid ? 
            photos[i].comments.push(req.body.comment) :
            null;  
        }

        res.status(200).send(photos)
    },
    editTitleCard: (req,res) => {
        for(i=0;i<header.length; i++){
            header[i].id == req.params.id ?
            header[i].titleCard = req.body.titleCard:
            null;
        }
        res.status(200).send(header)
    }

}