import React from 'react';
import PropTypes from 'prop-types';
import './css/Home.css';

import Header from './Header';

const Home = (hpSourse) =>
    <div className="homePage" >
        <a name={hpSourse.href}></a>
        <Header {...hpSourse} />
        <div className="about">
            <div className="text">
                <h1>
                    {hpSourse.aboutTitle}
                </h1>
                <p>
                    {hpSourse.aboutText}
                </p>
            </div>
        </div>
    </div>

Home.propTypes = {
    hpSourse: PropTypes.object,

}

export default Home