module.exports = {
    extends: ['eslint:recommended'],
    parserOptions: { // to support es6 syntaxes
        ecmaVersion: 6,
    },
    env: { // to support "module" name
        node: true,
    }
};
