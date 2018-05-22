# LOSTRPGキャラクターシート

## 必要な機能

* キャラクター一覧・詳細表示・編集・削除
* ログイン・ログアウト

## 必要な画面

* ログインユーザ表示
* キャラクター一覧
* キャラクター詳細表示
* キャラクター詳細編集
* キャラクター新規作成

## モデル

### ユーザ情報
{
  uid: string,
  twitterId: string,
  twitterName: string
}

### キャラクター情報

{
  characterId: string,
  characterName: string,
  campId: string,
  campName: string,
  
  updateAt: datetime,
  -- ユーザ情報
  twitterId: string,
  tiwtterName: string,
  uid: string
}

### キャンプ情報

{
  campId: string,
  campName: string,
  twitterId: string,
  uid: string,
}

## ログイン

### ログイン

* TwitterAuthログイン

### ログアウト
* ログアウト

### 表示

* twitterName


## キャラクター一覧

### 機能一覧

* ログイン
* ログアウト
* キャラクター一覧


### キャラクター一覧

#### 必要機能

* キャラクター表示
  * キャラクター名
  * PL名
  * 所属キャンプ名
  * link: キャラクター詳細表示
  * link: キャラクター詳細編集 (ログインユーザ作成のみ)

* ページング
  * 20キャラごとにページング



