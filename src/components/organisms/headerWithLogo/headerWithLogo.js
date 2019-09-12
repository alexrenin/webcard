import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../atoms/logo/logo'
import './style.css'

const propTylesHeaderWithLogo = {
	name: PropTypes.string,
	profession: PropTypes.string,
	stackTehn: PropTypes.array,
}

function HeaderWithLogo ({
	name = 'name',
	profession = 'profession',
	stackTehn = [],
}) {

	const stackStr = stackTehn.reduce(((sum, current) =>
		sum + " / " + current
	),'').slice(3)

	return (
		<div className="header">
			<div>
				<div className="headerTitle">
					<Logo />
					<div className="nameProf">
						<div className="name">
							{name}
						</div>
						<div className="profession">
							{profession}
						</div>
					</div>

				</div>
				<div className="stackTechnologies">
					{stackStr}
				</div>
			</div>
		</div>
	)
}

HeaderWithLogo.propTypes = propTylesHeaderWithLogo

export default HeaderWithLogo