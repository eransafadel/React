

import React from 'react';
import axios from 'axios';
import '../App.css';

class Form extends React.Component {
	state = { userName: '' };
  handleSubmit = async (event) => 
  {
    event.preventDefault();
    //axios return a promise therfore we need to put await , and on sign of func put async
    // another thing to take a dynamic user we append the "/$this.state.userName" to link of github
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`); 
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' }); // initial the box to placeholder after add new Card
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}

export default Form
