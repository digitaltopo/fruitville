import styled, { keyframes } from "styled-components";
import { transparentize } from "polished";

import { Styles, Colors, Dimensions } from "../../constants";

const dropIn = keyframes`
    0% {
      opacity:0;
      transform: translateY(-100%);
    }
    100%{
      opacity:1;
      transform: translateY(0);
    }
  `;

export const Wrapper = styled(Styles.Section)`
  width: 100%;
  padding: ${Dimensions.Padding_regular}px;
  position: fixed;
  top: 0;
  z-index: 999;

  text-align: center;
  color: white;

  transition: transform ${Styles.Transition_regular};
  animation: ${dropIn} 0.5s ease-in-out;


  background-color: ${transparentize(0.1, Colors.Red)};

  a {
    color: ${Colors.Light};
    text-decoration: none;

    &:hover {}
  }

  transform: ${props =>
    props.active ? "translateY(0)" : "translateY(-100%) !important"};

`;

export const Close = styled.span`
  position: absolute;
  top: 20px;
  right: ${Dimensions.Padding_regular}px;
  height: 20px;
  z-index: 999;

  ${Styles.HoverPointer};

  &:hover {
  }
`;
