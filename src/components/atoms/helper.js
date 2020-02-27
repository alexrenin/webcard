import C from '../../constant'

export function getLocaleByContenfulID(locale) {
    return C.locales.find(({ contentfulID }) => contentfulID === locale)
}

export function getLinkWithLocale({
    link = '',
    locale = 'en-US',
}) {
    const currentLocale = getLocaleByContenfulID(locale),
        { path, isDefault = false } = currentLocale

    const localeSubLink = isDefault ? `` : `/${path}`

    return localeSubLink + link
}