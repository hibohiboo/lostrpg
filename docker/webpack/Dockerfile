FROM node:14.4.0

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

# typescript
RUN yarn add --dev typescript

# tslint
RUN yarn add --dev tslint
RUN yarn add --dev tslint-config-airbnb

# typedoc
RUN yarn add --dev typedoc 

# ビルドツール
RUN yarn add --dev webpack
RUN yarn add --dev webpack-cli

# 開発用サーバ
RUN yarn add --dev webpack-dev-server

# es6用トランスパイラ
RUN yarn add --dev babel-loader
RUN yarn add --dev babel-core
RUN yarn add --dev babel-cli
RUN yarn add --dev babel-preset-es2015
RUN yarn add --dev babel-preset-env
RUN yarn add --dev babel-plugin-transform-react-jsx
# async
RUN yarn add --dev babel-preset-es2017
# babelのreact用preset
RUN yarn add --dev babel-preset-react

# webpack用typescript loader
RUN yarn add --dev ts-loader

# jsViewライブラリreact
RUN yarn add  react
RUN yarn add  react-dom

# フレームワーク
RUN yarn add  redux
RUN yarn add  redux-actions
RUN yarn add  redux-saga
RUN yarn add  redux-logger

RUN yarn add  babel-polyfill

# バリデーション
RUN yarn add  redux-form
RUN yarn add  react-redux

# 国際対応
RUN yarn add  i18next

# ブラウザを識別して自動で国際対応
RUN yarn add  i18next-browser-languagedetector

# JSON-loader
RUN yarn add --dev json-loader
RUN yarn add --dev yaml-loader

# ライブラリ追加
RUN yarn add  lodash
RUN yarn add  eventemitter3
RUN yarn add  firebase

# ルーティング
RUN yarn add  react-router-redux@next
RUN yarn add  history
RUN yarn add  react-router-dom
RUN yarn add  react-router

RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"tslint\": \"tslint -p 'tsconfig.json'\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"tsc\": \"tsc -p tsconfig.json \",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"babel\": \"babel\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"typedoc\": \"typedoc\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"webpack\": \"webpack\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"dev-server\": \"webpack-dev-server\", /g" /app/package.json
