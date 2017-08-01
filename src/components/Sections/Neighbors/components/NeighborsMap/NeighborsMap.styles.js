import styled from "styled-components";
import { Styles, Colors } from "../../../../../constants";

export const Wrapper = styled.div`
  margin-top: 60px;

  .mapboxgl-popup {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    overflow: hidden;
    background-size: cover;
    background-position: center center;

    transition: border ${Styles.Transition_regular};
    border: 6px solid ${Colors.Green};

    box-shadow: inset 1px 4px 6px rgba(0, 0, 0, 0.2);

    .mapboxgl-popup-content {
      background-color: transparent;
    }

    &:hover {
      border: 8px solid ${Colors.Red};
      pointer: cursor;
    }
  }
`;
