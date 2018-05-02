#!/bin/bash

# このシェルスクリプトのディレクトリの絶対パスを取得。
bin_dir=$(cd $(dirname $0) && pwd)
# tslint.sh --fix オプションで自動修正
cd $bin_dir/../docker && docker-compose run -e NODE_ENV=production s2s_build yarn run webpack