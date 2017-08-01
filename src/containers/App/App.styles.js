import styled, { injectGlobal } from "styled-components";
import { Colors } from "../../constants";

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Zilla+Slab|Hind:300,400,500|Pacifico')

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing:inherit;
    }

  body {
    font-weight:300;
    font-family: 'Hind', sans-serif;
    margin:0;
    padding:0;
  }

`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;

  background-color: ${Colors.Light};
`;

export { Wrapper };
