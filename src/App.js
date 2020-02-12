import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails } from './components';


import youtube from './api/youtube';

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,
  }

  handleSubmit = async (SearchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        q: SearchTerm,
        maxResults: 5,
        key: 'AIzaSyCpwfozr6iK7gqrEL0IIPeVfY7ExGPNg_Y',
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  }

  render(){
    return(
      <Grid justify="center" container spacing={10}> 
        <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetails/>
              </Grid>
              <Grid item xs={4}>
                 {/* Video List */}
                </Grid>
            </Grid>
        </Grid>
      </Grid>
     
    )
  }
}


export default App;