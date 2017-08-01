import styled from "styled-components";
import { Styles, Colors } from "../../../constants";

import ndvi from "../../../assets/img/ndvi.png";
import parcel from "../../../assets/img/parcel.png";

export const Wrapper = styled(Styles.Section)`
  margin:60px 0px;
  background-color:${Colors.Light};
  color:${Colors.Green};

  h4 {
    text-align:center;
    margin-bottom:0px;
  }

   .icon {
    width: 100%;
    text-align: center;
    margin-bottom: -30px;
  }

`;

export const Row = styled(Styles.Row)`

`;

export const NDVI_Container = styled.div`
  padding: 100px;
  margin: 0 100px 100px 0;
`;

export const NDVI = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: black;

  background-image: url(${ndvi});
  background-size: cover;

  width: calc(50%);
  float: left;

  &:before {
    z-index: 99;
    content: 'NDVI calculation demonstrating urban ag density potential';
    position: absolute;
    bottom: 20px;
    left: 0;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    color: black;
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    opacity: 0;

    transition: opacity ${Styles.Transition_regular};

    background-image: url(${parcel});
    background-size: cover;
  }

  &:hover {
    cursor: crosshair;
    &:after {
      opacity: 1;
    }
  }
`;

export const NDVI_DESC = styled.div`
  width: calc(50%);
  float: right;
  height: 500px;
  padding: 60px;

  p {
    margin-top: none;
  }
`;
