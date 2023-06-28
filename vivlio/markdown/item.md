---
link:
  - rel: "stylesheet"
    href: "../css/style.css"
---

<!---->

## アイテム{#items .break-verso }

<p>アイテムには以下の要素があります。</p>
<table class="chart" id="item-element-summary">
  <tbody> 
    <tr>
      <th>名前  
        <td>アイテム名。</td> 
      </th>
    </tr>
    <tr>
      <th>価格  
        <td>アイテムの価格。単位はJ(ジャーキー)。</td> 
      </th>
    </tr>
    <tr>
      <th>重量  
        <td>アイテムの重量。単位はW。【所持限界】までのアイテムを持てる。</td> 
      </th>
    </tr>
    <tr>
      <th>タイプ  
        <td>タイプによって使用タイミングが決まる。装備、支援、割込み、道具の4つ。</td> 
      </th>
    </tr>
    <tr>
      <th>部位  
        <td>アイテムの装備部位。同部位に装備できるアイテムは1つ。</td> 
      </th>
    </tr>
    <tr>
      <th>指定特技  
        <td>アイテムを使うために必要な判定の《指定特技》。</td> 
      </th>
    </tr>
    <tr>
      <th>対象  
        <td>アイテムの効果の対象。</td> 
      </th>
    </tr>
    <tr>
      <th>特性  
        <td>アイテムの特性。武器、防具、袋など。</td> 
      </th>
    </tr>
    <tr>
      <th>効果  
        <td>アイテムの効果。</td> 
      </th>
    </tr>
  </tbody>
</table>

<dl class="small-dl">
  <dt>名前</dt>
  <dd>アイテムの名前です。</dd>
  <dt>価格</dt>
  <dd>アイテムの価格です。単位は1Jで表されています。</dd>
  <dt>重量</dt>
  <dd>
    アイテムの重量です。重量1=1Wと略すこともあります。キャラクターは総重量が【所持限界】までの所持品を持ち運ぶことができます。
    所持品とは装備していないアイテムのことを指します。
  </dd>
  <dt>タイプ</dt>
  <dd>装備、支援、割込み、道具の4つのタイプがあります。
    <dl>
      <dt>装備タイプ</dt>
      <dd>
        装備している限り常に効果を発揮します。装備しているアイテムの重量は【所持限界】から無視されます。</dd>
      <dt>支援タイプ</dt>
      <dd>探索フェイズや戦闘中の自分の手番に使います。支援タイプのアイテムを使用すると行動済みになります。</dd>
      <dt>割込みタイプ</dt>
      <dd>
        誰かの行動に割りこんで使います。同じ名前の割込みタイプのアイテムは、1サイクル（戦闘中ならば1ラウンド）1個のみ使えます。
        ただし消耗品は、同じ名前のアイテムを1サイクルに複数個使えます。
      </dd>
      <dt>道具タイプ</dt>
      <dd>所持していると判定に有利になることがあります。</dd>
    </dl>
  </dd>
  <dt class="break-page">部位</dt>
  <dd>装備タイプのアイテムには装備する部位が書かれています。
    <ul> 
      <li>同じ部位に2つのアイテムを装備することはできません。</li>
      <li>片手には装備する代わりに、任意のタイプのアイテムを1つ持つこともできます。</li>
      <li>片手に持ったアイテムの重量は所持限界から無視されます。</li>
    </ul>
  </dd>
  <dt>指定特技</dt>
  <dd>
    アイテムを使用するために判定が必要な特技です。「-」の場合、判定をすることなく効果を発揮します。
      2つ以上の《指定特技》の場合、どちらの特技を使用しても構いません。
  </dd>
  <dt>対象</dt>
  <dd>アイテムの効果の対象です</dd>
  <dt>特性</dt>
  <dd>アイテムの特性です。下記に特殊な処理が必要な特性を記載します。
    <dl>
      <dt>武器</dt>
      <dd>武器です。《指定特技》の判定に成功すると対象に[攻撃力]点のダメージを与えます。 </dd>
      <dt>袋</dt>
      <dd>
        <ul>
          <li>このアイテムは所持しているだけで効果を発揮します。</li>
          <li>袋の中に入れたアイテムの重量を所持限界から無視します。</li>
          <li>袋の中に入れた袋は上記の効果を発揮しません。</li>
          <li>袋の中に入れたアイテムを戦闘中に使用することはできません。</li>
          <li>戦闘中に袋からアイテムを取り出す行為は支援行動です。</li>
        </ul>
      </dd>
      <dt>収納不可</dt>
      <dd>このアイテムは袋の中に入れることができません。</dd>
      <dt>食料</dt>
      <dd>食料です。食料として使用すると失われます。</dd>
      <dt>消耗品</dt>
      <dd>使用回数がない場合、一度使用すると失われます。</dd>
      <dt>充電</dt>
      <dd>
        使用するには充電が必要です。 使用回数がない場合、一度充電したらセッション終了まで使用できます。</dd>
      <dt>使用回数：x</dt>
      <dd>
        消耗品ならば、x回使用すると失われます。充電ならば、x回使用すると再度充電が必要です。
      </dd>
      <dt>購入不可</dt>
      <dd>探索やドロップにより手に入るアイテムです。GMが特別に許可した場合を除き、購入はできません。</dd>
    </dl>
  </dd>
  <dt>効果</dt>
  <dd>アイテムの効果です。</dd>
</dl>

### アイテム一覧 {#items-list .break-verso }

<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ジャーキー</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>食料</div>
    </div>
  </div>
  <div class="card-content">1日分の食料。【気力】が1点増加する。通貨単位J。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>缶詰</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>10</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>食料</div>
    </div>
  </div>
  <div class="card-content">缶詰1つ。文明の味。【気力】が【精神力】点増加する。通貨単位10J=1C。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ベルトポーチ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>袋</div>
    </div>
  </div>
  <div class="card-content">総重量4まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>リュックサック</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>袋</div>
    </div>
  </div>
  <div class="card-content">総重量10まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>大きなリュック</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>10</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>袋</div>
    </div>
  </div>
  <div class="card-content">総重量20まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>肩掛けカバン</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>6</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>袋</div>
    </div>
  </div>
  <div class="card-content">総重量4まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。戦闘中でも袋の中のアイテムを使用できる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>手提げかばん</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>6</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>袋</div>
    </div>
  </div>
  <div class="card-content">総重量5まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。戦闘中でも袋の中のアイテムを使用できる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>トランクケース</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>7</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《殴る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>両手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>袋、武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力3。総重量5まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>棍棒</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《殴る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力1。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>バール</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>4</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《殴る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力2。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>槍</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>4</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>4</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《刺す》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>両手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵、収納不可</div>
    </div>
  </div>
  <div class="card-content">攻撃力3。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ナタ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>6</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《斬る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力3。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ハンマー</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>6</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《殴る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>両手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力4。硬くて長くて重たいの。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>農具</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>15</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>6</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《振る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>両手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵、収納不可</div>
    </div>
  </div>
  <div class="card-content">攻撃力5。死神が振るうような鎌、或いは、大地を耕す鍬。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ダガーナイフ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>6</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《刺す》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力1。先制判定の達成値にプラス1の修正がつく。この武器は割込みのタイミングで装備できる。取り回しやすい本格的なナイフ。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>カタナ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>15</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《斬る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力4。命中判定でスペシャルを振った場合、攻撃力にプラス1D6する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ほうちょう</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《斬る》《刺す》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力1。この武器は割込みのタイミングで装備できる。この武器は破壊して死亡判定をキャンセルできない。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>手斧</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>6</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《斬る》《投げる》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、射撃</div>
    </div>
  </div>
  <div class="card-content">攻撃力2。《投げる》を使って判定した場合、手元から失われる。支援行動で回収できる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>杭</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>7</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《刺す》《跳ぶ》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力2。くい。突き刺す武器。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>斧</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>8</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>4</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《斬る》《振る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力3。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>鎖</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>8</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《振る》《捕らえる》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力3。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>シャベル</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>8</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>4</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《殴る》《斬る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>両手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力3。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ツルハシ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>9</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《刺す》《振る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>両手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力4。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>百科事典</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>9</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《殴る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力2。所持していると《雑学》の判定の達成値にプラス1の修正がつく。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>スリング</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《投げる》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>両手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、射撃</div>
    </div>
  </div>
  <div class="card-content">攻撃力2。投石器。弾にする石は何処でも手に入るため明記不要。石以外も投げることができる。装備している間、回避判定にプラス1の修正がつく。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ボウガン</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>8</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《撃つ》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>両手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、射撃</div>
    </div>
  </div>
  <div class="card-content">攻撃力3。矢が必要。装備している間、回避判定にプラス2の修正がつく。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>スタンガン</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>8</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《殴る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵、充電、使用回数：1</div>
    </div>
  </div>
  <div class="card-content">攻撃力2。この武器によるダメージは軽減されない。さらに、『麻痺』の変調を与える。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>剥ぎ取りナイフ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>9</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《斬る》《刺す》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力2。ドロップ表の結果にプラス1の修正がつく。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>追打茨のムチ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>12</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《振る》《捕らえる》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力3。変調を持つ相手へのダメージをプラス1。変調が2つなら+3、4つ以上で+6。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>血染桜のシャベル</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>12</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《殴る》《斬る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力3。自身の体力が1以下の時、攻撃力プラス3。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>疾風竹の槍</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>13</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《刺す》《跳ぶ》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵</div>
    </div>
  </div>
  <div class="card-content">攻撃力2。先攻での攻撃時、命中判定にプラス1と攻撃力にプラス2の修正がつく。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>なべぶた</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《殴る》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>武器、白兵、防具</div>
    </div>
  </div>
  <div class="card-content">攻撃力0。回避判定の達成値にプラス1の修正がつく。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>なべ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>10</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>頭部</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>防具</div>
    </div>
  </div>
  <div class="card-content">頭部分野の《身体部位》への部位ダメージをキャンセルすることができる。そうした場合、このアイテムを破壊する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>レザー</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>10</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>胴部</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>防具</div>
    </div>
  </div>
  <div class="card-content">胴部分野の《身体部位》への部位ダメージをキャンセルすることができる。そうした場合、このアイテムを破壊する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ポケットジャケット</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>12</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>胴部</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div></div>
    </div>
  </div>
  <div class="card-content">ポケットのたくさんついたジャケット。所持限界プラス1</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>籠手</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>10</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>腕部</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>防具</div>
    </div>
  </div>
  <div class="card-content">腕部分野の《身体部位》への部位ダメージをキャンセルすることができる。そうした場合、このアイテムを破壊する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>安全ブーツ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>10</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>脚部</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>防具</div>
    </div>
  </div>
  <div class="card-content">脚部分野の《身体部位》への部位ダメージをキャンセルすることができる。そうした場合、このアイテムを破壊する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>嗜好品</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>消耗品</div>
    </div>
  </div>
  <div class="card-content">おやつやタバコなど。【気力】を2点増加させる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ライト</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>充電</div>
    </div>
  </div>
  <div class="card-content">《探索》の達成値にプラス1の修正がつく。明るく照らす。暗闇のペナルティを打ち消す。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>バッテリー</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>消耗品</div>
    </div>
  </div>
  <div class="card-content">あなたが装備しているか所持しているアイテム1つを「充電」できる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>トランシーバー</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>8</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《機械》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>充電</div>
    </div>
  </div>
  <div class="card-content">キャンプの仲間と通信し、【気力】を2点増加させる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>携帯ラジオ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>8</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>全体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《操作》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>充電</div>
    </div>
  </div>
  <div class="card-content">探索フェイズに使用可能。全員の【気力】を1D3点増加させる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>矢</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>消耗品、使用回数：10</div>
    </div>
  </div>
  <div class="card-content">ボウガンの矢。これを所持していないとボウガンの効果をうけることができない。ボウガンで命中判定を行うごとに1消費する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>矢筒</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>袋</div>
    </div>
  </div>
  <div class="card-content">名前に『矢』のつくアイテムを3束（使用回数30回分）まで入れることができる。袋の中のアイテムの重量は所持限界から無視する。戦闘中でも袋の中のアイテムを使用できる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>胡椒玉</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>消耗品</div>
    </div>
  </div>
  <div class="card-content">スリングで投げることができる。攻撃の対象に『麻痺』の変調を与える。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>コカの葉</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>消耗品</div>
    </div>
  </div>
  <div class="card-content">【体力】を2点増加させる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>なんこう</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>消耗品</div>
    </div>
  </div>
  <div class="card-content">変調を１つ回復する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>鎮痛剤</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>6</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>消耗品</div>
    </div>
  </div>
  <div class="card-content">【体力】を3点増加させる。変調を1つ回復する。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>手書きのメモ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>消耗品</div>
    </div>
  </div>
  <div class="card-content">対象に『暴露』の変調を与える。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ばんそうこう</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>消耗品</div>
    </div>
  </div>
  <div class="card-content">【応急手当て】【ちちんぷいぷい】の効果プラス1。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ペット</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>10</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>食料</div>
    </div>
  </div>
  <div class="card-content">【気力】を1D3点増加させる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ロープ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div></div>
    </div>
  </div>
  <div class="card-content">丈夫なロープ。使い方次第で休憩しやすくなったり障害の突破に。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>たいまつ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>装備</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>片手</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>消耗品</div>
    </div>
  </div>
  <div class="card-content">火をつけるには火付け道具が必要、戦闘中の点火は支援行動。効果は1サイクル。暗闇のペナルティを打ち消したり蜘蛛の巣を燃やしたり。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>火付け道具</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div></div>
    </div>
  </div>
  <div class="card-content">マッチやライター、火打ち石とほくちのセットなどのこと。焚き火があれば休憩しやすくなる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>毛布</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div></div>
    </div>
  </div>
  <div class="card-content">軽くて丈夫な毛布。寒い日の休憩には必須。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>寝袋</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div></div>
    </div>
  </div>
  <div class="card-content">休憩をした時に増加する【気力】プラス1。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>ポリタンク</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div></div>
    </div>
  </div>
  <div class="card-content">キャンプや水場で水を補充できる。水が補充されている場合、いつでもリミットの増加を試みることができる。一度使うと水はなくなる。空なら重量3、水を満タンにすると重量は8となる。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>釣竿</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>7</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>《待つ》</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div></div>
    </div>
  </div>
  <div class="card-content">川や池を見つけた時に使用出来る。指定特技の判定に成功すると1Jを得る。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>なぞの葉</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>購入不可、消耗品</div>
    </div>
  </div>
  <div class="card-content">使用するときに1D6を振る。出目が偶数の場合、【体力】が2点増加する。奇数の場合、2点のダメージを受ける。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>生肉</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>購入不可、食料</div>
    </div>
  </div>
  <div class="card-content">お肉にくにく。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>硬い殻</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>購入不可</div>
    </div>
  </div>
  <div class="card-content">武器・防具の材料に使える硬い殻</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>硬い羽</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>購入不可</div>
    </div>
  </div>
  <div class="card-content">透き通った硬い羽。武器防具以外に窓ガラスの修理にも。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>毒針</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>購入不可</div>
    </div>
  </div>
  <div class="card-content">毒は薬にも。針は武器や工具に使用される。</div>
</div>
<div class="item-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/item.svg"/></div>
    <div>毛皮</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>道具</div>
    </div>
    <div class="tag">
      <div>価格</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>重量</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="row">
    <div class="tag">
      <div>指定特技</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>部位</div>
      <div>-</div>
    </div>
    <div class="tag trait">
      <div>特性</div>
      <div>購入不可</div>
    </div>
  </div>
  <div class="card-content">もふもふ</div>
</div>
