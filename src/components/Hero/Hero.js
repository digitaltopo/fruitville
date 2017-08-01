import React from "react";

// Video
import Video from "react-drive-in";

// Video Assets
import background from "../../assets/img/Busy-Forest.jpg";

import forest from "../../assets/video/Busy-Forest.mp4";
import market from "../../assets/video/Indoor-Market.mp4";
import hose from "../../assets/video/The-Hose.mp4";
import peaches from "../../assets/video/peaches.mp4";

// Styles
import {
  Wrapper,
  Overlay,
  Content,
  Title,
  PreTitle,
  PostTitle,
  CtaButton
} from "./Hero.styles";

// Video Playlist
const playlist = [peaches, hose, forest, market];

const Hero = props =>
  <Wrapper>
    <Overlay>
      <Content>
        <PreTitle>&#8212; Welcome to &#8212;</PreTitle>
        <Title>Fruitville!</Title>
        <PostTitle>
          <br />
          Fruitville helps urban dwellers grow environmentally beneficial and
          profitable fruit orchards in their own communities.
        </PostTitle>
        <CtaButton to="SectionOne" smooth={true} duration={500}>
          Join Our Community!
        </CtaButton>
      </Content>
    </Overlay>
    <Video showPlaylist={playlist} poster={background} />
  </Wrapper>;
export default Hero;
