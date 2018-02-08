FROM node:9.5

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

RUN npm i -D html2jade

RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"html2jade\": \"html2jade\",/g" /app/package.json