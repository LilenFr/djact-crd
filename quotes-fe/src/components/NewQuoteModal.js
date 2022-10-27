import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewQuoteForm from "./NewQuoteForm";

class NewQuoteModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editar cita";
    var button = <Button outline color="warning" size="sm" block onClick={this.toggle}>Editar</Button>;
    if (create) {
      title = "Añadir nueva cita";

      button = (
        <Button
          outline color="primary"
          size="sm"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Añadir
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewQuoteForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              quote={this.props.quote}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewQuoteModal;
