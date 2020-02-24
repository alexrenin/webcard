const C = require('./constants_node')

module.exports.onCreatePage = ({ page, actions, dateFormat, langID }) => {
    const { createPage, deletePage } = actions

    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)

    const { locales = [] } = C

    locales.forEach( ({ path, isDefault }) => {
        const localizedPath = isDefault
            ? page.path
            : `/${path}${page.path}`

        console.log(page.path)
        return createPage({
            ...page,
            path: localizedPath,
            context: {
                ...page.context,
                locale: langID,
                dateFormat: dateFormat,
            },
        })
    })
}