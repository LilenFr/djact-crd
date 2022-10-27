import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import QuoteList from "./QuoteList";
import NewQuoteModal from "./NewQuoteModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    this.resetState();
  }

  getQuotes = () => {
    axios.get(API_URL).then(res => this.setState({ quotes: res.data }));
  };

  resetState = () => {
    this.getQuotes();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <QuoteList
              quotes={this.state.quotes}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewQuoteModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
