import React, { Component } from "react";
import logo from "../../assets/marvel-logo.png";
import classes from "./NavBar.module.css";
import { openingMyList, closingMyList } from "../../actions/allActions";
import { connect } from "react-redux";
import { FaListUl } from "react-icons/fa";

export class NavBar extends Component {
  render() {
    return (
      <nav className={classes.nav}>
        <img src={logo} className={classes.image} alt="marvel logo" />
        <h3 className={classes.linkA} onClick={this.props.openingMyList}>
          <FaListUl />
        </h3>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { openingMyList, closingMyList }
)(NavBar);
