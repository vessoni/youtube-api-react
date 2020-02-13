import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, FooterPage, DetailBody } from '../../components';


import youtube from '../../api/youtube';

class Detail extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount(){
    const { match } = this.props;
    const { id } = match.params;
   
    this.handleSubmit(id);
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  handleSubmit = async (id) => {
    const response = await youtube.get('videos', {
      params: {
        part: 'snippet',
        id: id,
        type: 'video',
        key: 'AIzaSyCpwfozr6iK7gqrEL0IIPeVfY7ExGPNg_Y',
      }
    });
    this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
  }

  render(){
    const { selectedVideo, videos } = this.state;
    return(
      <>
       <SearchBar />
       <DetailBody video={selectedVideo}/>
       <FooterPage />
     </>
    )
  }
}


export default Detail;