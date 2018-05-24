import React from 'react';

class Commentslist extends React.Component {
    constructor(props){
        super(props)
        
        this.state= {
            commentInput:'',
        } 
        
    }
    
    postCommentInput() {
        this.props.addComment(this.props.el.postid, this.state.commentInput);
        this.setState({commentInput:''})
    }

    render(){
        return (
            <div className="commentsList">
            <div>Comments: {this.props.el.comments.map((com,j)=>
                <div key={j+com}>
                    {com}
                </div>
            )}
            </div>
            <input value={this.state.commentInput} onChange={e=>this.setState({commentInput:e.target.value})}/>
            <button onClick={()=>this.postCommentInput()}>comment!</button>
        </div>
        )
    }
}

  export default Commentslist;