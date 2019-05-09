import React from "react";
import Modal from "react-modal";
import { MyContext } from "../provider/MyProvider";
import axios from "axios";
import "../css/profilemodal.css";

class ProfileModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      inputProfile_PictureURL: props.oldState.profileUser.profile_picture,
      inputUsername: props.oldState.profileUser.username,
      inputLocation: "",
      inputCity: props.oldState.profileUser.city,
      inputState: "",
      inputAboutText: props.oldState.profileUser.about
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {

    this.props.getSingleUser();
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#2F1847";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e, user) => {
    e.preventDefault();
    axios
      .patch(`/users/profile/${user}`, {
        username: this.state.inputUsername,
        about: this.state.inputAboutText,
        profile_picture: this.state.inputProfile_PictureURL
      })
      .then(res => {
        console.log(res.data);
      })
      .then(() => {
        axios.patch(`/users/profile/location/${user}`, {
          city: this.state.inputCity,
          state: this.state.inputState
        });
      })
      .then(() => {
        this.props.getSingleUser();
      });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <div className="modal_open">
                <button onClick={this.openModal} className="modal_open_button_post">
                  Edit Profile
                </button>
              </div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                className="modal_container"
              >
                <div className="modal_close">
                  <button onClick={this.closeModal} className="modal_button">
                    X
                  </button>
                </div>
                <h2
                  ref={subtitle => (this.subtitle = subtitle)}
                  className="modal_title"
                >
                  Edit Profile
                </h2>
                <form
                  onSubmit={e => {
                    this.handleSubmit(e, context.state.currentUser.id);
                  }}
                  id="post_form"
                  className="modal_form"
                >
                  <div className="modal_left">
                    <label className="modal_label">Profile Picture</label>
                    <input
                      type="text"
                      value={this.state.inputProfile_PictureURL}
                      onChange={this.handleChange}
                      placeholder="Photo Url"
                      name="inputProfile_PictureURL"
                      className="modal_input"
                    />
                  </div>
                  <div className="modal_right">
                    <label className="modal_label">Username</label>
                    <input
                      type="text"
                      value={this.state.inputUsername}
                      onChange={this.handleChange}
                      placeholder="Username"
                      name="inputUsername"
                      className="modal_input"
                    />
                    <label className="modal_label">City</label>
                    <input
                      type="text"
                      value={this.state.inputCity}
                      onChange={this.handleChange}
                      placeholder="City"
                      name="inputCity"
                      className="modal_input"
                    />
                    <label className="modal_label">State</label>
                    <input
                      type="text"
                      value={this.state.inputState}
                      onChange={this.handleChange}
                      placeholder="State"
                      name="inputState"
                      className="modal_input"
                    />
                    <label className="modal_label">About Me</label>
                    <textarea
                      type="text"
                      value={this.state.inputAboutText}
                      onChange={this.handleChange}
                      placeholder="About"
                      name="inputAboutText"
                      className="modal_about"
                    />
                    <div className="modal_close">
                      <input
                        type="submit"
                        value="Save"
                        className="modal_submit"
                      />
                    </div>
                  </div>
                </form>
              </Modal>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default ProfileModal;
