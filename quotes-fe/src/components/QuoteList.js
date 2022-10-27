import React, { Component } from "react";
import { Table } from "reactstrap";
import NewQuoteModal from "./NewQuoteModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class QuoteList extends Component {
  render() {
    const quotes = this.props.quotes;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Autor</th>
            <th>Cita</th>
            <th>Fuente</th>
            <th>Contexto</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!quotes || quotes.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Aún no hay nada aquí</b>
              </td>
            </tr>
          ) : (
            quotes.map(quote => (
              <tr key={quote.pk}>
                <td>{quote.author}</td>
                <td>{quote.quote}</td>
                <td>{quote.reference}</td>
                <td>{quote.context}</td>
                <td align="center">
                  <NewQuoteModal
                    create={false}
                    quote={quote}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={quote.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default QuoteList;
