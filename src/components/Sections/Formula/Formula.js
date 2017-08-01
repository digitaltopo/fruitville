import React from "react";

import { Styles, Colors } from "../../../constants/";
import {
  Wrapper,
  Row,
  NDVI_Container,
  NDVI,
  NDVI_DESC
} from "./Formula.styles";

import SVG from "react-svg";

import IconScience from "../../../assets/img/icons/science.svg";
import IconGrow from "../../../assets/img/icons/grow.svg";

const IconColor = Colors.Green;

const Container = Styles.Container;

const Formula = props =>
  <Wrapper id="Formula">
    <Container>
      <Row>
        <h2>Our Formula</h2>

        <SVG
          className="icon"
          path={IconScience}
          style={{ height: 150, fill: IconColor, margin: "0 auto" }}
        />

        <h4>Precision Agriculture</h4>
      </Row>
    </Container>

    <NDVI_Container>
      <Row>
        <NDVI />
        <NDVI_DESC>
          <p>
            Our comprehensive data analysis platform helps us determine which
            tree species are viable in your local climate zone. We use satellite
            data and Lidar to calculate ideal planting density and potential
            yield for your individual plot of land. We leverage the latest
            precision agriculture techniques to ensure a healthy, productive
            orchard, maximizing availability and quality of fresh fruit in your
            area. After planting, we monitor your tree health and adjust growing
            plans to keep your orchard happy.
          </p>
        </NDVI_DESC>
      </Row>
    </NDVI_Container>

    <Container>
      <Row>
        <SVG
          className="icon"
          path={IconGrow}
          style={{ height: 150, fill: IconColor, margin: "0 auto" }}
        />
        <h4>Let it Grow</h4>

        <p>
          Fruitville takes care of planting and caring for your orchard. We do
          all the heavy lifting around harvesting and sales, while you enjoy
          fresh fruit, shade, increased property value and supplemental
          income—all without ever donning a pair of overalls.
        </p>
      </Row>
    </Container>
  </Wrapper>;

export default Formula;
