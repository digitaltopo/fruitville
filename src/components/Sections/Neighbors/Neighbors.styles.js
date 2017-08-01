import styled from "styled-components";
import { Styles, Colors, Dimensions } from "../../../constants";

export const Wrapper = styled(Styles.Section)`

  background-color: ${Colors.Blue};

  color:${Colors.Light};
  padding-bottom:80px;

  background: linear-gradient(45deg, rgba(4,188,212,1) 65%,rgba(162,222,229,1) 100%);

  background: linear-gradient(to top, rgba(2,148,138,1) 0%,rgba(4,188,212,1) 57%);

`;

export const Bios = styled.div`
  position: relative;
  padding: 40px;
  background-color: white;
  color: ${Colors.Blue};

  margin-top: -300px;
  z-index: 9;
`;

export const Bio = styled.div`
  h4 {
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: center;
  }
`;

export const Tree = styled.h3`
  margin-top: 0px;
  font-weight: normal;
  font-size: 1.5rem;
  color: grey;
  text-align: center;
  i {
  }
`;
