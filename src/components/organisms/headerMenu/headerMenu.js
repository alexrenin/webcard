import React from 'react'
import PropTypes from 'prop-types'
import MenuList from '../../molecules/menuList/menuList'
import PullDownMenu from '../../molecules/pullDownMenu/pullDownMenu'
import './style.css'

const propTypesHeaderMenu = {
	onClick: PropTypes.func,
	listItems: PropTypes.array,
	t: PropTypes.func,
}
function HeaderMenu ({
	contentList,
	pullDownMenuContent,
	pullDownMenuClick = f => f,
}) {
	return (
		<div className="headerMenu">
			<MenuList
				listItems={contentList}
			/>
			<PullDownMenu {... {
				...getPullDownMenuContent(pullDownMenuContent),
				pullDownMenuClick,
			}} />
		</div>
	)
}
HeaderMenu.propTypes = propTypesHeaderMenu

function getPullDownMenuContent({ locales, locale }) {

    const currentItem = locales.indexOf(
        locales.find( ({ contentfulID }) => locale === contentfulID )
    )

    return {
        currentItem,
        listItems: locales.map ( ({ langID, path, name }) => {
            return {
                title: name,
                text: path,
                id: langID,
            }
        })
    }
}

export default HeaderMenu