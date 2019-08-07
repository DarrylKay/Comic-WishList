import React, { Component } from "react";
import classes from "./AllBooks.module.css";
import { connect } from "react-redux";
import { openingInfoBook } from "../../actions/allActions";

class AllBooks extends Component {
  showAllBooks = () => {
    return this.props.comics.map(book => (
      <div key={book.id}>
        <div className={classes.bookContainer}>
          <div
            onClick={this.props.openingInfoBook.bind(null, book)}
            className={classes.book}
            style={{ backgroundImage: `url('${book.coverURL}')` }}
          />
        </div>
        <h3 className={classes.bookTitle}>{book.title}</h3>
      </div>
    ));
  };

  render() {
    return (
      <section className={classes.allBooks}>{this.showAllBooks()}</section>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  {
    openingInfoBook
  }
)(AllBooks);
