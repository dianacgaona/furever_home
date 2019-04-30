import React from 'react';
import PersonalInfo from './PersonalInfo';
import Household from './Household'
import References from './References'
import '../css/approval.css';

class Form extends React.Component {
  constructor(){
    super()
    this.state= {
      formCompleted: false,
      name: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(e){
  e.preventDefault()
  this.setState({
    formCompleted: !this.state.formCompleted
  })
}
  render() {
    return (
      <>
        {this.state.formCompleted ?
          <>
            <p className='formResponse'>Thank you for your interest {this.state.name}. Please allow 3-5 business days for a reply. </p>
          </>
         :
         <div  className='padding'>
           <p className='formTitle'>Pre-Approval Adoption Form</p>
             <p className='waiting'>(There is a mandatory 3-5 bussiness days waiting period for all adoptions.)
             </p>
               <form className='formBorder' noValidate autoComplete="off">
                 <div className='personalInfo'>Personal Info</div>
                   <PersonalInfo name={this.state.name} handleChange={this.handleChange}/>
                 <div className='householdInfo'>Household Info</div>
                   <Household/>
                 <div className='references'>References</div>
                     <References/>
                   <button className='preButton' onClick={this.handleSubmit}>Submit</button>
               </form>
        </div>
        }

      </>
    );
  }
}

export default Form;
