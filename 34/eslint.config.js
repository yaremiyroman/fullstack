module.exports = [
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            "indent": ["error", 4, {
                "ignoredNodes": ["TemplateLiteral *"]
            }]
        },
    },
];
