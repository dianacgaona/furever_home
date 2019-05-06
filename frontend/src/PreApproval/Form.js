import React from 'react';
import PersonalInfo from './PersonalInfo';
import Household from './Household'
import References from './References'
import '../css/approval.css';

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      formCompleted: false,
      name: '',
      email: '',
      phone: ''
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
            <div className='formResponse'>
              <div className='response1'>Thank you for your interest in {this.props.profile.name}, {this.state.name}.</div>

              <div className='response2'>Please allow 3-5 business days for a reply. We and {this.props.profile.org_name} will review your application and get back to you at the information you kindly provided us ({this.state.email} or {this.state.phone}).</div>

              <div className='response3'>We hope to connect you with your furever friends as soon as possible!</div>
            </div>
          </>
         :
         <div  className='padding'>
           <p className='formTitle'>Pre-Approval Adoption Form</p>
             <p className='waiting'>(There is a mandatory 3-5 bussiness days waiting period for all adoptions.)
             </p>
               <form className='formBorder' noValidate autoComplete="off">
                 <div className='personalInfo'>Personal Info</div>
                   <PersonalInfo name={this.state.name}
                                  phone={this.state.phone} email={this.state.email} handleChange={this.handleChange}/>
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
