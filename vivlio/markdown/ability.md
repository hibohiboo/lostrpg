---
link:
  - rel: "stylesheet"
    href: "../css/style.css"
---

<!---->

## アビリティ{#ability .break-verso}

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

### 汎用{.break-verso}

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

### ビッグ{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/big.png" width="100" height="100"/>
<img width="100" src='../assets/images/big.png' style="display:block;"/>
<!-- <p>恵まれた体格を活かしたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/big.png"/></div>
    <div>におうだち</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《塞ぐ》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、今行われている攻撃の対象を自分1人に変更する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/big.png"/></div>
    <div>鉄拳</div>
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
    <div>《殴る》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、1点のダメージを与える。このとき命中判定の達成値にプラス3の修正がつく。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/big.png"/></div>
    <div>怪力</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">白兵攻撃や肉体を使った攻撃により与えるダメージが1点上昇する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/big.png"/></div>
    <div>頑強</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">あなたの【生命力】をプラス2点する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/big.png"/></div>
    <div>馬鹿力</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">あなたは「装備部位：両手」のアイテムを「装備部位：片手」として扱うことができる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/big.png"/></div>
    <div>押し倒し</div>
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
  <div class="card-content">白兵攻撃や肉体を使った攻撃の命中判定に組み合わせて使用する。対象に『転倒』の変調を与える。</div>
</div>

### チビ{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/small.png" width="100" height="100"/>
<img width="100" src='../assets/images/tibi.png' style="display:block;"/>
<!-- <p>小器用な立ち回りを活かしたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/small.png"/></div>
    <div>痩身</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">回避判定の達成値にプラス1の修正がつく。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/small.png"/></div>
    <div>両手利き</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">《利き腕》と《逆腕》の特技を追加で習得する。さらに、代用判定の時、腕部分野の上下のリストが繋がっているように扱う。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/small.png"/></div>
    <div>奇襲</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《隠れる》</div>
  </div>
  <div class="card-content">戦闘開始時の先制判定の前に使用する。指定特技の判定に成功すると、追加行動を得る。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/small.png"/></div>
    <div>アクロバット</div>
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
  <div class="card-content">回避判定に組み合わせて使用する。達成値にプラス2の修正がつく。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/small.png"/></div>
    <div>うろちょろ</div>
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
  <div class="card-content">命中判定に組み合わせて使用する。対象の気力を1点減少させる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/small.png"/></div>
    <div>死角</div>
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
  <div class="card-content">命中判定に組み合わせて使用する。達成値にプラス2の修正がつく。</div>
</div>

### オトナ{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/adult.svg" width="50" height="50"/>
<img width="100" src='../assets/images/otona.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/adult.svg"/></div>
    <div>手練</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">「アクション」の特技から１つ選択する。その特技は隣接する部位にダメージを受けても使用不能とならない。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/adult.svg"/></div>
    <div>百戦錬磨</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">命中判定の達成値にプラス1の修正がつく。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/adult.svg"/></div>
    <div>人生経験</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">ギャップを2列塗りつぶすことができる。塗りつぶされたギャップは代用判定の際数えない。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/adult.svg"/></div>
    <div>遭遇歴</div>
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
    <div>《雑学》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、対象に『暴露』の変調を与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/adult.svg"/></div>
    <div>へそくり</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">キャラメイク時の初期Jにプラス3Jする。また、セッション開始時に3J獲得できる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/adult.svg"/></div>
    <div>旧友</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">あなたを訪ねて古い友人がやってくる。あなたはキャンプフェイズに任意の[タイミング：支援]のキャンプ人材表1つの効果を使用できる。人材のレベルは1とする。指定特技の判定は行うこと。</div>
</div>

### ニューエイジ{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/newage.svg" width="50" height="50"/>
<img width="100" src='../assets/images/new.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/newage.svg"/></div>
    <div>火炎弾</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>攻撃</div>
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
    <div>《投げる》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、対象に『炎上』の変調を与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/newage.svg"/></div>
    <div>発電</div>
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
      <div>アイテム</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《機械》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、アイテム１つを「充電」できる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/newage.svg"/></div>
    <div>念動力</div>
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
    <div>《逸らす》</div>
  </div>
  <div class="card-content">ダメージ適用の直前に使用する。指定特技の判定に成功するとダメージを1点軽減できる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/newage.svg"/></div>
    <div>治癒</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
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
    <div>《手当》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、対象の部位ダメージを1つ回復できる。ただし、この判定の達成値には[対象の部位ダメージ数]だけのマイナス修正がつく。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/newage.svg"/></div>
    <div>突然変異</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">ムシ、ケモノ、ミュータントのグループアビリティからランダムに１つアビリティを習得できる。ただし、その反動が1増加する。常駐タイプのアビリティを習得した場合、【精神力】が2点減少する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/newage.svg"/></div>
    <div>瞬間移動</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>補助</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>5</div>
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
  <div class="card-content">回避判定に組み合わせて使用する。回避に成功したとき、あなた以外のキャラクター1人も回避できたことになる。このアビリティを使用する場合、あなたが攻撃の対象でない場合にも回避判定を行える。</div>
</div>

### キズモノ{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/scar-wound.svg" width="50" height="50"/>
<img width="100" src='../assets/images/kizu.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scar-wound.svg"/></div>
    <div>銀の腕</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">あなたはダメージを受ける時、先にそのダメージの命中部位を決める。＜キズ＞の部位に攻撃が命中した場合、そのダメージを無効化する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scar-wound.svg"/></div>
    <div>克服</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">ギャップを2列塗りつぶすことができる。塗りつぶされたギャップは代用判定の際数えない。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scar-wound.svg"/></div>
    <div>肉を斬らせて</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>4</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《耐える》</div>
  </div>
  <div class="card-content">自身が部位ダメージを受けた時に使用できる。指定特技の判定に成功すると自身は追加行動を得る。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scar-wound.svg"/></div>
    <div>悪運</div>
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
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>なし</div>
  </div>
  <div class="card-content">対象の判定の直後に使用。サイコロ1つの出目をマイナス1する。シナリオ3回。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scar-wound.svg"/></div>
    <div>リハビリ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">＜キズ＞に隣接する8つのアクションの《特技》から１つ選び追加で習得する。このアクションは使用可能になる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scar-wound.svg"/></div>
    <div>刺し違え</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《撃つ》</div>
  </div>
  <div class="card-content">あなたが部位ダメージを受けた時に割り込んで使用する。指定特技の判定に成功すると、対象に、受けた部位ダメージと同じ部位ダメージを与える。</div>
</div>

### センシ{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/fighter.svg" width="50" height="50"/>
<img width="100" src='../assets/images/sensi.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/fighter.svg"/></div>
    <div>渾身撃</div>
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
    <div>自由</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると対象に[装備している武器1つの攻撃力+3]点のダメージを与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/fighter.svg"/></div>
    <div>追撃</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>補助</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>1</div>
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
    <div><img src="../assets/images/icon/fighter.svg"/></div>
    <div>切り返し</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>自身</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>なし</div>
  </div>
  <div class="card-content">命中判定の直後に使用する。その判定を振り直す。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/fighter.svg"/></div>
    <div>急所狙い</div>
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
  <div class="card-content">命中判定に組み合わせて使用する。その攻撃によるダメージは軽減されない。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/fighter.svg"/></div>
    <div>なぎ払い</div>
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
      <div>3体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《振る》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、3体までの対象に装備中の武器1つの[攻撃力]点のダメージを与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/fighter.svg"/></div>
    <div>一刀流</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">装備している武器が1つだけの場合、武器の攻撃力が1点増加する。</div>
</div>

### スカウト{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/scout.svg" width="50" height="50"/>
<img width="100" src='../assets/images/sukauto.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scout.svg"/></div>
    <div>偵察</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>全体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《見つける》</div>
  </div>
  <div class="card-content">ランダムエンカウントの表を振る直前に使用する。指定特技の判定に成功すると、表を振った後に、その遭遇を無視できるようになる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scout.svg"/></div>
    <div>マルチワーク</div>
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
      <div>自身</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《休まない》</div>
  </div>
  <div class="card-content">探索フェイズの行動前に使用する。判定に成功すると、行動を2回行うことができる。同じ行動を選んでもよい。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scout.svg"/></div>
    <div>とんずら</div>
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
      <div>全体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《逃げる》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、味方を好きなだけ選んで（自身含む）戦闘から撤退させることができる。ただし、この判定の達成値にはマイナス[自身以外に撤退させる人数]の修正がつく。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scout.svg"/></div>
    <div>踏破</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">突破判定及び探索表による判定の達成値にプラス1の修正がつく。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scout.svg"/></div>
    <div>先手必勝</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">先制判定の達成値にプラス1の修正がつく。先攻で攻撃した場合のみ、あなたの与えるダメージにプラス1の修正がつく。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/scout.svg"/></div>
    <div>小器用</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">あなたは補助タイプの特技を2つまで組み合わせられるようになる。</div>
</div>

### ハンター{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/hunter.svg" width="50" height="50"/>
<img width="100" src='../assets/images/hunter.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hunter.svg"/></div>
    <div>毒矢</div>
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
    <div>《撃つ》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、1点のダメージを与える。その結果対象の【体力】が減少した場合、対象に『毒』の変調を与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hunter.svg"/></div>
    <div>狙い撃ち</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>補助</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>1</div>
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
  <div class="card-content">命中判定に組み合わせて使用する。攻撃が命中した時、命中する部位が必ず任意となる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hunter.svg"/></div>
    <div>罠設置</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>攻撃</div>
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
    <div>《罠》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、対象に『捕縛』の変調を与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hunter.svg"/></div>
    <div>打込み</div>
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
  <div class="card-content">命中判定に組み合わせて使用する。攻撃が命中した時、対象に『重傷』の変調を与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hunter.svg"/></div>
    <div>火炎瓶</div>
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
    <div>《投げる》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、対象に『炎上』の変調と1点のダメージを与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hunter.svg"/></div>
    <div>影牢</div>
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
    <div>《追い込む》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、[対象が受けている変調]点のダメージを与える。</div>
</div>

### ハカセ{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/hakase.svg" width="50" height="50"/>
<img width="100" src='../assets/images/hakase.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hakase.svg"/></div>
    <div>観察眼</div>
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
    <div>《考える》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、対象に『暴露』の変調を与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hakase.svg"/></div>
    <div>弱点看破</div>
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
    <div>《見つける》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、そのラウンドの間、味方の与えるダメージは軽減されない。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hakase.svg"/></div>
    <div>戦術</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>補助</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>3</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>全体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>-</div>
  </div>
  <div class="card-content">先制判定に組み合わせて使用する。先制判定の達成値にプラス1の修正がつく。先制判定に成功した場合、味方全員が先攻で行動できる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hakase.svg"/></div>
    <div>爆発物</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>攻撃</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>4</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>全体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《科学》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると敵全体に2点のダメージを与える。判定に失敗した場合、味方全員に2点のダメージを与える。この攻撃によるダメージは軽減できない。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hakase.svg"/></div>
    <div>応用と実践</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">あなたの特技リストは技術と環境の分野が繋がっているものとして扱うことができる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hakase.svg"/></div>
    <div>ピタゴラ</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
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
    <div>《地理》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、ラウンドの終了時に対象に2点のダメージを与える。この攻撃によるダメージは軽減できない。周囲の環境を利用した攻撃を行う。</div>
</div>

### ショクニン{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/shokunin.svg" width="50" height="50"/>
<img width="100" src='../assets/images/syokunin.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/shokunin.svg"/></div>
    <div>改造</div>
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
      <div>アイテム</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《作る》</div>
  </div>
  <div class="card-content">武器1つを対象にする。指定特技の判定に成功すると、セッション中その武器の攻撃力にプラス1の修正を与える。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/shokunin.svg"/></div>
    <div>愛刀</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">装備している武器1つを愛刀として指定する。愛刀を使った命中判定の達成値にプラス1の修正がつく。さらに愛刀の[攻撃力]が1点増加する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/shokunin.svg"/></div>
    <div>限界突破</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>補助</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">武器を使用した攻撃の命中判定に組み合わせて使用する。攻撃に使用する武器の[攻撃力]を2倍にする。攻撃が終わった後、その武器は破壊される。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/shokunin.svg"/></div>
    <div>目利き</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>1</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>-</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《鑑定》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると、ランダムにアイテムを入手する時の表の出目にプラス1かマイナス1の修正をつけることができる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/shokunin.svg"/></div>
    <div>修理</div>
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
      <div>アイテム</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《耐える》</div>
  </div>
  <div class="card-content">武器が破壊される時に割り込んで使用する。指定特技の判定に成功した場合、1D6を振る。5か6の出目が出た場合、その武器を修理しすぐにもう一度装備する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/shokunin.svg"/></div>
    <div>試作品</div>
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
    <div>《作る》</div>
  </div>
  <div class="card-content">食料・消耗品以外のアイテムを1つ消費する。指定特技の判定に成功すると、対象に1D6点のダメージを与える。</div>
</div>

### ホープ{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/hope.svg" width="50" height="50"/>
<img width="100" src='../assets/images/kibou.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hope.svg"/></div>
    <div>みなぎる力</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">あなたの【精神力】にプラス3する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hope.svg"/></div>
    <div>希望の光</div>
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
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>なし</div>
  </div>
  <div class="card-content">対象の判定の直後に使用。サイコロ1つの出目をプラス1する。シナリオ3回。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hope.svg"/></div>
    <div>幸運の星</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
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
  <div class="card-content">あなたの行う行為判定では出目が6,5の時にもスペシャルとなる。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hope.svg"/></div>
    <div>揺らぐ運命</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>5</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>なし</div>
  </div>
  <div class="card-content">対象の行為判定の直後に使用。その判定を振り直す。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hope.svg"/></div>
    <div>努力</div>
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
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《休まない》</div>
  </div>
  <div class="card-content">対象が何らかの表を振った直後に使用。その出目をプラス1かマイナス1する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/hope.svg"/></div>
    <div>因果応報</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>補助</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>6</div>
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
  <div class="card-content">回避判定に組み合わせて使用する。回避が成功した場合、あなたが受ける予定の攻撃の対象を攻撃者に移し替える。</div>
</div>

### ママ{.break-verso}

<div style="display:flex">
 <img src="../assets/images/icon/mama.svg" width="50" height="50"/>
<img width="100" src='../assets/images/mama.png' style="display:block;"/>
<!-- <p>経験に裏打ちされたアビリティを習得できます。</p> -->
</div>

<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/mama.svg"/></div>
    <div>声援</div>
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
      <div>単体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《伝える》</div>
  </div>
  <div class="card-content">自分以外の判定の直前に使用する。指定特技の判定に成功すると対象の達成値にプラス2の修正がつく。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/mama.svg"/></div>
    <div>ごちそう</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>2</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>全体</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>《料理》</div>
  </div>
  <div class="card-content">人数分の食料を消費する。指定特技の判定に成功すると全員の【気力】が1D6点増加し、【体力】が1点増加する。戦闘中は使用できない。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/mama.svg"/></div>
    <div>激励</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>支援</div>
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
    <div>《叫ぶ》</div>
  </div>
  <div class="card-content">指定特技の判定に成功すると対象の【気力】が3点増加する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/mama.svg"/></div>
    <div>ちちんぷいぷい</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>割込み</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>5</div>
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
  <div class="card-content">指定特技の判定に成功すると、対象の【体力】が3点増加する。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/mama.svg"/></div>
    <div>節約</div>
  </div>
  <div class="row">
    <div class="tag">
      <div>タイプ</div>
      <div>常駐</div>
    </div>
    <div class="tag">
      <div>反動</div>
      <div>-</div>
    </div>
    <div class="tag">
      <div>対象</div>
      <div>アイテム</div>
    </div>
  </div>
  <div class="tag">
    <div>指定特技</div>
    <div>-</div>
  </div>
  <div class="card-content">自身が消耗品を使用した時に、1D6を振る。5か6が出た場合、そのアイテムは失われない。</div>
</div>
<div class="ability-card">
  <div class="card-title">
    <div><img src="../assets/images/icon/mama.svg"/></div>
    <div>なだめる</div>
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
    <div>《止める》</div>
  </div>
  <div class="card-content">対象が本気状態を宣言した時に使用する。指定特技の判定に成功すると、そのラウンドの間、＜ヌシ＞は本気状態になれない。</div>
</div>
