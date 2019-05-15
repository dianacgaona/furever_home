import React from "react";
import "../css/postmodal.css";

import Modal from "react-modal";
import { MyContext } from "../provider/MyProvider";

class PostModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
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
    this.subtitle.style.color = "#4169c1";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div>
              <div className="modal_open">
                <button onClick={this.openModal} className="modal_open_button">
                  Add a Post
                </button>
              </div>
              <Modal
                ariaHideApp={false}
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                className="modal_post_container"
              >
                <div className="modal_post_close">
                  <button
                    onClick={this.closeModal}
                    className="modal_post_button"
                  >
                    X
                  </button>
                </div>
                <h2
                  ref={subtitle => (this.subtitle = subtitle)}
                  className="modal_post_title"
                >
                  Create a Post
                </h2>
                <form
                  onSubmit={e => {
                    this.props.handleSubmit(e, context.state.currentUser.id);
                  }}
                  id="post_form"
                  className="modal_post_form"
                >
                  <div className="modal_post_left">
                    <label className="modal_post_label">Image</label>
                    <input
                      type="text"
                      value={this.props.inputPost_Url}
                      onChange={this.props.handleChange}
                      placeholder="Image URL"
                      name="inputPost_Url"
                      className="modal_post_input"
                    />
                  </div>
                  <div className="modal_post_right">
                    <label className="modal_post_label">Post Title</label>
                    <input
                      type="text"
                      value={this.props.inputTitleText}
                      onChange={this.props.handleChange}
                      placeholder="Title"
                      name="inputTitleText"
                      className="modal_post_input"
                    />
                    <label className="modal_post_label">Post</label>
                    <textarea
                      type="text"
                      value={this.props.inputBodyText}
                      onChange={this.props.handleChange}
                      placeholder="Body"
                      name="inputBodyText"
                      className="modal_post_text"
                    />
                    <div className="modal_post_checkdiv">
                      <label className="modal_post_label">Dog</label>
                      <input
                        type="radio"
                        name="pet_type"
                        value="Dog"
                        checked={this.props.pet_type === "Dog"}
                        onChange={this.props.handleChange}
                        className="modal_post_check"
                      />
                      <label className="modal_post_label">Cat</label>
                      <input
                        type="radio"
                        name="pet_type"
                        value="Cat"
                        checked={this.props.pet_type === "Cat"}
                        onChange={this.props.handleChange}
                        className="modal_post_check"
                      />
                    </div>
                    <div className="modal_post_close">
                      <input
                        type="submit"
                        value="Add Post"
                        className="modal_post_submit"
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

export default PostModal;
