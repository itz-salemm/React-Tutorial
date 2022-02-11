import React from 'react';
import './App.css';

function App() {
  function formatName(name){
    if(name) return name.firstname + " " + name.lastname;
    else return "Stranger";
  }

  class Clock extends React.Component{
    constructor(props) {
      super(props)
      this.state = {date: new Date(), name:name}

    }
    render () {
    return  (
      <div>
      <h1>Hello, {this.state.name.firstname}. </h1>
      <p> It is {this.state.date.toLocaleTimeString()} </p>
      </div>
        )
      }
  }


  const name = {
    firstname: 'Salem',
    lastname: "Olorundare"
  }

  return (
    <div className="App">
      <header className="App-header">
      <Clock />
      </header>
    </div>
  );

  setInterval(Clock, 1000);
}



export default App;
