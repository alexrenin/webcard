module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    'extends': [
        'react-app',
    ],
    'plugins': [
        'jsx-a11y'
    ],
    'rules': {
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/require-default-props': [1, { forbidDefaultForRequired: true, ignoreFunctionalComponents: true }],
        "indent": ["error", 2],
        "react/jsx-indent": ["error", 2],
        "react/jsx-indent-props": ["error", 2],
        "no-console": ["error", { allow: ["warn", "error"] }]
    },
    'settings': {
        'import/resolver': {
            'node': {
                'paths': ['src']
            }
        }
    }
};

