import styled from "styled-components";
import Dimensions from "./dimensions";
import { clearFix } from "polished";

const Section = styled.div`
  h2 {
    font-size: 6rem;
    text-align: center;
    font-weight: normal;
  }

  h4 {
    margin-top: 20px;
    font-size: 4rem;
    font-weight: normal;
    font-family: 'Pacifico', sans-serif;
  }

  p {
    font-size: 1.8rem;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: ${Dimensions.ContainerWidth}px;
  padding: ${Dimensions.Padding_regular}px;
`;

const Row = styled.div`${clearFix()};`;

const Transition_regular = " 0.3s ease-in-out";

const VertCenter = `

  position: relative;
  width:100%;
  top: 50%;
  transform: translateY(-50%);

`;

const HoverPointer = `

  &:hover {
    cursor:pointer;
  }

`;

export default {
  Section,
  Container,
  Row,
  VertCenter,
  HoverPointer,
  Transition_regular
};
