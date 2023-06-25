---
link:
  - rel: "stylesheet"
    href: "../css/style.css"
---

  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>武器攻撃</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>攻撃</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="tag">自由</div>
  <div class="card-content">指定特技の判定に成功すると、装備中の《指定特技》が一致している武器1つの[攻撃力]点のダメージを与える。この時、命中判定の達成値にプラス2の修正がつく。指定特技ごとに別の【アビリティ】として扱う。</div>
</div>

## アビリティ{.break-verso}

アビリティには、以下の要素があります。

| アビリティの要素 | 概要                                                                          |
| ---------------- | ----------------------------------------------------------------------------- |
| 名前             | 同名アビリティの効果は重複しない。                                            |
| グループ         | 取得したクラスと汎用のグループのアビリティを習得できる。                      |
| タイプ           | タイプによって使用タイミングが決まる。攻撃、支援、補助、割込み、常駐の 5 つ。 |
| 反動             | アビリティを使うために消費する【気力】。                                      |
| 指定特技         | アビリティを使うために必要な判定の《指定特技》。                              |
| 対象             | アビリティの効果の対象。                                                      |
| 効果             | アビリティの効果。                                                            |

<dl class="small-dl">
  <dt>名前</dt>
  <dd>
    アビリティの名前です。同じ名前のアビリティの効果は重複しません。</dd>
  <dt>グループ</dt>
  <dd>汎用、クラスのグループがあります。
    <dl>
      <dt>汎用グループ</dt>
      <dd>冒険者なら誰でも習得できます。</dd>
      <dt>クラスグループ</dt>
      <dd>クラスを選択していれば習得できます。</dd>
    </dl>
  </dd>
  <dt>タイプ</dt>
  <dd>攻撃、支援、補助、割込み、常駐の５つのタイプがあります。
    <dl>
      <dt>攻撃タイプ</dt>
      <dd>自分の手番に使います。相手を攻撃するために使います。</dd>
      <dt>支援タイプ</dt>
      <dd>自分の手番に使います。攻撃以外の行動をするために使います。</dd>
      <dt>補助タイプ</dt>
      <dd>特技の行為判定に組み合わせて使います。１つの行為判定に組み合わせられる補助タイプのアビリティは一つだけです。</dd>
      <dt>割込みタイプ</dt>
      <dd>
        誰かの行動に割りこんで使います。同じ名前の割込みタイプのアビリティは、１サイクル（戦闘中ならば1ラウンド）１回のみ使えます。<br></dd>
      <dt>常駐タイプ</dt>
      <dd>習得していれば常に効果を発揮します。</dd>
    </dl>
  </dd>
  <br>
  <dt>反動</dt>
  <dd>
    アビリティを使うことで消費する【気力】の値です。【気力】がマイナスになるようには消費できません。</dd>
  <dt>指定特技</dt>
  <dd>アビリティを使用するために判定が必要な特技です。</dd>
  <dl> 
    <dt>《指定特技》</dt>
    <dd>《指定特技》の判定に成功すると効果を発揮します。</dd>
    <dt>なし</dt>
    <dd>判定をすることなく効果を発揮します。</dd>
    <dt>自由</dt>
    <dd>アビリティを習得したときに自由に特技を１つ選択します。</dd>
    <dt>任意</dt>
    <dd>判定をする時に自由に特技を選ぶことができます。</dd>
    <dt>可変</dt>
    <dd>判定をする時にランダムに特技を決定します。1d6を振って分野を、2d6を振って特技を決定してください。</dd>
    <dt>-</dt>
    <dd>
      常駐・補助アビリティです。 常に効果を発揮、または他の判定に組み合わせることで効果を発揮します。 </dd>
  </dl>
  <dt>対象</dt>
  <dd>アビリティの効果の対象です。</dd>
  <dt>効果</dt>
  <dd>アビリティの効果です。</dd>
</dl>

  <img src="../assets/images/mother/fire.jpg" width="250" alt="イメージ画像" title="火炎弾！  はぐれけだま様作">

### 汎用{.break-page}

冒険者なら誰でも取得できるアビリティです。
手に馴染んだ武器による【武器攻撃】で＜ヌシ＞へのとどめを確実に成功させましょう。

<br>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>武器攻撃</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>攻撃</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>0</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>自由</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、装備中の《指定特技》が一致している武器1つの[攻撃力]点のダメージを与える。この時、命中判定の達成値にプラス2の修正がつく。指定特技ごとに別の【アビリティ】として扱う。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>かばう</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《受ける》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、キャラクター1人のダメージを肩代わりできる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>見切り</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>補助</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>-</div>
  </div>
  <div class="card-content">回避判定に組み合わせて使用する。回避判定の指定特技を《かわす/胴部9》に変更する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>強打</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>補助</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>-</div>
  </div>
  <div class="card-content">命中判定に組み合わせて使用する。命中した攻撃のダメージを1増加させる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>応急手当</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《手当》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、対象の【体力】が1点増加する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>足払い</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>攻撃</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《しゃがむ》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、対象に『転倒』の変調を与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>乱舞</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>補助</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>8</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>-</div>
  </div>
  <div class="card-content">命中判定に組み合わせて使用する。命中した攻撃のダメージを3増加させる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>集中</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>補助</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>-</div>
  </div>
  <div class="card-content">命中判定に組み合わせて使用する。命中判定の達成値にプラス1の修正がつく。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>たからもの</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>-</div>
  </div>
  <div class="card-content">自身の振ったダイス1つの出目を6にする。シナリオ1回。また、生死判定に失敗したとき、この【アビリティ】を失うことでそれを成功にできる。これには気力を消費しない。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/asterisk.svg"/></div>
    <div>説得</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>攻撃</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>6</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>自由</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、対象の気力を2点減少させる。</div>
</div>

### ビッグ{.break-page}

<div style="display:flex">
 <img src="../assets/images/icon/big.png" width="50" height="50"/>
<img width="100" src='../assets/images/big.png' style="display:block;"/>
<!-- <p>恵まれた体格を活かしたアビリティを習得できます。</p> -->
</div>

<table class="responsive" id="ability-big">
  <caption>ビッグ</caption>
  <thead>
    <tr>
      <th>名前  
        <th>グループ</th> 
        <th>タイプ</th> 
        <th>反動</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">におうだち</td>
    <td data-title="グループ">ビッグ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">5</td>
    <td data-title="指定特技">《塞ぐ》</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">指定特技の判定に成功すると、今行われている攻撃の対象を自分1人に変更する。</td>
  </tr>
  <tr>
    <td class="txt-center">鉄拳</td>
    <td data-title="グループ">ビッグ</td>
    <td data-title="タイプ">攻撃</td>
    <td data-title="反動">0</td>
    <td data-title="指定特技">《殴る》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると、1点のダメージを与える。このとき命中判定の達成値にプラス3の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">怪力</td>
    <td data-title="グループ">ビッグ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">白兵攻撃や肉体を使った攻撃により与えるダメージが1点上昇する。</td>
  </tr>
  <tr>
    <td class="txt-center">頑強</td>
    <td data-title="グループ">ビッグ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">あなたの【生命力】をプラス2点する。</td>
  </tr>
  <tr>
    <td class="txt-center">馬鹿力</td>
    <td data-title="グループ">ビッグ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">あなたは「装備部位：両手」のアイテムを「装備部位：片手」として扱うことができる。</td>
  </tr>
  <tr>
    <td class="txt-center">押し倒し</td>
    <td data-title="グループ">ビッグ</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">白兵攻撃や肉体を使った攻撃の命中判定に組み合わせて使用する。対象に『転倒』の変調を与える。</td>
  </tr>
</table>

### チビ

<div style="display:flex">
 <img src="../assets/images/icon/small.png" width="50" height="50"/>
<img width="100" src='../assets/images/tibi.png' style="display:block;"/>
<!-- <p>小器用な立ち回りを活かしたアビリティを習得できます。</p> -->
</div>

<table class="responsive" id="ability-little">
  <caption>チビ</caption>
  <thead>
    <tr>
      <th>名前  
        <th>グループ</th> 
        <th>タイプ</th> 
        <th>反動</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">痩身</td>
    <td data-title="グループ">チビ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">回避判定の達成値にプラス1の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">両手利き</td>
    <td data-title="グループ">チビ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">《利き腕》と《逆腕》の特技を追加で習得する。さらに、代用判定の時、腕部分野の上下のリストが繋がっているように扱う。</td>
  </tr>
  <tr>
    <td class="txt-center">奇襲</td>
    <td data-title="グループ">チビ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">5</td>
    <td data-title="指定特技">《隠れる》</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">戦闘開始時の先制判定の前に使用する。指定特技の判定に成功すると、追加行動を得る。</td>
  </tr>
  <tr>
    <td class="txt-center">アクロバット</td>
    <td data-title="グループ">チビ</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">回避判定に組み合わせて使用する。達成値にプラス2の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">うろちょろ</td>
    <td data-title="グループ">チビ</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">命中判定に組み合わせて使用する。対象の気力を1点減少させる。</td>
  </tr>
  <tr>
    <td class="txt-center">死角</td>
    <td data-title="グループ">チビ</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">命中判定に組み合わせて使用する。達成値にプラス2の修正がつく。</td>
  </tr>
</table>

### オトナ

<div style="display:flex">
 <img src="../assets/images/icon/adult.svg" width="50" height="50"/>
<img width="100" src='../assets/images/otona.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

  <table class="responsive" id="ability-adult">
    <caption>オトナ</caption>
    <thead>
      <tr>
        <th>名前  
          <th>グループ</th> 
          <th>タイプ</th> 
          <th>反動</th> 
          <th>指定特技</th> 
          <th>対象</th> 
          <th>効果</th>
        </th>
      </tr>
    </thead>
    <tr>
      <td class="txt-center">手練</td>
      <td data-title="グループ">オトナ</td>
      <td data-title="タイプ">常駐</td>
      <td data-title="反動">-</td>
      <td data-title="指定特技">-</td>
      <td data-title="対象">自身</td>
      <td data-title="効果">「アクション」の特技から１つ選択する。その特技は隣接する部位にダメージを受けても使用不能とならない。</td>
    </tr>
    <tr>
      <td class="txt-center">百戦錬磨</td>
      <td data-title="グループ">オトナ</td>
      <td data-title="タイプ">常駐</td>
      <td data-title="反動">-</td>
      <td data-title="指定特技">-</td>
      <td data-title="対象">自身</td>
      <td data-title="効果">命中判定の達成値にプラス1の修正がつく。</td>
    </tr>
    <tr>
      <td class="txt-center">人生経験</td>
      <td data-title="グループ">オトナ</td>
      <td data-title="タイプ">常駐</td>
      <td data-title="反動">-</td>
      <td data-title="指定特技">-</td>
      <td data-title="対象">自身</td>
      <td data-title="効果">ギャップを2列塗りつぶすことができる。塗りつぶされたギャップは代用判定の際数えない。</td>
    </tr>
    <tr>
      <td class="txt-center">遭遇歴</td>
      <td data-title="グループ">オトナ</td>
      <td data-title="タイプ">支援</td>
      <td data-title="反動">3</td>
      <td data-title="指定特技">《雑学》</td>
      <td data-title="対象">単体</td>
      <td data-title="効果">指定特技の判定に成功すると、対象に『暴露』の変調を与える。</td>
    </tr>
    <tr>
      <td class="txt-center">へそくり</td>
      <td data-title="グループ">オトナ</td>
      <td data-title="タイプ">常駐</td>
      <td data-title="反動">-</td>
      <td data-title="指定特技">-</td>
      <td data-title="対象">自身</td>
      <td data-title="効果">キャラメイク時の初期Jにプラス3Jする。また、セッション開始時に3J獲得できる。</td>
    </tr>
    <tr>
      <td class="txt-center">旧友</td>
      <td data-title="グループ">オトナ</td>
      <td data-title="タイプ">常駐</td>
      <td data-title="反動">-</td>
      <td data-title="指定特技">-</td>
      <td data-title="対象">自身</td>
      <td data-title="効果">あなたを訪ねて古い友人がやってくる。あなたはキャンプフェイズに任意の[タイミング：支援]のキャンプ人材表1つの効果を使用できる。人材のレベルは1とする。指定特技の判定は行うこと。</td>
    </tr>
  </table>

### ニューエイジ

<div style="display:flex">
 <img src="../assets/images/icon/newage.svg" width="50" height="50"/>
<img width="100" src='../assets/images/new.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<table class="responsive" id="ability-newage">
  <caption>ニューエイジ</caption>
  <thead>
    <tr>
      <th>名前  
        <th>グループ</th> 
        <th>タイプ</th> 
        <th>反動</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">火炎弾</td>
    <td data-title="グループ">ニューエイジ</td>
    <td data-title="タイプ">攻撃</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">《投げる》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると、対象に『炎上』の変調を与える。</td>
  </tr>
  <tr>
    <td class="txt-center">発電</td>
    <td data-title="グループ">ニューエイジ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">《機械》</td>
    <td data-title="対象">アイテム</td>
    <td data-title="効果">指定特技の判定に成功すると、アイテム１つを「充電」できる。</td>
  </tr>
  <tr>
    <td class="txt-center">念動力</td>
    <td data-title="グループ">ニューエイジ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">《逸らす》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">ダメージ適用の直前に使用する。指定特技の判定に成功するとダメージを1点軽減できる。</td>
  </tr>
  <tr>
    <td class="txt-center">治癒</td>
    <td data-title="グループ">ニューエイジ</td>
    <td data-title="タイプ">支援</td>
    <td data-title="反動">6</td>
    <td data-title="指定特技">《手当》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると、対象の部位ダメージを1つ回復できる。ただし、この判定の達成値には[対象の部位ダメージ数]だけのマイナス修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">突然変異</td>
    <td data-title="グループ">ニューエイジ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">ムシ、ケモノ、ミュータントのグループアビリティからランダムに１つアビリティを習得できる。ただし、その反動が1増加する。常駐タイプのアビリティを習得した場合、【精神力】が2点減少する。</td>
  </tr>
  <tr>
    <td class="txt-center">瞬間移動</td>
    <td data-title="グループ">ニューエイジ</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">5</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">回避判定に組み合わせて使用する。回避に成功したとき、あなた以外のキャラクター1人も回避できたことになる。このアビリティを使用する場合、あなたが攻撃の対象でない場合にも回避判定を行える。</td>
  </tr>
</table>

### キズモノ

<div style="display:flex">
 <img src="../assets/images/icon/scar-wound.svg" width="50" height="50"/>
<img width="100" src='../assets/images/kizu.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<table class="responsive" id="ability-wounded">
  <caption>キズモノ</caption>
  <thead>
    <tr>
      <th>名前  
        <th>グループ</th> 
        <th>タイプ</th> 
        <th>反動</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">銀の腕</td>
    <td data-title="グループ">キズモノ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">あなたはダメージを受ける時、先にそのダメージの命中部位を決める。＜キズ＞の部位に攻撃が命中した場合、そのダメージを無効化する。</td>
  </tr>
  <tr>
    <td class="txt-center">克服</td>
    <td data-title="グループ">キズモノ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">ギャップを2列塗りつぶすことができる。塗りつぶされたギャップは代用判定の際数えない。</td>
  </tr>
  <tr>
    <td class="txt-center">肉を斬らせて</td>
    <td data-title="グループ">キズモノ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">4</td>
    <td data-title="指定特技">《耐える》</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">自身が部位ダメージを受けた時に使用できる。指定特技の判定に成功すると自身は追加行動を得る。</td>
  </tr>
  <tr>
    <td class="txt-center">悪運</td>
    <td data-title="グループ">キズモノ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">なし</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">対象の判定の直後に使用。サイコロ1つの出目をマイナス1する。シナリオ3回。</td>
  </tr>
  <tr>
    <td class="txt-center">リハビリ</td>
    <td data-title="グループ">キズモノ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">＜キズ＞に隣接する8つのアクションの《特技》から１つ選び追加で習得する。このアクションは使用可能になる。</td>
  </tr>
  <tr>
    <td class="txt-center">刺し違え</td>
    <td data-title="グループ">キズモノ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">5</td>
    <td data-title="指定特技">《撃つ》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">あなたが部位ダメージを受けた時に割り込んで使用する。指定特技の判定に成功すると、対象に、受けた部位ダメージと同じ部位ダメージを与える。</td>
  </tr>
</table>

### センシ

<div style="display:flex">
 <img src="../assets/images/icon/fighter.svg" width="50" height="50"/>
<img width="100" src='../assets/images/sensi.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<table class="responsive" id="ability-fighter">
  <caption>センシ</caption>
  <thead>
    <tr>
      <th>名前  
        <th>グループ</th> 
        <th>タイプ</th> 
        <th>反動</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">渾身撃</td>
    <td data-title="グループ">センシ</td>
    <td data-title="タイプ">攻撃</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">自由</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると対象に[装備している武器1つの攻撃力+3]点のダメージを与える。</td>
  </tr>
  <tr>
    <td class="txt-center">追撃</td>
    <td data-title="グループ">センシ</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">1</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">命中判定に組み合わせて使用する。命中した攻撃のダメージを1増加させる。</td>
  </tr>
  <tr>
    <td class="txt-center">切り返し</td>
    <td data-title="グループ">センシ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">1</td>
    <td data-title="指定特技">なし</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">命中判定の直後に使用する。その判定を振り直す。</td>
  </tr>
  <tr>
    <td class="txt-center">急所狙い</td>
    <td data-title="グループ">センシ</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">命中判定に組み合わせて使用する。その攻撃によるダメージは軽減されない。</td>
  </tr>
  <tr>
    <td class="txt-center">なぎ払い</td>
    <td data-title="グループ">センシ</td>
    <td data-title="タイプ">攻撃</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">《振る》</td>
    <td data-title="対象">3体</td>
    <td data-title="効果">指定特技の判定に成功すると、3体までの対象に装備中の武器1つの[攻撃力]点のダメージを与える。</td>
  </tr>
  <tr>
    <td class="txt-center">一刀流</td>
    <td data-title="グループ">センシ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">装備している武器が1つだけの場合、武器の攻撃力が1点増加する。</td>
  </tr>
</table>

### スカウト

<div style="display:flex">
 <img src="../assets/images/icon/scout.svg" width="50" height="50"/>
<img width="100" src='../assets/images/sukauto.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<table class="responsive" id="ability-scout">
  <caption>スカウト</caption>
  <thead>
    <tr>
      <th>名前  
        <th>グループ</th> 
        <th>タイプ</th> 
        <th>反動</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">偵察</td>
    <td data-title="グループ">スカウト</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">5</td>
    <td data-title="指定特技">《見つける》</td>
    <td data-title="対象">全体</td>
    <td data-title="効果">ランダムエンカウントの表を振る直前に使用する。指定特技の判定に成功すると、表を振った後に、その遭遇を無視できるようになる。</td>
  </tr>
  <tr>
    <td class="txt-center">マルチワーク</td>
    <td data-title="グループ">スカウト</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">《休まない》</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">探索フェイズの行動前に使用する。判定に成功すると、行動を2回行うことができる。同じ行動を選んでもよい。</td>
  </tr>
  <tr>
    <td class="txt-center">とんずら</td>
    <td data-title="グループ">スカウト</td>
    <td data-title="タイプ">支援</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">《逃げる》</td>
    <td data-title="対象">全体</td>
    <td data-title="効果">指定特技の判定に成功すると、味方を好きなだけ選んで（自身含む）戦闘から撤退させることができる。ただし、この判定の達成値にはマイナス[自身以外に撤退させる人数]の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">踏破</td>
    <td data-title="グループ">スカウト</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">突破判定及び探索表による判定の達成値にプラス1の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">先手必勝</td>
    <td data-title="グループ">スカウト</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">先制判定の達成値にプラス1の修正がつく。先攻で攻撃した場合のみ、あなたの与えるダメージにプラス1の修正がつく。</td>
  </tr>
  <tr>
    <td class="txt-center">小器用</td>
    <td data-title="グループ">スカウト</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">あなたは補助タイプの特技を2つまで組み合わせられるようになる。</td>
  </tr>
</table>

### ハンター

<div style="display:flex">
 <img src="../assets/images/icon/hunter.svg" width="50" height="50"/>
<img width="100" src='../assets/images/hunter.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<table class="responsive" id="ability-hunter">
  <caption>ハンター</caption>
  <thead>
    <tr>
      <th>名前  
        <th>グループ</th> 
        <th>タイプ</th> 
        <th>反動</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">毒矢</td>
    <td data-title="グループ">ハンター</td>
    <td data-title="タイプ">攻撃</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">《撃つ》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると、1点のダメージを与える。その結果対象の【体力】が減少した場合、対象に『毒』の変調を与える。</td>
  </tr>
  <tr>
    <td class="txt-center">狙い撃ち</td>
    <td data-title="グループ">ハンター</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">1</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">命中判定に組み合わせて使用する。攻撃が命中した時、命中する部位が必ず任意となる。</td>
  </tr>
  <tr>
    <td class="txt-center">罠設置</td>
    <td data-title="グループ">ハンター</td>
    <td data-title="タイプ">攻撃</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">《罠》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると、対象に『捕縛』の変調を与える。</td>
  </tr>
  <tr>
    <td class="txt-center">打込み</td>
    <td data-title="グループ">ハンター</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">命中判定に組み合わせて使用する。攻撃が命中した時、対象に『重傷』の変調を与える。</td>
  </tr>
  <tr>
    <td class="txt-center">火炎瓶</td>
    <td data-title="グループ">ハンター</td>
    <td data-title="タイプ">攻撃</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">《投げる》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると、対象に『炎上』の変調と1点のダメージを与える。</td>
  </tr>
  <tr>
    <td class="txt-center">影牢</td>
    <td data-title="グループ">ハンター</td>
    <td data-title="タイプ">支援</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">《追い込む》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると、[対象が受けている変調]点のダメージを与える。</td>
  </tr>
</table>

### ハカセ

<div style="display:flex">
 <img src="../assets/images/icon/hakase.svg" width="50" height="50"/>
<img width="100" src='../assets/images/hakase.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<table class="responsive" id="ability-professor">
  <caption>ハカセ</caption>
  <thead>
    <tr>
      <th>名前  
        <th>グループ</th> 
        <th>タイプ</th> 
        <th>反動</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">観察眼</td>
    <td data-title="グループ">ハカセ</td>
    <td data-title="タイプ">支援</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">《考える》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると、対象に『暴露』の変調を与える。</td>
  </tr>
  <tr>
    <td class="txt-center">弱点看破</td>
    <td data-title="グループ">ハカセ</td>
    <td data-title="タイプ">支援</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">《見つける》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると、そのラウンドの間、味方の与えるダメージは軽減されない。</td>
  </tr>
  <tr>
    <td class="txt-center">戦術</td>
    <td data-title="グループ">ハカセ</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">全体</td>
    <td data-title="効果">先制判定に組み合わせて使用する。先制判定の達成値にプラス1の修正がつく。先制判定に成功した場合、味方全員が先攻で行動できる。</td>
  </tr>
  <tr>
    <td class="txt-center">爆発物</td>
    <td data-title="グループ">ハカセ</td>
    <td data-title="タイプ">攻撃</td>
    <td data-title="反動">4</td>
    <td data-title="指定特技">《科学》</td>
    <td data-title="対象">全体</td>
    <td data-title="効果">指定特技の判定に成功すると敵全体に2点のダメージを与える。判定に失敗した場合、味方全員に2点のダメージを与える。この攻撃によるダメージは軽減できない。</td>
  </tr>
  <tr>
    <td class="txt-center">応用と実践</td>
    <td data-title="グループ">ハカセ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">あなたの特技リストは技術と環境の分野が繋がっているものとして扱うことができる。</td>
  </tr>
  <tr>
    <td class="txt-center">ピタゴラ</td>
    <td data-title="グループ">ハカセ</td>
    <td data-title="タイプ">支援</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">《地理》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">指定特技の判定に成功すると、ラウンドの終了時に対象に2点のダメージを与える。この攻撃によるダメージは軽減できない。周囲の環境を利用した攻撃を行う。</td>
  </tr>
</table>

### ショクニン

<div style="display:flex">
 <img src="../assets/images/icon/shokunin.svg" width="50" height="50"/>
<img width="100" src='../assets/images/syokunin.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<table class="responsive" id="ability-worker">
  <caption>ショクニン</caption>
  <thead>
    <tr>
      <th>名前  
        <th>グループ</th> 
        <th>タイプ</th> 
        <th>反動</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">改造</td>
    <td data-title="グループ">ショクニン</td>
    <td data-title="タイプ">支援</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">《作る》</td>
    <td data-title="対象">アイテム</td>
    <td data-title="効果">武器1つを対象にする。指定特技の判定に成功すると、セッション中その武器の攻撃力にプラス1の修正を与える。</td>
  </tr>
  <tr>
    <td class="txt-center">愛刀</td>
    <td data-title="グループ">ショクニン</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">装備している武器1つを愛刀として指定する。愛刀を使った命中判定の達成値にプラス1の修正がつく。さらに愛刀の[攻撃力]が1点増加する。</td>
  </tr>
  <tr>
    <td class="txt-center">限界突破</td>
    <td data-title="グループ">ショクニン</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">武器を使用した攻撃の命中判定に組み合わせて使用する。攻撃に使用する武器の[攻撃力]を2倍にする。攻撃が終わった後、その武器は破壊される。</td>
  </tr>
  <tr>
    <td class="txt-center">目利き</td>
    <td data-title="グループ">ショクニン</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">1</td>
    <td data-title="指定特技">《鑑定》</td>
    <td data-title="対象">-</td>
    <td data-title="効果">指定特技の判定に成功すると、ランダムにアイテムを入手する時の表の出目にプラス1かマイナス1の修正をつけることができる。</td>
  </tr>
  <tr>
    <td class="txt-center">修理</td>
    <td data-title="グループ">ショクニン</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">2</td>
    <td data-title="指定特技">《耐える》</td>
    <td data-title="対象">アイテム</td>
    <td data-title="効果">武器が破壊される時に割り込んで使用する。指定特技の判定に成功した場合、1D6を振る。5か6の出目が出た場合、その武器を修理しすぐにもう一度装備する。</td>
  </tr>
  <tr>
    <td class="txt-center">試作品</td>
    <td data-title="グループ">ショクニン</td>
    <td data-title="タイプ">攻撃</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">《作る》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">食料・消耗品以外のアイテムを1つ消費する。指定特技の判定に成功すると、対象に1D6点のダメージを与える。</td>
  </tr>
</table>

### ホープ

<div style="display:flex">
 <img src="../assets/images/icon/hope.svg" width="50" height="50"/>
<img width="100" src='../assets/images/kibou.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<table class="responsive" id="ability-hope">
  <caption>ホープ</caption>
  <thead>
    <tr>
      <th>名前  
        <th>グループ</th> 
        <th>タイプ</th> 
        <th>反動</th> 
        <th>指定特技</th> 
        <th>対象</th> 
        <th>効果</th>
      </th>
    </tr>
  </thead>
  <tr>
    <td class="txt-center">みなぎる力</td>
    <td data-title="グループ">ホープ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">あなたの【精神力】にプラス3する。</td>
  </tr>
  <tr>
    <td class="txt-center">希望の光</td>
    <td data-title="グループ">ホープ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">なし</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">対象の判定の直後に使用。サイコロ1つの出目をプラス1する。シナリオ3回。</td>
  </tr>
  <tr>
    <td class="txt-center">幸運の星</td>
    <td data-title="グループ">ホープ</td>
    <td data-title="タイプ">常駐</td>
    <td data-title="反動">-</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">自身</td>
    <td data-title="効果">あなたの行う行為判定では出目が6,5の時にもスペシャルとなる。</td>
  </tr>
  <tr>
    <td class="txt-center">揺らぐ運命</td>
    <td data-title="グループ">ホープ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">5</td>
    <td data-title="指定特技">なし</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">対象の行為判定の直後に使用。その判定を振り直す。</td>
  </tr>
  <tr>
    <td class="txt-center">努力</td>
    <td data-title="グループ">ホープ</td>
    <td data-title="タイプ">割込み</td>
    <td data-title="反動">3</td>
    <td data-title="指定特技">《休まない》</td>
    <td data-title="対象">単体</td>
    <td data-title="効果">対象が何らかの表を振った直後に使用。その出目をプラス1かマイナス1する。</td>
  </tr>
  <tr>
    <td class="txt-center">因果応報</td>
    <td data-title="グループ">ホープ</td>
    <td data-title="タイプ">補助</td>
    <td data-title="反動">6</td>
    <td data-title="指定特技">-</td>
    <td data-title="対象">-</td>
    <td data-title="効果">回避判定に組み合わせて使用する。回避が成功した場合、あなたが受ける予定の攻撃の対象を攻撃者に移し替える。</td>
  </tr>
</table>

### ママ

<div style="display:flex">
 <img src="../assets/images/icon/mama.svg" width="50" height="50"/>
<img width="100" src='../assets/images/mama.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

  <table class="responsive" id="ability-mama">
    <caption>ママ</caption>
    <thead>
      <tr>
        <th>名前  
          <th>グループ</th> 
          <th>タイプ</th> 
          <th>反動</th> 
          <th>指定特技</th> 
          <th>対象</th> 
          <th>効果</th>
        </th>
      </tr>
    </thead>
    <tr>
      <td class="txt-center">声援</td>
      <td data-title="グループ">ママ</td>
      <td data-title="タイプ">割込み</td>
      <td data-title="反動">3</td>
      <td data-title="指定特技">《伝える》</td>
      <td data-title="対象">単体</td>
      <td data-title="効果">自分以外の判定の直前に使用する。指定特技の判定に成功すると対象の達成値にプラス2の修正がつく。</td>
    </tr>
    <tr>
      <td class="txt-center">ごちそう</td>
      <td data-title="グループ">ママ</td>
      <td data-title="タイプ">支援</td>
      <td data-title="反動">2</td>
      <td data-title="指定特技">《料理》</td>
      <td data-title="対象">全体</td>
      <td data-title="効果">人数分の食料を消費する。指定特技の判定に成功すると全員の【気力】が1D6点増加し、【体力】が1点増加する。戦闘中は使用できない。</td>
    </tr>
    <tr>
      <td class="txt-center">激励</td>
      <td data-title="グループ">ママ</td>
      <td data-title="タイプ">支援</td>
      <td data-title="反動">2</td>
      <td data-title="指定特技">《叫ぶ》</td>
      <td data-title="対象">単体</td>
      <td data-title="効果">指定特技の判定に成功すると対象の【気力】が3点増加する。</td>
    </tr>
    <tr>
      <td class="txt-center">ちちんぷいぷい</td>
      <td data-title="グループ">ママ</td>
      <td data-title="タイプ">割込み</td>
      <td data-title="反動">5</td>
      <td data-title="指定特技">《手当》</td>
      <td data-title="対象">単体</td>
      <td data-title="効果">指定特技の判定に成功すると、対象の【体力】が3点増加する。</td>
    </tr>
    <tr>
      <td class="txt-center">節約</td>
      <td data-title="グループ">ママ</td>
      <td data-title="タイプ">常駐</td>
      <td data-title="反動">-</td>
      <td data-title="指定特技">-</td>
      <td data-title="対象">アイテム</td>
      <td data-title="効果">自身が消耗品を使用した時に、1D6を振る。5か6が出た場合、そのアイテムは失われない。</td>
    </tr>
    <tr>
      <td class="txt-center">なだめる</td>
      <td data-title="グループ">ママ</td>
      <td data-title="タイプ">割込み</td>
      <td data-title="反動">2</td>
      <td data-title="指定特技">《止める》</td>
      <td data-title="対象">単体</td>
      <td data-title="効果">対象が本気状態を宣言した時に使用する。指定特技の判定に成功すると、そのラウンドの間、＜ヌシ＞は本気状態になれない。</td>
    </tr>
  </table>
