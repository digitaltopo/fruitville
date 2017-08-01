import React, { Component } from "react";

import SVG from "react-svg";

import { Styles, Colors } from "../../constants/";
import { Wrapper, Close } from "./Announce.styles";

import IconClose from "../../assets/img/icons/close.svg";

const Container = Styles.Container;

class Announce extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.setState({ visible: true });
  }

  handleClose() {
    console.log("handle it");
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <Wrapper active={this.state.visible}>
        <Container>
          {" "}<a href="https://goo.gl/forms/LYpy5B1ZLs3VeckE3" target="_blank">
            Applications are open for our our Pilot program! Sign up now!
          </a>
          <Close onClick={this.handleClose}>
            <SVG
              className="icon"
              path={IconClose}
              style={{ height: 20, fill: "white", margin: "0 auto" }}
            />
          </Close>
        </Container>
      </Wrapper>
    );
  }
}

export default Announce;
