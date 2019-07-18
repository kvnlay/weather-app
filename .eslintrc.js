module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb-base", "prettier"],
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": ["error"]
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
};