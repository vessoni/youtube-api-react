import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar, FooterPage } from '../../components';

import { StyleVideoGalery, PageActions
} from '../../components/VideoGalery/styles'
import {Paper, Typography } from '@material-ui/core';


import youtube from '../../api/youtube';

class Search extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    searchTerm:'',
    next: '',
    prev: '',
    page: 1,
  }

  componentDidMount(){
     
      const { match } = this.props;
      const { item } = match.params;
      
      this.setState({
        searchTerm: item,
      })
      
      this.handleSubmit(item);
    
  }

  apiGetResolutionNext = async () => {
    const { next, searchTerm } = this.state;
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        q: searchTerm,
        maxResults: 15,
        type: 'video',
        pageToken: next,
        key: 'AIzaSyAhw76Rj9Mkb7wRhgPs5H_rK2vJFS9MFPE',
      }
    });

    this.setState({
      videos: response.data.items, 
      next: response.data.nextPageToken, 
      prev: response.data.prevPageToken, 
      searchTerm: searchTerm,
    });
  }

  apiGetResolutionPrev = async () => {
    const { prev, searchTerm } = this.state;
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        q: searchTerm,
        maxResults: 15,
        type: 'video',
        pageToken: prev,
        key: 'AIzaSyAhw76Rj9Mkb7wRhgPs5H_rK2vJFS9MFPE',
      }
    });

    this.setState({
      videos: response.data.items, 
      next: response.data.nextPageToken, 
      prev: response.data.prevPageToken, 
      searchTerm:searchTerm,
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

  async componentDidUpdate() {

    const { searchTerm } = this.state;
    const { match } = this.props;
    const newSearchTerm = match.params.item;

    if (searchTerm !== newSearchTerm) {
      window.location.reload();
    }
  }


  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        q: searchTerm,
        maxResults: 15,
        type: 'video',
        key: 'AIzaSyAhw76Rj9Mkb7wRhgPs5H_rK2vJFS9MFPE',
      }
    });
    this.setState({
      videos: response.data.items, 
      next: response.data.nextPageToken, 
      prev: response.data.prevPageToken, 
      searchTerm: searchTerm
    });
  }

  render(){
    const { page, videos, searchTerm } = this.state;
    
    return(
      <>
        <SearchBar searchTerm={searchTerm}/>
        <StyleVideoGalery>
      {videos.map(video => (
        
        <Link to={`/detail/${video.id.videoId}`} key={video.id.videoId}>
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
        <FooterPage />
        </>
     
    )
  }
}


export default Search;