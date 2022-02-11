import React, { Component } from 'react';
import './App.css';

function App() {
  function formatName(name){
    if(name) return name.firstname + " " + name.lastname;
    else return "Stranger";
  }

  class Clock extends React.Component{
    render () {
    return  (
      <div>
      <h1>Hello, {this.props.name.firstname}. </h1>
      <p> It is {this.props.date.toLocaleTimeString()} </p>
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
      <Clock date={new Date()}  name={name}/>
      </header>
    </div>
  );

  setInterval(Clock, 1000);
}



export default App;
