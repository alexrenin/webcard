import React from 'react';
import PropTypes from 'prop-types';
import './css/Home.css';

import Header from './Header';

const Home = ({hpSourse, t=str=>str}) => {
	let aboutTitle = t(hpSourse.aboutTitle),
		aboutText = t(hpSourse.aboutText);

	return (
		<div className="homePage">
			<a name={hpSourse.href}></a>
			<Header {...{...hpSourse, t}} />
			<div className="about">
				<div className="text">
					<h1>
						{aboutTitle}
					</h1>
					<p>
						{aboutText}
					</p>
				</div>
			</div>
		</div>
	)
}
Home.propTypes = {
    hpSourse: PropTypes.object,
	t: PropTypes.func,
}

export default Home