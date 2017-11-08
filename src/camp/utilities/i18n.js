import i18n from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
const ja = require('./i18n/ja');

i18n
  .use(LngDetector)
  .init(
    {
      fallbackLng: 'en',
      resources: {}
    }
  );
// 'translation' はデフォルトのネームスペース。initの引数でデフォルトのネームスペースを変えることもできる
i18n.addResources('ja', 'translation', ja);

//i18n.changeLanguage('ja');

export default i18n;
