import React from 'react';
import PropTypes from 'prop-types';
import './css/Header.css';
import Logo from './logo';

const Header = ({logo, name='name', profession='profession', stackTehn=[]}) => {
    const { subTitle, title } = logo;
    return (
        <div className="header">
            <div>
                <div className="headerTitle">
                    <Logo title={title} subTitle={subTitle}/>
                    <div className="nameProf">
                        <div className="name"> {name} </div>
                        <div className="profession"> {profession} </div>
                    </div>

                </div>
                <div className="stackTechnologies">
                    {
                        stackTehn.reduce((sum, current, i, arr) =>
                            sum += (" / " + current)
                        )
                    }
                </div>
            </div>
        </div>
    )
}


Header.propTypes = {
    name: PropTypes.string,
    profession: PropTypes.string,
    stackTehn: PropTypes.array
}

export default Header