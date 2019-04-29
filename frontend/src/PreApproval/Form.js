import React from 'react';
import PersonalInfo from './PersonalInfo';
import Household from './Household'

class Form extends React.Component {
  render() {
    return (
      <>
        <div  className='padding'>
          <p className='formTitle'>Pre-Approval Adoption Form</p>
            <p className='waiting'>(There is a mandatory 3-5 bussiness days waiting period for all adoptions.)
            </p>
              <form className='formBorder' noValidate autoComplete="off">
              <div>Personal Info</div>
                <PersonalInfo/>
              <div>Household Info</div>
                <Household/>

                  <button className='preButton'>Submit</button>
              </form>
        </div>
      </>
    );
  }
}

export default Form;
