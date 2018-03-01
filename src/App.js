import React, { Component } from 'react';
import { v4 } from 'uuid'
import './css/App.css';

import Header from './Header';
import Menu from './Menu'

const sourse = {
    contentList: [
        {
            title: 'Главная',
            href: '',
            key: v4(),
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
            aboutText: ''
        },
        {
            title: 'Резюме',
            href: '',
            key: v4(),
        },
        {
            title: 'Портфолио',
            href: '',
            key: v4(),
        },
        {
            title: 'Контакты',
            href: '',
            key: v4(),
        }
    ],
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu
            {...sourse}
            onClick = { (event, inputIsChecked) => {
                let appDiv = document.querySelector('.App');
                inputIsChecked ?
                    appDiv.classList.remove('menuOpen') :
                    appDiv.classList.add('menuOpen')
            }}
        />
        <div className="contentContainer">
            <Header {...sourse.contentList[0]} />
        </div>

      </div>
    );
  }
}

export default App;
