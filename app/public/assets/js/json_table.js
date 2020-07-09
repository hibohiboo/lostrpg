/*@cc_on _d=document;eval('var document=_d')@*/
function toSource(value) {
  // valueの型を確認する。
  if (value == null) {
    return "null";
  }
  if (value == undefined) {
    return "undefined";
  }
  if (typeof value == "boolean" || typeof value == "number") {
    return value.toString();
  } else if (typeof value == "string") {
    return (
      '"' +
      value.replace(/[\\\"\']/g, function (m0) {
        return "\\" + m0;
      }) +
      '"'
    );
  } else {
    var className = Object.prototype.toString.apply(value);
    if (className == "[object Array]") {
      // Array
      var src = [];
      for (var i = 0, l = value.length; i < l; i++) {
        if (value[i]) {
          src[i] = toSource(value[i]);
        }
      }
      return "[" + src.toString() + "]";
    } else if (className == "[object Date]") {
      // Date
      return "(new Date(" + value + "))";
    } else if (className == "[object Function]") {
      return "null";
    } else {
      // Object
      var src = [];
      for (var p in value) {
        if (
          value == window ||
          !value["hasOwnProperty"] ||
          !value.hasOwnProperty(p)
        )
          continue;
        src[src.length] =
          toSource(p) +
          ":" +
          (value[p]
            ? toSource(value[p])
            : value[p] === undefined
            ? "undefined"
            : "null");
      }
      return "({" + src.toString() + "})";
    }
  }
}

function getCookie(key, tmp1, tmp2, xx1, xx2, xx3) {
  tmp1 = " " + document.cookie + ";";
  xx1 = xx2 = 0;
  len = tmp1.length;
  while (xx1 < len) {
    xx2 = tmp1.indexOf(";", xx1);
    tmp2 = tmp1.substring(xx1 + 1, xx2);
    xx3 = tmp2.indexOf("=");
    if (tmp2.substring(0, xx3) == key) {
      var target = tmp2.substring(xx3 + 1, xx2 - xx1 - 1);
      if (
        target.indexOf('"') == 0 &&
        target.lastIndexOf('"') == target.length - 1
      ) {
        target = target.substring(1, target.length - 1);
      }
      return decodeURI(target);
    }
    xx1 = xx2 + 1;
  }
  return "";
}
function setCookie(key, val, tmp) {
  tmp = key + "=" + encodeURI(val) + "; ";
  document.cookie = tmp;
}

// 定数の宣言
var SEP = ".";

// 指定されたテーブルに行を追加する。
function addRow(tableId, addCount) {
  if (!addCount) {
    addCount = 1;
  }

  // テーブルの取得
  var targetTable = document.getElementById(tableId);
  var header = targetTable.tHead;
  var footer = targetTable.tFoot;

  // ヘッダの行数を取得
  var headerCount = 0;
  if (header) {
    headerCount = header.rows.length;
  }

  var footerCount = 0;
  if (footer) {
    footerCount = footer.rows.length;
  }

  // 現在の行数を取得
  var currentRowCount = targetTable.tBodies[0].rows.length;

  // １行目を取得
  var firstRow = targetTable.tBodies[0].rows[0];

  // 最後の行のID。
  var lastRowId =
    targetTable.tBodies[0].rows[targetTable.tBodies[0].rows.length - 1].id;

  // 最後の行のIDから、追加する行のrownumを取得する。
  var rownum = Number(lastRowId.substring(lastRowId.lastIndexOf(SEP) + 1)) + 1;
  rownum = addZero(rownum, 3);

  for (var i = 0; i < addCount; i++) {
    // 行の追加
    if (footer) {
      var row = targetTable.tBodies[0].insertRow(currentRowCount + i);
    } else {
      var rowIdx = headerCount + currentRowCount - footerCount + i;
      var row = targetTable.insertRow(rowIdx);
    }
    var rowId = tableId + SEP + rownum;
    row.setAttribute("id", rowId);

    for (var j = 0, l = firstRow.cells.length; j < l; j++) {
      // カラムの追加。ID、スタイルはheaderに合わせる。
      var cell = row.insertCell(j);

      // １行目のカラムの取得
      var firstCell = firstRow.cells[j];
      // スタイルの設定
      cell.className = firstCell.className;

      // １行目のinnerHTMLの取得
      var input = firstCell.innerHTML;

      if (firstCell.children.length > 0) {
        // １行目の中の名前、ＩＤを置換する。
        input = input.split(firstRow.id).join(rowId);

        // 置換した中身を設定する。
        cell.innerHTML = input;

        clearElement(rowId, firstRow.id, firstCell);
      } else {
        cell.innerHTML = input;
      }
    }

    // 行数を追加する。
    rownum = addZero(Number(rownum) + 1, 3);
  }
}

function clearElement(rowId, firstRowId, cell) {
  for (var i = 0, l = cell.children.length; i < l; i++) {
    // セルの中身のIDを取得する。
    var cellInId = cell.children[i].id;
    if (cellInId.indexOf(SEP) >= 0) {
      // カラムIDの取得
      var columnId = cellInId.replace(firstRowId, rowId);

      // 中身をクリアする。
      setData(columnId, "");
    }
    if (cell.children[i].children.length > 0) {
      clearElement(rowId, firstRowId, cell.children[i]);
    }
  }
}

// 行の削除
function deleteRow(buttonId) {
  var rowId = buttonId.substring(0, buttonId.lastIndexOf(SEP));
  var tableId = rowId.substring(0, rowId.lastIndexOf(SEP));
  var targetTable = document.getElementById(tableId);

  // 現在の行数を取得
  var currentRowCount = targetTable.tBodies[0].rows.length;

  // 現在の行数が1なら、削除しない。
  if (currentRowCount == 1) {
    alert("これ以上削除できません。");
    return;
  }

  for (var i = 0, l = targetTable.rows.length; i < l; i++) {
    if (targetTable.rows[i].id == rowId) {
      targetTable.deleteRow(i);
      break;
    }
  }
}

// 行の入替
function upRow(buttonId) {
  replaceRow(buttonId, true);
}

function downRow(buttonId) {
  replaceRow(buttonId, false);
}

function replaceRow(buttonId, isUp) {
  var rowId = buttonId.substring(0, buttonId.lastIndexOf(SEP));
  var tableId = rowId.substring(0, rowId.lastIndexOf(SEP));
  var targetTable = document.getElementById(tableId);
  // 現在の行数を取得
  var currentRowCount = targetTable.tBodies[0].rows.length;

  var changeRow1 = null;
  var changeRow2 = null;
  var rows = targetTable.tBodies[0].rows;
  for (var i = 0, l = rows.length; i < l; i++) {
    if (rows[i].id == rowId) {
      changeRow1 = rows[i];
      if (isUp) {
        if (i == 0) {
          // 最初行から↑
          return;
        }
        changeRow2 = rows[i - 1];
      } else {
        if (i == l - 1) {
          // 最終行から↓
          return;
        }
        changeRow2 = rows[i + 1];
      }

      break;
    }
  }
  if (changeRow1 == null || changeRow2 == null) {
    return;
  }

  var id1 = changeRow1.id;
  var id2 = changeRow2.id;

  var inputData1 = getChangeRowData(changeRow1);
  var inputData2 = getChangeRowData(changeRow2);

  for (var i = 0, l = changeRow1.cells.length; i < l; i++) {
    var inner1 = changeRow1.cells[i].innerHTML;
    var inner2 = changeRow2.cells[i].innerHTML;

    inner1 = inner1.split(id1).join(id2);
    inner2 = inner2.split(id2).join(id1);
    changeRow2.cells[i].innerHTML = inner1;
    changeRow1.cells[i].innerHTML = inner2;
  }

  setChangeRowData(inputData1, id1, id2);
  setChangeRowData(inputData2, id2, id1);

  // 移動した行のボタンにフォーカスを当てる。
  document.getElementById(buttonId.split(id1).join(id2)).focus();
}

function setChangeRowData(selections, beforeId, afterId) {
  for (var selection in selections) {
    var value = selections[selection];
    var selectId = selection.split(beforeId).join(afterId);
    setData(selectId, value);
  }
}

function getChangeRowData(elem, ro) {
  if (!ro) {
    ro = new Object();
  }
  if (elem.children.length > 0) {
    for (var i = 0, l = elem.children.length; i < l; i++) {
      var child = elem.children[i];
      if (child.tagName == "INPUT" && child.type == "checkbox") {
        if (child.checked) {
          ro[child.id] = child.value;
        }
      } else {
        if (child.value != undefined) {
          ro[child.id] = child.value;
        } else {
          ro = getChangeRowData(child, ro);
        }
      }
    }
  }
  return ro;
}

// リストになったデータを設定する。
// データを設定する行が存在しない場合、行を追加する。
function setDataList(tableId, dataArray) {
  var targetTable = document.getElementById(tableId);
  if (!targetTable) {
    return;
  }
  var currentRowCount = targetTable.tBodies[0].rows.length;
  // 設定するデータ分の入力項目が存在しない場合、追加する。
  if (currentRowCount < dataArray.length) {
    addRow(tableId, dataArray.length - currentRowCount);
  }

  for (var i = 0, l = dataArray.length; i < l; i++) {
    // 設定する行のＩＤを取得して、引数に渡す。
    var rowId = targetTable.tBodies[0].rows[i].id;
    setAllData(dataArray[i], rowId);
  }
}

// リストになったデータを、行を追加して設定する。
function addDataList(tableId, dataArray) {
  var targetTable = document.getElementById(tableId);
  if (!targetTable) {
    return;
  }
  for (var i = 0, l = dataArray.length; i < l; i++) {
    addRow(tableId, 1);
    var currentRowCount = targetTable.tBodies[0].rows.length;
    var rowId = targetTable.tBodies[0].rows[currentRowCount - 1].id;
    setAllData(dataArray[i], rowId);
  }
}

// １件分のデータを設定する。
function setData(id, value) {
  var column = document.getElementById(id);
  if (!column) {
    return false;
  }
  if (value == 0) {
    value = value + "";
  }

  if (column.type) {
    // 入力
    // 指定された入力項目が存在する場合のみ設定。
    if (column.type == "checkbox") {
      if (column.value == value) {
        column.checked = true;
      } else {
        column.checked = false;
      }
    } else if (column.type == "select-one") {
      var search = false;
      // select-oneの場合、valueが選択肢と合っている場合、そのindexを設定する。
      for (var i = 0, l = column.options.length; i < l; i++) {
        if (column.options[i].value == value) {
          search = true;
          column.selectedIndex = i;
          break;
        }
      }

      if (!search) {
        // 存在しなければ、１番目を選択する。
        column.selectedIndex = 0;
      }
    } else if (column.type != "button") {
      column.value = value ? value : "";
      column.defaultValue = value ? value : "";
    }
  } else if (column.tagName == "SPAN") {
    // 表示
    column.innerHTML = escapeHTML(value);
  }
}
function setAllData(data, prefix) {
  if (!prefix) {
    prefix = "";
  } else {
    prefix = prefix + SEP;
  }

  // 全て設定する。
  for (var elem in data) {
    var className = Object.prototype.toString.apply(data[elem]);
    if (className == "[object Array]") {
      setDataList(prefix + elem, data[elem]);
    } else if (className == "[object String]" || data[elem] == null) {
      setData(prefix + elem, data[elem]);
    } else if (className == "[object Function]") {
      // Functionは何もしない
    } else {
      setAllData(data[elem], prefix + elem);
    }
  }
}

// 入力内容を元に、リクエスト用のJSONデータを作成する。
function createRequestJSONData() {
  var idArray = new Array();
  // text、checkboxの取得
  var inputs = document.getElementsByTagName("input");
  for (var i = 0, l = inputs.length; i < l; i++) {
    var input = inputs[i];
    if (input.type != "button") {
      idArray[idArray.length] = input.id;
    }
  }

  // selectの取得
  var selects = document.getElementsByTagName("select");
  for (var i = 0, l = selects.length; i < l; i++) {
    var input = selects[i];
    idArray[idArray.length] = input.id;
  }

  // textareaの取得
  var textareas = document.getElementsByTagName("textarea");
  for (var i = 0, l = textareas.length; i < l; i++) {
    var input = textareas[i];
    idArray[idArray.length] = input.id;
  }

  // IDを昇順に並べる。
  idArray.sort();

  var ignoreIds = {
    jsonData: true,
    key: true,
    secretData: true,
  };

  // 返却データの作成。
  var returnObject = new Object();
  for (var i = 0, l = idArray.length; i < l; i++) {
    var id = idArray[i];
    if (id == "") {
      continue;
    }
    if (ignoreIds[id] == true) {
      continue;
    }

    var input = document.getElementById(id);
    if (!input || input.disabled) {
      continue;
    }

    var splitIds = id.split(SEP);
    var rootId = splitIds[0];
    var splitIds = slice(splitIds);

    // データの取得
    var value = "";
    if (input.type == "checkbox") {
      if (input.checked) {
        value = input.value;
      }
    } else {
      value = input.value;
    }

    // 取得したデータを追加していく。
    setJSONData(returnObject, rootId, splitIds, value);
  }

  // 配列化
  toArrayObject(returnObject);
  return returnObject;
}

// データをコピーして登録
function copyAndSendForm() {
  var key = document.getElementsByName("key")[0].value;
  if (key == "") {
    sendForm();
    return;
  }

  if (
    confirm(
      "このデータをコピーして登録しますか？\nコピーして新規に登録したデータは、リストに載せない状態で登録されます。"
    )
  ) {
    document.getElementsByName("key")[0].value = "";
    document.getElementsByName("display")[0].checked = true;
    sendForm();
  }
}

// 数字かどうかの判断
function isNumber(value) {
  return value.match(/[0-9]+/g) == value;
}

// JSONのデータを設定する。
function setJSONData(data, id, splitIds, value) {
  if (splitIds.length > 0) {
    // 最後の要素ではない場合

    // 通常のObjectの場合
    var target = data[id];
    if (!target) {
      // targetが存在しなければ、作成する。
      target = new Object();
      data[id] = target;
    }
    // targetにデータを設定する。
    setJSONData(target, splitIds[0], slice(splitIds), value);
  } else {
    // 最後の要素の場合、データを追加する。
    data[id] = value;
  }
}

// Arrayのスライス。１個だけ。
function slice(array) {
  if (array.length <= 1) {
    return new Array();
  } else {
    return array.slice(1);
  }
}

// 数字のキーのみで構成されたオブジェクトを配列に変換する。
function toArrayObject(data) {
  for (var key in data) {
    var value = data[key];
    var className = Object.prototype.toString.apply(value);
    if (className == "[object Object]") {
      // オブジェクトの場合、配下のkeyが数字か確認する。
      value = toArrayObject(value);
      var isNum = true;
      var numArray = new Array();
      for (var vKey in value) {
        if (vKey == "toSource") {
          continue;
        }
        if (!isNumber(vKey)) {
          isNum = false;
          break;
        } else {
          numArray[numArray.length] = vKey;
        }
      }
      if (isNum && numArray.length > 0) {
        // 数字のキーのみ、かつ、値があれば配列化して設定する。
        numArray.sort();
        var array = new Array();
        for (var i = 0, l = numArray.length; i < l; i++) {
          array[i] = value[numArray[i]];
        }
        data[key] = array;
      }
    }
  }
  return data;
}

function escapeHTML(value) {
  value = value ? "" + value : "";
  value = value.split("&").join("&amp;");
  value = value.split("<").join("&lt;");
  value = value.split(">").join("&gt;");
  value = value.split('"').join("&quot;");
  value = value.split("'").join("&#39");
  value = value.split("\r\n").join("<br>");
  return value;
}

function writeOptions(values, texts) {
  if (!texts) {
    texts = values;
  }
  var className = Object.prototype.toString.apply(values);
  if (className == "[object Array]") {
    var vArray = values;
    var tArray = texts;
  } else {
    var vArray = values.split(",");
    var tArray = texts.split(",");
  }

  for (var i = 0, l = tArray.length; i < l; i++) {
    document.write(
      "<option value='" + vArray[i] + "'>" + tArray[i] + "</option>"
    );
  }
}

function addZero(value, length) {
  if (!value) {
    return value;
  }
  value = "" + value;
  for (var i = value.length; i < length; i++) {
    value = "0" + value;
  }
  return value;
}

function writeln(doc, text, notEscape) {
  if (!notEscape) {
    text = escapeHTML(text);
  }
  doc.write(text + "\n");
}

function writeText(doc, text, notEscape) {
  if (!notEscape) {
    text = escapeHTML(text);
  }
  doc.write(text);
}

function writebr(doc, text, notEscape) {
  if (!notEscape) {
    text = escapeHTML(text);
  }
  text = text.split("\n").join("<br>\n");
  doc.write(text + "<br>\n");
}

function waningsDisp() {
  var warnings = document.getElementById("warnings");
  if (warnings.style.display == "none") {
    warnings.style.display = "";
  } else {
    warnings.style.display = "none";
  }
}

function updown(e, input) {
  if (!e) {
    e = window.event;
  }
  var value = Number(input.value);
  if (!isNaN(value)) {
    if (e.keyCode == 38) {
      //38:↑
      input.value = value + 1;
    } else if (e.keyCode == 40) {
      //40:↓
      input.value = value - 1;
    }
  }
}

// タブ切り替え
function changeTabs(anchor, divId) {
  var tabs = document.getElementById("div.tabs").children;
  for (var i = 0, l = tabs.length; i < l; i++) {
    if (tabs[i].id == divId) {
      tabs[i].style.display = "";
    } else {
      tabs[i].style.display = "none";
    }
  }
  var lis = anchor.parentNode.children;
  for (var i = 0, l = lis.length; i < l; i++) {
    if (lis[i] == anchor) {
      lis[i].className = "selected";
    } else {
      lis[i].className = "";
    }
  }
}

function setTweetContentBase(text) {
  // iframe要素とURLを取得
  var twchilds = document.getElementById("twbutton").children;
  var elTwFrame = null;
  for (var i = 0; i < twchilds.length; i++) {
    if (twchilds[i].tagName == "IFRAME") {
      elTwFrame = twchilds[i];
      break;
    }
  }

  if (!elTwFrame) {
    return false;
  }
  var url = elTwFrame.src;

  // 任意の文章のボタンを表示するURLを生成
  var nextUrl = url.replace(/([#&]text=)([^&]+)/, function (s, m1, m2) {
    return m1 + encodeURIComponent(text);
  });

  // URLを書き換え
  // （"#"以降の書き換えだと画面が再読み込みされずボタンが変わらないので、
  //   一度別のURLに変更してから目的のものを設定する。）
  elTwFrame.src = "about:blank";
  setTimeout(function () {
    elTwFrame.src = nextUrl;
  }, 1);
}

//秘密行の削除
function deleteSecretRows(rows, name) {
  if (!name) {
    name = "secret";
  }

  targets = new Array();
  for (var i = 0, l = rows.length; i < l; i++) {
    if (rows[i][name] == "1") {
      targets[targets.length] = i;
    }
  }
  for (var i = targets.length - 1; i >= 0; i--) {
    rows.splice(targets[i], 1);
  }
}

//ユーティリティ
function jqueryId(id) {
  id = "#" + id.split(".").join("\\.");
  return id;
}
