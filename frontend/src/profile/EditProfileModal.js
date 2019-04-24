import React from "react";
import Modal from "react-modal";
import { MyContext } from "../provider/MyProvider";
import axios from "axios";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class ProfileModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      inputUsername: "",
      inputAge: "",
      inputLocation: "",
      inputBioText: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    // console.log(user)
    axios
      .post(`/users/`, {
        username: this.state.inputUsername,
        age: this.state.inputAge,
        location: this.state.inputLocation,
        bio: this.state.inputBioText
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(res => {
        this.getPosts();
      });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <button onClick={this.openModal}>Edit Profile</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 ref={subtitle => (this.subtitle = subtitle)}>
                  Fill out the fields and click Submit{" "}
                </h2>

                <form
                  onSubmit={e => {
                    this.state.handleSubmit(e, context.state.currentUser.id);
                  }}
                  id="post_form"
                  className="modalForm"
                >
                  <input
                    type="text"
                    value={this.state.inputUsername}
                    onChange={this.handleChange}
                    placeholder="Username"
                    name="inputUsername"
                  />
                  <input
                    type="text"
                    value={this.state.inputAge}
                    onChange={this.handleChange}
                    placeholder="Age"
                    name="inputAge"
                  />
                  <input
                    type="text"
                    value={this.state.inputLocation}
                    onChange={this.handleChange}
                    placeholder="Location"
                    name="inputLocation"
                  />
                  <input
                    type="text"
                    value={this.state.inputBioText}
                    onChange={this.handleChange}
                    placeholder="Bio"
                    name="inputBioText"
                  />

                  <input  onClick={this.closeModal}type="submit" value="Edit Profile" />
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
