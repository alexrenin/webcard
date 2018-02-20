import React, { Component } from 'react';
import './css/App.css';
import Logo from './logo';

const sourse = {
    logo: {
        title: 'AR',
        subTitle: 'develop'
    }
}


class App extends Component {
  render() {
      const { subTitle, title } = sourse.logo;
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Logo title={title} subTitle={subTitle}/>
      </div>
    );
  }

}

{}
export default App;
