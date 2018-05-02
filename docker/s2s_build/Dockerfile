FROM node:10.0.0

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y
RUN yarn add --dev yarn

# 必要ライブラリ
RUN yarn add --dev lodash
RUN yarn add --dev globby

# テストツール
RUN yarn add jest 
RUN yarn add pretty-format
RUN yarn add ts-jest

# ビルドツール
RUN yarn add --dev webpack
RUN yarn add --dev webpack-cli
RUN yarn add --dev ts-loader

# typescript
RUN yarn add --dev typescript

# tslint
RUN yarn add --dev tslint
RUN yarn add --dev tslint-config-airbnb

# typedoc
RUN yarn add --dev typedoc 

# es6用トランスパイラ
RUN yarn add --dev @babel/cli
RUN yarn add --dev @babel/preset-env
RUN yarn add --dev @babel/plugin-transform-react-jsx

# babel7をインストール
RUN yarn add @babel/core
RUN yarn add @babel/types
RUN yarn add @babel/traverse

# babelのreact用preset
RUN yarn add --dev @babel/preset-react

# babelのtypescript用preset
RUN yarn add --dev @babel/plugin-syntax-typescript

# babelテスター
RUN yarn add babel-plugin-tester
RUN yarn add --dev babel-loader@next
# s2s
RUN yarn add --dev s2s-utils

# babel7がbetaなので、間をつなぐものが必要
RUN yarn add --dev babel-core@7.0.0-bridge.0

RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"tslint\": \"tslint -p 'tsconfig.json'\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"tsc\": \"tsc -p tsconfig.json \",/g" /app/package.json
