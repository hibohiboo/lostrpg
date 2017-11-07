import i18n from 'i18next';
const ja = require('./i18n/ja');
const en = require('./i18n/en');

i18n.
  init(
    {
      fallbackLng: 'en',
      resources: {}
    }
  );
// 'translation' はデフォルトのネームスペース。initの引数でデフォルトのネームスペースを変えることもできる
i18n.addResources('en', 'translation', en); 
i18n.addResources('ja', 'translation', ja);

i18n.changeLanguage('ja');

export default i18n;
