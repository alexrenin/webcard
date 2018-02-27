import React, { Component } from 'react';
import { v4 } from 'uuid'
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
    ],
    listItems: [
        {
            title: 'Главная',
            href: '',
            key: v4(),
        },
        {
            title: 'Резюме',
            href: '',
            key:  v4()
        },
        {
            title: 'Портфолио',
            href: '',
            key:  v4()
        },
        {
            title: 'Контакты',
            href: '',
            key:  v4()
        },
    ]
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu
            onClick = { (event, inputIsChecked) => {
                let appDiv = document.querySelector('.App');
                inputIsChecked ?
                    appDiv.classList.remove('menuOpen') :
                    appDiv.classList.add('menuOpen')
            }}
            {...sourse}
        />
        <div className="contentContainer">
            <Header {...sourse} />
        </div>

      </div>
    );
  }
}

export default App;
