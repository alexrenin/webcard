import React from 'react';
import PropTypes from 'prop-types'
import './css/logo.css';

const Logo = ({title='title', subTitle='subTitle'}) =>
    <div className="logo">
        <div className="circle">
            <div className="title">{title}</div>
            <div className="subTitle">{subTitle}</div>
        </div>
    </div>

Logo.propTypes = {
    ingredients: PropTypes.string,
    steps: PropTypes.string
}
export default Logo