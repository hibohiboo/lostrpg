FROM node:9.2.0

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

# ビルドツール
RUN npm i -D webpack

# 開発用サーバ
RUN npm i -D webpack-dev-server

# es6用トランスパイラ
RUN npm i -D babel-loader
RUN npm i -D babel-preset-es2015
RUN npm i -D babel-preset-react
RUN npm i -D babel-preset-stage-2

# flow
RUN npm i -D flow-bin
RUN npm i -D flow
RUN npm i -D babel-plugin-transform-flow-strip-types

# jsViewライブラリreact
RUN npm i -S react
RUN npm i -S react-dom
RUN npm i -S react-redux
RUN npm i -S react-scripts

# フレームワーク
RUN npm i -S redux
RUN npm i -S redux-thunk

# バリデーション
RUN npm i -S redux-form
RUN npm i -S react-redux

# 国際対応
RUN npm i -S i18next

# ブラウザを識別して自動で国際対応
RUN npm i -S i18next-browser-languagedetector

# JSON-loader
RUN npm i -D json-loader
RUN npm i -D yaml-loader

# ライブラリ追加
RUN npm i -S lodash
RUN npm i -S firebase

# ルーティング
RUN npm i -S react-router-redux@next
RUN npm i -S history
RUN npm i -S react-router-dom
RUN npm i -S react-router

RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"flow\": \"flow\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"babel\": \"babel\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"webpack\": \"webpack\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"dev-server\": \"webpack-dev-server\", /g" /app/package.json
