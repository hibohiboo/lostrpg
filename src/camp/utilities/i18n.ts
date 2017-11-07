import i18n from 'i18next';

i18n.
  init(
    {
      fallbackLng: 'en',
      resources: {}
    }
  );
// 'translation' はデフォルトのネームスペース。initの引数でデフォルトのネームスペースを変えることもできる
i18n.addResources('en', 'translation', {
    "campName": "CampName", 
    "submit": "Submit",
    "name": "Name",
    "type": "type",
    "speciality": "Speciality",
    "level": "Level",
    "effect": "Effect",
    "add": "Add",
    "facility": "Facility",
    "createCamp": "CreateCamp"
}); 
i18n.addResources('ja', 'translation', {
    "campName": "キャンプ名", 
    "submit": "送信",
    "name": "名前",
    "type": "タイプ",
    "speciality": "指定特技",
    "level": "レベル",
    "effect": "効果",
    "add": "追加",
    "facility": "施設",
    "createCamp": "キャンプ作成"
});

i18n.changeLanguage('ja');

export default i18n;
