module.exports = {
  "extends": [
    "google",
    "plugin:react/recommended",
    "eslint:recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "objectLiteralDuplicateProperties": true
    }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "react",
    "import"
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "15.3"
    },
    "import/resolver": {
      "babel-module": {
        "utils": "utils",
        "constants": "constants",
        "public": "public",
        "components": "components",
        "componentsShare": "components/share",
        "componentsShareRadium": "components/share/radium",
        "componentsIndex": "components/index"
      }
    }
  },
  "rules": {
    "indent": [2, 2, {"SwitchCase": 1}],
    "max-len": 0,
    "quote-props": ["error", "as-needed"],
    "no-alert": "off",
    "no-console": "off",
    "object-curly-spacing": [1, "never"],
    "keyword-spacing": [2, {"overrides": {
      "if": {"after": false},
      "for": {"after": false},
      "while": {"after": false},
      "switch": {"after": false},
      "catch": {"after": false}
    }}]
  }
}
