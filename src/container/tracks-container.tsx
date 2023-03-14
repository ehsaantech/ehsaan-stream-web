import styled from "styled-components";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { mobile } from "../utils/responsive";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tracks from "../components/Tracks";
import "../utils/style.css";
import "react-h5-audio-player/lib/styles.css";
import Theme from "../constants/theme";
import { AudioTracks } from "../types/tracks";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Heading = styled.h1`
  letter-spacing: 1.5px;
  ${mobile({ fontSize: "20px", fontWeight: "900", marginTop: "-15px" })};
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

const ShortDescription = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${Theme.FONT_GREY};
  letter-spacing: 1.6px;
  line-height: 26px;
  margin-top: 10px;
`;

const TracksContainer = ({
  audioFunction,
  channelTracks,
  scholarDesc,
  scholarName,
  channelImg,
}: AudioTracks) => {
  return (
    <>
      <Header />
      <Container>
        <Card sx={{ display: "flex", maxWidth: "800px" }}>
          <CardMedia
            className="cardimage"
            component="img"
            sx={{ width: 151, objectFit: "contain" }}
            image={channelImg}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Heading>{scholarName}</Heading>
              <ShortDescription>{scholarDesc}</ShortDescription>
              <AudioHeading>
                Audio Episodes : {channelTracks.length}
              </AudioHeading>
            </CardContent>
          </Box>
        </Card>
        <EpisodesHeading>Episodes By {scholarName}</EpisodesHeading>
      </Container>
      {/* tracks list  */}
      <div style={{ marginBottom: "75px" }}>
        {channelTracks.map((item: any) => (
          <Tracks
            name={item.name}
            handleAudio={() => audioFunction(item.name)}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default TracksContainer;
