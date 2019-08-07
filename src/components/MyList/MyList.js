import React, { Component } from "react";
import classes from "./MyList.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { closingMyList, removingBook } from "../../actions/allActions";

class MyList extends Component {
  showMyList = () => {
    return this.props.globalState.myList.map((book, i) => {
      return (
        <li key={i} className={classes.li}>
          {book}{" "}
          <FaRegTrashAlt
          style={{background: '#1f1f1f'}}
            className={classes.deleteBtn}
            onClick={this.props.removingBook.bind(null, book)}
          />
        </li>
      );
    });
  };

  render() {
    return (
      <section
        className={
          this.props.globalState.listOpen ? classes.active : classes.myList
        }
      >
        <h3 className={classes.h3}>Wish-List</h3>
        <hr className={classes.hr}/>
        <ul className={classes.ul}>{this.showMyList()}</ul>
        <div className={classes.closeList} onClick={this.props.closingMyList}>
          Close List
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
  { closingMyList, removingBook }
)(MyList);
