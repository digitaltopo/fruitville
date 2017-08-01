import React from "react";

import { Styles, Colors } from "../../../constants/";
import { Wrapper, Box } from "./SectionOne.styles";

import SVG from "react-svg";

import IconPlant from "../../../assets/img/icons/potted-planets.svg";
import IconShovel from "../../../assets/img/icons/digging.svg";
import IconPeach from "../../../assets/img/icons/peach.svg";
import Money from "../../../assets/img/icons/money.svg";

const IconColor = Colors.Green;

const Row = Styles.Row;

const Container = Styles.Container;

const SectionOne = props =>
  <Wrapper id="SectionOne">
    <Container>
      <h2>How it works</h2>
      <Row>
        <Box>
          <SVG
            className="icon"
            path={IconPlant}
            style={{ height: 150, fill: IconColor, margin: "0 auto" }}
          />

          <h4>1. Join</h4>
          <p>
            As a <strong>Fruitville</strong> arborista, you become a
            member-owner of a resilient, distributed enterprise. Together we’re
            scaling urban agriculture to sustain whole communities.
          </p>
        </Box>
        <Box>
          <SVG
            className="icon"
            path={IconShovel}
            style={{ height: 150, fill: IconColor, margin: "0 auto" }}
          />
          <h4>2. Plant</h4>
          <p>
            You commit your land; we do the rest. We determine the most hardy
            and profitable species, then we plant and maintain your fruit trees.
          </p>
        </Box>
      </Row>
      <Row>
        <Box>
          <SVG
            className="icon"
            path={IconPeach}
            style={{ height: 150, fill: IconColor, margin: "0 auto" }}
          />
          <h4>3. Eat</h4>
          <p>
            Enjoy the fruits of your investment any time you like, straight from
            the tree—there’s nothing quite like biting into a peach still warm
            from the sun that grew it.
          </p>
        </Box>
        <Box>
          <SVG
            className="icon"
            path={Money}
            style={{ height: 150, fill: IconColor, margin: "0 auto" }}
          />

          <h4>4. Earn</h4>
          <p>
            We’ll harvest your crop and take it to market. The{" "}
            <strong>Fruitville </strong>
            community is designed to absorb the risks and distribute the rewards
            equally among all growers—you’ll never have to worry about going
            bust in a bad year.
          </p>
        </Box>
      </Row>
    </Container>
  </Wrapper>;

export default SectionOne;
