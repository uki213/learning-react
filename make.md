# React Creative Appを作った後の初期設定

## eslintの設定

初期値でeslintが入ってないので、インストールする。
インストールした後は初期化する。

```command
npm install eslint --save-dev
npm install eslint-plugin-react --save-dev
```

```command
npx eslint --init
```

1. ? How would you like to use ESLint? `To check syntax, find problems, and enforce code style`
1. ? What type of modules does your project use? `JavaScript modules (import/export)`
1. ? Which framework does your project use? `React`
1. ? Does your project use TypeScript? `No`
1. ? Where does your code run? `Browser`
1. ? How would you like to define a style for your project? `Use a popular style guide`
1. ? Which style guide do you want to follow? `Airbnb: https://github.com/airbnb/javascript`
1. ? What format do you want your config file to be in? `JavaScript`
1. ? Would you like to install them now with npm? `Yes`

### eslintのルールを追加

`.eslintrc.js`へルールを追加する。

```javascript
  rules: {
    semi: [2, 'never'], 'comma-dangle': ['error', 'never'],
    eqeqeq: ['error', 'smart'], 'no-param-reassign': ['error', { props: false }],
    'react/prefer-stateless-function': 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
```

取り合えず、こんな感じ

## prop-typesの設定

vueと違ってpropsの型チェック機能が外部ライブラリなので追加する。
使わないとeslintでエラーが出る等の弊害があるので。

```
npm install --save prop-types
```