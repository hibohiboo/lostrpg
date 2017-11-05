#!/bin/bash

# このシェルスクリプトのディレクトリの絶対パスを取得。
bin_dir=$(cd $(dirname $0) && pwd)
name="firebase"

# docker-composeの起動。 コンテナ内に入る
cd $bin_dir/../docker && docker-compose run -p 9005:9005 $name firebase login && firebase init