import React, { Component } from 'react';
import '../css/Search.css';
import spaceImg from '../resource/space.jpg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-container">
        <div id="background"></div>
        <img src={spaceImg} alt="search-back" />
        <div className="search-bar-area">
          <span>My Unsplash API</span>
          <div>
            <input
              type="text"
              className="search-bar search-bar-text"
              placeholder="Search Images"
              onKeyUp={this.props.onKeypress}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
