import styled from "styled-components";
import Scroll from "react-scroll";
import { transparentize } from "polished";

import { Styles, Colors } from "../../constants";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;

  background-color: black;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 9;

background: linear-gradient(177deg, rgba(234,57,77,0.6) 0%,rgba(230,58,78,0.5) 1%,rgba(2,148,138,0.5) 65%,rgba(2,148,138,1) 90%,rgba(2,148,138,1) 100%);

  &:before {
    content:'';
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    height:200px;


  `;

export const Content = styled.div`
  padding-top: 300px;
  padding-bottom: 150px;
  color: white;
  text-align: center;
  z-index: 10;
  ${Styles.VertCenter};
`;

export const PreTitle = styled.h4`
  display: none;

  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 0px;
  font-family: 'Hind', sans-serif;
`;

export const Title = styled.h2`
  position: relative;
  display: inline-block;
  margin: 0;
  color: white;
  font-size: 13rem;
  font-weight: normal;
  letter-spacing: 4px;
  font-family: 'Pacifico', sans-serif;
  line-height: 12rem;
`;

export const PostTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 300;
  font-family: 'Hind', sans-serif;

  margin: 60px auto;
  margin-top: 0px;
  max-width: 40%;
`;

export const CtaButton = styled(Scroll.Link)`

  border:1px solid white;
  padding:10px 40px;

  transition: all ${Styles.Transition_regular};

  color:white;
  font-size:1.8rem;
  font-weight:300;

  &:hover {
    background-color:white;
    color:${Colors.Green};
  }


  ${Styles.HoverPointer};

`;
