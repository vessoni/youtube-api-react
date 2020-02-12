import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails, VideoList } from '../../components';


import youtube from '../../api/youtube';

class Detail extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount(){
      this.handleSubmit('Top10');
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  handleSubmit = async (SearchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        q: SearchTerm,
        maxResults: 5,
        type: 'video',
        key: 'AIzaSyCpwfozr6iK7gqrEL0IIPeVfY7ExGPNg_Y',
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  }

  render(){
    const { selectedVideo, videos } = this.state;
    return(
      <Grid justify="center" container spacing={10}> 
        <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetails video={selectedVideo}/>
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
        </Grid>
      </Grid>
     
    )
  }
}


export default Detail;