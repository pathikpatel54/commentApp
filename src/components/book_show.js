import React, { Component } from 'react';
import { connect } from "react-redux";
import { showBook, addComment } from "../actions"

class BookShow extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      term: "",
      author: ""
    };
  }

  componentDidMount(){
    
    this.props.showBook(this.props.match.params.id);
  }

  renderComments(){
    const { book } =this.props;
    return book.comments.map((comment) => {
      return (
        <div key={comment.content}>
          <small className="commentsname">{comment.author}</small>
          <p className="commentbook">{comment.content}</p>
        </div>
      );
    });
  }

  onPostClick(event){
    var obj = {id: this.props.match.params.id, content: this.state.term, author: this.state.author };
    this.props.addComment(obj);
    this.setState({term: "", author: ""});
  }

  render(){
    const { book } =this.props;
    if(!book) {
      return <div></div>;
    }
    return(
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item">
            <img src={book.image} alt="" className="rounded float-left img-thumbnail" id="imgmain"/>
            <h2>
              {book.title}
            </h2>
            <small>Rating: {book.rating}</small>
            <p id="description">{book.description}</p>
          </li>
          <li className="list-group-item">
            <h4 id="commentheader">
              Post Comment
              <hr className="hrcls"/>
            </h4>
            <textarea className="form-control" rows="4" id="comment" 
            onChange={event => {this.setState({term: event.target.value})}}
            value = {this.state.term}></textarea>
            <small>Commenting as:</small>
            <input type="text" className="form-control" 
            onChange={event => {this.setState({author: event.target.value})}}
            value = {this.state.author}
            />
            <button type="button" className="btn btn-outline-success" onClick={this.onPostClick.bind(this)}>Post</button>
            <button type="button" className="btn btn-outline-danger" onClick={event => this.setState({term: "", author: ""})}>Cancel</button>
          </li>
          <li className="list-group-item">
            <h4 id="commentheader">
              Comments
              <hr/>
            </h4>
            {this.renderComments()}
          </li>
          
        </ul>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps){
  return {
    book : state.books[ownProps.match.params.id]
  };
}

export default connect (mapStateToProps, { showBook, addComment })(BookShow);