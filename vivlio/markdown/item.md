---
link:
  - rel: "stylesheet"
    href: "../css/style.css"
---

## アイテム

<p>アイテムには以下の要素があります。</p>
<table class="chart" id="item-element-summary">
  <caption>アイテムの要素</caption>
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
        <td>アイテムの装備部位。同じ部位に装備できるアイテムは1つ。</td> 
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
        <td>アイテムの特性。武器、防具、袋、収納不可、食料、消耗品、使用回数など。</td> 
      </th>
    </tr>
    <tr>
      <th>効果  
        <td>アイテムの効果。</td> 
      </th>
    </tr>
  </tbody>
</table>

<dl>
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

<table class="responsive" id="item">
  <caption>アイテム一覧</caption>
  <thead>
    <tr>
      <th>名前 
        <th>価格</th> 
        <th>重量</th> 
        <th>タイプ</th>  
        <th>部位</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>特性</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">ジャーキー</td>
    <td data-title="価格">1</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">支援</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">食料</td>
    <td data-title="効果">1日分の食料。【気力】が1点増加する。通貨単位J。</td>
  </tr>
  <tr>
    <td class="txt-center">缶詰</td>
    <td data-title="価格">10</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">支援</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">食料</td>
    <td data-title="効果">缶詰1つ。文明の味。【気力】が【精神力】点増加する。通貨単位10J=1C。</td>
  </tr>
  <tr>
    <td class="txt-center">ベルトポーチ</td>
    <td data-title="価格">3</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">袋</td>
    <td data-title="効果">総重量4まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。</td>
  </tr>
  <tr>
    <td class="txt-center">リュックサック</td>
    <td data-title="価格">5</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">袋</td>
    <td data-title="効果">総重量10まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。</td>
  </tr>
  <tr>
    <td class="txt-center">大きなリュック</td>
    <td data-title="価格">10</td>
    <td data-title="重量">3</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">袋</td>
    <td data-title="効果">総重量20まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。</td>
  </tr>
  <tr>
    <td class="txt-center">肩掛けカバン</td>
    <td data-title="価格">6</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">袋</td>
    <td data-title="効果">総重量4まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。戦闘中でも袋の中のアイテムを使用できる。</td>
  </tr>
  <tr>
    <td class="txt-center">手提げかばん</td>
    <td data-title="価格">6</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">袋</td>
    <td data-title="効果">総重量5まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。戦闘中でも袋の中のアイテムを使用できる。</td>
  </tr>
  <tr>
    <td class="txt-center">トランクケース</td>
    <td data-title="価格">7</td>
    <td data-title="重量">3</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">両手</td>
    <td data-title="指定特技">《殴る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">袋、武器、白兵</td>
    <td data-title="効果">攻撃力3。総重量5まで袋の中にアイテムを入れることができる。袋の中のアイテムの重量は所持限界から無視する。</td>
  </tr>
  <tr>
    <td class="txt-center">棍棒</td>
    <td data-title="価格">1</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《殴る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力1。</td>
  </tr>
  <tr>
    <td class="txt-center">バール</td>
    <td data-title="価格">4</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《殴る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力2。</td>
  </tr>
  <tr>
    <td class="txt-center">槍</td>
    <td data-title="価格">4</td>
    <td data-title="重量">4</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">両手</td>
    <td data-title="指定特技">《刺す》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵、収納不可</td>
    <td data-title="効果">攻撃力3。</td>
  </tr>
  <tr>
    <td class="txt-center">ナタ</td>
    <td data-title="価格">6</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《斬る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力3。</td>
  </tr>
  <tr>
    <td class="txt-center">ハンマー</td>
    <td data-title="価格">6</td>
    <td data-title="重量">5</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">両手</td>
    <td data-title="指定特技">《殴る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力4。硬くて長くて重たいの。</td>
  </tr>
  <tr>
    <td class="txt-center">農具</td>
    <td data-title="価格">15</td>
    <td data-title="重量">6</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">両手</td>
    <td data-title="指定特技">《振る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵、収納不可</td>
    <td data-title="効果">攻撃力5。死神が振るうような鎌、或いは、大地を耕す鍬。</td>
  </tr>
  <tr>
    <td class="txt-center">ダガーナイフ</td>
    <td data-title="価格">6</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《刺す》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力1。先制判定の達成値にプラス1の修正がつく。この武器は割込みのタイミングで装備できる。取り回しやすい本格的なナイフ。</td>
  </tr>
  <tr>
    <td class="txt-center">カタナ</td>
    <td data-title="価格">15</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《斬る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力4。命中判定でスペシャルを振った場合、攻撃力にプラス1D6する。</td>
  </tr>
  <tr>
    <td class="txt-center">ほうちょう</td>
    <td data-title="価格">3</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《斬る》<br>《刺す》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力1。この武器は割込みのタイミングで装備できる。この武器は破壊して死亡判定をキャンセルできない。</td>
  </tr>
  <tr>
    <td class="txt-center">手斧</td>
    <td data-title="価格">6</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《斬る》<br>《投げる》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、射撃</td>
    <td data-title="効果">攻撃力2。《投げる》を使って判定した場合、手元から失われる。支援行動で回収できる。</td>
  </tr>
  <tr>
    <td class="txt-center">杭</td>
    <td data-title="価格">7</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《刺す》<br>《跳ぶ》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力2。くい。突き刺す武器。</td>
  </tr>
  <tr>
    <td class="txt-center">斧</td>
    <td data-title="価格">8</td>
    <td data-title="重量">4</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《斬る》<br>《振る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力3。</td>
  </tr>
  <tr>
    <td class="txt-center">鎖</td>
    <td data-title="価格">8</td>
    <td data-title="重量">3</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《振る》<br>《捕らえる》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力3。</td>
  </tr>
  <tr>
    <td class="txt-center">シャベル</td>
    <td data-title="価格">8</td>
    <td data-title="重量">4</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">両手</td>
    <td data-title="指定特技">《殴る》<br>《斬る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力3。</td>
  </tr>
  <tr>
    <td class="txt-center">ツルハシ</td>
    <td data-title="価格">9</td>
    <td data-title="重量">5</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">両手</td>
    <td data-title="指定特技">《刺す》<br>《振る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力4。</td>
  </tr>
  <tr>
    <td class="txt-center">百科事典</td>
    <td data-title="価格">9</td>
    <td data-title="重量">3</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《殴る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力2。所持していると《雑学》の判定の達成値にプラス1の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">スリング</td>
    <td data-title="価格">3</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">両手</td>
    <td data-title="指定特技">《投げる》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、射撃</td>
    <td data-title="効果">攻撃力2。投石器。弾にする石は何処でも手に入るため明記不要。石以外も投げることができる。装備している間、回避判定にプラス1の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">ボウガン</td>
    <td data-title="価格">8</td>
    <td data-title="重量">3</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">両手</td>
    <td data-title="指定特技">《撃つ》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、射撃</td>
    <td data-title="効果">攻撃力3。矢が必要。装備している間、回避判定にプラス2の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">スタンガン</td>
    <td data-title="価格">8</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《殴る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵、充電、使用回数：1</td>
    <td data-title="効果">攻撃力2。この武器によるダメージは軽減されない。さらに、『麻痺』の変調を与える。</td>
  </tr>
  <tr>
    <td class="txt-center">剥ぎ取りナイフ</td>
    <td data-title="価格">9</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《斬る》<br>《刺す》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力2。ドロップ表の結果にプラス1の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">追打茨のムチ</td>
    <td data-title="価格">12</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《振る》<br>《捕らえる》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力3。変調を持つ相手へのダメージをプラス1。変調が2つなら+3、4つ以上で+6。</td>
  </tr>
  <tr>
    <td class="txt-center">血染桜のシャベル</td>
    <td data-title="価格">12</td>
    <td data-title="重量">3</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《殴る》<br>《斬る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力3。自身の体力が1以下の時、攻撃力プラス3。</td>
  </tr>
  <tr>
    <td class="txt-center">疾風竹の槍</td>
    <td data-title="価格">13</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《刺す》<br>《跳ぶ》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵</td>
    <td data-title="効果">攻撃力2。先攻での攻撃時、命中判定にプラス1と攻撃力にプラス2の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">なべぶた</td>
    <td data-title="価格">1</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">《殴る》</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">武器、白兵、防具</td>
    <td data-title="効果">攻撃力0。回避判定の達成値にプラス1の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">なべ</td>
    <td data-title="価格">10</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">頭部</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">防具</td>
    <td data-title="効果">頭部分野の《身体部位》への部位ダメージをキャンセルすることができる。そうした場合、このアイテムを破壊する。</td>
  </tr>
  <tr>
    <td class="txt-center">レザー</td>
    <td data-title="価格">10</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">胴部</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">防具</td>
    <td data-title="効果">胴部分野の《身体部位》への部位ダメージをキャンセルすることができる。そうした場合、このアイテムを破壊する。</td>
  </tr>
  <tr>
    <td class="txt-center">ポケットジャケット</td>
    <td data-title="価格">12</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">胴部</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性"></td>
    <td data-title="効果">ポケットのたくさんついたジャケット。所持限界プラス1</td>
  </tr>
  <tr>
    <td class="txt-center">籠手</td>
    <td data-title="価格">10</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">腕部</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">防具</td>
    <td data-title="効果">腕部分野の《身体部位》への部位ダメージをキャンセルすることができる。そうした場合、このアイテムを破壊する。</td>
  </tr>
  <tr>
    <td class="txt-center">安全ブーツ</td>
    <td data-title="価格">10</td>
    <td data-title="重量">3</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">脚部</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">防具</td>
    <td data-title="効果">脚部分野の《身体部位》への部位ダメージをキャンセルすることができる。そうした場合、このアイテムを破壊する。</td>
  </tr>
  <tr>
    <td class="txt-center">嗜好品</td>
    <td data-title="価格">3</td>
    <td data-title="重量">0</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">消耗品</td>
    <td data-title="効果">おやつやタバコなど。【気力】を2点増加させる。</td>
  </tr>
  <tr>
    <td class="txt-center">ライト</td>
    <td data-title="価格">3</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">充電</td>
    <td data-title="効果">《探索》の達成値にプラス1の修正がつく。明るく照らす。暗闇のペナルティを打ち消す。</td>
  </tr>
  <tr>
    <td class="txt-center">バッテリー</td>
    <td data-title="価格">2</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">消耗品</td>
    <td data-title="効果">あなたが装備しているか所持しているアイテム1つを「充電」できる。</td>
  </tr>
  <tr>
    <td class="txt-center">トランシーバー</td>
    <td data-title="価格">8</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">支援</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">《機械》</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">充電</td>
    <td data-title="効果">キャンプの仲間と通信し、【気力】を2点増加させる。</td>
  </tr>
  <tr>
    <td class="txt-center">携帯ラジオ</td>
    <td data-title="価格">8</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">支援</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">《操作》</td>
    <td data-title="対象">全体</td>
    <td data-title="特性">充電</td>
    <td data-title="効果">探索フェイズに使用可能。全員の【気力】を1D3点増加させる。</td>
  </tr>
  <tr>
    <td class="txt-center">矢</td>
    <td data-title="価格">1</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">消耗品、使用回数：10</td>
    <td data-title="効果">ボウガンの矢。これを所持していないとボウガンの効果をうけることができない。ボウガンで命中判定を行うごとに1消費する。</td>
  </tr>
  <tr>
    <td class="txt-center">矢筒</td>
    <td data-title="価格">1</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">袋</td>
    <td data-title="効果">名前に『矢』のつくアイテムを3束（使用回数30回分）まで入れることができる。袋の中のアイテムの重量は所持限界から無視する。戦闘中でも袋の中のアイテムを使用できる。</td>
  </tr>
  <tr>
    <td class="txt-center">胡椒玉</td>
    <td data-title="価格">5</td>
    <td data-title="重量">0</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">消耗品</td>
    <td data-title="効果">スリングで投げることができる。攻撃の対象に『麻痺』の変調を与える。</td>
  </tr>
  <tr>
    <td class="txt-center">コカの葉</td>
    <td data-title="価格">2</td>
    <td data-title="重量">0</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">消耗品</td>
    <td data-title="効果">【体力】を2点増加させる。</td>
  </tr>
  <tr>
    <td class="txt-center">なんこう</td>
    <td data-title="価格">3</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">消耗品</td>
    <td data-title="効果">変調を１つ回復する。</td>
  </tr>
  <tr>
    <td class="txt-center">鎮痛剤</td>
    <td data-title="価格">6</td>
    <td data-title="重量">0</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">消耗品</td>
    <td data-title="効果">【体力】を3点増加させる。変調を1つ回復する。</td>
  </tr>
  <tr>
    <td class="txt-center">手書きのメモ</td>
    <td data-title="価格">5</td>
    <td data-title="重量">0</td>
    <td data-title="タイプ">支援</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">単体</td>
    <td data-title="特性">消耗品</td>
    <td data-title="効果">対象に『暴露』の変調を与える。</td>
  </tr>
  <tr>
    <td class="txt-center">ばんそうこう</td>
    <td data-title="価格">1</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">消耗品</td>
    <td data-title="効果">【応急手当て】【ちちんぷいぷい】の効果プラス1。</td>
  </tr>
  <tr>
    <td class="txt-center">ペット</td>
    <td data-title="価格">10</td>
    <td data-title="重量">0</td>
    <td data-title="タイプ">支援</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">食料</td>
    <td data-title="効果">【気力】を1D3点増加させる。</td>
  </tr>
  <tr>
    <td class="txt-center">ロープ</td>
    <td data-title="価格">1</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性"></td>
    <td data-title="効果">丈夫なロープ。使い方次第で休憩しやすくなったり障害の突破に。</td>
  </tr>
  <tr>
    <td class="txt-center">たいまつ</td>
    <td data-title="価格">1</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">装備</td>
    <td data-title="部位">片手</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">消耗品</td>
    <td data-title="効果">火をつけるには火付け道具が必要、戦闘中の点火は支援行動。効果は1サイクル。暗闇のペナルティを打ち消したり蜘蛛の巣を燃やしたり。</td>
  </tr>
  <tr>
    <td class="txt-center">火付け道具</td>
    <td data-title="価格">2</td>
    <td data-title="重量">0</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性"></td>
    <td data-title="効果">マッチやライター、火打ち石とほくちのセットなどのこと。焚き火があれば休憩しやすくなる。</td>
  </tr>
  <tr>
    <td class="txt-center">毛布</td>
    <td data-title="価格">1</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性"></td>
    <td data-title="効果">軽くて丈夫な毛布。寒い日の休憩には必須。</td>
  </tr>
  <tr>
    <td class="txt-center">寝袋</td>
    <td data-title="価格">5</td>
    <td data-title="重量">3</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性"></td>
    <td data-title="効果">休憩をした時に増加する【気力】プラス1。</td>
  </tr>
  <tr>
    <td class="txt-center">ポリタンク</td>
    <td data-title="価格">5</td>
    <td data-title="重量">3</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性"></td>
    <td data-title="効果">キャンプや水場で水を補充できる。水が補充されている場合、いつでもリミットの増加を試みることができる。一度使うと水はなくなる。空なら重量3、水を満タンにすると重量は8となる。</td>
  </tr>
  <tr>
    <td class="txt-center">釣竿</td>
    <td data-title="価格">7</td>
    <td data-title="重量">2</td>
    <td data-title="タイプ">支援</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">《待つ》</td>
    <td data-title="対象">-</td>
    <td data-title="特性"></td>
    <td data-title="効果">川や池を見つけた時に使用出来る。指定特技の判定に成功すると1Jを得る。</td>
  </tr>
  <tr>
    <td class="txt-center">なぞの葉</td>
    <td data-title="価格">0</td>
    <td data-title="重量">0</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="特性">購入不可、消耗品</td>
    <td data-title="効果">使用するときに1D6を振る。出目が偶数の場合、【体力】が2点増加する。奇数の場合、2点のダメージを受ける。</td>
  </tr>
  <tr>
    <td class="txt-center">生肉</td>
    <td data-title="価格">1</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">購入不可、食料</td>
    <td data-title="効果">お肉にくにく。</td>
  </tr>
  <tr>
    <td class="txt-center">硬い殻</td>
    <td data-title="価格">1</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">購入不可</td>
    <td data-title="効果">武器・防具の材料に使える硬い殻</td>
  </tr>
  <tr>
    <td class="txt-center">硬い羽</td>
    <td data-title="価格">1</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">購入不可</td>
    <td data-title="効果">透き通った硬い羽。武器防具以外に窓ガラスの修理にも。</td>
  </tr>
  <tr>
    <td class="txt-center">毒針</td>
    <td data-title="価格">2</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">購入不可</td>
    <td data-title="効果">毒は薬にも。針は武器や工具に使用される。</td>
  </tr>
  <tr>
    <td class="txt-center">毛皮</td>
    <td data-title="価格">1</td>
    <td data-title="重量">1</td>
    <td data-title="タイプ">道具</td>
    <td data-title="部位">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="特性">購入不可</td>
    <td data-title="効果">もふもふ</td>
  </tr>
</table>