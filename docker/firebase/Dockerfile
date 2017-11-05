FROM node:6.11.5


# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

# firebase
RUN npm install -g firebase-tools
RUN npm install firebase-tools