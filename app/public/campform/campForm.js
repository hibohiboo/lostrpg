webpackJsonp([0],{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18next = __webpack_require__(196);

var _i18next2 = _interopRequireDefault(_i18next);

var _i18nextBrowserLanguagedetector = __webpack_require__(452);

var _i18nextBrowserLanguagedetector2 = _interopRequireDefault(_i18nextBrowserLanguagedetector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ja = __webpack_require__(460);

_i18next2.default.use(_i18nextBrowserLanguagedetector2.default).init({
  fallbackLng: 'en',
  resources: {}
});
// 'translation' はデフォルトのネームスペース。initの引数でデフォルトのネームスペースを変えることもできる
_i18next2.default.addResources('ja', 'translation', ja);

//i18n.changeLanguage('ja');

exports.default = _i18next2.default;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_actions_1 = __webpack_require__(206);
var effects_1 = __webpack_require__(205);
var Facility_1 = __webpack_require__(488);
/**
 * actionType
 */
var FETCH_REQUEST_START = 'facilities/fetch_request_start';
var FETCH_REQUEST_SUCCESS = 'facilities/fetch_request_success';
var FETCH_REQUEST_FAILED = 'facilities/fetch_request_failed';
/**
 * actionを発行
 */
exports.fetchStart = redux_actions_1.createAction(FETCH_REQUEST_START);
function getFacilities() {
    return __awaiter(this, void 0, void 0, function () {
        var response, facilities;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [4 /*yield*/, fetch('defaultFacilities.json')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    facilities = _a.sent();
                    return [2 /*return*/, facilities];
            }
        });
    });
}
// saga:
function fetchFacilities(action) {
    var list, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3,, 5]);
                return [4 /*yield*/, effects_1.call(getFacilities)];
            case 1:
                list = _a.sent();
                return [4 /*yield*/, effects_1.put({ type: FETCH_REQUEST_SUCCESS, payload: { list: list } })];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                e_1 = _a.sent();
                return [4 /*yield*/, effects_1.put({ type: FETCH_REQUEST_FAILED, message: e_1.message })];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5:
                return [2 /*return*/];
        }
    });
}
function facilitiesSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                return [4 /*yield*/, effects_1.takeEvery(FETCH_REQUEST_START, fetchFacilities)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.facilitiesSaga = facilitiesSaga;
/**
 * reducer
 */
exports.facilitiesReducer = redux_actions_1.handleActions((_a = {}, _a[FETCH_REQUEST_SUCCESS] = function (state, _a) {
    var list = _a.payload.list;
    return list.map(function (m) {
        return new Facility_1.default(m);
    });
}, _a), []);
var _a;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var renderField = function renderField(_a) {
  var input = _a.input,
      label = _a.label,
      type = _a.type,
      _b = _a.meta,
      touched = _b.touched,
      error = _b.error,
      warning = _b.warning;
  return React.createElement(
    "div",
    { className: "render-field" },
    React.createElement(
      "label",
      null,
      label
    ),
    React.createElement(
      "div",
      null,
      React.createElement("input", _extends({}, input, { placeholder: label, type: type })),
      touched && (error && React.createElement(
        "span",
        null,
        error
      ) || warning && React.createElement(
        "span",
        null,
        warning
      ))
    )
  );
};
exports.default = renderField;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var react_dom_1 = __webpack_require__(153);
var react_redux_1 = __webpack_require__(34);
var App_1 = __webpack_require__(278);
var store_1 = __webpack_require__(462);
var facilities_1 = __webpack_require__(122);
store_1.default.dispatch(facilities_1.fetchStart());
react_dom_1.render(
// providerにstoreは必須
React.createElement(
    react_redux_1.Provider,
    { store: store_1.default },
    React.createElement(App_1.default, null)
), document.getElementById('app'), null);

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var react_1 = __webpack_require__(7);
var CampForm_1 = __webpack_require__(279);
var i18n_1 = __webpack_require__(120);
var App = /** @class */function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.submit = function (values) {
            // print the form values to the console
            console.log(values);
        };
        return _this;
    }
    App.prototype.render = function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                i18n_1.default.t('CreateCamp')
            ),
            React.createElement(CampForm_1.default, { onSubmit: this.submit })
        );
    };
    return App;
}(react_1.Component);
exports.default = App;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var redux_form_1 = __webpack_require__(77);
var i18n_1 = __webpack_require__(120);
var Facilities_1 = __webpack_require__(461);
var RenderField_1 = __webpack_require__(198);
var validate = function validate(values) {
    var errors = {};
    if (!values.campName) {
        errors.campName = 'Required';
    }
    return errors;
};
var formComponent = function formComponent(props) {
    var handleSubmit = props.handleSubmit;
    var fields = [];
    return React.createElement(
        "form",
        { onSubmit: handleSubmit },
        React.createElement(
            "div",
            null,
            React.createElement(redux_form_1.Field, { name: "campName", component: RenderField_1.default, label: i18n_1.default.t('CampName'), type: "text" })
        ),
        React.createElement(Facilities_1.default, null),
        React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { type: "submit" },
                i18n_1.default.t('Submit')
            )
        )
    );
};
var campForm = redux_form_1.reduxForm({
    validate: validate,
    form: 'camp'
})(formComponent);
exports.default = campForm;

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(453).default;


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(454);

var utils = _interopRequireWildcard(_utils);

var _cookie = __webpack_require__(455);

var _cookie2 = _interopRequireDefault(_cookie);

var _querystring = __webpack_require__(456);

var _querystring2 = _interopRequireDefault(_querystring);

var _localStorage = __webpack_require__(457);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _navigator = __webpack_require__(458);

var _navigator2 = _interopRequireDefault(_navigator);

var _htmlTag = __webpack_require__(459);

var _htmlTag2 = _interopRequireDefault(_htmlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDefaults() {
  return {
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',

    // cache user language
    caches: ['localStorage'],
    excludeCacheFor: ['cimode']
    //cookieMinutes: 10,
    //cookieDomain: 'myDomain'
  };
}

var Browser = function () {
  function Browser(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Browser);

    this.type = 'languageDetector';
    this.detectors = {};

    this.init(services, options);
  }

  _createClass(Browser, [{
    key: 'init',
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.services = services;
      this.options = utils.defaults(options, this.options || {}, getDefaults());
      this.i18nOptions = i18nOptions;

      this.addDetector(_cookie2.default);
      this.addDetector(_querystring2.default);
      this.addDetector(_localStorage2.default);
      this.addDetector(_navigator2.default);
      this.addDetector(_htmlTag2.default);
    }
  }, {
    key: 'addDetector',
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
    }
  }, {
    key: 'detect',
    value: function detect(detectionOrder) {
      var _this = this;

      if (!detectionOrder) detectionOrder = this.options.order;

      var detected = [];
      detectionOrder.forEach(function (detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup = _this.detectors[detectorName].lookup(_this.options);
          if (lookup && typeof lookup === 'string') lookup = [lookup];
          if (lookup) detected = detected.concat(lookup);
        }
      });

      var found = void 0;
      detected.forEach(function (lng) {
        if (found) return;
        var cleanedLng = _this.services.languageUtils.formatLanguageCode(lng);
        if (_this.services.languageUtils.isWhitelisted(cleanedLng)) found = cleanedLng;
      });

      return found || this.i18nOptions.fallbackLng[0];
    }
  }, {
    key: 'cacheUserLanguage',
    value: function cacheUserLanguage(lng, caches) {
      var _this2 = this;

      if (!caches) caches = this.options.caches;
      if (!caches) return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
      caches.forEach(function (cacheName) {
        if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }]);

  return Browser;
}();

Browser.type = 'languageDetector';

exports.default = Browser;

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = defaults;
exports.extend = extend;
var arr = [];
var each = arr.forEach;
var slice = arr.slice;

function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

function extend(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cookie = {
  create: function create(name, value, minutes, domain) {
    var expires = void 0;
    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      expires = '; expires=' + date.toGMTString();
    } else expires = '';
    domain = domain ? 'domain=' + domain + ';' : '';
    document.cookie = name + '=' + value + expires + ';' + domain + 'path=/';
  },

  read: function read(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  remove: function remove(name) {
    this.create(name, '', -1);
  }
};

exports.default = {
  name: 'cookie',

  lookup: function lookup(options) {
    var found = void 0;

    if (options.lookupCookie && typeof document !== 'undefined') {
      var c = cookie.read(options.lookupCookie);
      if (c) found = c;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== 'undefined') {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain);
    }
  }
};

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'querystring',

  lookup: function lookup(options) {
    var found = void 0;

    if (typeof window !== 'undefined') {
      var query = window.location.search.substring(1);
      var params = query.split('&');
      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf('=');
        if (pos > 0) {
          var key = params[i].substring(0, pos);
          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }

    return found;
  }
};

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasLocalStorageSupport = void 0;
try {
  hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;
  var testKey = 'i18next.translate.boo';
  window.localStorage.setItem(testKey, 'foo');
  window.localStorage.removeItem(testKey);
} catch (e) {
  hasLocalStorageSupport = false;
}

exports.default = {
  name: 'localStorage',

  lookup: function lookup(options) {
    var found = void 0;

    if (options.lookupLocalStorage && hasLocalStorageSupport) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng) found = lng;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupLocalStorage && hasLocalStorageSupport) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'navigator',

  lookup: function lookup(options) {
    var found = [];

    if (typeof navigator !== 'undefined') {
      if (navigator.languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }
      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }
      if (navigator.language) {
        found.push(navigator.language);
      }
    }

    return found.length > 0 ? found : undefined;
  }
};

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'htmlTag',

  lookup: function lookup(options) {
    var found = void 0;
    var htmlTag = options.htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);

    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      found = htmlTag.getAttribute('lang');
    }

    return found;
  }
};

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = {"CampName":"キャンプ名","Submit":"送信","Name":"名前","Type":"タイプ","Speciality":"指定特技","Level":"レベル","Effect":"効果","Add":"追加","Facility":"施設","CreateCamp":"キャンプ作成"}

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var redux_form_1 = __webpack_require__(77);
var react_redux_1 = __webpack_require__(34);
var i18n_1 = __webpack_require__(120);
var RenderField_1 = __webpack_require__(198);
var renderSubFields = function renderSubFields(member, index, fields) {
    return React.createElement(
        "li",
        { key: index },
        React.createElement(
            "div",
            null,
            React.createElement(
                "h4",
                null,
                " #",
                index + 1
            )
        ),
        React.createElement(
            "div",
            { className: "facilities" },
            React.createElement(redux_form_1.Field, { name: member + ".name", type: "text", component: RenderField_1.default, label: i18n_1.default.t('Name') }),
            React.createElement(redux_form_1.Field, { name: member + ".type", type: "text", component: RenderField_1.default, label: i18n_1.default.t('Type') }),
            React.createElement(redux_form_1.Field, { name: member + ".speciality", type: "text", component: RenderField_1.default, label: i18n_1.default.t('Speciality') }),
            React.createElement(redux_form_1.Field, { name: member + ".level", type: "text", component: RenderField_1.default, label: i18n_1.default.t('Level') }),
            React.createElement(redux_form_1.Field, { name: member + ".effect", type: "text", component: RenderField_1.default, label: i18n_1.default.t('Effect') }),
            React.createElement("button", { type: "button", title: i18n_1.default.t('Delete'), className: "delete", onClick: function onClick() {
                    return fields.remove(index);
                } })
        )
    );
};
var renderMembers = function renderMembers(props) {
    var fields = props.fields,
        list = props.list;
    if (fields.length == 0) {
        list.forEach(function (element) {
            fields.push(element);
        });
    }
    return React.createElement(
        "ul",
        { className: "list" },
        fields.map(renderSubFields),
        React.createElement(
            "button",
            { type: "button", onClick: function onClick() {
                    return fields.push({});
                } },
            i18n_1.default.t('Add')
        )
    );
};
var facilities = function facilities(props) {
    console.log('facilities');
    console.log(props);
    return React.createElement(
        "div",
        null,
        React.createElement(
            "label",
            { className: "label" },
            i18n_1.default.t('Facility')
        ),
        React.createElement(redux_form_1.FieldArray, { name: "facilities", component: renderMembers, props: props })
    );
};
var mapStateToProps = function mapStateToProps(store) {
    return { list: store.facilities };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};
;
exports.default = react_redux_1.connect(mapStateToProps, null)(facilities);

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(58);
var redux_logger_1 = __webpack_require__(199);
var redux_saga_1 = __webpack_require__(200); // tslint:disable-line
var reducers_1 = __webpack_require__(468);
var sagas_1 = __webpack_require__(489);
// Saga ミドルウェアを作成する
var sagaMiddleware = redux_saga_1.default();
// Store にマウントする
var store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(sagaMiddleware, redux_logger_1.createLogger()));
// Saga を起動する
sagaMiddleware.run(sagas_1.default);
exports.default = store;

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(58);
var redux_form_1 = __webpack_require__(77);
var facilities_1 = __webpack_require__(122);
// 最終的なstoreの値は
var app = redux_1.combineReducers({
    facilities: facilities_1.facilitiesReducer,
    form: redux_form_1.reducer
});
exports.default = app;

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 施設
 *
 * @export
 * @class Facility
 */
var Facility = /** @class */function () {
    function Facility(data) {
        var name = data.name,
            type = data.type,
            speciality = data.speciality,
            level = data.level,
            effect = data.effect;
        this.name = name || "";
        this.type = type || "";
        this.speciality = speciality || "";
        this.level = level || 1;
        this.effect = effect || "";
    }
    return Facility;
}();
exports.default = Facility;

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var facilities_1 = __webpack_require__(122);
function sagas() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                return [4 /*yield*/, facilities_1.facilitiesSaga()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.default = sagas;

/***/ })

},[247]);
//# sourceMappingURL=campForm.js.map