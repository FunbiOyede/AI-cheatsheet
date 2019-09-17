import React, { Component } from "react";

import "./SearchBar.scss";

class SearchBar extends Component {
  state = {
    searchValue: ""
  };

  handleSearchValue = e => {
    this.setState({
      searchValue: e.target.value
    });
  };
  render() {
    return (
      <form>
        <input
          placeholder="search"
          type="text"
          className="SearchBar"
          onChange={this.handleSearchValue}
        />
      </form>
    );
  }
}

export default SearchBar;
