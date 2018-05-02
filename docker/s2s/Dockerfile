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
RUN yarn add --dev babel-loader
RUN yarn add --dev ts-loader

# typescript
RUN yarn add --dev typescript

# tslint
RUN yarn add --dev tslint
RUN yarn add --dev tslint-config-airbnb

# typedoc
RUN yarn add --dev typedoc 

# es6用トランスパイラ
RUN yarn add --dev babel-cli@next
RUN yarn add --dev babel-preset-env@next
RUN yarn add --dev babel-plugin-transform-react-jsx@next

# babel7をインストール
RUN yarn add babel-core@next
RUN yarn add babel-types@next
RUN yarn add babel-traverse@next

# babelテスター
RUN yarn add babel-plugin-tester

# babelのreact用preset
RUN yarn add --dev babel-preset-react@next

# babelのtypescript用preset
RUN yarn add --dev babel-plugin-syntax-typescript@next

# s2s
RUN yarn add --dev s2s-utils


RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"tslint\": \"tslint -p 'tsconfig.json'\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"tsc\": \"tsc -p tsconfig.json \",/g" /app/package.json
