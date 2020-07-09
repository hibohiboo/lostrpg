(function () {
  ///////////////////////////////////

  $(document).ready(function () {
    var SKILLS = {
      skills: {
        row0: {
          name0: "追跡",
          name1: "聴く",
          name2: "操作",
          name3: "塞ぐ",
          name4: "泳ぐ",
          name5: "地理",
          number: "2",
        },
        row1: {
          name0: "探索",
          name1: "※感覚器",
          name2: "殴る",
          name3: "※呼吸器",
          name4: "走る",
          name5: "休まない",
          number: "3",
        },
        row2: {
          name0: "鑑定",
          name1: "見つける",
          name2: "斬る",
          name3: "止める",
          name4: "蹴る",
          name5: "待つ",
          number: "4",
        },
        row3: {
          name0: "手当",
          name1: "反応",
          name2: "※利き腕",
          name3: "動かない",
          name4: "※利き脚",
          name5: "捕らえる",
          number: "5",
        },
        row4: {
          name0: "雑学",
          name1: "閃く",
          name2: "撃つ",
          name3: "受ける",
          name4: "跳ぶ",
          name5: "隠れる",
          number: "6",
        },
        row5: {
          name0: "機械",
          name1: "※脳",
          name2: "掴む",
          name3: "※心臓",
          name4: "仕掛ける",
          name5: "休む",
          number: "7",
        },
        row6: {
          name0: "作る",
          name1: "考える",
          name2: "投げる",
          name3: "逸らす",
          name4: "しゃがむ",
          name5: "バランス",
          number: "8",
        },
        row7: {
          name0: "科学",
          name1: "予感",
          name2: "※逆腕",
          name3: "かわす",
          name4: "※逆脚",
          name5: "現れる",
          number: "9",
        },
        row8: {
          name0: "料理",
          name1: "叫ぶ",
          name2: "刺す",
          name3: "落ちる",
          name4: "滑る",
          name5: "追い込む",
          number: "10",
        },
        row9: {
          name0: "伝える",
          name1: "※口",
          name2: "振る",
          name3: "※消化器",
          name4: "踏む",
          name5: "逃げる",
          number: "11",
        },
        row10: {
          name0: "歌う",
          name1: "噛む",
          name2: "締める",
          name3: "耐える",
          name4: "歩く",
          name5: "罠",
          number: "12",
        },
      },
    };
    var skills = SKILLS["skills"];
    for (var i = 0; i < 11; i++) {
      for (var j = 0; j < 6; j++) {
        document.getElementById("skills.row" + i + ".name" + j).innerHTML =
          skills["row" + i]["name" + j];
      }
      document.getElementById("skills.row" + i + ".number").innerHTML =
        skills["row" + i]["number"];
    }

    setBodyParts();
  });
  //////////////////////////
})();

// 定数の宣言
var SEP = ".";
var BODY_PARTS = [
  "skills.row1.name1",
  "skills.row5.name1",
  "skills.row9.name1",
  "skills.row3.name2",
  "skills.row7.name2",
  "skills.row1.name3",
  "skills.row5.name3",
  "skills.row9.name3",
  "skills.row3.name4",
  "skills.row7.name4",
];

var BODY_PARTS_JA = [
  "※感覚器",
  "※脳",
  "※口",
  "※利き腕",
  "※逆腕",
  "※呼吸器",
  "※心臓",
  "※消化器",
  "※利き脚",
  "※逆脚",
];

function setSkillsData(data) {
  var skills = data["skills"];
  if (skills) {
    for (row in skills) {
      if (row.indexOf("row") == -1) {
        continue;
      }
      for (check in skills[row]) {
        if (!skills[row][check] || check.indexOf("check") == -1) {
          continue;
        }
        var checkid = "skills" + SEP + row + SEP + check;
        document.getElementById(checkid).checked = true;
        for (var j = 0; j < BODY_PARTS.length; j++) {
          var bpCheck = BODY_PARTS[j].replace("name", "check");
          if (checkid == bpCheck) {
            bodyPartsClick(document.getElementById(bpCheck));
            break;
          }
        }
      }
      skills[row] = null;
      data["skills"] = skills;
    }
  }
}

function bodyPartsClick(bodyCheckbox) {
  var ids = bodyCheckbox.id.split(SEP);
  var rowIdx = Number(ids[1].replace("row", ""));
  var colIdx = Number(ids[2].replace("check", ""));

  var inc = bodyCheckbox.checked ? 1 : -1;

  for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
    for (var j = colIdx - 1; j <= colIdx + 1; j++) {
      if (crossonly) {
        if (rowIdx != i && colIdx != j) {
          continue;
        }
      }

      var checkbox = document.getElementById(
        ids[0] + SEP + "row" + i + SEP + "check" + j
      );
      if (checkbox) {
        var value = Number(checkbox.value) + inc;
        checkbox.value = value;
        checkbox.checked = value > 0;
        if (checkbox.checked) {
          checkbox.className = "pain";
        } else {
          checkbox.className = "";
        }
      }
    }
  }

  if (isMonobeast) {
    destroyMonobeastParts();
  }
}

function colClick(column) {
  columnClick(column, "部位破壊！", false, false);
}
var isMonobeast = false;
var crossonly = false;

function setBodyParts(cross) {
  crossonly = cross ? true : false;
  for (var i = 0, l = BODY_PARTS.length; i < l; i++) {
    var id = BODY_PARTS[i];
    var part = document.getElementById(id);
    part.parentNode.className = "bodyparts_r_b skillcol";
    var check = document.getElementById(id.replace("name", "check"));
    check.parentNode.className = "bodyparts_l_b";

    check.onclick = function () {
      bodyPartsClick(this);
    };
  }
}
