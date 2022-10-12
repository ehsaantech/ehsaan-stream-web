import React from 'react'
import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Footer from '../Footer';
import Header from '../Header';
import MTM from '../../assets/MuftiTM.jpg';

const PrimaryContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 100px;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

const SecondaryContainer = styled.div`
margin-left: 8%;
margin-right: 8%;
margin-top: 100px;
margin-bottom: 100px;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Heading = styled.h1`
        letter-spacing: 1.5px;
`;
const EpisodesHeading = styled.h1`
        letter-spacing: 1.5px;
`;
const AudioHeading = styled.h1`
        margin-top: 5%;
        margin-left: 2%;
        font-size: 17px;
        font-weight: 900;
        letter-spacing: 1.3px;
        display: list-item;
`;

const ShortDescription =  styled.p`
      font-size: 15px;
      font-weight: 600;
      color: #3b3c3d;
      letter-spacing: 1.3px;
      margin-top: 10px;
`;

const Tracks = () => {
  return (
    <>
    <Header/>
    {/* <Hero/> */}
    <PrimaryContainer>
    <Card sx={{ display: 'flex', maxWidth: '600px' }}>
    <CardMedia
        component="img"
        sx={{ width: 151 }}
        image = {MTM} 
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Heading>
          Mufti Tariq Masood
          </Heading>
          <ShortDescription>
          Tariq Masood is a Pakistani Deobandi author and Islamic scholar, 
          who teaches at the Jamia Tur Rasheed seminary in Karachi. 
          He has authored books Including Aik se Za'id Shadiyoon ki Zaroorat Kyu.
          </ShortDescription>
          <AudioHeading>
          Audio Episodes : 120
          </AudioHeading>
        </CardContent>
      </Box>
    </Card>
   </PrimaryContainer>
   <SecondaryContainer>
   <EpisodesHeading>
        Episodes By Mufti Tariq Masood
   </EpisodesHeading>
   <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>



   </SecondaryContainer>
    
    <Footer/>
    </>
  )
}

export default Tracks;