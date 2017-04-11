import React, { Component } from 'react';
import { Input, Segment } from 'stardust';
import { graphql } from 'react-apollo';
import { addUrlMutation } from '../graphql/urlMutation'

class LinkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {link: '', validationMessage: null, submitMessage: null, succesMessage: null};
    this.urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    // bind methods for events
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.keyCode === 13 || event.keyCode === undefined) {
      this.setState({link: event.target.value});

      if (event.target.value !== '') {
        if (this.urlRegex.test(event.target.value) === false) {
          this.setState({validationMessage: <Segment inverted color='orange' tertiary>
            You must enter a valid URL
          </Segment>});
        } else {
          this.setState({validationMessage: null});
        }
      } else {
        this.setState({validationMessage: null});
      }
    }
  }

  handleSubmit(event) { 
    event.preventDefault();

    if (this.state.link === '') {
      this.setState({submitMessage: <Segment inverted color='red' tertiary>
        You must provide a link before clicking on "Add"
      </Segment>});
    } else {
      event.persist();
      this.setState({submitMessage: ''});

      this.props.mutate({
        variables: {url: this.state.link}
      }).then(res => {
        this.setState({succesMessage: <Segment inverted color='green' tertiary>
          Your URL {this.state.link} has been succesfully added !
        </Segment>});

        this.setState({link: ''});
      })
    }
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <Input 
                type="text" 
                value={this.state.link} 
                onChange={this.handleChange} 
                onKeyUp={this.handleChange}
                placeholder="type a link" action={{color: 'teal', content: 'Add', icon: 'cloud download'}} />
              {this.state.submitMessage}
              {this.state.validationMessage}
              {this.state.succesMessage}
          </form>
      </div>
    ) 
  }
}

const AddUrlMutation = graphql(addUrlMutation)(LinkForm);

// export default LinkForm;
export default AddUrlMutation;