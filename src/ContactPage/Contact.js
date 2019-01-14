import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';
import '../css/fonts/fontawesome-free-5.6.3-web/css/all.css'
import { v4 } from 'uuid';

const Contact = ({t=str=>str}) => {
	return (
		<div className="contactPage">
			<i className="fab fa-github-square"></i>
		</div>
	)
}

Contact.propTypes = {
	t: PropTypes.func,
}

export default Contact