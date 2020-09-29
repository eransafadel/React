import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import CardList from  './componentes/CardList'
import Form from './componentes/Form'



class App extends React.Component {
  state = {
    profiles: [],// array
  };

  // create a function that get profileData from a Form - that parameter is the response.data from axius (github)
 
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
     
      profiles: [...prevState.profiles, profileData],// concat the response.data from axius (github) to the curr state
                                                      // (to the array of profiles)
    }));
  };
  render() // return the virtual dom  
  {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />  
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  document.getElementById('root'),
);

export default App;
