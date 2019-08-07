import React, { Component } from "react";
import "./Home.css";
import AllBooks from "../components/AllBooks/AllBooks";
import MyList from "../components/MyList/MyList";
import Pagination from "../components/Pagination/Pagination";
import { connect } from "react-redux";

class Comics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: this.props.booksData,
      currentPage: 1,
      comicsPerPage: 10
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleComicsPerPage);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleComicsPerPage);
  }

  handleComicsPerPage = () => {
    const windowSize = window.innerHeight;
    if (windowSize >= 700) {
      this.setState({
        comicsPerPage: 15
      });
    }
  };

  render() {
    // Get current comics
    const indexOfLastPost = this.state.currentPage * this.state.comicsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.comicsPerPage;
    const currentComics = this.state.comics.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    // Change page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    return (
      <div style={{ background: "white" }}>
        <div className="App">
          <AllBooks comics={currentComics} />
          <Pagination
            comicsPerPage={this.state.comicsPerPage}
            totalComics={this.state.comics.length}
            paginate={paginate}
            currentPage={this.state.currentPage}
          />
        </div>
        <MyList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(Comics);
