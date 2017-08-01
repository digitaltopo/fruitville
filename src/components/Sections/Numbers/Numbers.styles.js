import styled from "styled-components";
import { Styles, Colors } from "../../../constants";

export const Wrapper = styled(Styles.Section)`



  margin:60px 0px;
  padding:40px;
  padding-top:150px;
  background-color:${Colors.Purple};
  color:${Colors.Light};

  background: linear-gradient(to bottom, rgba(85,69,180,1) 12%,rgba(85,69,180,1) 61%,rgba(2,148,138,1) 100%);
  background: linear-gradient(to bottom, rgba(85,69,180,1) 12%,rgba(63,139,163,1) 100%);

  h4 {
    text-align:center;
  }

   .icon {
    width: 100%;
    text-align: center;
  }

  .slick-arrow {
    .slick-next:before,
    .slick-prev:before {
      font-size: 6rem !important;
    }
  }

`;

export const Row = styled(Styles.Row)`

  margin-bottom:70px;

`;

export const Slide = styled.div`text-align: center;`;

export const Stat = styled.figure`
  margin: 0px;
  display: block;
  font-size: 10rem;
  text-align: center;
  font-weight: bold;
  font-family: 'Zilla Slab', sans-serif;
`;
