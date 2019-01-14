import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';
import '../css/fonts/fontawesome-free-5.6.3-web/css/all.css'
import { v4 } from 'uuid';

const Contact = ({title="title", href="", contactList=[], t=str=>str}) => {
	return (
		<div className="contactPage">
			<a name={href}></a>
			<h1 className="contactTitle">{t(title)}</h1>
			<ul className="socialContainer">
			{contactList.map(
				item => {
					let key = v4()
					return (
						<ContactItem {...{...item, key, t}}/>
					)

				}
			)}
			</ul>
		</div>
	)
}

Contact.propTypes = {
	href: PropTypes.string,
	title: PropTypes.string,
	contactList:PropTypes.array,
	t: PropTypes.func,
}
const ContactItem = ({href="", classNameCI="", title="", t=str=>str}) => {
	return (
		<li className="socialLinkContainer">
			<a href={href} className="socialLink" target="_blank">
			<i className={classNameCI}></i>
			<h3 className="portfolioFigcaptionTitle">
					{t(title)}
			</h3>
			</a>
		</li>
	)
}
ContactItem.propTypes = {
	href: PropTypes.string,
	classNameCI: PropTypes.string,
	title:PropTypes.string,
	t: PropTypes.func,
}

export default Contact