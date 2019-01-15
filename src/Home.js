import React from 'react';
import PropTypes from 'prop-types';
import './css/Home.css';

import Header from './Header';

const Home = ({hpSourse, t=str=>str}) => {
	return (
		<div className="homePage" id={hpSourse.href}>
			<Header {...{...hpSourse, t}} />
		</div>
	)
}
Home.propTypes = {
    hpSourse: PropTypes.object,
	t: PropTypes.func,
}

export default Home