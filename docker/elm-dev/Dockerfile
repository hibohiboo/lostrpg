FROM node:11.15.0

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

# elmインストール
RUN yarn add  elm
RUN yarn add --dev elm-test

# webpackv4
RUN yarn add  webpack
# v4から追加
RUN yarn add --dev webpack-cli
# 開発サーバ
RUN yarn add --dev webpack-dev-server
# loader
RUN yarn add  elm-webpack-loader
RUN yarn add  file-loader
RUN yarn add  css-loader
RUN yarn add  style-loader
RUN yarn add  url-loader

# バックエンド
RUN yarn add --dev json-server

# サーバ複数起動用
RUN yarn add --dev foreman

# フロントエンド
RUN yarn add  sanitize.css
RUN yarn add  ace-css
RUN yarn add  font-awesome

# 追加モジュール
RUN yarn elm package install elm-lang/core -y
RUN yarn elm package install elm-lang/mouse -y
RUN yarn elm package install elm-lang/keyboard -y
RUN yarn elm package install elm-lang/http -y
RUN yarn elm package install elm-lang/navigation -y

# formatter
RUN yarn add  elm-format@exp

RUN yarn elm package install evancz/url-parser -y
RUN yarn elm package install NoRedInk/elm-decode-pipeline -y
RUN yarn elm package install krisajenkins/remotedata -y

# firebase
RUN yarn add  firebase

# elm 高速化
ADD ./ensure_libsysconfcpus.sh /app/ensure_libsysconfcpus.sh
ADD ./replace_elm_make.sh /app/replace_elm_make.sh

RUN /app/ensure_libsysconfcpus.sh
RUN /app/replace_elm_make.sh

# テスト準備
RUN yarn run elm-test init

# elm spa exampleで必要
RUN yarn elm package install -y NoRedInk/elm-decode-pipeline
RUN yarn elm package install -y elm-community/json-extra
RUN yarn elm package install -y elm-lang/core
RUN yarn elm package install -y elm-lang/dom
RUN yarn elm package install -y elm-lang/html
RUN yarn elm package install -y elm-lang/http
RUN yarn elm package install -y elm-lang/navigation
RUN yarn elm package install -y evancz/elm-markdown
RUN yarn elm package install -y evancz/url-parser
RUN yarn elm package install -y lukewestby/elm-http-builder
RUN yarn elm package install -y mgold/elm-date-format
RUN yarn elm package install -y rtfeldman/elm-validate
RUN yarn elm package install -y rtfeldman/selectlist

ADD ./tests/elm-package.json /app/tests/elm-package.json

# source-directories変更
RUN sed -i -e "s/\".\"/\".\/src\/src\"/" /app/elm-package.json

RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"format\": \"elm-format .\/ --yes\", /" /app/package.json
# package.json設定
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"api\": \"node api.js\", /" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"build\": \"webpack\", /" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"client\": \"webpack-dev-server\", /" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"start\": \"nf start\", /" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"watch\": \"webpack --watch\", /" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"dev\": \"webpack-dev-server --port 3000\", /" /app/package.json

# https://medium.com/webpack/webpack-4-migration-guide-for-plugins-loaders-20a79b927202
# deprecateなthis.optionsをthis.queryに置き換え。
RUN sed -i -e "s/this\.options/this\.query/g" /app/node_modules/elm-webpack-loader/index.js

# elmテスト設定
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"elm-test\": \"elm-test\", /" /app/package.json
