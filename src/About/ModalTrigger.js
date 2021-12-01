import React, { Component } from "react";

const ModalTrigger = () => {
  return (
    <button
      ref={this.props.buttonRef}
      onClick={this.props.showModal}
      className="modal-button"
    >
      {this.props.triggerText}
    </button>
  );
};

export default ModalTrigger;
