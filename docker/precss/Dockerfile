FROM node:14.4.0

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

# 監視用
RUN yarn add --dev chokidar

# Cssプリプロセッサ
RUN yarn add --dev postcss

# //のコメントアウト
RUN yarn add --dev postcss-comment

# ブラウザごとにプレフィックスの作成
RUN yarn add --dev autoprefixer

# ネスト
#RUN yarn add --dev postcss-nested

# postcss
RUN yarn add --dev postcss-cssnext

# postcss ネストを使うためにStylusを導入
RUN yarn add --dev stylus

RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"run\": \"node app.js\",/g" /app/package.json