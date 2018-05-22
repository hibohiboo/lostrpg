# モデル

## ユーザ情報

|論理名|物理名|型|
|:--|:--|:--|
|ユーザID|uid|string|
|ツイッターID|twitterId|string|
|ツイッター表示名|twitterName|string|

## キャラクター一覧用

|論理名|物理名|型|
|:--|:--|:--|
|キャラクターID|characterId| string|
|キャラクター名|characterName|string|
|キャンプID|campId|string|
|キャンプ名|campName|string|
|更新日|updateAt|datetime|
|ユーザID|uid|string|
|ツイッターID|twitterId|string|
|ツイッター表示名|twitterName|string|

## キャラクター詳細

|論理名|物理名|型|
|:--|:--|:--|
|キャラクターID|characterId| string|
|キャラクター名|9characterName|string|
|キャンプID|campId|string|
|キャンプ名|campName|string|
|更新日|updateAt|datetime|
|ユーザID|uid|string|
|ツイッターID|twitterId|string|
|ツイッター表示名|twitterName|string|
|性別||sex|string|
|年齢|age|number|
|経験点|exp|number|
|体力基準値|staminaBase|number|
|気力基準値|willBase|number|
|体力|stamina|number|
|気力|will|number|
|所持限界|carryingCapacity|number|
|袋容量|bagCapacity|number|
|ジャーキー|jerky|number|
|缶詰|can|number|
|クラス|classes|CharacterClass[]|
|アビリティ|abilities|Ability[]|
|アイテム|items|Item[]|
|総重量|totalWeight|number|
|装備_頭|eqp_head|Item|
|装備_右腕|eqp_right_hand|Item|
|装備_左腕|eqp_left_hand|Item|
|装備_体|eqp_torso|Item|
|装備_脚部|eqp_legs|Item|


## キャンプ一覧用

|論理名|物理名|型|
|:--|:--|:--|
|キャンプID|campId|string|
|キャンプ名|campName|string|
|ツイッターID|twitterId|string|
|ツイッター表示名|twitterName|string|