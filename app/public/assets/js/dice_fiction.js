/*@cc_on _d=document;eval('var document=_d')@*/

var GAPS = ["skills.a", "skills.b", "skills.c", "skills.d", "skills.e"];

function gapClick(checkbox) {
  var id = checkbox.id;
  var gapKind = id.substring(id.lastIndexOf("."));
  var rows = document.getElementById("skills").tBodies[0].rows;
  for (var i = 0; i < rows.length; i++) {
    var rowId = rows[i].id;
    var gapId = rowId + gapKind;
    var gap = document.getElementById(gapId);
    if (!gap) {
      return;
    }
    gap = gap.parentNode;
    if (checkbox.checked) {
      gap.className = "spacer_black";
    } else {
      gap.className = "spacer";
    }
  }
}

function checkLearned(learnedRows, column) {
  // 習得済みかチェックする。
  for (var i = 1, l = learnedRows.length; i < l; i++) {
    var row = learnedRows[i];
    var idValue = document.getElementById(row.id + SEP + "id").value;
    if (column.id == idValue) {
      return row;
    }
  }
  return null;
}

function deleteLearnedSkill(row, column, check) {
  // 習得済みの場合、習得済みリストから消す。
  deleteRow(row.id + ".delete");

  // 色を元に戻す。
  column.parentNode.className = column.parentNode.className.replace(
    " selected",
    ""
  );
  if (check) {
    check.parentNode.className = check.parentNode.className.replace(
      " selected",
      ""
    );
  }
}

function addLearnedSkill(column, check) {
  // 未修得の場合、習得済みリストに追加する。
  var array = new Array();
  array[0] = { id: column.id, name: column.innerHTML };
  addDataList("learned", array);

  // 色を黒くする。
  column.parentNode.className += " selected";
  if (check) {
    check.parentNode.className += " selected";
  }
}

function judgeBoldChange(column) {
  // 現在、太字のものを通常に戻し、選択されたものを太字にする。
  var judge = document.getElementById("judge.skill.id");
  if (judge.value != "") {
    // 太字を通常に戻す。
    var oldColumn = document.getElementById(judge.value);
    oldColumn.className = oldColumn.className.replace(" b", "");
  }

  judge.value = column.id;
  document.getElementById("judge.skill.name").innerHTML = column.innerHTML;
  column.className += " b";
}

function columnClick(column, options, colLoop, rowLoop) {
  var learnedTable = document.getElementById("learned");
  var learnedRows = learnedTable.tBodies[0].rows;

  // モードをチェックする。
  if (isSet()) {
    // モード：設定

    // check項目
    var check = document.getElementById(column.id.replace("name", "check"));
    var find = false;

    // 習得済みかチェックする。
    var learnedRow = checkLearned(learnedRows, column);

    if (learnedRow) {
      // 削除
      deleteLearnedSkill(learnedRow, column, check);
    } else {
      // 追加
      addLearnedSkill(column, check);
    }
  } else {
    // モード：判定
    judgeLearnedRows(learnedRows, column, rowLoop, colLoop, options);
  }
}

function judgeLearnedRows(learnedRows, column, rowLoop, colLoop, options) {
  // 太字の切り替え
  judgeBoldChange(column);

  var destroyText = "";
  var className = Object.prototype.toString.apply(options);
  if (className != "[object String]") {
    destroyText = options["destroyText"];
  } else {
    destroyText = options;
  }

  // 判定する。
  var judgeIds = column.id.split(SEP);
  var jRowIdx = Number(judgeIds[1].replace("row", ""));
  var jColIdx = Number(judgeIds[2].replace("name", ""));

  var minIdx = 0;
  var minValue = 100;

  // ギャップのtrue/falseを取得。
  var gapArray = new Array();
  for (var i = 0, l = GAPS.length; i < l; i++) {
    gapArray[i] = document.getElementById(GAPS[i]).checked;
  }

  var od = document.getElementById("odtoolflag");
  var odFlag = false;
  if (od) {
    odFlag = od.checked;
  }

  for (var i = 1, l = learnedRows.length; i < l; i++) {
    // 判定対象の決定
    var row = learnedRows[i];
    var targetId = document.getElementById(row.id + SEP + "id").value;
    var targetIds = targetId.split(SEP);
    var rowIdx = Number(targetIds[1].replace("row", ""));
    var colIdx = Number(targetIds[2].replace("name", ""));

    // 項目１つ分の判定処理
    calcValue = calculateJudgeValue(
      jRowIdx,
      jColIdx,
      rowIdx,
      colIdx,
      gapArray,
      rowLoop,
      colLoop
    );

    // 判定文の組み立て
    var check = document.getElementById(targetId.replace("name", "check"));
    var judge = document.getElementById(row.id + SEP + "judge");
    var explain =
      " （判定：" +
      document.getElementById(row.id + SEP + "name").innerHTML +
      "）";
    if (check.checked) {
      explain += " " + destroyText;
    } else {
      if (calcValue < minValue) {
        minIdx = i;
        minValue = calcValue;
      }
    }

    // 判定文の設定
    var diceValue = "2D6";
    if (odFlag) {
      diceValue += " ";
    }
    if (options.dicefix) {
      diceValue = options.dicefix(column, targetId, diceValue);
    }

    judge.value = diceValue + ">=" + calcValue + explain;
    judge.className = judge.className.replace(" b", "");
  }

  // 最も低い値の判定欄を太字にする。
  document.getElementById(learnedRows[minIdx].id + SEP + "judge").className +=
    " b";
}

function calculateJudgeValue(
  jRowIdx,
  jColIdx,
  rowIdx,
  colIdx,
  gapArray,
  rowLoop,
  colLoop
) {
  var calcValue = 5;

  // 縦方向の距離を求める。
  var rowDistance = Math.abs(jRowIdx - rowIdx);
  if (rowLoop) {
    // 反対方法も確認する。
    var tempRD;
    if (jRowIdx > rowIdx) {
      tempRD = rowIdx + (11 - jRowIdx);
    } else {
      tempRD = jRowIdx + (11 - rowIdx);
    }

    // 小さい方を距離とする。
    if (tempRD < rowDistance) {
      rowDistance = tempRD;
    }
  }

  // 横方向の距離を求める。
  var colDistance = Math.abs(jColIdx - colIdx);

  var start = jColIdx > colIdx ? colIdx : jColIdx;
  var end = start == jColIdx ? colIdx : jColIdx;
  for (var j = start; j < end; j++) {
    if (!gapArray[j]) {
      colDistance++;
    }
  }
  if (colLoop) {
    // 反対方向も確認する。
    var colsStart = 0;
    var colsEnd = 5;
    var tempCD = 1;
    for (var j = colsStart; j < start; j++) {
      tempCD++;
      if (!document.getElementById(GAPS[j]).checked) {
        tempCD++;
      }
    }
    for (var j = end; j < colsEnd; j++) {
      tempCD++;
      if (!document.getElementById(GAPS[j]).checked) {
        tempCD++;
      }
    }

    // 小さい方を距離とする。
    if (tempCD < colDistance) {
      colDistance = tempCD;
    }
  }

  // 計算結果（初期値5 + 縦距離 + 横距離）
  calcValue = calcValue + rowDistance + colDistance;

  return calcValue;
}

function isSet() {
  var modes = document.getElementsByName("mode");
  for (var i = 0; i < modes.length; i++) {
    if (modes[i].checked) {
      return modes[i].value == "1";
    }
  }
}

function setLearnedSkills(learneds) {
  var modes = document.getElementsByName("mode");
  for (var i = 0; i < modes.length; i++) {
    if (modes[i].value == "1") {
      modes[i].checked = true;
    }
  }
  for (var i = 0, l = learneds.length; i < l; i++) {
    var learned = learneds[i];
    if (learned) {
      var column = document.getElementById(learned["id"]);
      if (column) {
        colClick(column);
      }
    }
  }
}

function setDamage(checkcol) {
  // 色つけ
  var painName = " pain";
  if (checkcol.checked) {
    checkcol.className = checkcol.className + painName;
  } else {
    checkcol.className = checkcol.className.split(painName).join("");
  }

  var id = checkcol.id;
  var splitIds = id.split(SEP);
  var list = document.getElementById("skills").getElementsByTagName("input");
  for (var i = 0, l = list.length; i < l; i++) {
    var col = list[i];
    if (col.id.lastIndexOf(splitIds[splitIds.length - 1]) != -1) {
      col.checked = checkcol.checked;
    }
  }
}

function tableCellClick(td, type, startCell, endCell) {
  var value = Number(td.innerHTML);
  if (td.className.indexOf(" selected") != -1) {
    value = value - 1;
  }
  document.getElementById(type + SEP + "value").value = value;
  setTableCell(type, startCell, endCell);
}

function setTableCell(type, startCell, endCell, maxNum) {
  var num = Number(document.getElementById(type + SEP + "value").value);
  if (maxNum) {
    maxNum = Number(maxNum);
    if (isNaN(maxNum)) {
      maxNum = 0;
    }
  }
  for (var i = startCell; i <= endCell; i++) {
    var column = document.getElementById(type + SEP + i);
    if (i <= num) {
      if (column.className.indexOf(" selected") == -1) {
        column.className += " selected";
      }
    } else {
      column.className = column.className.split(" selected").join("");
    }
    if (maxNum) {
      if (i <= maxNum) {
        column.className = column.className.split(" secret").join("");
      } else {
        if (column.className.indexOf(" secret") == -1) {
          column.className += " secret";
        }
      }
    }
  }
}

var stylegap = "";

function styleChange(value) {
  // 復元
  for (var i = 0, l = stylegap.length; i < l; i++) {
    setStyleGap(false, stylegap.charAt(i));
  }
  // 保存
  stylegap = value;

  // 設定
  var gapfixout = document.getElementById("skills.fixout");
  if (!gapfixout || !gapfixout.checked) {
    for (var i = 0, l = value.length; i < l; i++) {
      setStyleGap(true, value.charAt(i));
    }
  }
}

function setStyleGap(check, v) {
  var checkbox = document.getElementById("skills" + SEP + v);
  checkbox.checked = check;
  checkbox.disabled = check;
  gapClick(checkbox);
}
