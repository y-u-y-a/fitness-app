## 環境構築

- Node 14.15.0
- React Native 0.6
- Expo 15.14.0

### インストール

#### Node

```sh:
$ nodenv install 14.17.0
$ nodenv local 14.17.0
```

#### Library

```sh:
$ npm install -g yarn expo-cli
$ yarn add react-query graphql graphql-request react-query-devtools
```

### Documents

- react-native-dotenv

  - URL：https://github.com/goatandsheep/react-native-dotenv
  - メモ：`.env`と`./src/types/env.d.ts`に環境変数を定義する

- react-native-tab-view
  - URL：https://github.com/satya164/react-native-tab-view

## 仕様

- Tab
  - Home
  - Training
  - Calendar
  - SettingsStack
    - Settings
    - Profile
    - CalendarSettings
    - Help
    - PrivacyPolicy
- WebView
