import React from "react";

import { Styles, Colors } from "../../../constants/";
import { Wrapper, Row, Slide, Stat } from "./Numbers.styles";

import SVG from "react-svg";
import Carousel from "react-slick";

import IconTrees from "../../../assets/img/icons/trees.svg";

const IconColor = Colors.Light;

const Container = Styles.Container;

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true
};

const Numbers = props =>
  <Wrapper id="Formula">
    <Container>
      <Row>
        <SVG
          className="icon"
          path={IconTrees}
          style={{ height: 150, fill: IconColor, margin: "0 auto" }}
        />

        <h4>By the Numbers</h4>

        <Carousel {...carouselSettings}>
          <Slide>
            <div>
              <Stat>$100</Stat>
              <p>
                Most fruit trees cost under $100 to plant and under $100
                annually to maintain, including pruning, irrigation and pest
                control.
              </p>
            </div>
          </Slide>

          <Slide>
            <div>
              <Stat>250-420 lbs.</Stat>{" "}
              <p>The average annual yield of a mature semi-dwarf apple tree.</p>
            </div>
          </Slide>
          <Slide>
            <div>
              <Stat>10%</Stat>{" "}
              <p>Planting trees can increase property values by up to 10%.</p>
            </div>
          </Slide>
          <Slide>
            <div>
              <Stat>35%</Stat>{" "}
              <p>
                Up to 35% of California’s scarce water resources are squandered
                on the watering of ornamental lawns, while another 25% goes
                toward commercial agriculture. Converting lawns to orchards
                saves on both scores.
              </p>
            </div>
          </Slide>
          <Slide>
            <div>
              <Stat>20 &#176;</Stat>{" "}
              <p>
                How much cooler it is in the shade of a fruit tree on a hot
                sunny day.
              </p>
            </div>
          </Slide>
          <Slide>
            <div>
              <Stat>1 mile</Stat>{" "}
              <p>
                The distance residents of urban “food deserts” live from a
                supermarket that carries fresh produce.
              </p>
            </div>
          </Slide>
        </Carousel>
      </Row>
      <Row />
    </Container>
  </Wrapper>;

export default Numbers;
