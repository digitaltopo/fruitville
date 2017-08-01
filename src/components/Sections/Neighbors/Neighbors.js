import React, { Component } from "react";

import { Styles } from "../../../constants/";
import { Wrapper, Bios, Bio, Tree } from "./Neighbors.styles";

import NeighborsMap from "../Neighbors/components/NeighborsMap";

const Container = Styles.Container;

class Neighbors extends Component {
  constructor(props) {
    super(props);

    this.handleBioClick = this.handleBioClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      currentBio: "Shela"
    });
  }
  handleBioClick(bio) {}

  render() {
    return (
      <Wrapper id="Neighbors">
        <Container>
          <h2>Making Connections</h2>
          <p>
            When you become a citizen of <strong>Fruitville</strong>, you add
            your agricultural might to a community that’s far more than the sum
            of its parts. Your orchard can be as unique as you are while
            contributing to real economic, cultural and environmental change at
            the enterprise level. Click through to meet some of the orchardists
            in your town—maybe even on your block.
          </p>
        </Container>
        <NeighborsMap onBioClick={this.handleBioClick} />

        <Container>
          <Bios>
            <Bio active={this.state.currentBio === "Shela"}>
              <h4>Shela</h4>
              <h5>
                <Tree>
                  <i>Trees:</i> Meyer Lemon, Satsuma Orange
                </Tree>
              </h5>
              <p>
                Like many California householders, Shela lives more than a mile
                from any source of fresh produce in a neighborhood where
                concrete dominates the streetscape. Her new orchard enhances her
                quality of life by providing fresh fruit and shade and earns her
                equity by upgrading the curb appeal of her property.
              </p>
            </Bio>
            <Bio active={this.state.currentBio === "Minh"}>
              <h4>Minh</h4>
              <h5>
                <Tree>
                  <i>Trees: </i>Bing Cherry
                </Tree>
              </h5>
              <p>
                Minh is an avid gardener who tends to rotating crops growing
                under her orchard of six trees. She plans to reinvest her
                profits in expanding her orchard.
              </p>
            </Bio>

            <Bio active={this.state.currentBio === "Clyde"}>
              <h4>Clyde</h4>
              <h5>
                <Tree>
                  <i>Trees: Gala Apple, Papaya</i>
                </Tree>
              </h5>
              <p>
                Clyde owns six multi-family rental properties around Santa
                Clara, with a combined total of over three acres of arable land
                comprising lawns and common areas.
              </p>
            </Bio>
          </Bios>
        </Container>
      </Wrapper>
    );
  }
}

export default Neighbors;
