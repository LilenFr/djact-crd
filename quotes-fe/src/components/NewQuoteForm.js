import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

class NewQuoteForm extends React.Component {
  state = {
    pk: 0,
    author: "",
    quote: "",
    reference: "",
    context: "",
  };

  componentDidMount() {
    if (this.props.quote) {
      const { pk, author, quote, reference, context } = this.props.quote;
      this.setState({ pk, author, quote, reference, context});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createQuote = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editQuote = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form
        onSubmit={this.props.quote ? this.editQuote : this.createQuote}
      >
        <FormGroup>
          <Label for="author">Autor:</Label>
          <Input
            type="text"
            name="author"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.author)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="quote">Cita:</Label>
          <Input
            type="text"
            name="quote"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.quote)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="reference">Fuente:</Label>
          <Input
            type="text"
            name="reference"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.reference)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="context">Contexto:</Label>
          <Input
            type="text"
            name="context"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.context)}
          />
        </FormGroup>
        <Button>Subir</Button>
      </Form>
    );
  }
}

export default NewQuoteForm;
