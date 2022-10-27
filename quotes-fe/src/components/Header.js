import React, { Component } from "react";
import Img from "./img-stcm1-PhotoRoom.png"

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={Img}
          width="400"
          style={{ marginTop: "5px" }}
        />
        <hr />
        <h5>
          <i>App React + Django</i>
        </h5>
        <h1>Citas estoicas</h1>
      </div>
    );
  }
}

export default Header;
