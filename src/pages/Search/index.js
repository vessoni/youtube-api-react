import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa'

import { MainHeader } from './styles';

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
    const { next, SearchTerm } = this.state;
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        q: SearchTerm,
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
    const { prev, SearchTerm } = this.state;
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        q: SearchTerm,
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



  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  handleSubmit = async (SearchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        q: SearchTerm,
        maxResults: 10,
        type: 'video',
        key: 'AIzaSyAhw76Rj9Mkb7wRhgPs5H_rK2vJFS9MFPE',
      }
    });
    this.setState({
      videos: response.data.items, 
      next: response.data.nextPageToken, 
      prev: response.data.prevPageToken, 
      searchTerm: SearchTerm
    });
  }

  render(){
    const { page, videos } = this.state;
    
    return(
      <>
         <MainHeader>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                     <FaChevronLeft size={40}/> Return
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </MainHeader>
        <StyleVideoGalery>
      {videos.map(video => (
        
        <Link to={`/detail/${video.id}`} key={video.id.videoId}>
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


export default Search;