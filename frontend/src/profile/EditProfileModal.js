import React from 'react';
import Modal from 'react-modal';
import { MyContext } from '../provider/MyProvider';
import axios from 'axios';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class ProfileModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      inputProfile_PictureURL: props.oldState.profileUser.profile_picture,
      inputUsername: props.oldState.profileUser.username,
      inputAge: '',
      inputLocation: '',
      inputCity: props.oldState.profileUser.city,
      inputState: '',
      inputAboutText: props.oldState.profileUser.about,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
componentDidMount(){
  console.log(this.props);
  this.props.getSingleUser()

}
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#2F1847';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

// Variable 1 is previous State getSingleUser()
// const oldInfo = {this.state}
//
// VARIABLE 2 IS CURRENT STATE onSubmit input fields
//
// username: this.state.inputUsername? this.state.inputUsername : oldInfor.inputUsername
// about:this.state.inputAboutText ? this.state.inputAboutText : oldInfor.inputAboutText
// profile_picture:this.state.inputProfile_PictureURL ? this.state.inputProfile_PictureURL : oldInfor.inputProfile_PictureURL
// city:this.state.inputCity ? this.state.inputCity : oldInfor.inputCity
// state:this.state.inputState ? this.state.inputState : oldInfor.inputState
// VARIABLE 3 IS FUTURE STATE happens on submit it evaluates
//
// username: '',
// about: '',
// profile_picture: '',
// city: this.state.inputCity,
// state: this.state.inputState,


  handleSubmit = (e, user) => {

    e.preventDefault();
    // debugger;
    // console.log(user)
    axios
      .patch(
        `/users/profile/${user}`, {
        username: this.state.inputUsername,
        about: this.state.inputAboutText,
        profile_picture: this.state.inputProfile_PictureURL,
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(() => {
        axios.patch(
          `/users/profile/location/${user}`, {
          city: this.state.inputCity,
          state: this.state.inputState,

        });
      })
      .then(()=> {
        this.props.getSingleUser();
      });
  };

  render() {
     // const oldInfo = this.state
     console.log(this.props.oldState.profileUser);
     // console.log(oldInfo, "TYSON");
    return (



<MyContext.Consumer>
        {context => {
          return (
            <div>
              <button onClick={this.openModal}
                      className='profileButton'>Edit Profile</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 ref={subtitle => (this.subtitle = subtitle)}>
                  Fill out the fields and click Submit{' '}
                </h2>

                <form
                  onSubmit={e => {
                    this.handleSubmit(e, context.state.currentUser.id);
                  }}

                  id="post_form"
                  className="modalForm"
                >
                  Change or Add Profile Picture

                  <input
                    type="text"
                    value={this.state.inputProfile_PictureURL}
                    onChange={this.handleChange}
                    placeholder="Photo Url"
                    name="inputProfile_PictureURL"
                  />
                  Username
                  <input
                    type="text"
                    value={this.state.inputUsername}
                    onChange={this.handleChange}
                    placeholder='Username'
                    name="inputUsername"
                  />
                  Where are you from
                  <br />
                  City
                  <input
                    type="text"
                    value={this.state.inputCity}
                    onChange={this.handleChange}
                    placeholder="City"
                    name="inputCity"
                  />
                  State
                  <input
                    type="text"
                    value={this.state.inputState}
                    onChange={this.handleChange}
                    placeholder="State"
                    name="inputState"
                  />
                  <br />
                  Tell us about yourself
                  <input
                    type="text"
                    value={this.state.inputAboutText}
                    onChange={this.handleChange}
                    placeholder="About"
                    name="inputAboutText"
                  />
                  <br />
                  <input

                    type="submit"
                    value="Make Changes"
                  />
                </form>
                <button onClick={this.closeModal}>close</button>
              </Modal>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default ProfileModal;
