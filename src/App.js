import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';
import Menu from './Menu'

const sourse = {
    logo: {
        title: 'AR',
        subTitle: 'develop'
    },
    name: 'Александр',
    profession: 'Front-end developer',
    stackTehn: [
        'HTML5', 'JS2015+', 'CSS3.1',
        'React', 'Redux'
    ]
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Header
            logo = {sourse.logo}
            name = {sourse.name}
            profession = {sourse.profession}
            stackTehn = {sourse.stackTehn}
        />
      </div>
    );
  }
}

export default App;
