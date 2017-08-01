import styled from "styled-components";
import { Styles, Colors } from "../../../constants";

export const Wrapper = styled(Styles.Section)`
  margin:60px 0px;
  background-color:${Colors.Light};
  color:${Colors.Green};
`;

export const Box = styled.div`
  width: 50%;
  padding: 50px;
  float: left;

  h4 {
    text-align: center;
  }

  .icon {
    width: 100%;
    text-align: center;
    margin-bottom: -30px;
  }
`;
