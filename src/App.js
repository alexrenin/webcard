import React, { Component } from 'react';
import { v4 } from 'uuid'
import './css/App.css';

import Menu from './Menu'
import Home from './Home';

const PAGES_CODE = {
    home: 'home',
    summary: 'summary',
    portfolio: 'portfolio',
    contacts: 'contacts',
}

const sourse = {
    contentList: [
        {
            title: 'Главная',
            href: PAGES_CODE.home,
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
            aboutText: 'Привет! Меня зовут Александр и я Front-end разработчик. \n' +
            'Вникать в проблемы, тонкости новой сферы, а затем воплощать это в четкий и понятный код - вот что мне нравится в программировании. \n' +
            'Это стало моей основной деятельностью 3 года назад, а последний год я специализируюсь на разработке и доработке сайтов.\n' +
            'Я предпочтитаю исплользовать последние стандарты JS, а также React + Redux.\n',
            aboutTitle: 'Немного о себе'
        },
        {
            title: 'Резюме',
            href: PAGES_CODE.summary,
            key: v4(),
        },
        {
            title: 'Портфолио',
            href: PAGES_CODE.portfolio,
            key: v4(),
        },
        {
            title: 'Контакты',
            href: PAGES_CODE.contacts,
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
            <Home {...sourse.contentList[0]} />
        </div>

      </div>
    );
  }
}

export default App;
