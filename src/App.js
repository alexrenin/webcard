import React, { Component } from 'react';
import { v4 } from 'uuid'
import './css/App.css';
import Home from './Home';
import HeaderMenu from './MenuHeaderDesctopAndMobile/HeaderMenu';

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
	language: {
		currentItem: 0,
		listItems: [
			{
				title: 'Русский',
				text: 'RU',
				key: v4(),
			},
			{
				title: 'English',
				text: 'EN',
				key: v4(),
			}
		]
    }

}


class App extends Component {


  render() {
	  let sourse2 = {
		  contentList: sourse.contentList,
		  pullDownMenuContent: sourse.language
		}
    return (
      <div className="App">
        <HeaderMenu {...sourse2}/>
        <div className="contentContainer">
            <Home {...sourse.contentList[0]} />
        </div>

      </div>
    )
  }
}

export default App;
