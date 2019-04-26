import React from 'react';
import '../css/adopted.css';

import Modal from 'react-modal';
import { MyContext } from '../provider/MyProvider';
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

class PostModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
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
    this.subtitle.style.color = '#2F1847';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    // console.log(this.props);
    return (



<MyContext.Consumer>
        {context => {
          return (
            <div>
              <div className='buttonCont'>
                <button onClick={this.openModal} className='profileButton'>Add a Post</button>
              </div>
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
                    debugger
                    this.props.handleSubmit(e, context.state.currentUser.id);
                  }}

                  id="post_form"
                  className="modalForm"

                >
                  <input
                    type="text"
                    value={this.props.inputTitleText}
                    onChange={this.props.handleChange}
                    placeholder="Title"
                    name="inputTitleText"
                  />
                  <input
                    type="text"
                    value={this.props.inputPost_Url}
                    onChange={this.props.handleChange}
                    placeholder="Image URL"
                    name="inputPost_Url"
                  />
                  <input
                    type="text"
                    value={this.props.inputBodyText}
                    onChange={this.props.handleChange}
                    placeholder="Body"
                    name="inputBodyText"
                  />
                  Dog
                  <input
                    type="radio"
                    name="pet_type"
                    value="Dog"
                    checked={this.props.pet_type === 'Dog'}
                    onChange={this.props.handleChange}
                  />
                  Cat
                  <input
                    type="radio"
                    name="pet_type"
                    value="Cat"
                    checked={this.props.pet_type === 'Cat'}
                    onChange={this.props.handleChange}
                  />
                  <input  type="submit" value="Add Post" />
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

export default PostModal;
