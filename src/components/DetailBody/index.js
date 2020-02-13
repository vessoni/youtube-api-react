import React from 'react';

import {IframeContent} from './styles';
import {Grid, Paper, Typography } from '@material-ui/core';

const DetailBody = ({video}) => {
  if(!video) return <div>Loading...</div>

  const videoSrc = `https://www.youtube.com/embed/${video.id}`
  return(
<>

        <Grid justify='center' container style={{padding: '15px'}}>

              
              <Grid item xs={8}>
                <Paper elevation={6}>
                  <IframeContent>
                    <iframe frameBorder='0'  title="Video Player" src={videoSrc}/>
                   </IframeContent>
                </Paper>
                <Paper elevation={6} style={{padding: '15px', maxWidth:'560'}}>
                  <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle} </Typography>
                  <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                  <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>

            </Grid>
        </Grid>




</>
  )
}




export default DetailBody;
