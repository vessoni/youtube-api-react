import React from 'react';
import { Link } from 'react-router-dom';

import youtube from '../../api/youtube'

import {Paper, Typography } from '@material-ui/core';

import { StyleVideoGalery, PageActions } from './styles'

class VideoGalery extends React.Component {
  state = {
    videos: [],
    searchTerm: '',
    next:'',
    prev: '',
    page: 1,
  };

  async componentDidMount() {
   
    const response = await youtube.get('videos', {
      params: {
        chart: 'mostPopular',
        part: 'snippet',
        maxResults: 15,
        type: 'video',
        key: 'AIzaSyAhw76Rj9Mkb7wRhgPs5H_rK2vJFS9MFPE',
      }
    });

    this.setState({
      videos: response.data.items, 
      next: response.data.nextPageToken, 
      prev: response.data.prevPageToken, 
      searchTerm:'mostPopular'
    });
  }
  
  apiGetResolutionNext = async () => {
    const { next } = this.state;
    const response = await youtube.get('videos', {
      params: {
        chart: 'mostPopular',
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        pageToken: next,
        key: 'AIzaSyAhw76Rj9Mkb7wRhgPs5H_rK2vJFS9MFPE',
      }
    });

    this.setState({
      videos: response.data.items, 
      next: response.data.nextPageToken, 
      prev: response.data.prevPageToken, 
      searchTerm:'mostPopular'
    });
  }

  apiGetResolutionPrev = async () => {
    const { prev } = this.state;
    const response = await youtube.get('videos', {
      params: {
        chart: 'mostPopular',
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        pageToken: prev,
        key: 'AIzaSyAhw76Rj9Mkb7wRhgPs5H_rK2vJFS9MFPE',
      }
    });

    this.setState({
      videos: response.data.items, 
      next: response.data.nextPageToken, 
      prev: response.data.prevPageToken, 
      searchTerm:'mostPopular'
    });
  }

  handlePage = async action => {
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });
    if(action === 'back'){
      this.apiGetResolutionPrev();
    }else{
      this.apiGetResolutionNext();
    }
  };

  render(){

    const { page, videos } = this.state;
    return(
      <>
      <StyleVideoGalery>
      {videos.map(video => (
        
        <Link to={`/detail/${video.id}`} key={video.id}>
          <Paper>
          <img
            src={video.snippet.thumbnails.high.url}
            width='480'
            height='360'
            alt={video.etag}
          />
           <Typography variant="subtitle1" align="center">{video.snippet.title}</Typography>
          </Paper>
        </Link>
      ))}
    </StyleVideoGalery>
    <PageActions>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => this.handlePage('back')}
          >
            Previous
          </button>
          <span>Page {page}</span>
          <button type="button" onClick={() => this.handlePage('next')}>
            Next
          </button>
        </PageActions>

        </>
    )
  }
}

export default VideoGalery;