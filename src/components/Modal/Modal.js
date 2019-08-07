import React, { Component } from "react";
import classes from "./Modal.module.css";
import { FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { closingInfoBook, addingBook } from "../../actions/allActions";

class Modal extends Component {
  render() {
    return (
      <section
        className={
          this.props.globalState.popupOpen === true
            ? classes.active
            : classes.modal
        }
      >
        <div className={classes.modalContainer}>
          <div
            className={classes.closeModal}
            onClick={this.props.closingInfoBook}
          >
            <FaTimes />
          </div>
          <div className={classes.modalGrid}>
            <div className={classes.images}>
              <div
                className={classes.cover}
                style={{
                  backgroundImage: `url('${
                    this.props.globalState.openInfoBook.coverURL
                  }')`,
                  height: "500px",
                  width: "100%"
                }}
              />
            </div>
            <div className={classes.info}>
              <h2 className={classes.h2}>
                {this.props.globalState.openInfoBook.title}
              </h2>
              <div className={classes.infoLine}>
                <span className={classes.bold}>Author: </span>
                {this.props.globalState.openInfoBook.author}
              </div>
              <div className={classes.infoLine}>
                <span className={classes.bold}>Catergory: </span>
                {this.props.globalState.openInfoBook.category}
              </div>
              <div className={classes.infoLine}>
                <span className={classes.bold}>Published: </span>
                {this.props.globalState.openInfoBook.published}
              </div>
              <p className={classes.review}>
                {" "}
                {this.props.globalState.openInfoBook.review}
              </p>
              <button
                className={classes.addBook}
                onClick={this.props.addingBook.bind(
                  null,
                  this.props.globalState.openInfoBook.title
                )}
              >
                Add Book To Wish List
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  {
    closingInfoBook,
    addingBook
  }
)(Modal);
