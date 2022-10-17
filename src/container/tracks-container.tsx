import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { mobile } from '../utils/responsive';
import AudioPlayer from 'react-h5-audio-player';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Tracks from '../components/Tracks';
import { channelData } from '../services/data';
import MTM from '../assets/MuftiTM.jpg';
import '../utils/style.css';
import "react-h5-audio-player/lib/styles.css";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
margin-top: 100px;
${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Heading = styled.h1`
        letter-spacing: 1.5px;
        ${mobile({ fontSize: "20px", fontWeight:'900', marginTop: '-15px' })};
`;
const EpisodesHeading = styled.h1`
        margin-top: 50px;
        letter-spacing: 1.5px;
        ${mobile({ fontSize: "17px", textAlign: "center", fontWeight: "900" })};
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
      font-size: 16px;
      font-weight: 600;
      color: #3b3c3d;
      letter-spacing: 1.6px;
      line-height: 26px;
      margin-top: 10px;
`;

const TracksContainer = () => {
    const location = useLocation();
    const channelPath = location.pathname.split("/")[2];
    const [channelIndex, setChannelIndex] = useState(0);
    const [trackIndex, setTrackIndex] = useState(channelIndex);

    useEffect(()=>{
      const index = channelData.findIndex(object => {
        return object.channelRoute === channelPath;
      });
      setChannelIndex(index);

    },[channelPath])
    const channelTracks = channelData[channelIndex].mediaTracks;
    const audiofunction = (mediaName:any) => {
  
    const index = channelTracks.findIndex(object => {
        return object.name === mediaName;
    });

    setTrackIndex(index);     
    };
    const handleClickPrevious = () => {
      setTrackIndex((currentTrack) =>
        currentTrack === 0 ? channelTracks.length - 1 : currentTrack - 1
      );
    };
  
    const handleClickNext = () => {
      setTrackIndex((currentTrack) =>
        currentTrack < channelTracks.length - 1 ? currentTrack + 1 : 0
      );
    };
    const Tracksrc = channelTracks[trackIndex].src;
    const Trackname = channelTracks[trackIndex].name;
    const scholarName = channelData[channelIndex].scholarName;
    const scholarDesc = channelData[channelIndex].scholarDescription;
    const channelImg = channelData[channelIndex].img;
    
  return (
    <>
    <Header/>
    <Container>
    <Card sx={{ display: 'flex', maxWidth: '800px'}}>
    <CardMedia
        className='cardimage'
        component="img"
        sx={{ width: 151, objectFit:'contain' }}
        image = {channelImg} 
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Heading>
            {scholarName}
          </Heading>
          <ShortDescription>
            {scholarDesc}
          </ShortDescription>
          <AudioHeading>
          Audio Episodes : {channelTracks.length}
          </AudioHeading>
        </CardContent>
      </Box>
    </Card>
    <EpisodesHeading>
        Episodes By {scholarName}
   </EpisodesHeading>
   </Container>
                {/* tracks list  */}
        {
            channelTracks.map((item)=> (
                <Tracks name={item.name} handleAudio={()=>audiofunction(item.name)} />
            ))
        }       
        <AudioPlayer
        className='audioplayer'
        style={{ borderRadius: "1rem", width: "570px", marginTop:"10px", marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }}
        autoPlay={false}
        // layout="horizontal"
        src={Tracksrc}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: ${Trackname}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        />
    <Footer/>
    </>
  )
}

export default TracksContainer;