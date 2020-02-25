const C = require('./constants_node')

module.exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions

    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)

    const { locales = [] } = C

    locales.forEach( ({ path, isDefault, contentfulID }) => {
        const localizedPath = isDefault
            ? page.path
            : `/${path}${page.path}`
        
        return createPage({
            ...page,
            path: localizedPath,
            context: {
                ...page.context,
                locale: contentfulID,
                // dateFormat: dateFormat,
            },
        })
    })
}