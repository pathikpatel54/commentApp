import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchBooks } from "../actions"
import { Link } from "react-router-dom"

class BookList extends Component {

  componentDidMount(){
    this.props.fetchBooks();
  }

  renderList(){
    return this.props.books.map((book, index) => {
      const linkto = `/book/${index}`;
      return (
        <li key={book.title} className="list-group-item">
          <img src={book.image} alt="" class="rounded float-left img-thumbnail"/>
          <Link to={linkto}>
            <h2>
              {book.title}
            </h2>
          </Link>
          <small>Author: {book.author}</small>
          <p>{book.description}</p>
        </li>
      );
    });
  }

  render(){
    return(
      <div className="container">
        <ul className="list-group">
        {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  }
}

export default connect (mapStateToProps, { fetchBooks } )(BookList);