/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import { SearchBar, VideoGalery, FooterPage } from '../../components';


export default class Main extends Component {

  render() {
    return (
      <>
        <SearchBar />
        <VideoGalery />
        <FooterPage />
      </>
    );
  }
}
