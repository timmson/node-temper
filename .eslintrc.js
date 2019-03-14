module.exports = {
    "env": {
        "browser": false,
        "commonjs": true,
        "es6": true
    },
    "extends": "standard",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "semi": [
            "error",
            "always"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "indent": "off",
        "space-before-function-paren": "off",
        "no-unused-expressions": "off",
        "security/detect-child-process" : "off"
    },
    "plugins": [
        "security"
    ],
    "extends": [
        "plugin:security/recommended"
    ]
};
