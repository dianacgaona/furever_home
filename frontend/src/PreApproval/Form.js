import React, { Component } from 'react';
import PreApproval from './PreApproval';

class Form extends React.Component {
  render() {
    return (
      <>
        <div>
          <p className='formTitle'>Pre-Approval Adoption Form</p>
            <p className='waiting'>(There is a mandatory 3-5 bussiness days waiting period for all adoptions.)
            </p>
              <PreApproval/>
        </div>
      </>
    );
  }
}

export default Form;
