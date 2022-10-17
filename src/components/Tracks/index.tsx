import React from 'react'
import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import StreamIcon from '@mui/icons-material/Stream';
import '../../utils/style.css';

const SecondaryContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

type Props = {
  name: string,
  handleAudio : (name:string) => void,
}

const Tracks = ({name,handleAudio}:Props) => {
  return (
   <SecondaryContainer>
   <Box className='tracklist' sx={{ width: '40%', display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap', bgcolor: 'background.paper', marginTop: '10px' }}>
          <nav aria-label="main mailbox folders">
          <List>
            <ListItem>
              <ListItemButton onClick={()=>handleAudio(name)}>
                <ListItemIcon>
                  <PodcastsIcon/>
                </ListItemIcon>
                <ListItemText primary={name} />
                  <StreamIcon/>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>  
    </Box>
  
   </SecondaryContainer>
  )
}

export default Tracks;