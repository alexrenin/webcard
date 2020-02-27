import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { v4 } from 'uuid'
import ContactUrlBtn from '../../atoms/contactUrlBtn/contactUrlBtn'

const propTypesContacts = {
	href: PropTypes.string,
	title: PropTypes.string,
	contactList:PropTypes.array,
}
function Contacts ({
	title="",
	href="",
	contactList=[],
}) {

	return (
		<div
			className="contactPage"
			id={href}
		>
			<h1 className="contactTitle">
				{title}
			</h1>
			<ul className="socialContainer">
				{contactList.map(
					item => {
						const key = v4()
						return (
							<ContactUrlBtn {...{
								...item,
								key,
							}} />
						)
					}
				)}
			</ul>
		</div>
	)
}

Contacts.propTypes = propTypesContacts

export default Contacts