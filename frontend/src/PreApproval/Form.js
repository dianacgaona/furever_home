import React, { Component } from 'react';
import PreApproval from './PreApproval';

class Form extends React.Component {
  render() {
    return (
      <>
        <p className='formTitle'>Pre-Approval Adoption Form</p>
        <PreApproval/>
      </>
    );
  }
}

export default Form;
