import React, { Component } from 'react';
import './css/App.css';
import Header from "./Header";

const sourse = {
    logo: {
        title: 'AR',
        subTitle: 'develop'
    },
    name: 'Александр',
    profession: 'Front-end developer'
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
            logo={sourse.logo}
            name={sourse.name}
            profession={sourse.profession}
        />
      </div>
    );
  }
}

export default App;
