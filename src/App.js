import React, { Component } from 'react';
import Panel from './components/Panel/Panel';
import jsonData from './data/content.json';
import './App.css';

class App extends Component {
  initialState = {
    data: null
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  
  componentDidMount() {
    /*
    In ideal scenario, we should get jsonData async, as part of a FETCH call
    A fetchService is created to show how we could have gotten it (./services/fetchService)
    */
    this.setState({
      data: jsonData
    });
  }

  render() {
    const data = this.state.data;

    // show 'Please wait..' message while the content is being fetched
    const comp = data
      ? (<Panel data={data} />)
      : (<div className='please-wait'>Please wait...</div>);

    return (
      <div className="app">
        {comp}
      </div>
    );
  }
}

export default App;
