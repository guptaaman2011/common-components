import React, { useRef, useEffect, useReducer, createContext, useState, useContext, useMemo, Children, Component } from 'react';
import http from 'http';
import https from 'https';
import url$1 from 'url';
import require$$0 from 'stream';
import assert from 'assert';
import tty from 'tty';
import util from 'util';
import require$$1 from 'fs';
import require$$2 from 'net';
import zlib from 'zlib';
import { themeGet } from '@styled-system/theme-get';
import 'antd/dist/antd.css';
import styled$4, { css, keyframes, ThemeProvider } from 'styled-components';
import 'antd/es/input/style';
import _Input from 'antd/es/input';
import { display, textAlign, space, color } from 'styled-system';
import 'antd/es/select/style';
import _Select from 'antd/es/select';
import 'antd/es/radio/style';
import _Radio from 'antd/es/radio';
import 'antd/es/modal/style';
import _Modal from 'antd/es/modal';
import 'antd/es/checkbox/style';
import _Checkbox from 'antd/es/checkbox';
import ReactDOM from 'react-dom';
import 'antd/es/badge/style';
import _Badge from 'antd/es/badge';
import 'antd/es/avatar/style';
import _Avatar from 'antd/es/avatar';
import 'antd/es/dropdown/style';
import _Dropdown from 'antd/es/dropdown';
import 'antd/es/comment/style';
import _Comment from 'antd/es/comment';
import 'antd/es/row/style';
import _Row from 'antd/es/row';
import 'antd/es/col/style';
import _Col from 'antd/es/col';
import 'antd/es/progress/style';
import _Progress from 'antd/es/progress';
import 'antd/es/table/style';
import _Table from 'antd/es/table';
import 'antd/es/card/style';
import _Card from 'antd/es/card';
import 'antd/es/tooltip/style';
import _Tooltip from 'antd/es/tooltip';
import 'antd/es/menu/style';
import _Menu from 'antd/es/menu';
import 'antd/es/button/style';
import _Button from 'antd/es/button';
import 'antd/es/icon/style';
import _Icon from 'antd/es/icon';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var GET_MESSAGES = 'GET_MESSAGES';
var GET_PREV_MESSAGES = 'GET_PREV_MESSAGES';
var GET_NEXT_MESSAGES = 'GET_NEXT_MESSAGES';
var GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
var GET_MESSAGES_FAILED = 'GET_MESSAGES_FAILED';
var POST_MESSAGE = 'POST_MESSAGE';
var POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
var POST_MESSAGE_FAILED = 'POST_MESSAGE_FAILED';
var ADD_ATTACHMENT = 'ADD_ATTACHMENT';
var ADD_ATTACHMENT_SUCCESS = 'ADD_ATTACHMENT_SUCCESS';
var ADD_ATTACHMENT_FAILED = 'ADD_ATTACHMENT_FAILED';
var UPDATE_ATTACHMENT = 'UPDATE_ATTACHMENT';
var RESET_STATE = 'RESET_STATE';
var UPDATE_CHAT_ITEMS = 'UPDATE_CHAT_ITEMS';
var EDIT_MESSAGE_FAILED = 'EDIT_MESSAGE_FAILED';
var REMOVE_MESSAGE_FAILED = 'REMOVE_MESSAGE_FAILED';
var UPDATE_EDIT_LOADING = 'UPDATE_EDIT_LOADING';
var UPDATE_DELETE_LOADING = 'UPDATE_DELETE_LOADING';
var GET_ROOMS = 'GET_ROOMS';
var GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';
var GET_ROOMS_FAILED = 'GET_ROOMS_FAILED';
var CHANGE_ROOM = 'CHANGE_ROOM';
var UPDATE_CURRENT_ROOM = 'UPDATE_CURRENT_ROOM';
var SET_AUTHKEY = 'SET_AUTHKEY';
var GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
var GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';
var SET_CURRENT_USER_PERMISSIONS = 'SET_CURRENT_USER_PERMISSIONS';
var SET_HIGHLIGHT_MESSAGE = 'SET_HIGHLIGHT_MESSAGE';
var CLOSE_POPUP = 'CLOSE_POPUP';
var GET_APP_CONFIGURATION_FAILURE = 'GET_APP_CONFIGURATION_FAILURE';
var GET_APP_CONFIGURATION = 'GET_APP_CONFIGURATION';

var initialState = {
  authKey: "",
  chatItems: [],
  replyItems: [],
  loading: false,
  prevLoading: false,
  nextLoading: false,
  error: null,
  users: [],
  hasNext: false,
  hasPrev: false,
  pageNum: 0,
  searchText: '',
  appId: '',
  configs: [],
  refId: '',
  roomId: '',
  rooms: [],
  room: {
    users: [],
    app: {
      code: ''
    },
    permissions: []
  },
  userPermissions: [],
  chatInput: {
    message: '',
    attachments: []
  },
  pins: [],
  isCreating: false,
  isEditLoading: false,
  isDeleteLoading: false,
  repliesTo: '',
  highlightMessage: {},
  fetchedPages: {},
  errorMessage: ''
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        loading: action.loading,
        pageNum: action.pageNum,
        searchText: action.searchText,
        chatItems: action.chatItems,
        highlightMessage: action.highlightMessage,
        fetchedPages: action.fetchedPages,
        replyItems: action.replyItems || []
      });

    case GET_PREV_MESSAGES:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        prevLoading: action.prevLoading,
        pageNum: action.pageNum,
        searchText: action.searchText,
        chatItems: action.chatItems,
        highlightMessage: {}
      });

    case GET_NEXT_MESSAGES:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        nextLoading: action.nextLoading,
        pageNum: action.pageNum,
        searchText: action.searchText,
        chatItems: action.chatItems,
        highlightMessage: {}
      });

    case GET_MESSAGES_SUCCESS:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        chatItems: action.chatItems,
        hasNext: action.hasNext,
        hasPrev: action.hasPrev,
        loading: false,
        prevLoading: false,
        nextLoading: false,
        pageNum: action.pageNum,
        fetchedPages: action.fetchedPages,
        replyItems: action.replyItems || []
      });

    case POST_MESSAGE:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isCreating: action.isCreating
      });

    case POST_MESSAGE_SUCCESS:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        chatItems: action.chatItems,
        replyItems: action.replyItems,
        isCreating: false
      });

    case GET_ROOMS_FAILED:
    case GET_MESSAGES_FAILED:
    case POST_MESSAGE_FAILED:
    case EDIT_MESSAGE_FAILED:
    case REMOVE_MESSAGE_FAILED:
    case GET_CURRENT_USER_FAILURE:
    case GET_APP_CONFIGURATION_FAILURE:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        error: action.error,
        errorMessage: action.errorMessage,
        loading: false
      });

    case ADD_ATTACHMENT:
    case ADD_ATTACHMENT_SUCCESS:
    case ADD_ATTACHMENT_FAILED:
    case UPDATE_ATTACHMENT:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        chatInput: action.chatInput
      });

    case UPDATE_CHAT_ITEMS:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        chatItems: action.chatItems,
        replyItems: action.replyItems,
        repliesTo: action.repliesTo,
        highlightMessage: action.highlightMessage,
        searchText: action.searchText
      });

    case UPDATE_EDIT_LOADING:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isEditLoading: action.isEditLoading
      });

    case UPDATE_DELETE_LOADING:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isDeleteLoading: action.isDeleteLoading
      });

    case RESET_STATE:
      return _objectSpread2({}, initialState);

    case GET_ROOMS:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        refId: action.refId,
        appId: action.appId,
        loading: true
      });

    case GET_ROOMS_SUCCESS:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        rooms: action.rooms,
        room: action.room,
        roomId: action.roomId,
        pins: action.pins
      });

    case CHANGE_ROOM:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        loading: action.loading,
        room: action.room,
        roomId: action.roomId,
        chatItems: [],
        replyItems: [],
        pins: [],
        pageNum: 0,
        repliesTo: '',
        fetchedPages: {},
        highlightMessage: {},
        prevLoading: false,
        nextLoading: false,
        hasNext: false,
        hasPrev: false
      });

    case UPDATE_CURRENT_ROOM:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        room: action.room
      });

    case SET_AUTHKEY:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        authKey: action.authKey
      });

    case GET_CURRENT_USER_SUCCESS:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        currentUser: action.currentUser
      });

    case SET_CURRENT_USER_PERMISSIONS:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        userPermissions: action.userPermissions
      });

    case SET_HIGHLIGHT_MESSAGE:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        highlightMessage: action.highlightMessage
      });

    case CLOSE_POPUP:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        errorMessage: ''
      });

    case GET_APP_CONFIGURATION:
      return _objectSpread2(_objectSpread2({}, state), {}, {
        configs: [].concat(_toConsumableArray(state.configs), [action.config])
      });

    default:
      return state;
  }
};

var GET = 'GET';
var POST = 'POST';
var PUT = 'PUT';
var DELETE = 'DELETE';

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if (
      (utils.isBlob(requestData) || utils.isFile(requestData)) &&
      requestData.type
    ) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

var debug = createCommonjsModule(function (module, exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = ms;

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}
});

var browser = createCommonjsModule(function (module, exports) {
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
});

var node = createCommonjsModule(function (module, exports) {
/**
 * Module dependencies.
 */




/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
}

var stream = 1 === fd ? process.stdout :
             2 === fd ? process.stderr :
             createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = new Date().toUTCString()
      + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream (fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = require$$1;
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = require$$2;
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());
});

var src = createCommonjsModule(function (module) {
/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = browser;
} else {
  module.exports = node;
}
});

var debug$1;
try {
  /* eslint global-require: off */
  debug$1 = src("follow-redirects");
}
catch (error) {
  debug$1 = function () { /* */ };
}
var debug_1 = debug$1;

var URL = url$1.URL;


var Writable = require$$0.Writable;



// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "connect", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  ""
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  if (callback) {
    this.once("timeout", callback);
  }

  if (this.socket) {
    startTimer(this, msecs);
  }
  else {
    var self = this;
    this._currentRequest.once("socket", function () {
      startTimer(self, msecs);
    });
  }

  this.once("response", clearTimer);
  this.once("error", clearTimer);

  return this;
};

function startTimer(request, msecs) {
  clearTimeout(request._timeout);
  request._timeout = setTimeout(function () {
    request.emit("timeout");
  }, msecs);
}

function clearTimer() {
  clearTimeout(this._timeout);
}

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url$1.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      statusCode >= 300 && statusCode < 400) {
    // Abort the current request
    this._currentRequest.removeAllListeners();
    this._currentRequest.on("error", noop);
    this._currentRequest.abort();
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();

    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new TooManyRedirectsError());
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
        // RFC7231§6.4.4: The 303 (See Other) status code indicates that
        // the server is redirecting the user agent to a different resource […]
        // A user agent can perform a retrieval request targeting that URI
        // (a GET or HEAD request if using HTTP) […]
        (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      removeMatchingHeaders(/^content-/i, this._options.headers);
    }

    // Drop the Host header, as the redirect might lead to a different host
    var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) ||
      url$1.parse(this._currentUrl).hostname;

    // Create the redirected request
    var redirectUrl = url$1.resolve(this._currentUrl, location);
    debug_1("redirecting to", redirectUrl);
    this._isRedirect = true;
    var redirectUrlParts = url$1.parse(redirectUrl);
    Object.assign(this._options, redirectUrlParts);

    // Drop the Authorization header if redirecting to another host
    if (redirectUrlParts.hostname !== previousHostName) {
      removeMatchingHeaders(/^authorization$/i, this._options.headers);
    }

    // Evaluate the beforeRedirect callback
    if (typeof this._options.beforeRedirect === "function") {
      var responseDetails = { headers: response.headers };
      try {
        this._options.beforeRedirect.call(null, this._options, responseDetails);
      }
      catch (err) {
        this.emit("error", err);
        return;
      }
      this._sanitizeOptions(this._options);
    }

    // Perform the redirected request
    try {
      this._performRequest();
    }
    catch (cause) {
      var error = new RedirectionError("Redirected request failed: " + cause.message);
      error.cause = cause;
      this.emit("error", error);
    }
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    wrappedProtocol.request = function (input, options, callback) {
      // Parse parameters
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        }
        catch (err) {
          /* istanbul ignore next */
          input = url$1.parse(urlStr);
        }
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug_1("options", options);
      return new RedirectableRequest(options, callback);
    };

    // Executes a GET request, following redirects
    wrappedProtocol.get = function (input, options, callback) {
      var request = wrappedProtocol.request(input, options, callback);
      request.end();
      return request;
    };
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return lastValue;
}

function createErrorType(code, defaultMessage) {
  function CustomError(message) {
    Error.captureStackTrace(this, this.constructor);
    this.message = message || defaultMessage;
  }
  CustomError.prototype = new Error();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  CustomError.prototype.code = code;
  return CustomError;
}

// Exports
var followRedirects = wrap({ http: http, https: https });
var wrap_1 = wrap;
followRedirects.wrap = wrap_1;

var name = "axios";
var version = "0.20.0";
var description = "Promise based HTTP client for the browser and node.js";
var main = "index.js";
var scripts = {
	test: "grunt test && bundlesize",
	start: "node ./sandbox/server.js",
	build: "NODE_ENV=production grunt build",
	preversion: "npm test",
	version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
	postversion: "git push && git push --tags",
	examples: "node ./examples/server.js",
	coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
	fix: "eslint --fix lib/**/*.js"
};
var repository = {
	type: "git",
	url: "https://github.com/axios/axios.git"
};
var keywords = [
	"xhr",
	"http",
	"ajax",
	"promise",
	"node"
];
var author = "Matt Zabriskie";
var license = "MIT";
var bugs = {
	url: "https://github.com/axios/axios/issues"
};
var homepage = "https://github.com/axios/axios";
var devDependencies = {
	bundlesize: "^0.17.0",
	coveralls: "^3.0.0",
	"es6-promise": "^4.2.4",
	grunt: "^1.0.2",
	"grunt-banner": "^0.6.0",
	"grunt-cli": "^1.2.0",
	"grunt-contrib-clean": "^1.1.0",
	"grunt-contrib-watch": "^1.0.0",
	"grunt-eslint": "^20.1.0",
	"grunt-karma": "^2.0.0",
	"grunt-mocha-test": "^0.13.3",
	"grunt-ts": "^6.0.0-beta.19",
	"grunt-webpack": "^1.0.18",
	"istanbul-instrumenter-loader": "^1.0.0",
	"jasmine-core": "^2.4.1",
	karma: "^1.3.0",
	"karma-chrome-launcher": "^2.2.0",
	"karma-coverage": "^1.1.1",
	"karma-firefox-launcher": "^1.1.0",
	"karma-jasmine": "^1.1.1",
	"karma-jasmine-ajax": "^0.1.13",
	"karma-opera-launcher": "^1.0.0",
	"karma-safari-launcher": "^1.0.0",
	"karma-sauce-launcher": "^1.2.0",
	"karma-sinon": "^1.0.5",
	"karma-sourcemap-loader": "^0.3.7",
	"karma-webpack": "^1.7.0",
	"load-grunt-tasks": "^3.5.2",
	minimist: "^1.2.0",
	mocha: "^5.2.0",
	sinon: "^4.5.0",
	typescript: "^2.8.1",
	"url-search-params": "^0.10.0",
	webpack: "^1.13.1",
	"webpack-dev-server": "^1.14.1"
};
var browser$1 = {
	"./lib/adapters/http.js": "./lib/adapters/xhr.js"
};
var jsdelivr = "dist/axios.min.js";
var unpkg = "dist/axios.min.js";
var typings = "./index.d.ts";
var dependencies = {
	"follow-redirects": "^1.10.0"
};
var bundlesize = [
	{
		path: "./dist/axios.min.js",
		threshold: "5kB"
	}
];
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	repository: repository,
	keywords: keywords,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	devDependencies: devDependencies,
	browser: browser$1,
	jsdelivr: jsdelivr,
	unpkg: unpkg,
	typings: typings,
	dependencies: dependencies,
	bundlesize: bundlesize
};

var httpFollow = followRedirects.http;
var httpsFollow = followRedirects.https;






var isHttps = /https:?/;

/*eslint consistent-return:0*/
var http_1 = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url$1.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url$1.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }


        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
            if (!config.responseEncoding || config.responseEncoding === 'utf8') {
              responseData = utils.stripBOM(responseData);
            }
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(config.timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = http_1;
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios_1;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = Cancel_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;

var axios_1 = axios;

// Allow use of default import syntax in TypeScript
var _default = axios;
axios_1.default = _default;

var axios$1 = axios_1;

var baseHeader = {
  Accept: 'application/json'
};
var handleError = function handleError(error) {
  if (error && error.response && (error.response.status === 401 || error.response.status === 418)) {
    console.log("Not authorised");
  } else if (error && error.response && error.response.status === 403) {
    console.log("Access Denied");
  }

  return true;
};
var callApi = (function (method, endpoint, data) {
  var extraOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var options = {
    url: endpoint,
    method: method,
    protocol: 'https:',
    data: data,
    headers: baseHeader,
    timeout: 60000
  };

  if (extraOptions) {
    delete extraOptions.url;
    delete extraOptions.method;
    delete extraOptions.data;
    options = _objectSpread2(_objectSpread2({}, options), extraOptions);
  }

  var axiosInstance = axios$1(options).catch(function (error) {
    handleError(error);
    return Promise.reject(error);
  });
  return axiosInstance;
});

var url = process.env.REACT_APP_CHAT_SERVICE_URL;
var fileUrl = process.env.REACT_APP_FILE_SERVICE_URL;

var fetch = function fetch(payload) {
  var extraOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return callApi(POST, "".concat(url, "/message/search"), payload, extraOptions);
};

var create = function create(payload) {
  var extraOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return callApi(POST, "".concat(url, "/message"), payload, extraOptions);
};

var edit = function edit(payload) {
  var extraOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return callApi(PUT, "".concat(url, "/message"), payload, extraOptions);
};

var remove = function remove(payload) {
  var extraOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return callApi(DELETE, "".concat(url, "/message/delete"), payload, extraOptions);
};

var postFile = function postFile(payload, config) {
  return callApi(POST, "".concat(fileUrl, "/").concat(payload.application.code, "/file"), payload, config);
};

var getRooms = function getRooms(payload) {
  var appId = payload.appId,
      refId = payload.refId,
      userId = payload.userId;
  return callApi(GET, "".concat(url, "/room?appId=").concat(appId, "&refId=").concat(refId, "&userId=").concat(userId));
};

var getCurrentUser = function getCurrentUser(payload) {
  var userId = payload.userId;
  return callApi(GET, "".concat(url, "/user/").concat(userId));
};

var getAppConfigValue = function getAppConfigValue(appCode, configKey) {
  return callApi(GET, "".concat(url, "/config?appCode=").concat(appCode, "&configKeys=").concat(configKey));
};

var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var addZero = function addZero(data) {
  return data.padStart(2, '0');
};

var getDate = function getDate(timestamp) {
  var dateObj = new Date(timestamp);
  var date = addZero("".concat(dateObj.getDate()));
  var month = monthNames[dateObj.getMonth()];
  var year = "".concat(dateObj.getFullYear());
  var day = dayNames[dateObj.getDay()];
  var formattedDate = "".concat(day.substring(0, 3), " ").concat(date, "-").concat(month, "-").concat(year); // const formattedDate = `${date}-${month}-${year}`;

  return formattedDate;
};
var getDay = function getDay(timestamp) {
  var dateObj = new Date(timestamp);
  var day = dayNames[dateObj.getDay()];
  return day;
};
var getTime = function getTime(timestamp) {
  var dateObj = new Date(timestamp);
  var amPM = 'am';
  var hours = dateObj.getHours();

  if (hours > 12) {
    hours = hours - 12;
    amPM = 'pm';
  } // hours = addZero(`${hours}`)


  var minutes = addZero("".concat(dateObj.getMinutes()));
  var formattedTime = "".concat(hours, ":").concat(minutes, " ").concat(amPM);
  return formattedTime;
};
var getTimeStamp = function getTimeStamp(date) {
  var dateObj = new Date(date);
  var utcSeconds = dateObj.getTime();
  return utcSeconds;
};
var getDayIfSevenDaysOld = function getDayIfSevenDaysOld(createdAt) {
  var commentDate = new Date(createdAt);
  var date = getDate(createdAt);
  var today = new Date();
  var sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  if (commentDate > sevenDaysAgo) {
    if (date === getDate(today)) {
      date = "Today";
    } else if (date === getDate(today.setDate(today.getDate() - 1))) {
      date = "Yesterday";
    } else {
      date = getDay(createdAt);
    }
  }

  return date;
};

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "getTaggedUsers",
    value: function getTaggedUsers(message, users) {
      return users && users.filter(function (user) {
        return message.indexOf("@[".concat(user.name, "](").concat(user.id, ")")) >= 0;
      });
    }
  }, {
    key: "removeUserMarkup",
    value: function removeUserMarkup(message, taggedUsers) {
      if (!taggedUsers || !taggedUsers.length) {
        return message;
      }

      var _iterator = _createForOfIteratorHelper(taggedUsers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var taggedUser = _step.value;
          var regexp = RegExp("@\\[".concat(taggedUser.name, "\\]\\(").concat(taggedUser.id, "\\)"), 'g');

          var matches = _toConsumableArray(message.matchAll(regexp));

          var _iterator2 = _createForOfIteratorHelper(matches),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var match = _step2.value;
              message = message.replace(match[0], taggedUser.name);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return message;
    }
  }, {
    key: "modifyMessageWithUsers",
    value: function modifyMessageWithUsers(message, taggedUsers) {
      if (!taggedUsers || !taggedUsers.length) {
        return message;
      }

      var taggedUserNames = taggedUsers.map(function (user) {
        return user.name;
      });
      var splittedString = message.split(new RegExp("(".concat(taggedUserNames.join('|'), ")"), 'g'));
      var newString = '';

      var _iterator3 = _createForOfIteratorHelper(splittedString),
          _step3;

      try {
        var _loop = function _loop() {
          var str = _step3.value;

          if (taggedUserNames.includes(str)) {
            var user = taggedUsers.find(function (user) {
              return user.name === str;
            });
            newString += "@[".concat(str, "](").concat(user.id, ")");
          } else {
            newString += "".concat(str);
          }
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return newString;
    }
  }, {
    key: "uniqueArray",
    value: function uniqueArray(items, key) {
      var uniqObj = {};
      return items.filter(function (item) {
        var id = item[key];
        return uniqObj[id] ? false : uniqObj[id] = true;
      });
    }
  }, {
    key: "getPageNum",
    value: function getPageNum(existingPages, currentPageNum, index) {
      var operator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'increment';
      var pageNum = currentPageNum;

      while (pageNum > -1) {
        if (operator === 'increment') {
          pageNum += index;
        } else if (operator === 'decrement') {
          pageNum -= index;
        }

        if (!existingPages[pageNum]) {
          break;
        }

        continue;
      }

      return pageNum;
    } // this is custom function to get the prev value while using react hooks

  }, {
    key: "usePrevious",
    value: function usePrevious(value) {
      var ref = useRef();
      useEffect(function () {
        ref.current = value;
      });
      return ref.current;
    }
  }, {
    key: "getKeyValuePairFromArray",
    value: function getKeyValuePairFromArray(items, key) {
      return items.reduce(function (acc, item) {
        var objKey = item[key];
        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, objKey, item));
      }, {});
    }
  }, {
    key: "convertToCapitalCase",
    value: function convertToCapitalCase(str) {
      var parts = str.split(' ');
      var capitalParts = parts.map(function (part) {
        return part[0].toUpperCase() + part.slice(1).toLowerCase();
      });
      return capitalParts.join(' ');
    }
  }]);

  return Utils;
}();

var makeReplyItems = function makeReplyItems(replies) {
  var formattedReplies = [];

  if (!replies || !replies.length) {
    return formattedReplies;
  }

  if (replies.length === 0) {
    return formattedReplies;
  }

  replies.forEach(function (reply) {
    var _replyObject;

    var _reply$updated_by = reply.updated_by,
        id = _reply$updated_by.id,
        name = _reply$updated_by.name;
    var attachments = [];
    reply.attachments && reply.attachments.forEach(function (attachment) {
      return attachments.push({
        id: attachment.id,
        name: attachment.filename
      });
    });
    var replyObject = (_replyObject = {
      messageId: reply.id,
      avatar: name.split(' ').map(function (i) {
        return i.charAt(0);
      }),
      author: name,
      userId: id,
      userType: 'internal',
      text: Utils.modifyMessageWithUsers(reply.body, reply.tagged_users),
      taggedUsers: reply.tagged_users,
      attachments: attachments,
      createdAt: getTimeStamp(reply.created_at),
      updatedAt: getTimeStamp(reply.updated_at)
    }, _defineProperty(_replyObject, "taggedUsers", reply.tagged_users.length > 0 ? reply.tagged_users : []), _defineProperty(_replyObject, "reference", reply.reference), _replyObject);
    formattedReplies.push(replyObject);
  });
  return formattedReplies;
};
var makeMessage = function makeMessage(message) {
  var _message$created_by = message.created_by,
      id = _message$created_by.id,
      name = _message$created_by.name;
  var attachments = [];
  message.attachments && message.attachments.forEach(function (attachment) {
    return attachments.push({
      id: attachment.id,
      name: attachment.filename
    });
  });
  var messageObject = {
    messageId: message.id,
    avatar: name.split(' ').map(function (i) {
      return i.charAt(0);
    }),
    author: name,
    userId: id,
    userType: 'internal',
    text: Utils.modifyMessageWithUsers(message.body, message.tagged_users),
    taggedUsers: message.tagged_users.length > 0 ? message.tagged_users : [],
    attachments: attachments,
    createdAt: getTimeStamp(message.created_at),
    updatedAt: getTimeStamp(message.updated_at),
    reference: message.reference
  }; // support only 1 level replies

  if (message.replies_to === "") {
    messageObject.replyItems = makeReplyItems(message.replies) || [];
  } else {
    messageObject.isReply = true;
    messageObject.repliesTo = message.replies_to;
  }

  return messageObject;
};
var makeMessages = function makeMessages(messages) {
  var chatItems = [];
  messages.map(function (message) {
    chatItems.push(makeMessage(message));
  });
  return chatItems;
};
var makePostMessagePayload = function makePostMessagePayload(messageBody) {
  var message = messageBody.message,
      users = messageBody.users,
      attachments = messageBody.attachments,
      reference = messageBody.reference,
      appId = messageBody.appId,
      roomId = messageBody.roomId,
      repliesTo = messageBody.repliesTo;
  var attachmentPayload = [];
  attachments && attachments.forEach(function (attachment) {
    if (!attachment.error) {
      attachmentPayload.push({
        "id": attachment.id,
        "filename": attachment.name
      });
    }
  });
  var payload = {
    "body": Utils.removeUserMarkup(message, Utils.getTaggedUsers(message, users)),
    "replies_to": repliesTo,
    "tagged_users": Utils.getTaggedUsers(message, users),
    "app_id": appId,
    "room_id": roomId,
    "created_by": {
      "id": "user-1234",
      "name": "Aman Gupta"
    },
    "updated_by": {
      "id": "user-1234",
      "name": "Aman Gupta"
    },
    "attachments": attachmentPayload,
    reference: reference
  };
  return payload;
};
var makeGetMessagesPayload = function makeGetMessagesPayload(body) {
  var payload = {
    "app_id": body.appId,
    "room_id": body.roomId,
    "page_size": 20,
    "page_num": body.pageNum,
    "search_text": body.searchText,
    "include_reply": true
  };

  if (body.highlightMessage && body.highlightMessage.commentId) {
    payload.focused_msg_id = body.highlightMessage.commentId;
  }

  if (body.repliesTo !== '') {
    payload.msg_id = [body.repliesTo];
  }

  return payload;
};
var makePostFilePayload = function makePostFilePayload(body, app) {
  var fileNameSplit = body.name.split('.');
  var fileExtension = fileNameSplit[fileNameSplit.length - 1].toLowerCase();
  var fileName = [].concat(_toConsumableArray(fileNameSplit.slice(0, fileNameSplit.length - 1)), ['.', fileExtension]).join('');
  var payload = {
    "application": {
      "code": app.code,
      "name": app.name
    },
    "name": fileName,
    "user": {
      "id": "user-1234",
      "name": "Aman"
    },
    "dataUri": body.dataUri,
    "meta": [{}]
  };
  return payload;
};
var getBase64 = function getBase64(file, cb, onError) {
  var reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    cb(reader.result);
  };

  reader.onerror = function (error) {
    console.log('error during dataUri generation:', error);
    onError(error);
  };
};

var WHITE = themeGet('colors.white');
var BLACK = themeGet('colors.black');
var HEX = themeGet('colors.hex');
var LUP_BASE_BLUE_DARKER = themeGet('colors.blue.800');
var LUP_BASE_BLUE_DARK = themeGet('colors.blue.700');
var LUP_BASE_BLUE = themeGet('colors.blue.500');
var LUP_BASE_BLUE_LIGHTER = themeGet('colors.blue.200');
var LUP_BASE_BLUE_LIGHT = themeGet('colors.blue.100');
var LUP_BASE_BLUE_LIGHTEST = themeGet('colors.blue.50');
var LUP_BASE_GREY_DARKEST = themeGet('colors.grey.800');
var LUP_BASE_GREY_DARKER = themeGet('colors.grey.700');
var LUP_BASE_GREY_DARK = themeGet('colors.grey.600');
var LUP_BASE_GREY_MEDIUM = themeGet('colors.grey.500');
var LUP_BASE_GREY = themeGet('colors.grey.400');
var LUP_BASE_GREY_LIGHT = themeGet('colors.grey.300');
var LUP_BASE_GREY_LIGHTER = themeGet('colors.grey.200');
var LUP_BASE_GREY_LIGHTEST = themeGet('colors.grey.100');
var LUP_FUNCTIONAL_SUCCESS_GREEN_DARK = themeGet('colors.green.800');
var LUP_FUNCTIONAL_SUCCESS_GREEN = themeGet('colors.green.500');
var LUP_FUNCTIONAL_SUCCESS_GREEN_LIGHT = themeGet('colors.green.200');
var LUP_FUNCTIONAL_SUCCESS_GREEN_LIGHTER = themeGet('colors.green.100');
var LUP_FUNCTIONAL_SUCCESS_GREEN_LIGHTEST = themeGet('colors.green.50');
var LUP_FUNCTIONAL_ALERT_YELLOW_DARK = themeGet('colors.yellow.800');
var LUP_FUNCTIONAL_ALERT_YELLOW = themeGet('colors.yellow.500');
var LUP_FUNCTIONAL_ALERT_YELLOW_LIGHT = themeGet('colors.yellow.200');
var LUP_FUNCTIONAL_ALERT_YELLOW_LIGHTER = themeGet('colors.yellow.100');
var LUP_FUNCTIONAL_ALERT_YELLOW_LIGHTEST = themeGet('colors.yellow.50');
var LUP_FUNCTIONAL_ERROR_RED_DARK = themeGet('colors.red.800');
var LUP_FUNCTIONAL_ERROR_RED = themeGet('colors.red.500');
var LUP_FUNCTIONAL_ERROR_RED_LIGHT = themeGet('colors.red.200');
var LUP_FUNCTIONAL_ERROR_RED_LIGHTER = themeGet('colors.red.100');
var LUP_FUNCTIONAL_ERROR_RED_LIGHTEST = themeGet('colors.red.50');
var LUP_SECONDARY_YELLOW = themeGet('colors.secondary.yellow');
var LUP_SECONDARY_DEEP_YELLOW = themeGet('colors.secondary.deepYellow');
var LUP_SECONDARY_PURPLE = themeGet('colors.secondary.purple');
var LUP_SECONDARY_DEEP_PURPLE = themeGet('colors.secondary.deepPurple');
var LUP_SECONDARY_CYAN = themeGet('colors.secondary.cyan');
var LUP_SECONDARY_DEEP_CYAN = themeGet('colors.secondary.deepCyan');
var LUP_SECONDARY_BROWN = themeGet('colors.secondary.brown');
var LUP_SECONDARY_DEEP_BROWN = themeGet('colors.secondary.deepBrown');
var LUP_SECONDARY_CHARCOAL_BLACK = themeGet('colors.secondary.charcoalBlack');
var LUP_STATUS_ACTIVE_UNCONFIRMED = themeGet('colors.status.gold');
var LUP_STATUS_IN_PROGRESS = themeGet('colors.status.blue');
var LUP_STATUS_UNDER_REVIEW = themeGet('colors.status.orange');
var LUP_STATUS_COMPLETE_CONFIRMED = themeGet('colors.status.green');
var LUP_STATUS_RETURNED_NON_COMPLIANT_DEADLINE = themeGet('colors.status.red');
var LUP_STATUS_CANCELLED_INACTIVE = themeGet('colors.status.gray');
var LUP_FORM_ENABLED_BACKGROUND = themeGet('colors.form.background.enabled');
var LUP_FORM_DISABLED_BACKGROUND = themeGet('colors.form.background.disabled');
var LUP_MAIN_FONT = themeGet('font.mainSet');
var LUP_MAIN_FONT_LIGHTEST = themeGet('font.weight.lightest');
var LUP_MAIN_FONT_LIGHTER = themeGet('font.weight.lighter');
var LUP_MAIN_FONT_LIGHT = themeGet('font.weight.light');
var LUP_MAIN_FONT_NORMAL = themeGet('font.weight.normal');
var LUP_MAIN_FONT_BOLDER = themeGet('font.weight.bolder');
var LUP_MAIN_FONT_BOLD600 = themeGet('font.weight.bold600');
var LUP_MAIN_FONT_BOLD700 = themeGet('font.weight.bold700');
var LUP_MAIN_FONT_BOLD800 = themeGet('font.weight.bold800');
var LUP_MAIN_FONT_BOLDEST = themeGet('font.weight.boldest');
var LUP_MAIN_FONT_SIZE4 = themeGet('font.size.4');
var LUP_MAIN_FONT_SIZE8 = themeGet('font.size.8');
var LUP_MAIN_FONT_SIZE10 = themeGet('font.size.10');
var LUP_MAIN_FONT_SIZE12 = themeGet('font.size.12');
var LUP_MAIN_FONT_SIZE14 = themeGet('font.size.14');
var LUP_MAIN_FONT_SIZE16 = themeGet('font.size.16');
var ACCENT_DARK = themeGet('colors.accent.dark');
var COMMENT_TEXT_HIGHLIGHT_DARK = themeGet('colors.text.highlight.dark');
var COMMENT_TEXT_HIGHLIGHT_LIGHT = themeGet('colors.text.highlight.light');
var LUP_MAIN_BORDER_RADIUS24 = themeGet('border.radius.24');
var LUP_MAIN_BORDER_RADIUS2 = themeGet('border.radius.2');
var LUP_MAIN_BORDER_RADIUS4 = themeGet('border.radius.4');
var LUP_MAIN_BORDER_RADIUS6 = themeGet('border.radius.6');
var LUP_MAIN_BORDER_WIDTH6 = themeGet('border.width.6');
var LUP_MAIN_BORDER_WIDTH2 = themeGet('border.width.2');
var LUP_MAIN_BORDER_WIDTH1 = themeGet('border.width.1');
var LUP_SPACING_1 = themeGet('spacing.size.1');
var LUP_SPACING_2 = themeGet('spacing.size.2');
var LUP_SPACING_3 = themeGet('spacing.size.3');
var LUP_SPACING_4 = themeGet('spacing.size.4');
var LUP_SPACING_5 = themeGet('spacing.size.5');
var LUP_SPACING_6 = themeGet('spacing.size.6');
var LUP_SPACING_7 = themeGet('spacing.size.7');
var LUP_SPACING_8 = themeGet('spacing.size.8');
var LUP_SPACING_9 = themeGet('spacing.size.9');
var LUP_SPACING_10 = themeGet('spacing.size.10');
var LUP_SPACING_11 = themeGet('spacing.size.11');
var LUP_SPACING_12 = themeGet('spacing.size.12');
var LUP_SPACING_13 = themeGet('spacing.size.13');
var LUP_SPACING_14 = themeGet('spacing.size.14');
var LUP_SPACING_15 = themeGet('spacing.size.15');
var LUP_SPACING_16 = themeGet('spacing.size.16');
var LUP_SPACING_17 = themeGet('spacing.size.17');
var LUP_SPACING_18 = themeGet('spacing.size.18');
var LUP_SPACING_19 = themeGet('spacing.size.19');
var LUP_SPACING_20 = themeGet('spacing.size.20');
var LUP_SPACING_21 = themeGet('spacing.size.21');
var LUP_SPACING_22 = themeGet('spacing.size.22');
var LUP_SPACING_23 = themeGet('spacing.size.23');
var LUP_SPACING_24 = themeGet('spacing.size.24');
var LUP_SPACING_25 = themeGet('spacing.size.25');
var LUP_SPACING_26 = themeGet('spacing.size.26');
var LUP_SPACING_28 = themeGet('spacing.size.28');
var LUP_SPACING_30 = themeGet('spacing.size.30');
var LUP_SPACING_32 = themeGet('spacing.size.32');
var LUP_SPACING_33 = themeGet('spacing.size.33');
var LUP_SPACING_34 = themeGet('spacing.size.34');
var LUP_SPACING_35 = themeGet('spacing.size.35');
var LUP_SPACING_37 = themeGet('spacing.size.37');
var LUP_SPACING_40 = themeGet('spacing.size.40');
var LUP_SPACING_42 = themeGet('spacing.size.42');
var LUP_SPACING_44 = themeGet('spacing.size.44');
var LUP_SPACING_45 = themeGet('spacing.size.45');
var LUP_SPACING_50 = themeGet('spacing.size.50');
var LUP_SPACING_60 = themeGet('spacing.size.60');
var LUP_SPACING_65 = themeGet('spacing.size.65');
var LUP_SPACING_66 = themeGet('spacing.size.66');
var LUP_SPACING_70 = themeGet('spacing.size.70');
var LUP_SPACING_86 = themeGet('spacing.size.86');
var LUP_SPACING_100 = themeGet('spacing.size.100');
var LUP_SPACING_110 = themeGet('spacing.size.110');
var LUP_SPACING_130 = themeGet('spacing.size.130');
var LUP_SPACING_134 = themeGet('spacing.size.134');
var LUP_SPACING_144 = themeGet('spacing.size.144');
var LUP_SPACING_150 = themeGet('spacing.size.150');
var LUP_SPACING_160 = themeGet('spacing.size.160');
var LUP_SPACING_170 = themeGet('spacing.size.170');
var LUP_SPACING_187 = themeGet('spacing.size.187');
var LUP_SPACING_196 = themeGet('spacing.size.196');
var LUP_SPACING_200 = themeGet('spacing.size.200');
var LUP_SPACING_216 = themeGet('spacing.size.216');
var LUP_SPACING_230 = themeGet('spacing.size.230');
var LUP_SPACING_340 = themeGet('spacing.size.340');
var LUP_SPACING_377 = themeGet('spacing.size.377');
var LUP_SPACING_443 = themeGet('spacing.size.443');
var LUP_SPACING_300 = themeGet('spacing.size.300');
var LUP_SPACING_500 = themeGet('spacing.size.500');
var LUP_BOX_SHADOW_1 = themeGet('box.shadow.1');
var LUP_BOX_SHADOW_2 = themeGet('box.shadow.2');
var LUP_BOX_SHADOW_3 = themeGet('box.shadow.3');
var LUP_BOX_SHADOW_4 = themeGet('box.shadow.4');
var LUP_BOX_SHADOW_5 = themeGet('box.shadow.5');
var LUP_BOX_SHADOW_6 = themeGet('box.shadow.6');
var LUP_BOX_SHADOW_7 = themeGet('box.shadow.7');
var LUP_MODAL_BUTTON_WIDTH_100 = themeGet('modal.buttonWidth.100');
var LUP_MODAL_MARGIN_TOP_5 = themeGet('modal.marginTop.5');
var LUP_OPACITY_1 = themeGet('opacity.value.1');
var colors = {
  white: '#FFFFFF',
  black: '#000000',
  hex: '#000',
  blue: {
    50: '#E4F1F8',
    100: '#D3E7F4',
    200: '#A6CFE9',
    500: '#4C9FD2',
    700: '#0076BF',
    800: '#06507F'
  },
  grey: {
    100: '#FAFAFA',
    200: '#EEEEEE',
    300: '#DDDDDD',
    400: '#C4C4C4',
    500: '#A4A4A4',
    600: '#888888',
    700: '#5D5D5D',
    800: '#444444'
  },
  green: {
    50: '#EBFAEB',
    100: '#DDF6DD',
    200: '#BBEDBC',
    500: '#1BB934',
    800: '#0F9427'
  },
  yellow: {
    50: '#FFFCE3',
    100: '#FFFBD1',
    200: '#FFF6A3',
    500: '#FCC300',
    800: '#D9A514'
  },
  red: {
    50: '#FFE7E3',
    100: '#FFD7D1',
    200: '#FFAFA3',
    500: '#E00000',
    800: '#BA0006'
  },
  secondary: {
    yellow: '#F2C94C',
    deepYellow: '#F2994A',
    purple: '#BB6BD9',
    deepPurple: '#9B51E0',
    cyan: '#3ADDD6',
    deepCyan: '#2BBFBE',
    brown: '#D49857',
    deepBrown: '#955918',
    pink: '#EA79CE',
    deepPink: '#EA27BA',
    charcoalBlack: '#333333'
  },
  status: {
    gold: '#FCC300',
    blue: '#4C9FD2',
    orange: '#F2994A',
    green: '#1BB934',
    red: '#E00000',
    gray: '#A4A4A4'
  },
  text: {
    highlight: {
      light: '#FFF6A3',
      dark: '#FCC300'
    }
  },
  chart: {
    grey: {
      200: '#E7E7E7',
      600: '#8A979E'
    },
    blue: {
      200: '#ABE2FF',
      500: '#65BAFF',
      700: '#0088E9',
      800: '#0660AF'
    }
  },
  form: {
    background: {
      enabled: '#F3FBFF',
      disabled: '#EEEEEE'
    }
  },
  gradient: {
    blue: {
      start: 'rgba(0, 91, 162, 0.6)',
      end: '#003C69'
    },
    red: {
      start: 'rgba(237, 28, 36, 0.4)',
      end: '#9E0B0F'
    },
    yellow: {
      start: 'rgba(255, 242, 0, 0.6)',
      end: '#FAA61A'
    },
    grey: {
      start: '#DDDDDD',
      end: '#5D5D5D'
    }
  }
};
var BOLD_WEIGHT = themeGet('font.weight.bold600');
var font = {
  mainSet: 'Titillium Web',
  weight: {
    lightest: '100',
    lighter: '200',
    light: '300',
    normal: '400',
    bolder: '500',
    bold600: '600',
    bold700: '700',
    bold800: '800',
    boldest: '900'
  },
  size: {
    4: '4px',
    8: '8px',
    10: '10px',
    11: '11px',
    12: '12px',
    15: '15px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    25: '25px'
  }
};
var border = {
  radius: {
    2: '2px',
    4: '4px',
    6: '6px',
    24: '24px'
  },
  width: {
    1: '1px',
    2: '2px',
    6: '6px'
  }
};
var spacing = {
  size: {
    1: '1px',
    2: '2px',
    3: '3px',
    4: '4px',
    5: '5px',
    6: '6px',
    7: '7px',
    8: '8px',
    9: '9px',
    10: '10px',
    11: '11px',
    12: '12px',
    13: '13px',
    14: '14px',
    15: '15px',
    16: '16px',
    17: '17px',
    18: '18px',
    19: '19px',
    20: '20px',
    21: '21px',
    22: '22px',
    23: '23px',
    24: '24px',
    25: '25px',
    26: '26px',
    28: '28px',
    30: '30px',
    32: '32px',
    33: '33px',
    34: '34px',
    35: '35px',
    37: '37px',
    40: '40px',
    42: '42px',
    44: '44px',
    45: '45px',
    50: '50px',
    60: '60px',
    65: '65px',
    66: '66px',
    70: '70px',
    86: '86px',
    100: '100px',
    110: '110px',
    130: '130px',
    134: '134px',
    144: '144px',
    150: '150px',
    160: '160px',
    170: '170px',
    187: '187px',
    196: '196px',
    200: '200px',
    230: '230px',
    216: '216px',
    300: '300px',
    340: '340px',
    377: '377px',
    443: '443px',
    500: '500px'
  }
};
var box = {
  shadow: {
    1: '0px 1px 8px #5D5D5D',
    2: '0px 1px 3px #C4C4C4',
    3: '0px 1px 8px rgba(136, 136, 136, 0.35)',
    4: '-2px -2px 5px rgba(0,0,0,.06)',
    5: '0px -2px 4px #C4C4C4',
    6: '0px 2px 3px rgba(0, 0, 0, 0.1)',
    7: '0px 1px 8px 0px rgba(68, 68, 68, 0.25)'
  }
};
var modal = {
  buttonWidth: {
    100: '100px'
  }
};
var opacity = {
  value: {
    1: '1'
  }
}; // https://github.com/jxnblk/styled-system#api

var theme = {
  colors: colors,
  font: font,
  border: border,
  spacing: spacing,
  box: box,
  modal: modal,
  opacity: opacity
};

var ChatTypes = {
  COMMENTWITHREPLIES: 'commentWithReplies',
  REPLY: 'reply',
  COMMENT: 'comment'
};
var FlexBlockChatBorderColor = {
  'comment': LUP_BASE_GREY_LIGHT,
  'reply': LUP_BASE_GREY_LIGHT,
  'commentWithReplies': LUP_BASE_GREY_LIGHT
};
var FlexBlockChatBackground = {
  'comment': WHITE,
  'reply': WHITE,
  'commentWithReplies': LUP_FORM_ENABLED_BACKGROUND
};
var FlexBlockChatPadding = {
  'comment': '15px 0px 10px 0px',
  'reply': '15px 0px 10px 0px',
  'commentWithReplies': '15px 0px 10px 0px'
};
var FlexBlockChatMargin = {
  'comment': '0px 15px',
  'reply': '0px 15px',
  'commentWithReplies': '0px 15px'
};
var ChatHeaderText = {
  COMMENT: 'Comments',
  REPLY: 'Comment Replies'
};
var ChatSubmitBoxPlaceholderText = {
  COMMENT: 'Add Comment...',
  REPLY: 'Add Reply...'
};
var ChatSearchBoxPadding = {
  'comment': '15px 15px 10px 15px',
  'reply': '15px 15px 0px 15px'
};
var ConfirmationPopUpTexts = {
  DESCRIPTION_FIRST_PART: 'Are you sure to switch to ',
  DESCRIPTION_SECOND_PART: ' comment box',
  TITLE: 'Confirmation',
  YES: 'yes',
  NO: 'No'
};
var ExternalRoomName = 'Talk To Buyer'; // Comparison ToolBar

var DropDownText = 'Saved Comparisons';
var SaveButtonText = 'SAVE COMPARISON';
var DeleteButtonText = 'Delete Comparison';
var SaveModalTitle = "Save Comparison";
var saveAs = "Save as ";
var save = "Save";
var cancel = "Cancel";
var MainProduct = 'Main Product';
var ClearAll = "Clear All";
var ChatSubmitBoxReplyLabel = 'Reply...';
var selectAll = "Select All";
var compareInViewer = "Compare In Viewer";
var highlightCheckboxLabel = "Highlight Differences"; // Error Messages Types

var ErrorMessagesTypes = {
  GET_MESSAGES_FAILED: 'Get messages api failed. Please refresh the page or try again later',
  POST_MESSAGE_FAILED: 'Send message api failed. Please refresh the page or try again later',
  EDIT_MESSAGE_FAILED: 'Edit message api failed. Please refresh the page or try again later',
  REMOVE_MESSAGE_FAILED: 'Delete message api failed. Please refresh the page or try again later',
  GET_ROOMS_FAILED: 'Get rooms api failed. Please refresh the page or try again later',
  GET_CURRENT_USER_FAILURE: 'Get user api failed. Please refresh the page or try again later',
  SEARCH_MESSAGES_FAILED: "We're sorry, we could not find your result. Please try again.",
  GET_APP_CONFIGURATION_FAILURE: "Get app configuration api failed. Please refresh the page or try again later"
};
var CONFIGURATION_KEY = "UPDATION_TIME_LIMIT";
var DEFAULT_UPDATION_TIME = "1";

var MessageContext = /*#__PURE__*/createContext([{}, function () {}]);
var MessageContextProvider = function MessageContextProvider(props) {
  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var getAuthHeaders = function getAuthHeaders() {
    return {
      headers: {
        "x-user": state.authKey,
        "set-cookie": document.cookie
      }
    };
  };

  var getMessages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(body) {
      var payload, newState, CancelToken, source, room, headers, _yield$fetch, data, chatItems, commentItem, replyItems;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = makeGetMessagesPayload(body);
              _context.prev = 1;
              newState = _objectSpread2({}, state);
              CancelToken = axios$1.CancelToken;
              source = CancelToken.source();
              room = newState.room;
              room.source = source;
              dispatch({
                type: UPDATE_CURRENT_ROOM,
                room: room
              });
              headers = getAuthHeaders();
              _context.next = 11;
              return fetch(payload, _objectSpread2(_objectSpread2({}, headers), {}, {
                cancelToken: source.token
              }));

            case 11:
              _yield$fetch = _context.sent;
              data = _yield$fetch.data;
              chatItems = makeMessages(data.result.messages);

              if (state.repliesTo !== '') {
                newState.replyItems = [];

                if (state.searchText !== '') {
                  newState.replyItems = _toConsumableArray(chatItems);
                } else {
                  commentItem = chatItems[0];
                  replyItems = chatItems[0].replyItems;
                  newState.replyItems = [commentItem].concat(_toConsumableArray(replyItems));
                }

                newState.replyItems.sort(function (a, b) {
                  return a.createdAt - b.createdAt;
                });
              } else if (state.pageNum === 0) {
                newState.chatItems = chatItems;
                newState.chatItems.sort(function (a, b) {
                  return a.createdAt - b.createdAt;
                });
                newState.replyItems = [];
              } else {
                newState.chatItems = [].concat(_toConsumableArray(chatItems), _toConsumableArray(state.chatItems));
                newState.chatItems.sort(function (a, b) {
                  return a.createdAt - b.createdAt;
                });
                newState.replyItems = [];
              }

              newState.fetchedPages[data.result.pageNum] = true;
              calculateUserPermissions(data.result.userPermissions);

              if (newState.loading) {
                dispatch({
                  type: GET_MESSAGES_SUCCESS,
                  chatItems: newState.chatItems,
                  pageNum: data.result.pageNum,
                  fetchedPages: newState.fetchedPages,
                  hasNext: data.result.hasNext,
                  hasPrev: data.result.hasPrev,
                  prevLoading: false,
                  nextLoading: false,
                  replyItems: newState.replyItems
                });
              } else if (newState.prevLoading) {
                dispatch({
                  type: GET_MESSAGES_SUCCESS,
                  chatItems: newState.chatItems,
                  pageNum: data.result.pageNum,
                  fetchedPages: newState.fetchedPages,
                  hasNext: data.result.hasNext,
                  hasPrev: data.result.hasPrev,
                  prevLoading: false,
                  nextLoading: false
                });
              } else if (newState.nextLoading) {
                dispatch({
                  type: GET_MESSAGES_SUCCESS,
                  chatItems: newState.chatItems,
                  pageNum: state.pageNum,
                  fetchedPages: newState.fetchedPages,
                  hasNext: data.result.hasNext,
                  hasPrev: data.result.hasPrev,
                  prevLoading: false,
                  nextLoading: false
                });
              }

              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](1);

              if (_context.t0.message !== 'get messages canceled') {
                dispatch({
                  type: GET_MESSAGES_FAILED,
                  error: _context.t0,
                  errorMessage: ErrorMessagesTypes.GET_MESSAGES_FAILED
                });
                setTimeout(function () {
                  closePopup();
                }, 5000);
              }

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 20]]);
    }));

    return function getMessages(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var postMessage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(messageBody, resolve) {
      var message, attachments, reference, appId, roomId, room, repliesTo, users, payload, newState, _yield$create, data, newChatItem;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              message = messageBody.message, attachments = messageBody.attachments, reference = messageBody.reference;
              appId = state.appId, roomId = state.roomId, room = state.room, repliesTo = state.repliesTo;
              users = room.users;
              payload = makePostMessagePayload({
                message: message,
                users: users,
                attachments: attachments,
                reference: reference,
                appId: appId,
                roomId: roomId,
                repliesTo: repliesTo
              });
              _context2.prev = 4;
              newState = _objectSpread2({}, state);
              newState.chatInput.attachments = [];
              dispatch({
                type: UPDATE_ATTACHMENT,
                chatInput: newState.chatInput
              });
              _context2.next = 10;
              return create(payload, getAuthHeaders());

            case 10:
              _yield$create = _context2.sent;
              data = _yield$create.data;
              newChatItem = makeMessage(data.result);

              if (newState.repliesTo !== '') {
                newState.replyItems.push(newChatItem);
                newState.chatItems = newState.chatItems.map(function (chatItem) {
                  return chatItem.messageId === state.repliesTo ? _objectSpread2(_objectSpread2({}, chatItem), chatItem.replyItems.push(newChatItem)) : chatItem;
                });
              } else {
                newState.replyItems = [];
                newState.chatItems.push(newChatItem);
              }

              dispatch({
                type: POST_MESSAGE_SUCCESS,
                chatItems: newState.chatItems,
                replyItems: newState.replyItems,
                isCreating: false
              });
              resolve(newChatItem);
              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](4);
              dispatch({
                type: POST_MESSAGE_FAILED,
                error: _context2.t0,
                errorMessage: ErrorMessagesTypes.POST_MESSAGE_FAILED
              });
              setTimeout(function () {
                closePopup();
              }, 5000);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 18]]);
    }));

    return function postMessage(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var editMessage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(message, attachments, messageId, reference) {
      var appId, roomId, room, repliesTo, users, payload, _yield$edit, data, newChatItem, newState, updatedChatItems, updatedReplyItems;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              appId = state.appId, roomId = state.roomId, room = state.room, repliesTo = state.repliesTo;
              users = room.users;
              payload = makePostMessagePayload({
                message: message,
                users: users,
                attachments: attachments,
                reference: reference,
                appId: appId,
                roomId: roomId,
                repliesTo: repliesTo
              });
              payload.id = messageId;
              dispatch({
                type: UPDATE_EDIT_LOADING,
                isEditLoading: true
              });
              _context3.prev = 5;
              _context3.next = 8;
              return edit(payload, getAuthHeaders());

            case 8:
              _yield$edit = _context3.sent;
              data = _yield$edit.data;
              newChatItem = makeMessage(data.result);
              newState = _objectSpread2({}, state);
              updatedChatItems = [];
              updatedReplyItems = [];

              if (newState.repliesTo !== '') {
                updatedReplyItems = newState.replyItems.map(function (replyItem) {
                  return replyItem.messageId === messageId ? _objectSpread2(_objectSpread2({}, newChatItem), {}, {
                    isEditing: false
                  }) : replyItem;
                });
                updatedChatItems = newState.chatItems.map(function (chatItem) {
                  return chatItem.messageId === newState.repliesTo ? _objectSpread2(_objectSpread2({}, chatItem), {}, {
                    replyItems: chatItem.replyItems.map(function (replyItem) {
                      return replyItem.messageId === messageId ? _objectSpread2(_objectSpread2({}, newChatItem), {}, {
                        isEditing: false
                      }) : replyItem;
                    })
                  }) : chatItem;
                });
              } else {
                updatedChatItems = newState.chatItems.map(function (chatItem) {
                  return chatItem.messageId === messageId ? _objectSpread2(_objectSpread2({}, newChatItem), {}, {
                    isEditing: false
                  }) : chatItem;
                });
              }

              dispatch({
                type: UPDATE_CHAT_ITEMS,
                chatItems: updatedChatItems,
                replyItems: updatedReplyItems,
                repliesTo: newState.repliesTo,
                highlightMessage: {},
                searchText: state.searchText
              });
              _context3.next = 22;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](5);
              dispatch({
                type: EDIT_MESSAGE_FAILED,
                error: _context3.t0,
                errorMessage: ErrorMessagesTypes.EDIT_MESSAGE_FAILED
              });
              setTimeout(function () {
                closePopup();
              }, 5000);

            case 22:
              dispatch({
                type: UPDATE_EDIT_LOADING,
                isEditLoading: false
              });

            case 23:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[5, 18]]);
    }));

    return function editMessage(_x4, _x5, _x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();

  var removeMessage = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(messageId, resolve) {
      var payload, newState, updatedChatItems, updatedReplyItems;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = {
                id: messageId,
                app_id: state.appId,
                room_id: state.roomId
              };
              dispatch({
                type: UPDATE_DELETE_LOADING,
                isDeleteLoading: true
              });
              _context4.prev = 2;
              _context4.next = 5;
              return remove(payload, getAuthHeaders());

            case 5:
              newState = _objectSpread2({}, state);
              updatedChatItems = [];
              updatedReplyItems = [];

              if (newState.repliesTo !== '') {
                updatedReplyItems = newState.replyItems.filter(function (replyItem) {
                  return replyItem.messageId !== messageId;
                });
                updatedChatItems = newState.chatItems.map(function (chatItem) {
                  return chatItem.messageId === newState.repliesTo ? _objectSpread2(_objectSpread2({}, chatItem), {}, {
                    replyItems: chatItem.replyItems.filter(function (replyItem) {
                      return replyItem.messageId !== messageId;
                    })
                  }) : chatItem;
                });
              } else {
                updatedChatItems = newState.chatItems.filter(function (chatItem) {
                  return chatItem.messageId !== messageId;
                });
              }

              dispatch({
                type: UPDATE_CHAT_ITEMS,
                chatItems: updatedChatItems,
                replyItems: updatedReplyItems,
                repliesTo: state.repliesTo,
                highlightMessage: {},
                searchText: state.searchText
              });
              resolve();
              _context4.next = 17;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](2);
              dispatch({
                type: REMOVE_MESSAGE_FAILED,
                error: _context4.t0,
                errorMessage: ErrorMessagesTypes.REMOVE_MESSAGE_FAILED
              });
              setTimeout(function () {
                closePopup();
              }, 5000);

            case 17:
              dispatch({
                type: UPDATE_DELETE_LOADING,
                isDeleteLoading: false
              });

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 13]]);
    }));

    return function removeMessage(_x8, _x9) {
      return _ref4.apply(this, arguments);
    };
  }();

  var addAttachment = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(file) {
      var CancelToken, source, app, newState, dataUri, chatInput, _newState, index;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              try {
                CancelToken = axios$1.CancelToken; // create the source

                source = CancelToken.source();
                app = state.room.app; //add file to state

                newState = _objectSpread2({}, state);
                file.progress = 0;
                file.source = source;
                newState.chatInput.attachments.push(file);
                dispatch({
                  type: ADD_ATTACHMENT,
                  chatInput: newState.chatInput
                }); // convert to dataUri

                dataUri = '';
                getBase64(file, /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(result) {
                    var payload, config;
                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            dataUri = result; // update state with progress after datauri generated

                            file.dataUri = dataUri;
                            dispatch({
                              type: UPDATE_ATTACHMENT,
                              chatInput: newState.chatInput
                            }); //api call for file upload

                            payload = makePostFilePayload(file, app);
                            config = {
                              cancelToken: source.token,
                              onUploadProgress: function onUploadProgress(progressEvent) {
                                var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);

                                if (percentCompleted <= 90) {
                                  file.progress = percentCompleted;
                                  dispatch({
                                    type: UPDATE_ATTACHMENT,
                                    chatInput: newState.chatInput
                                  });
                                }
                              }
                            };
                            postFile(payload, config).then(function (res) {
                              file.progress = 100;
                              file.id = res.data.id;
                              dispatch({
                                type: ADD_ATTACHMENT_SUCCESS,
                                chatInput: newState.chatInput
                              });
                            }).catch(function (error) {
                              file.error = true;
                              file.progress = 0;
                              dispatch({
                                type: ADD_ATTACHMENT_FAILED,
                                chatInput: newState.chatInput
                              });
                            });

                          case 6:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x11) {
                    return _ref6.apply(this, arguments);
                  };
                }(), function (error) {
                  var chatInput = state.chatInput;

                  var newState = _objectSpread2({}, state);

                  var index = chatInput.attachments.indexOf(file);

                  if (chatInput.attachments[index]) {
                    chatInput.attachments[index].error = error || true;
                    dispatch({
                      type: ADD_ATTACHMENT_FAILED,
                      chatInput: newState.chatInput
                    });
                  }
                });
              } catch (error) {
                chatInput = state.chatInput;
                _newState = _objectSpread2({}, state);
                index = chatInput.attachments.indexOf(file);

                if (chatInput.attachments[index]) {
                  chatInput.attachments[index].error = error || true;
                  dispatch({
                    type: ADD_ATTACHMENT_FAILED,
                    chatInput: _newState.chatInput
                  });
                }
              }

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function addAttachment(_x10) {
      return _ref5.apply(this, arguments);
    };
  }();

  var deleteAttachment = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(file) {
      var chatInput, newState, index;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              try {
                chatInput = state.chatInput;
                newState = _objectSpread2({}, state);
                index = chatInput.attachments.indexOf(file);

                if (index > -1) {
                  chatInput.attachments.splice(index, 1);
                  newState.chatInput = chatInput;
                  dispatch({
                    type: UPDATE_ATTACHMENT,
                    chatInput: newState.chatInput
                  });
                }
              } catch (error) {}

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function deleteAttachment(_x12) {
      return _ref7.apply(this, arguments);
    };
  }();

  var cancelAttachmentUpload = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(file) {
      var chatInput, newState, index;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              try {
                chatInput = state.chatInput;
                newState = _objectSpread2({}, state);
                index = chatInput.attachments.indexOf(file);

                if (index > -1) {
                  chatInput.attachments.splice(index, 1);
                  newState.chatInput = chatInput;
                  file.source.cancel('upload canceled');
                  dispatch({
                    type: UPDATE_ATTACHMENT,
                    chatInput: newState.chatInput
                  });
                }
              } catch (error) {}

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function cancelAttachmentUpload(_x13) {
      return _ref8.apply(this, arguments);
    };
  }();

  var updateRefId = function updateRefId(updatedRefId) {
    try {
      var newState = _objectSpread2({}, state);

      newState.refId = updatedRefId;
      dispatch({
        type: GET_ROOMS,
        appId: state.appId,
        refId: newState.refId
      });
    } catch (error) {
      dispatch({
        type: GET_ROOMS_FAILED,
        error: error,
        errorMessage: ErrorMessagesTypes.GET_ROOMS_FAILED
      });
      setTimeout(function () {
        closePopup();
      }, 5000);
    }
  };

  var fetchRooms = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(appId, refId, userId) {
      var payload, response, rooms, room, roomId, pins;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              payload = {
                appId: appId,
                refId: refId,
                userId: userId
              };
              _context9.next = 4;
              return getRooms(payload);

            case 4:
              response = _context9.sent;

              if (response.data && response.data.result) {
                rooms = response.data.result;

                if (rooms.length) {
                  rooms = rooms.map(function (room) {
                    return _objectSpread2({
                      index: rooms.indexOf(room)
                    }, room);
                  });
                  room = rooms[0];
                  roomId = room.id;
                  pins = room.pins;
                  dispatch({
                    type: GET_ROOMS_SUCCESS,
                    rooms: rooms,
                    room: room,
                    roomId: roomId,
                    pins: pins
                  });
                }
              }

              _context9.next = 12;
              break;

            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9["catch"](0);
              dispatch({
                type: GET_ROOMS_FAILED,
                error: _context9.t0,
                errorMessage: ErrorMessagesTypes.GET_ROOMS_FAILED
              });
              setTimeout(function () {
                closePopup();
              }, 5000);

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 8]]);
    }));

    return function fetchRooms(_x14, _x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }();

  var fetchCurrentUser = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(userId) {
      var response, currentUser;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              _context10.next = 3;
              return getCurrentUser({
                userId: userId
              });

            case 3:
              response = _context10.sent;

              if (response.data && response.data.result) {
                currentUser = response.data.result;
                dispatch({
                  type: GET_CURRENT_USER_SUCCESS,
                  currentUser: currentUser
                });
              }

              _context10.next = 11;
              break;

            case 7:
              _context10.prev = 7;
              _context10.t0 = _context10["catch"](0);
              dispatch({
                type: GET_CURRENT_USER_FAILURE,
                error: _context10.t0,
                errorMessage: ErrorMessagesTypes.GET_CURRENT_USER_FAILURE
              });
              setTimeout(function () {
                closePopup();
              }, 5000);

            case 11:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 7]]);
    }));

    return function fetchCurrentUser(_x17) {
      return _ref10.apply(this, arguments);
    };
  }();

  var getAppConfig = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(appCode, configKey) {
      var response, config;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              _context11.next = 3;
              return getAppConfigValue(appCode, configKey);

            case 3:
              response = _context11.sent;

              if (response.data && response.data.result) {
                config = response.data.result;
                dispatch({
                  type: GET_APP_CONFIGURATION,
                  config: config
                });
              }

              _context11.next = 11;
              break;

            case 7:
              _context11.prev = 7;
              _context11.t0 = _context11["catch"](0);
              dispatch({
                type: GET_APP_CONFIGURATION_FAILURE,
                error: _context11.t0,
                errorMessage: ErrorMessagesTypes.GET_APP_CONFIGURATION_FAILURE
              });
              setTimeout(function () {
                closePopup();
              }, 5000);

            case 11:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[0, 7]]);
    }));

    return function getAppConfig(_x18, _x19) {
      return _ref11.apply(this, arguments);
    };
  }(); // get user permissions


  var calculateUserPermissions = function calculateUserPermissions(permissions) {
    var room = state.room;
    var userPermissions = [];

    if (permissions && room && room.permissions) {
      room.permissions.forEach(function (room) {
        if (permissions.includes(room.value)) {
          userPermissions.push(room.key);
        }
      });
      dispatch({
        type: SET_CURRENT_USER_PERMISSIONS,
        userPermissions: userPermissions
      });
    }
  };

  var getPermissions = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(permissionsApi, token) {
      var response, data, result, permissions;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              _context12.next = 3;
              return getUserPermissions(permissionsApi, {
                headers: {
                  Cookie: token
                }
              });

            case 3:
              response = _context12.sent;
              data = response.data;
              result = data.result;
              permissions = result.permissions;
              calculateUserPermissions(permissions);
              _context12.next = 13;
              break;

            case 10:
              _context12.prev = 10;
              _context12.t0 = _context12["catch"](0);
              console.log('Error during getUserPermissions API call');

            case 13:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[0, 10]]);
    }));

    return function getPermissions(_x20, _x21) {
      return _ref12.apply(this, arguments);
    };
  }();

  var closePopup = function closePopup() {
    dispatch({
      type: CLOSE_POPUP
    });
  };

  return /*#__PURE__*/React.createElement(MessageContext.Provider, {
    value: [state, dispatch, {
      getMessages: getMessages,
      postMessage: postMessage,
      addAttachment: addAttachment,
      deleteAttachment: deleteAttachment,
      cancelAttachmentUpload: cancelAttachmentUpload,
      editMessage: editMessage,
      removeMessage: removeMessage,
      fetchRooms: fetchRooms,
      fetchCurrentUser: fetchCurrentUser,
      closePopup: closePopup,
      getPermissions: getPermissions,
      calculateUserPermissions: calculateUserPermissions,
      updateRefId: updateRefId,
      getAppConfig: getAppConfig
    }]
  }, props.children);
};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d$1=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h$1=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m$1:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h$1:return a;default:return u}}case d$1:return u}}}function A(a){return z(a)===m$1}var AsyncMode=l;var ConcurrentMode=m$1;var ContextConsumer=k;var ContextProvider=h$1;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d$1;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h$1};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d$1};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m$1||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h$1||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y$1||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var _templateObject, _templateObject2;
var StyledBadge = styled$4.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0 ", ";\n  background: ", ";\n  border-radius: ", ";\n  border: none;\n  font-size: ", ";\n  font-weight: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  min-width: ", ";\n  height: ", ";\n  display: inline-block;\n  text-align: center;\n  line-height: ", ";\n"])), LUP_SPACING_3, function (_ref) {
  var bg = _ref.bg;
  return bg;
}, LUP_MAIN_BORDER_RADIUS24, LUP_MAIN_FONT_SIZE12, LUP_MAIN_FONT_BOLD600, LUP_FORM_ENABLED_BACKGROUND, LUP_SPACING_20, LUP_SPACING_14, LUP_SPACING_14);
var CountWrapper = styled$4.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  min-width: ", ";\n"])), LUP_SPACING_14);

var Badge = function Badge(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(StyledBadge, props, /*#__PURE__*/React.createElement(CountWrapper, null, children));
};

Badge.propTypes = {
  bg: propTypes.string,
  children: propTypes.oneOfType([propTypes.node]).isRequired
};
Badge.defaultProps = {
  bg: LUP_BASE_BLUE_DARK
};

var _templateObject$1;
var StyledBlock = styled$4.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n"])));

var _templateObject$2, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var StyledPlainButton = styled$4.button(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  appearance: none;\n  background-color: transparent;\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  box-shadow: none;\n  text-decoration: none;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;\n  cursor: pointer;\n\n  &[disabled] {\n    opacity: 1;\n    cursor: not-allowed;\n    font-weight: ", ";\n  }\n"])), LUP_SPACING_12, LUP_SPACING_12, LUP_MAIN_FONT_BOLD700, LUP_MAIN_FONT_NORMAL);
var StylesSecondaryButton = css(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  color: ", ";\n  border-color: ", ";\n  background-color: ", ";\n\n  &:hover,\n  &:focus {\n    color: ", ";\n    border-color: ", ";\n  }\n\n  &:active {\n    color: ", ";\n    border-color: ", ";\n  }\n\n  &[disabled] {\n    color: ", ";\n    border-color: ", ";\n    cursor: not-allowed;\n    background: ", ";\n  }\n"])), LUP_BASE_BLUE, LUP_BASE_BLUE, WHITE, LUP_BASE_BLUE_DARK, LUP_BASE_BLUE_DARK, LUP_BASE_BLUE_DARKER, LUP_BASE_BLUE_DARKER, LUP_BASE_GREY, LUP_BASE_GREY, LUP_BASE_GREY_LIGHTER);
var StylesPrimaryButton = css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  border: none;\n  background-color: ", ";\n\n  &:hover,\n  &:focus {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &[disabled] {\n    color: ", ";\n    border-color: ", ";\n    background-color: ", ";\n    cursor: not-allowed;\n  }\n"])), WHITE, LUP_BASE_BLUE, LUP_BASE_BLUE_DARK, LUP_BASE_BLUE_DARK, LUP_BASE_BLUE_DARKER, LUP_BASE_BLUE_DARKER, LUP_BASE_GREY_LIGHTEST, LUP_BASE_GREY_LIGHTEST, LUP_BASE_GREY);
var StylesDefaultButton = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  border-color: ", ";\n  background-color: ", ";\n\n  &:hover,\n  &:focus {\n    color: ", ";\n  }\n\n  &:active {\n    color: ", ";\n    border-color: ", ";\n  }\n\n  &[disabled] {\n    color: ", ";\n    border-color: ", ";\n    background-color: ", ";\n    cursor: not-allowed;\n  }\n"])), LUP_BASE_GREY_MEDIUM, LUP_BASE_GREY_LIGHT, LUP_BASE_GREY_LIGHTEST, ACCENT_DARK, LUP_BASE_BLUE_DARKER, LUP_BASE_GREY, LUP_BASE_GREY_MEDIUM, LUP_BASE_GREY_LIGHT, LUP_BASE_GREY_LIGHTEST);
var StylesCardButton = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n  background-color: ", ";\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  border-color: ", ";\n"])), LUP_BASE_BLUE, WHITE, LUP_BASE_GREY_LIGHTEST);
var styles = {
  default: StylesDefaultButton,
  primary: StylesPrimaryButton,
  secondary: StylesSecondaryButton,
  card: StylesCardButton
};
var sizes = {
  large: 48,
  default: 40,
  small: 32,
  smaller: 24
};
var StyledButton = styled$4(StyledPlainButton)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  text-transform: ", ";\n  border: 1px solid;\n  padding: 0 10px;\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  flex-flow: row nowrap;\n  white-space: nowrap;\n  align-items: center;\n  font-size: ", ";\n  height: ", "px;\n  min-width: ", "px;\n  ", ";\n"])), LUP_MAIN_FONT_BOLD700, function (_ref) {
  var textTransform = _ref.textTransform;
  return textTransform;
}, LUP_SPACING_12, function (_ref2) {
  var size = _ref2.size;
  return sizes[size];
}, function (_ref3) {
  var size = _ref3.size;
  return sizes[size] * 3;
}, function (_ref4) {
  var colored = _ref4.colored;
  return styles[colored];
});
var rotate360 = keyframes(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var StyledSpinner = styled$4.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 22px;\n  height: 22px;\n  border-radius: 100%;\n  border: 2px solid currentColor;\n  border-bottom-color: transparent;\n  animation: ", " 1.4s infinite linear;\n"])), rotate360);

var Button = function Button(_ref) {
  var children = _ref.children,
      isLoading = _ref.isLoading,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["children", "isLoading", "disabled"]);

  return /*#__PURE__*/React.createElement(StyledButton, _extends({}, props, {
    disabled: isLoading || disabled
  }), isLoading ? /*#__PURE__*/React.createElement(StyledSpinner, null) : children);
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  colored: propTypes.oneOf(['default', 'primary', 'secondary', 'card']),
  size: propTypes.oneOf(['large', 'default', 'small', 'smaller']),
  textTransform: propTypes.oneOf(['none', 'uppercase', 'lowercase', 'capitalize']),
  type: propTypes.string,
  disabled: propTypes.bool,
  isLoading: propTypes.bool
};
Button.defaultProps = {
  colored: 'default',
  size: 'default',
  type: 'button',
  disabled: false,
  isLoading: false,
  textTransform: 'uppercase'
};

var _templateObject$3;
var StyledFlexBlock = styled$4.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  border-bottom: 1px solid ", ";\n  padding: ", ";\n  background: ", ";\n  margin: ", ";\n"])), function (_ref) {
  var borderColor = _ref.borderColor;
  return borderColor;
}, function (_ref2) {
  var padding = _ref2.padding;
  return padding;
}, function (_ref3) {
  var background = _ref3.background;
  return background;
}, function (_ref4) {
  var margin = _ref4.margin;
  return margin;
});

StyledFlexBlock.propTypes = {
  borderColor: propTypes.string,
  padding: propTypes.string,
  margin: propTypes.string
};
StyledFlexBlock.defaultProps = {
  borderColor: "".concat(LUP_BASE_GREY_LIGHT),
  padding: '15px 0px',
  margin: '0px 15px'
};

var _templateObject$4;
var StyledLabel = styled$4.label(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  min-width: 160px;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  -webkit-box-align: center;\n  align-items: center;\n\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  color: ", ";        \n  color: ", "; \n"])), LUP_MAIN_FONT_BOLD600, LUP_MAIN_FONT_SIZE12, LUP_SPACING_14, function (props) {
  return props.disabled ? LUP_BASE_GREY : LUP_BASE_GREY_DARKEST;
}, function (props) {
  return props.error && LUP_FUNCTIONAL_ERROR_RED;
});

var _templateObject$5;
var StyledInput = styled$4(_Input)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  &.ant-input-affix-wrapper .ant-input {\n    width: 100%;\n    color: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    font-size: 14px;\n    text-align: left;\n    padding: ", " ", " ", ";\n    box-shadow: none;    \n    font-weight: ", ";\n    outline: none;\n    border: ", " solid ", ";\n    height: 35px;\n    border-radius: 2px;\n\n    &:placeholder {\n      color: ", ";\n    }\n\n    &:hover {\n      outline: none;\n      border: ", " solid ", ";\n    }\n\n    \n    &:focus, &:active {\n      outline: none;\n      border: ", " solid ", ";\n    }\n\n    &[type='password'] {\n      letter-spacing: 2px;\n\n      &::placeholder {\n        letter-spacing: 0;\n      }\n    }\n\n    &[type='text'] {      \n      background-color: ", ";\n\n      &:active, &.on-focus, &:focus {\n        border: ", " solid ", ";\n      }\n\n      &.on-error {\n        border: ", " solid ", ";\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &:disabled {\n        background-color: ", ";\n        color: ", ";   \n        border: none;     \n      }\n\n      &::placeholder {\n        color: ", ";\n      }\n    }\n  }\n\n  &.ant-input {\n    width: 100%;\n    color: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    font-size: 14px;\n    text-align: left;\n    padding: ", " ", " ", ";\n    box-shadow: none;    \n    font-weight: ", ";\n    outline: none;\n    border: ", " solid ", ";\n    height: 35px;\n    border-radius: 2px;\n\n    &::placeholder {\n      color: ", ";\n    }\n\n    &:hover {\n      outline: none;\n      border: ", " solid ", ";\n    }\n\n    &:active, &:focus {\n      outline: none;\n      border: ", " solid ", ";\n    }\n\n    &[type='password'] {\n      letter-spacing: 2px;\n\n      &::placeholder {\n        letter-spacing: 0;\n      }\n    }\n\n    &[type='text'] {      \n      background-color: ", ";\n\n      &:active, &.on-focus, &:focus {\n        border: ", " solid ", " !important;\n      }\n\n      &.on-error {\n        border: 1px solid ", ";\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &:disabled {\n        background-color: ", ";\n        color: ", ";      \n        border: none;  \n      }\n\n      &::placeholder {\n        color: ", ";\n      }\n\n      &:disabled::-webkit-input-placeholder { \n        color:", ";\n      }\n      &:disabled:-moz-placeholder { \n      }\n      &:disabled::-moz-placeholder {\n        color:", ";\n      }\n      &:disabled:-ms-input-placeholder { \n        color:", ";\n      }\n    }\n  }\n"])), LUP_BASE_GREY_DARKER, LUP_MAIN_FONT, LUP_SPACING_22, LUP_SPACING_6, LUP_SPACING_10, LUP_SPACING_7, LUP_MAIN_FONT_NORMAL, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_GREY, LUP_BASE_GREY_DARK, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_BLUE, LUP_MAIN_BORDER_WIDTH2, LUP_BASE_BLUE, LUP_FORM_ENABLED_BACKGROUND, LUP_MAIN_BORDER_WIDTH2, LUP_BASE_BLUE, LUP_MAIN_BORDER_WIDTH1, LUP_FUNCTIONAL_ERROR_RED, LUP_FUNCTIONAL_ERROR_RED_LIGHTEST, LUP_BASE_GREY_DARKEST, LUP_FORM_DISABLED_BACKGROUND, LUP_BASE_GREY_DARK, LUP_BASE_GREY_DARK, LUP_BASE_GREY_DARKER, LUP_MAIN_FONT, LUP_SPACING_22, LUP_SPACING_6, LUP_SPACING_10, LUP_SPACING_7, LUP_MAIN_FONT_NORMAL, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_GREY, LUP_BASE_GREY_DARK, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_BLUE, LUP_MAIN_BORDER_WIDTH2, LUP_BASE_BLUE, LUP_FORM_ENABLED_BACKGROUND, LUP_MAIN_BORDER_WIDTH2, LUP_BASE_BLUE, LUP_FUNCTIONAL_ERROR_RED, LUP_FUNCTIONAL_ERROR_RED_LIGHTEST, LUP_BASE_GREY_DARKEST, LUP_FORM_DISABLED_BACKGROUND, LUP_BASE_GREY_DARK, LUP_BASE_GREY_DARK, LUP_BASE_GREY, LUP_BASE_GREY, LUP_BASE_GREY);

var _templateObject$6;
var AntSearch = StyledInput.Search;
var StyledSearchInput = styled$4(AntSearch)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n&.ant-input-affix-wrapper {\n  .ant-input:hover + .ant-input-suffix .anticon {\n      color: ", ";\n  }\n\n  .ant-input:focus + .ant-input-suffix .anticon {\n    color: ", ";\n  }\n  .ant-input-suffix .anticon {\n    color: ", ";\n  }\n}\n&.ant-input-affix-wrapper .ant-input {\n    width: 100%;\n    color: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    font-size: ", ";\n    text-align: left;\n    padding: ", " ", " ", " ", ";\n    box-shadow: none;    \n    font-weight: ", ";\n    outline: none;\n    border: ", " solid ", ";\n    height: ", ";\n    border-radius: ", ";\n\n    &:placeholder {\n      color: ", ";\n    }\n\n    &:hover,\n    &:focus,\n    &:active {\n      outline: none;\n      border: ", " solid ", ";\n    }\n\n    &[type='password'] {\n      letter-spacing: 2px;\n\n      &::placeholder {\n        letter-spacing: 0;\n      }\n    }\n\n    &[type='text'] {      \n\n      background-color: ", ";\n      border-color: ", ";\n\n      &.on-focus, &:focus {\n        border: ", " solid ", ";\n      }\n\n      &.on-error {\n        border: ", " solid ", ";\n        background-color: ", ";\n      }\n\n      &::placeholder {\n        color : ", "; \n      }\n\n      &:disabled {\n        background-color: ", ";\n        color: ", ";        \n      }\n    }\n  }\n\n  &.ant-input-affix-wrapper .ant-input-suffix .anticon {\n    display: ", "\n  }\n\n  &.ant-input-affix-wrapper .ant-input-suffix :not(.anticon) {\n    line-height: 0 !important;\n  }\n"])), LUP_BASE_BLUE_DARK, LUP_BASE_BLUE_DARK, LUP_BASE_GREY, LUP_BASE_GREY_DARKEST, LUP_MAIN_FONT, LUP_SPACING_24, LUP_MAIN_FONT_SIZE14, LUP_SPACING_4, LUP_SPACING_30, LUP_SPACING_6, LUP_SPACING_10, LUP_MAIN_FONT_NORMAL, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_GREY, LUP_SPACING_32, LUP_MAIN_BORDER_WIDTH2, LUP_BASE_GREY_DARK, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_BLUE, function (props) {
  return props.noChatFound ? LUP_FUNCTIONAL_ERROR_RED_LIGHTEST : WHITE;
}, function (props) {
  return props.noChatFound && LUP_FUNCTIONAL_ERROR_RED;
}, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_BLUE, LUP_MAIN_BORDER_WIDTH1, LUP_FUNCTIONAL_ERROR_RED, LUP_FUNCTIONAL_ERROR_RED_LIGHTEST, LUP_BASE_GREY_DARK, LUP_FORM_DISABLED_BACKGROUND, LUP_BASE_GREY_DARK, function (props) {
  return props.noChatFound ? 'none' : 'block';
});

var SearchInput = function SearchInput(_ref) {
  var value = _ref.value,
      suffix = _ref.suffix,
      onSearch = _ref.onSearch,
      noChatFound = _ref.noChatFound,
      placeholder = _ref.placeholder;

  var _useState = useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      _value = _useState2[0],
      setValue = _useState2[1]; //useEffect : value


  useEffect(function () {
    setValue(value);
  }, [value]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledSearchInput, {
    value: _value,
    placeholder: placeholder,
    onSearch: onSearch,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    suffix: suffix,
    noChatFound: noChatFound
  }), noChatFound && /*#__PURE__*/React.createElement(StyledText, {
    color: LUP_FUNCTIONAL_ERROR_RED,
    fontSize: LUP_MAIN_FONT_SIZE12
  }, ErrorMessagesTypes.SEARCH_MESSAGES_FAILED));
};

SearchInput.propTypes = {
  value: propTypes.string,
  onSearch: propTypes.func,
  suffix: propTypes.node,
  noChatFound: propTypes.bool,
  placeholder: propTypes.string
};
SearchInput.defaultProps = {
  value: "",
  onSearch: function onSearch() {},
  suffix: /*#__PURE__*/React.createElement(React.Fragment, null),
  noChatFound: false,
  placeholder: "Search Keywords"
};

var _templateObject$7;
var StyledText = styled$4.span(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  text-transform: ", ";\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  color: ", ";        \n\n"])), LUP_MAIN_FONT, function (_ref) {
  var caps = _ref.caps;
  return caps ? 'uppercase' : 'none';
}, function (_ref2) {
  var color = _ref2.color;
  return color || LUP_BASE_GREY_DARKEST;
}, function (_ref3) {
  var fontSize = _ref3.fontSize;
  return fontSize || LUP_MAIN_FONT_SIZE14;
}, function (_ref4) {
  var fontWeight = _ref4.fontWeight;
  return fontWeight || LUP_MAIN_FONT_NORMAL;
}, function (_ref5) {
  var lineHeight = _ref5.lineHeight;
  return lineHeight;
}, display, textAlign, space, function (props) {
  return props.disabled && LUP_BASE_GREY;
});

var _templateObject$8;
var StyledHighlighter = styled$4.div(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n    height: 10px;\n    background: ", ";\n    border-radius: 4px 4px 0px 0px;\n"])), function (props) {
  return props.color || LUP_BASE_BLUE_DARK;
});

var _templateObject$9;
var StyledImage = styled$4.img(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  height: auto;\n  cursor: pointer;\n  \n  &[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])));

var IconButton = function IconButton(_ref) {
  var size = _ref.size,
      src = _ref.src,
      onClick = _ref.onClick,
      dataTestid = _ref.dataTestid,
      style = _ref.style,
      isLoading = _ref.isLoading,
      disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread2({
      width: size,
      display: "inline-block"
    }, style)
  }, /*#__PURE__*/React.createElement(StyledImage, {
    onClick: onClick,
    src: src,
    "data-testid": dataTestid,
    disabled: isLoading || disabled
  }));
};

IconButton.propTypes = {
  src: propTypes.string.isRequired,
  size: propTypes.string,
  onClick: propTypes.func,
  dataTestid: propTypes.string,
  disabled: propTypes.bool,
  isLoading: propTypes.bool,
  style: propTypes.object
};
IconButton.defaultProps = {
  size: "16px",
  onClick: function onClick() {},
  dataTestid: "testId",
  disabled: false,
  isLoading: false,
  style: {}
};

var _templateObject$a, _templateObject2$2, _templateObject3$1, _templateObject4$1;
var StyledSelect = styled$4(_Select)(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n&.ant-select {\n    width: 100%;\n    color: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    font-size: ", ";\n    text-align: left;\n    padding: 0 ", ";\n    box-shadow: none;    \n    font-weight: ", ";\n    outline: none;\n    border: ", " solid ", ";\n    height: ", ";\n    border-radius: ", ";\n    box-sizing: border-box;\n    position: relative;\n    background: ", ";\n\n    .ant-select-selection--single .ant-select-selection__rendered {\n      margin: 0;\n      padding: 0;\n    }\n\n    .ant-select-selection__placeholder {\n      line-height: ", ";\n      color: ", ";\n    }\n\n    .ant-select-arrow {\n      position: absolute;\n      right: ", ";\n    }\n\n    &:hover {\n      outline: none;\n      border: ", " solid ", ";\n    }\n\n    &:focus,\n    &:active,\n    &.on-focus {\n      border: ", " solid ", ";\n    }\n}\n& .ant-select-focused .ant-select-selection,\n//  & .ant-select-selection:hover,\n  & .ant-select-selection:active,\n  & .ant-select-selection:focus {\n      border: none;\n      box-shadow: none;\n  }\n  & .ant-select-selection-selected-value {\n    line-height: ", ";\n    padding: ", " 0;\n    color: ", ";\n  }\n& .ant-select-selection {\n    border: none;\n    border-radius: 0;\n    height: ", ";\n    padding: ", " 0;\n    top: 0px;\n    background-color: transparent;\n    user-select: text;\n    color: #333333;\n    box-shadow: none;\n  }\n  .ant-select-selection__clear {\n    right: ", ";\n  }\n"])), LUP_BASE_GREY_DARKEST, LUP_MAIN_FONT, LUP_SPACING_22, LUP_MAIN_FONT_SIZE14, LUP_SPACING_10, LUP_MAIN_FONT_NORMAL, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_GREY, LUP_SPACING_35, LUP_MAIN_BORDER_RADIUS2, LUP_FORM_ENABLED_BACKGROUND, LUP_SPACING_22, LUP_BASE_GREY_DARK, LUP_SPACING_4, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_BLUE, LUP_MAIN_BORDER_WIDTH2, LUP_BASE_BLUE, LUP_SPACING_22, LUP_SPACING_4, LUP_BASE_GREY_DARKEST, LUP_SPACING_33, LUP_SPACING_1, LUP_SPACING_20);
var StyledOptionContent = styled$4.div(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n"])));
var StyledDropDropArrow = styled$4.div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\nleft: 50%;\ntransform: translateX(-50%) rotate(45deg);\ntop: -", ";\nborder-color: #fff transparent transparent #fff;\nbox-shadow: ", ";\nposition: absolute;\nz-index: 1;\ndisplay: block;\nwidth: ", ";\nheight: ", ";\nbackground: 0 0;\nborder-style: solid;\nborder-width: ", ";\n"])), LUP_SPACING_4, LUP_BOX_SHADOW_4, LUP_SPACING_12, LUP_SPACING_10, LUP_MAIN_BORDER_WIDTH6);
var SelectWrapper = styled$4.div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n  div + div {\n    .ant-select-dropdown {\n      padding: 0 ", ";\n      width: 90% !important;\n      left: 5% !important;\n      top: ", " !important;\n\n      & > div > ul > li {\n        padding: ", " ", ";\n        color: ", ";\n      }\n\n      & > div > ul > li.ant-select-dropdown-menu-item-active {\n        background: ", ";\n      }\n    }\n\n    \n  }\n"])), LUP_SPACING_4, LUP_SPACING_42, LUP_SPACING_5, LUP_SPACING_20, LUP_BASE_GREY_DARKEST, LUP_BASE_BLUE_LIGHTEST);
var AntOption = _Select.Option;

var CaretDownBlackSVG = "data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%2210%22%20viewBox%3D%220%200%208%204%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0.726562%200C0.515625%200%200.375%200.117188%200.304688%200.304688C0.210938%200.492188%200.257812%200.65625%200.398438%200.796875L3.42188%203.82031C3.51562%203.91406%203.60938%203.96094%203.75%203.96094C3.86719%203.96094%203.98438%203.91406%204.07812%203.82031L7.10156%200.796875C7.24219%200.65625%207.26562%200.492188%207.19531%200.304688C7.10156%200.117188%206.96094%200%206.77344%200H0.726562Z%22%20fill%3D%22%23666666%22%2F%3E%3C%2Fsvg%3E";

var renderOptionList = function renderOptionList(options, optionStyle) {
  return options.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value,
        img = _ref.img;
    return /*#__PURE__*/React.createElement(AntOption, {
      key: key || value,
      value: key !== undefined ? key : value,
      style: optionStyle
    }, img ? /*#__PURE__*/React.createElement(StyledOptionContent, null, img, /*#__PURE__*/React.createElement("span", null, value)) : value);
  });
};

var Select = function Select(_ref2) {
  var options = _ref2.options,
      optionStyle = _ref2.optionStyle,
      props = _objectWithoutProperties(_ref2, ["options", "optionStyle"]);

  return /*#__PURE__*/React.createElement(SelectWrapper, null, /*#__PURE__*/React.createElement(StyledSelect, _extends({}, props, {
    getPopupContainer: function getPopupContainer(_ref3) {
      var parentNode = _ref3.parentNode;
      return parentNode;
    },
    dropdownClassName: "dropdown-content-wrapper",
    labelInValue: true,
    suffixIcon: /*#__PURE__*/React.createElement(IconButton, {
      size: "10px",
      style: {
        height: '10px'
      },
      src: CaretDownBlackSVG
    }),
    dropdownRender: function dropdownRender(menu) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledDropDropArrow, null), menu);
    }
  }), renderOptionList(options, optionStyle)));
};

Select.propTypes = {
  options: propTypes.arrayOf(propTypes.object),
  optionStyle: propTypes.objectOf(propTypes.any)
};
Select.defaultProps = {
  options: [],
  optionStyle: {}
};

var _templateObject$b;
var StyledRadio = styled$4(_Radio)(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n  &.ant-radio-wrapper {\n    display: inline-flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: flex-start;\n    border-color: ", ";\n    border-radius: ", ";\n  }\n\n  &.ant-radio-wrapper-checked {\n    border-color: ", ";\n  }\n\n  .ant-radio-inner {\n    width: ", ";\n    height: ", ";\n    border-color: ", ";\n\n    &:after {\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      left: ", ";\n      top: ", ";\n      border-radius: 50%;\n      transform: none !important;\n    }\n  }\n\n  .ant-radio-checked {\n    & .ant-radio-inner {\n      border-color: ", ";\n    }\n\n    &:after {\n      border-color: ", ";\n    }\n    \n  }\n\n  .ant-radio-inner::after {\n      background-color: ", " !important;\n  }\n\n  .ant-radio-disabled {\n    & .ant-radio-inner {\n      background-color: ", ";\n      border-color: ", " !important;\n    }\n\n    & .ant-radio-inner:after {\n      border-color: ", ";\n    }\n\n    & + span {\n      color: ", ";\n    }\n  }\n\n  .ant-radio-disabled .ant-radio-inner {\n    border-color: ", " !important;\n  }\n\n  .ant-radio-disabled .ant-radio-inner::after {\n    background-color: ", " !important;\n  }\n\n  &.ant-radio-wrapper:hover .ant-radio .ant-radio-inner,\n  & .ant-radio:hover .ant-radio-inner {\n    border-color: ", ";\n  }\n\n  & .ant-radio-focused .ant-radio-inner {\n    border-color: ", ";\n  }\n\n  span.ant-radio + span {\n    padding-left: ", ";\n    padding-right: ", ";\n    color: ", ";\n  }\n\n  span.ant-radio-checked + span {\n    color: ", ";\n  }\n\n  span.ant-radio-disabled + span {\n    color: ", ";\n  }\n\n  span.ant-radio-disabled.ant-radio-checked > span.ant-radio-inner {\n    border-color: ", " !important;\n  }\n\n  span.ant-radio-disabled.ant-radio-checked + span {\n    color: ", ";\n  }\n\n"])), LUP_BASE_GREY_MEDIUM, LUP_MAIN_BORDER_RADIUS6, LUP_BASE_GREY_MEDIUM, LUP_SPACING_12, LUP_SPACING_12, LUP_BASE_GREY_MEDIUM, ACCENT_DARK, LUP_SPACING_4, LUP_SPACING_4, LUP_SPACING_3, LUP_SPACING_3, LUP_BASE_GREY_MEDIUM, LUP_BASE_BLUE, LUP_BASE_BLUE_DARK, LUP_BASE_GREY_LIGHTER, LUP_BASE_GREY, LUP_BASE_GREY_MEDIUM, LUP_BASE_GREY, LUP_BASE_GREY, LUP_BASE_GREY_MEDIUM, LUP_BASE_BLUE, LUP_BASE_GREY, LUP_SPACING_6, LUP_SPACING_6, LUP_BASE_GREY_DARK, LUP_BASE_GREY_DARKEST, LUP_BASE_GREY, LUP_BASE_GREY_MEDIUM, LUP_BASE_GREY_MEDIUM);

var Radio = function Radio(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  return /*#__PURE__*/React.createElement(StyledRadio, props, label);
};

Radio.propTypes = {
  type: propTypes.string,
  label: propTypes.node
};
Radio.defaultProps = {
  type: 'radio',
  label: null
};

var _templateObject$c;
var AntTextArea = _Input.TextArea;
var StyledTextArea = styled$4(AntTextArea)(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["\n&.ant-input-affix-wrapper .ant-input {\n  width: 100%;\n  color: ", ";\n  font-family: ", ";\n  line-height: 24px;\n  font-size: 14px;\n  text-align: left;\n  padding: 4px auto 4px 8px;\n  box-shadow: none;    \n  font-weight: ", ";\n  outline: none;\n  border: none;\n  height: 35px;\n  border-radius: 2px;\n  resize: none;\n  background-color: ", " !important;\n\n  &:placeholder {\n    color: ", ";\n  }\n\n  &:hover,\n  &:focus,\n  &:active {\n    outline: none;\n    border: none;\n  }\n\n  &[type='password'] {\n    letter-spacing: 2px;\n\n    &::placeholder {\n      letter-spacing: 0;\n    }\n  }\n\n  &[type='text'] {      \n    background-color: ", ";\n\n    &.on-focus {\n      border: none;\n    }\n\n    &.on-error {\n      border: none;\n      background-color: ", ";\n    }\n\n    &:disabled {\n      background-color: ", ";\n      color: ", ";        \n    }\n  }\n}\n\n&.ant-input {\n  width: 100%;\n  color: ", ";\n  font-family: ", ";\n  line-height: 24px;\n  font-size: 14px;\n  text-align: left;\n  padding: 4px auto 4px 8px;\n  box-shadow: none;    \n  font-weight: ", ";\n  outline: none;\n  border: none;\n  height: 35px;\n  border-radius: 2px;\n  resize: none;\n  &:placeholder {\n    color: ", ";\n  }\n\n  &:hover,\n  &:focus,\n  &:active {\n    outline: none;\n    border: none;\n  }\n\n  &[type='password'] {\n    letter-spacing: 2px;\n\n    &::placeholder {\n      letter-spacing: 0;\n    }\n  }\n\n  &[type='text'] {      \n    background-color: ", ";\n\n    &.on-focus {\n      border: none;\n    }\n\n    &.on-error {\n      border: none;\n      background-color: ", ";\n    }\n\n    &:disabled {\n      background-color: ", ";\n      color: ", ";        \n    }\n  }\n  background-color: ", " !important;\n  overflow: hidden;\n}\n"])), LUP_BASE_GREY_DARKEST, LUP_MAIN_FONT, LUP_MAIN_FONT_NORMAL, LUP_FORM_ENABLED_BACKGROUND, LUP_BASE_GREY_DARK, LUP_FORM_ENABLED_BACKGROUND, LUP_FUNCTIONAL_ERROR_RED_LIGHTEST, LUP_FORM_DISABLED_BACKGROUND, LUP_BASE_GREY_DARK, LUP_BASE_GREY_DARKEST, LUP_MAIN_FONT, LUP_MAIN_FONT_NORMAL, LUP_BASE_GREY_DARK, LUP_FORM_ENABLED_BACKGROUND, LUP_FUNCTIONAL_ERROR_RED_LIGHTEST, LUP_FORM_DISABLED_BACKGROUND, LUP_BASE_GREY_DARK, LUP_FORM_ENABLED_BACKGROUND);

StyledTextArea.propTypes = {
  autosize: propTypes.oneOfType([propTypes.bool, propTypes.object])
};
StyledTextArea.defaultProps = {
  autosize: {
    minRow: 1,
    maxRows: 1
  }
};

var SpinnerIcon = "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20stroke%3D%22%23fff%22%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%281%201%29%22%20stroke-width%3D%220%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%228%22%20cy%3D%2250%22%20r%3D%228%22%20fill%3D%22%23BB2501%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Canimate%20attributeName%3D%22cy%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20begin%3D%220s%22%20dur%3D%221.6s%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20values%3D%2250%3B8%3B50%3B50%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20calcMode%3D%22linear%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20repeatCount%3D%22indefinite%22%20%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Canimate%20attributeName%3D%22cx%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20begin%3D%220s%22%20dur%3D%221.6s%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20values%3D%228%3B27%3B49%3B8%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20calcMode%3D%22linear%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20repeatCount%3D%22indefinite%22%20%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fcircle%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2227%22%20cy%3D%228%22%20r%3D%228%22%20fill%3D%22%23FFE400%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Canimate%20attributeName%3D%22cy%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20begin%3D%220s%22%20dur%3D%221.6s%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20from%3D%225%22%20to%3D%225%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20values%3D%228%3B50%3B50%3B8%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20calcMode%3D%22linear%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20repeatCount%3D%22indefinite%22%20%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Canimate%20attributeName%3D%22cx%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20begin%3D%220s%22%20dur%3D%221.6s%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20from%3D%2227%22%20to%3D%2227%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20values%3D%2227%3B49%3B8%3B27%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20calcMode%3D%22linear%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20repeatCount%3D%22indefinite%22%20%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fcircle%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%2249%22%20cy%3D%2250%22%20r%3D%228%22%20fill%3D%22%2306507F%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Canimate%20attributeName%3D%22cy%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20begin%3D%220s%22%20dur%3D%221.6s%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20values%3D%2250%3B50%3B8%3B50%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20calcMode%3D%22linear%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20repeatCount%3D%22indefinite%22%20%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Canimate%20attributeName%3D%22cx%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20from%3D%2249%22%20to%3D%2249%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20begin%3D%220s%22%20dur%3D%221.6s%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20values%3D%2249%3B8%3B27%3B49%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20calcMode%3D%22linear%22%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20repeatCount%3D%22indefinite%22%20%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fcircle%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var Spinner = function Spinner(_ref) {
  var size = _ref.size,
      style = _ref.style,
      src = _ref.src;
  return /*#__PURE__*/React.createElement("img", {
    style: style,
    height: size,
    src: src,
    alt: ""
  });
};

Spinner.propTypes = {
  size: propTypes.string,
  style: propTypes.shape({}),
  src: propTypes.string
};
Spinner.defaultProps = {
  size: '32px',
  style: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    maxWidth: '100%',
    maxHeight: '100%',
    zIndex: 999
  },
  src: SpinnerIcon
};

var _templateObject$d;
var StyledHighlighter$1 = styled$4.span(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["\n    background-color: ", ";\n"])), function (_ref) {
  var color = _ref.color;
  return color;
});

var HighlightTypes = {
  SEARCH_TEXT: 'searchText',
  SEARCH_TEXT_FOCUSED: 'focusedSearchText',
  USER: 'user'
};
var specialCharacters = ["^", "$", "*", "+", "(", ")", "[", "{", "?", ".", "|", "\\"];

var StyledMessage = function StyledMessage(_ref) {
  var text = _ref.text,
      config = _ref.config;

  var highlight = function highlight() {
    var keywordsToTypeMap = {};
    var keywords = [];
    var highlightCategories = Object.keys(config);
    highlightCategories.forEach(function (category) {
      config[category].forEach(function (_keyword) {
        if (_keyword) {
          keywords.push(_keyword);
          keywordsToTypeMap[_keyword] = category;
        }
      });
    });

    var handlePart = function handlePart(part) {
      var _partLower = part;

      var partType = keywordsToTypeMap[_partLower.toLowerCase()];

      switch (partType) {
        case HighlightTypes.USER:
          return /*#__PURE__*/React.createElement(StyledText, {
            color: LUP_BASE_BLUE
          }, part);

        case HighlightTypes.SEARCH_TEXT:
          return /*#__PURE__*/React.createElement(StyledHighlighter$1, {
            color: COMMENT_TEXT_HIGHLIGHT_LIGHT
          }, part);

        case HighlightTypes.SEARCH_TEXT_FOCUSED:
          return /*#__PURE__*/React.createElement(StyledHighlighter$1, {
            color: COMMENT_TEXT_HIGHLIGHT_DARK
          }, part);

        default:
          return /*#__PURE__*/React.createElement(StyledText, {
            color: LUP_BASE_GREY_DARK
          }, part);
      }
    };

    var keywordsWithSpecialCharacters = keywords.map(function (keyword) {
      return specialCharacters.includes(keyword) ? "\\" + keyword : keyword;
    });
    var parts = text.split(new RegExp("(".concat(keywordsWithSpecialCharacters.join('|'), ")"), 'gi'));
    return /*#__PURE__*/React.createElement(React.Fragment, null, parts.map(handlePart));
  };

  return /*#__PURE__*/React.createElement(StyledText, {
    fontSize: LUP_MAIN_FONT_SIZE14,
    lineHeight: LUP_SPACING_22
  }, highlight());
};

StyledMessage.propTypes = {
  text: propTypes.string,
  config: propTypes.shape({})
};
StyledMessage.defaultProps = {
  text: "",
  config: {}
};

var imagePlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADaCAYAAADAHVzbAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA78SURBVHgB7d2PddPIFgbwaxIWQgLHqWBNBRsqwFQAVECoAKgAqACoAKcCoAJEBXgrQFtBeMEhBxI7735mtGRDEjSjGWlG8/3O8Qn71iw8S5/v/NOMCBERERERERERERERERERERH100AoKgcHByP8PDo6Gh0fH4+q/30wGIzO+z36vtL88rO+b/laWVn5vLa2VgpFgUFr2e7u7vDy5cujxWKxhfBcunTpTw3Klv6rob5G4l+JF8Knf+bf+mdN8WsN8nRzc/OzUCsYtIAQqtXVVQQKr9smUCOJB0JXIoD664LhC4dB8wjB0ibbWKvUbf3Hsb62JD1TfRUavg/z+bxg8Pxg0Br68uXLMlharcbyI1x9U+jrHX5ubGxMhZwwaA4QLm1y3dVf3pO4moJBoZmpXyiFvnauX79eCNXGoNWE0UBtTj3Qm2xbMgrXeUzo3h4eHr7S5mUpdCEG7QIn+lyPpJ/NQl8Kfe1o03IidCYG7QwI2B9//PFIv7Efy49hd6qhalpqlXvOKvdfDNoJpu/1QH+5LdTUhIH7iUGTfwP2VNg8DIGBk8yDxoC1KuvAZRk07YONLl++jIBtC7Uty8BlFTQOcsRDWxLPvn//vpNL4LIJ2mw229YfL4QBi4YZpXyew7RA74Nmmomvhf2waGngplrd7ve5ul2SHtvf33+qIfsoDFnU8FSDXqdPuF7SU72saFrFtrQv9to8lkIJQXNSq9udvlW33lW0r1+/PtJvx/cMWZrwVHkfq1tvKhr7Yr2E5VwP+1DdehE080zY65N7bFA/mCfAH6b+WE7yTUc0MfRivGfI+gnXFdc39aZkshXNbHKDebFtoVxgVcmTFLdXSDJo6I/pqCKrWIZSHZVMrulohu4ZskzhuuP6z2azpEaVkwrawcHBAzN0PxLKlrn+7/f29u5JIpIJGubH5vP5RLhWkX4Y6kjzG61sjyUBSQQNI046xPtSiH71IoURyegHQ/AhalPhmRBdAI/drK+vP5dIRR00hoxsxBy2aIPGkJGLWMMWZdAYMmoixrBFFzSMLnLggzx4srGxEc19FFXQtJLd00r2Rog8WFlZ2V5bW9uRCEQTNKz4wGS0cJ6M/MGayDsxnIITxTyaWbuISsaQkU9D7a+9wf0lHeu8opkt4D5yWRWFYhYi3+py1X/nFQ2PujBkFJLZHuGFdKjToJmlM9tCFN52l0u1Oms6mn3v3wtRi7S63eliW4ROKho6p9jjQ4hahvuui8GRToKG3arYL6MumP5a61/yrQfNtJPHQtSdcdvPsbXaRzN7L34Sou61OpndakXDXg9CFAcsjmitCdla0MyK/JEQxWNLR7+fSQtaaTqyyUgR+3x4eHgr9PZ1rVQ0DRlX5FOshm2MQgYPmjlpkye7UMzG5j4NJmjTkTsKU0LQhLwZauFx0IqmIXvAkFEihqurq8Hm1oJVNA6AUIKCDYwEq2gast6eR0y9NQx13wapaKxmlLIQK/yDVDRWM0rZYDDwfv96r2isZtQHvqua94rGakZ94Luqea1orGbUJz6rmteKxmpGfaJV7YF44q2ipVDN9IMTnZTE4+zYxXb5zxTeYrFYvubzuRwdHUlKdF5t08dqEW8VLfZqhoCtra1htcry1wxZe/DFhs/8ypUrcu3ateWXXCp8rRbxdrft7+9/inW5lX4JLANG8fj+/TuqhSTAyxpILxUNK58ZMrKBa4Jrk4ChVuCxNOSr6eit0+gTmisMWbxwbVJoRmrT95E01DhoZo+8sUSIIYsf+m0JGGuL7U9poHHQQj5a0AQHPNKAa5RCVdPu0UNpoHHQtKzelQilNLKVO3wpxk7v80bdo0ZBw/75sQ6CMGjpSOFa4T7H/S6OGgXN58y5b2w2piOha3VPHDWq2foBoaJJyrBSIZH5nORg+D6FZmFdppvkNCbh/CngzOk+7AeCkGF5EPmHSek+Ba1qProsNHZuOuq31ViI8jMWB036aFGONhKFpN2l2+LAKWg44F149BLlaWzufytOQfOx9osoVS73v1PQMNooRJlyuf9dg+bUTiXqA5f73zpopn2a/aEV1dPaJ194wJGysGXbT7Oe5NAbKuuQYbkQJmLPWzZUTYBzbq7fTA6Kuu93+QoeS6YQsKtXr164Ng+VDe/p00Qt/UpbNFYFxyVof0mGbJ7URrMSz1kxbP11fHw8tnm/ddD0JhpJZlDBXB4ixe9hv62f9LpaFRyruyDXgRDXvS1Q2fiUdz9h3aPNgIhV0HIcCGn6BHDX+0dWW72xsvqnX8Cjuu+1+vQ1xdZLT1Ln46HErh5srPayRH8RP9ln9K524bH65G1HWqg7Zw3eVBvhpLZbcKxsHhOzbU9kOeKYmotGSDka6o82x2vvjGUVNK1o2TUdU1NnGoJh80MrWu0Wnm1FG0lmfKzwaGuViM1cH8PWnE3hYdB+AyFpsi8KTlBpI2guW58zbM0E6aOZHYmzhL0vuvi9dTU5X4Bha6buDsY2FS3b/hlG6VxG6tpYXOzjEA+GLbzaQdMLkfVAyLdv36zChpCFrmY+T8ph2NzMZrObdd5X+5PFZHXum5IibOhz4eY+77PAv0fI8DOkEMdRcZ7NXt21vzZfYRzal5/NSCxpOr2sqTpCNrSQZ74xbGGwreCorVCd1sbBigybf7X7aDk+HhObNk8vZZ+tnrpD/FzSnYgujghm2Pxh0BLQ5TncDJsfDFrkYjjsnmFrjkHzqNohy9dDljGErMKwNcNPzpPTN6LtBPdpMYWswtFId6xoHpz1bd+kAsQYsgorm5vaQdNhzFLoFxfdeC43ZcwhqzBoP+m0V1nnfaxoDdQJkk3YUggZuWHQHNkEqM57GbI0LRaLz3XeZ7MypBRacmkSXvR7GLJ0aS78Bk1HmkqhRoMBZ/1ehixt3oNGfkbcTv43GLL0ra+v79Z5X+2gbW5ulpIxBMLXaBvChhdDlj6taP/UeZ9tRSslU7631OYQefpsxi1s755a7VGiHNjMLVsFTYcy/xYiWtKg/a/ue213Ki6FiCrTum+0PU2mFCJa0jyECdp8Pq/9Hybqu7pzaMBRRyJHR0dHYSqazqUhwaUQ0dTkoRbrySGbdilRX2kOak1UV6xnTbVd+kF/3JPMdLGHY6z4WSxZFRzroKGi5bg1eBunwlBSCps3WzcdbTqARH1lmwProJkOIMNGObMaCAGnlbLafPwgRJlyuf9dg1YIUaZc7n+noM3n80KIMuVy/zsFzbRPCyHKT2HbPwPnpxnZT6NMvRMHTR4bLoQoP4U4aDTzPJvNPumPkURofX291vswER36vOlcYbsGbEBUx/7+viSg3NjYqHU4/GmNNq7Q5uO7wWDwSBLGDXLIQiGOmu4481YipV8CQmlI5Vrp33NHHDVetBhr8/Hq1avL88oofjgGCsdcRc652QiN91BrkvKQeIZXOlLoI6ObJA00Dpre0BOJEC4em4/xwzVK4UtR/44vpYHGQTM7GBcSGVzAw8NDobgl8vhR0XSnbi/b7y4Wi1cSIQSNYYsXrk0iTfzG3SMvT3Du7u4Odb4EgyJDiRCG8OvO51A7ELJEqlmjQZCKl4qGtV/aVIuyqgEuKF7ss3UP1wAjjAk9sV6IB972JDBVrdYRNl3BFgwY8seKBRxakeOWDF1AuDA4hb1G0FRM6QtPK+9NHycpeb3T9vb2JnoDPxCifphos/GheOD1LCKtEBMh6gmtZs/FE69Bu379eiFc1U/9MPF5+Kb3o3W1/e3tW4CoKz6rGXgPGqsa9cDE91HSQQ6LZ1WjlPmuZhAkaKhqOpQb5WJjot/wXs0g2ESSzquNdF7to0S6WoToLL7mzU4LUtEAf9mYV4sQnYYuT4iQQbCggXm0wHprLqIOlCEf+QoaNLP/3RMhil+wagatLPabzWbv9cdYiOI03djYuCUBBa1oFe1gYr0Ym5AUJb0/70tgrQSNAyMUq5ADICe1+pyINiEx3L8lRHHw8lBnHa1UtBPYhKRoaJPxjrSk1aDptwdOCuXyLOpcW03GSiePGHMUkjpW6Jd+a9UM2m46LplRyFKI2lea+69VnW2a8eXLl/FgMHgvRC3SJuMd8yhXqzqpaID/s3ychtqE+62LkEHn20BxQx9qibeNdlx0VtEq8/n8sbC/RmGhX9bpmtvOg4aFx2Y+oxQi/xCyOy4HvPsUzQ6iOuSPFSMYHOGDouSF9sk+Hx0dIWRT6VjnFa2CyezFYsFHasgb7fs/jCFkEE3Q4MaNGxPh82vkx5P19fVojn6OKmigle0lh/2pCdw/uI8kItGe8qAT2s90QvupEFkwc2XPJDJRH6fCsJGNWEMG0Z9bxLBRHTGHDJI4IIxho4vEHjJI5iQ+nWfDCpIXQvRfT2Ib+DhLUkde7u3t3dO5kdfCSe3sYTJaWzkI2UQSkNzZsmYFyRt9jYRyhWVV92OZjK4jyUOczb7+WK41EspNtXaxlIREN2FdBz5k/bBv8cSavOB647qnFjJIsqKdxBHJPKQwsniR5IMGZlsEDJKMhPoGm+8+7OrJaF+SbDqehotgnmkrhPpkeV1TDxn0oqKdxKZk+szQfXQLg5voXdCAo5JJm2I7uJSG7uvoZdAqrG7pQBXTH69SHvC4SK+DBqa6YYKbh2vEqzBVrJSe6n3QKrPZbFt/oLqNhKKQ2jKqJrIJGqC6ra6ubrM52a2qmYgzzrvenaotWQWtgsCtrKw848atnZhoM/F5n5uJZ8kyaBUGrlVFl1tydy3roFUYuKCyDliFQTuBgfNqogHbyT1gFQbtDCcCd1s4SllbjoMcdTFov2GmBVDhxkLnKRaLxav5fF4wYGdj0GoyUwOPdWrgrrDKAVbV7+hnMllbWyuFLsSgOcBjOXqTbWfYtES43unPt+x72WHQGjJ7mIz1dVf62bzEqOEH/GS43DFoHmnzcqiDKHgIFS9UuxTXV04RLH0V7HP5w6AFhOBpH2ZZ8bSZ+ZfevCOJK3ylfiFUwZrqaOGUwQqDQWtZFT69sYd6k2+ZAGKfypGE6e+V+sLiXZw/94/+WaX+mXjmq2So2sOgRebg4GCkTbYhwmcCuNwsVoMyOu/3IDzVr/V9pQZ5+c8cDSQiIiIiIiIiIiIiIiIiIsrc/wF0SHFE2Oz1EQAAAABJRU5ErkJggg==";

var _templateObject$e, _templateObject2$3;
var StyledImage$1 = styled$4.img(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n  width: ", ";\n  height:  ", ";\n  position: relative;\n  margin: auto;\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});
var MissingImagePlaceholder = styled$4.img(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n  margin: auto;\n  position: relative;\n  height: ", ";\n  width: auto;\n  max-width: 100%;\n  display: block;\n  max-height: 100%;\n"])), function (props) {
  return props.size;
});

var Image = function Image(_ref) {
  var src = _ref.src,
      height = _ref.height,
      width = _ref.width;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasError = _useState2[0],
      setHasError = _useState2[1];

  var handleError = function handleError() {
    setHasError(true);
  };

  if (!src || hasError) {
    return /*#__PURE__*/React.createElement(MissingImagePlaceholder, {
      size: height,
      src: imagePlaceholder
    });
  }

  return /*#__PURE__*/React.createElement(StyledImage$1, {
    src: src,
    height: height,
    width: width,
    onError: handleError
  });
};

Image.propTypes = {
  src: propTypes.string,
  height: propTypes.string,
  width: propTypes.string
};
Image.defaultProps = {
  src: null,
  height: 'auto',
  width: 'auto'
};

var _templateObject$f;
var StyledModal = styled$4(_Modal)(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["\n    .ant-modal-content {\n        box-shadow: ", ";\n        border-radius: ", ";\n    }\n\n    .ant-modal-body {\n        background: ", ";\n    }\n"])), LUP_BOX_SHADOW_1, LUP_MAIN_BORDER_RADIUS4, WHITE);

var _templateObject$g, _templateObject2$4, _templateObject3$2, _templateObject4$2;
var StyledLabel$1 = styled$4(StyledText)(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["\n  display: block;\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"])), LUP_MAIN_FONT_SIZE14, LUP_MAIN_FONT_BOLD600, LUP_SPACING_16);
var StyledSubLabel = styled$4(StyledText)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n  display: block;\n  font-size: ", ";\n  font-weight: normal;\n  line-height: ", ";\n"])), LUP_MAIN_FONT_SIZE14, LUP_SPACING_22);
var checkboxStyles = css(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n  &.ant-checkbox-wrapper {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: ", ";\n    color: ", ";\n    line-height: ", ";\n  }\n\n  .ant-checkbox {\n    top: 0;\n    margin: auto 0;\n    border: ", " solid ", ";\n    border-radius: ", ";\n    height: ", ";\n    width: ", ";\n\n    & + span {\n      padding: 0;\n    }\n\n    & + span > span {\n      transition: 0.4s;\n      padding-left: ", ";\n      padding-right: ", ";\n      color: ", ";\n    }\n\n    &:hover {\n      border-color: ", ";\n    }\n\n    &.ant-checkbox-checked {\n      border-color: ", " !important;\n      background-color: ", " !important;\n    }\n\n    &.ant-checkbox-checked > span.ant-checkbox-inner {\n      background-color: ", " !important;\n    }\n\n    &.ant-checkbox-indeterminate + span > span {\n      color: ", " !important;\n    }\n\n    &.ant-checkbox-indeterminate .ant-checkbox-inner {\n      background-color: transparent;\n      border-color: ", " !important;\n\n      &:after {\n        content: ' ';\n        transform: scale(1);\n        position: absolute;\n        left: ", ";\n        top: ", ";\n        width: ", ";\n        height: ", ";\n      }\n    }\n\n    &.ant-checkbox-checked .ant-checkbox-inner:after,\n    & .ant-checkbox-inner:after {\n      left: ", ";\n      top: ", ";\n      width: ", ";\n      height: ", ";\n      border-color: ", ";\n    }\n\n    &.ant-checkbox-disabled .ant-checkbox-inner:after {\n      border-color: ", ";\n    }\n  }\n\n  .ant-checkbox-inner {\n    width: ", ";\n    height: ", ";\n    border: none;\n    border-color: ", ";\n\n    &:hover {\n      border: none;\n    }\n  }\n  .ant-checkbox-checked {\n    border-color: ", " !important;\n\n    & .ant-checkbox-inner {\n      background-color: ", ";\n      border-color: ", " !important;\n      border-radius: 0;\n    }\n\n    & + span > span  {\n      color: ", ";\n    }\n\n    &:after {\n      border-color: transparent;\n      border: none;\n    }\n  }\n\n  .ant-checkbox-disabled {\n    border-color: ", " !important;\n    background: ", ";\n    & .ant-checkbox-inner {\n      border-color: ", " !important;\n      background-color: ", ";\n    }\n\n    & + span > span  {\n      color: ", ";\n    }\n\n    &.ant-checkbox-checked + span > span  {\n      color: ", " !important;\n    }\n\n    &.ant-checkbox-checked {\n      border-color: ", " !important;\n      background-color: ", " !important;\n    }\n\n    &.ant-checkbox-checked > span.ant-checkbox-inner {\n      border-radius: 0;\n      border-color: ", " !important;\n      background-color: ", " !important;    }\n  }\n\n  &.ant-checkbox-wrapper:hover .ant-checkbox-inner,\n  & .ant-checkbox:hover .ant-checkbox-inner {\n    border-color: transparent;\n  }\n\n  & .ant-checkbox-input:focus + .ant-checkbox-inner {\n    border-color: ", ";\n  }\n"])), LUP_MAIN_FONT_SIZE14, LUP_BASE_GREY_DARKEST, LUP_SPACING_22, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_GREY_MEDIUM, LUP_MAIN_BORDER_WIDTH1, LUP_SPACING_12, LUP_SPACING_12, LUP_SPACING_6, LUP_SPACING_6, LUP_BASE_GREY_DARK, LUP_BASE_BLUE, LUP_BASE_BLUE_DARK, LUP_BASE_BLUE_DARK, LUP_BASE_BLUE_DARK, LUP_BASE_GREY_DARKEST, LUP_BASE_GREY, LUP_SPACING_2, LUP_SPACING_4, LUP_SPACING_6, LUP_SPACING_2, LUP_SPACING_2, LUP_SPACING_5, LUP_SPACING_4, LUP_SPACING_7, WHITE, WHITE, LUP_SPACING_10, LUP_SPACING_10, WHITE, LUP_BASE_BLUE, LUP_BASE_BLUE, WHITE, LUP_BASE_GREY_DARKEST, LUP_BASE_GREY, LUP_BASE_GREY_LIGHTER, LUP_BASE_GREY, LUP_BASE_GREY_LIGHTER, LUP_BASE_GREY, LUP_BASE_GREY_MEDIUM, LUP_BASE_GREY_MEDIUM, LUP_BASE_GREY_MEDIUM, LUP_BASE_GREY_MEDIUM, LUP_BASE_GREY_MEDIUM, LUP_BASE_BLUE);
var StyledCheckbox = styled$4(_Checkbox)(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["\nheight: ", ";\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n  ", ";\nwidth: fit-content;\n"])), LUP_SPACING_21, checkboxStyles);

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      subLabel = _ref.subLabel,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["label", "subLabel", "onChange"]);

  return /*#__PURE__*/React.createElement(StyledCheckbox, _extends({}, props, {
    onChange: onChange
  }), label && /*#__PURE__*/React.createElement(StyledLabel$1, null, label), subLabel && /*#__PURE__*/React.createElement(StyledSubLabel, null, subLabel));
};

Checkbox.propTypes = {
  type: propTypes.string,
  label: propTypes.node.isRequired,
  onChange: propTypes.func,
  subLabel: propTypes.string
};
Checkbox.defaultProps = {
  type: 'checkbox',
  subLabel: '',
  onChange: function onChange() {}
};

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray$1(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty$2;

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray$1;

function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles$2;

function _iterableToArray$2(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray$2;

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray$1;

function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread$2;

function _toConsumableArray$2(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray$2;

var keys = function keys(obj) {
  return obj === Object(obj) ? Object.keys(obj) : [];
};
var values = function values(obj) {
  return obj === Object(obj) ? Object.values(obj) : [];
};

function mergeDeep(target, source) {
  var output = Object.assign({}, target);

  if (isPlainObject$1(target) && isPlainObject$1(source)) {
    keys(source).forEach(function (key) {
      if (isPlainObject$1(source[key])) {
        if (!(key in target)) Object.assign(output, defineProperty({}, key, source[key]));else output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, defineProperty({}, key, source[key]));
      }
    });
  }

  return output;
}

var merge$1 = function merge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return sources.reduce(function (t, s) {
    return mergeDeep(t, s);
  }, target);
};
var omit = function omit(obj, keys) {
  var other = Object.assign({}, obj);

  if (keys) {
    for (var i = 0; i < keys.length; i++) {
      delete other[keys[i]];
    }
  }

  return other;
};
var isPlainObject$1 = function isPlainObject(obj) {
  return obj === Object(obj) && !(obj instanceof Date) && !Array.isArray(obj);
};
var compact = function compact(arr) {
  return (arr || []).filter(Boolean);
};

var isModifier = function isModifier(key) {
  return key[0] === '&';
};
var isElement$1 = function isElement(key) {
  return !isModifier(key);
};

var camelize = function camelize(key) {
  return key.replace(/-(\w)/g, function (m, c) {
    return c.toUpperCase();
  });
};

var pickDirectStyles = function pickDirectStyles(style) {
  var objectPropertiesWhitelist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var styleKeys = keys(style);
  var result = {};

  for (var i = 0, l = styleKeys.length; i < l; i += 1) {
    var key = styleKeys[i];
    var isDirect = Object.prototype.toString.call(style[key]) !== '[object Object]' || // style defs
    key[0] === ':' || // pseudo selectors
    key[0] === '@' || // @media / @keyframes / @supports / @font-face
    objectPropertiesWhitelist.indexOf(key) >= 0; // whitelisted object-type properties

    if (isDirect) {
      result[key] = style[key];
    }
  }

  return result;
};
var pickNestedStyles = function pickNestedStyles(style, keysToPick) {
  var camelizedKeysToPick = keysToPick.map(camelize);
  var styleKeys = keys(style);
  var result = {};

  for (var i = 0, l = styleKeys.length; i < l; i += 1) {
    var key = styleKeys[i];

    if (keysToPick.indexOf(key) >= 0 || camelizedKeysToPick.indexOf(camelize(key)) >= 0) {
      result[key] = style[key];
    }
  }

  return result;
}; // breadth-first hoisting of selected modifier style subtrees
// does not traverse into element, :pseudo-selector or @directive subtrees

var hoistModifierStylesRecursive = function hoistModifierStylesRecursive(style, modifierKeysToPick) {
  // hoist styles for selected modifiers on current level
  var result = merge$1.apply(void 0, [{}, omit(style, modifierKeysToPick)].concat(toConsumableArray(values(pickNestedStyles(style, modifierKeysToPick))))); // traverse nested styled for ALL modifiers

  var modifierKeys = keys(result).filter(isModifier);

  for (var i = 0, l = modifierKeys.length; i < l; i += 1) {
    var key = modifierKeys[i];
    var subresult = hoistModifierStylesRecursive(result[key], modifierKeysToPick);

    if (modifierKeysToPick.indexOf(key) >= 0) {
      // selected modifier: hoist subresult
      delete result[key];
      result = merge$1({}, result, subresult);
    } else {
      // non-selected modifier: replace with subresult
      result[key] = subresult;
    }
  }

  return result;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
// many css-in-js libs process keyframes objects as the value for `animationName`
var defaultObjectPropsWhitelist = ['animationName'];

var defaultPropsDecorator = function defaultPropsDecorator(_ref) {
  var style = _ref.style,
      className = _ref.className;
  return _objectSpread({}, style ? {
    style: pickDirectStyles(style, defaultObjectPropsWhitelist)
  } : {}, {}, className ? {
    className: className
  } : {});
};

var PropsDecoratorContext = createContext(defaultPropsDecorator);
PropsDecoratorContext.Provider;

var coerceSelection = function coerceSelection(select) {
  if (!select) {
    return [];
  } else if (typeof select === 'string') {
    return [select];
  } else if (!Array.isArray(select)) {
    var objSelect = select; // workaround for https://github.com/facebook/flow/issues/5781

    return keys(select).reduce(function (acc, key) {
      return acc.concat(objSelect[key] ? [key] : []);
    }, []);
  }

  return select;
};

var EMPTY = {};

var memoize = function memoize(substyle) {
  return function (select, defaultStyle) {
    var cacheKey = defaultStyle || EMPTY;
    substyle.memoize = substyle.memoize || new WeakMap();
    var mapEntry;

    if (!substyle.memoize.has(cacheKey)) {
      mapEntry = {};
      substyle.memoize.set(cacheKey, mapEntry);
    } else {
      mapEntry = substyle.memoize.get(cacheKey);
    }

    var selectHash = coerceSelection(select).join(' ');
    return selectHash in mapEntry ? mapEntry[selectHash] : mapEntry[selectHash] = substyle(select || [], defaultStyle);
  };
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var guessBaseClassName = function guessBaseClassName(classNames) {
  // all class names must start with the same prefix: the component's base class name
  // which will finally go to the container element
  var firstKey = classNames && keys(classNames)[0];
  return firstKey && firstKey.split('__')[0].split('--')[0];
};

var deriveClassNames = function deriveClassNames(className, elementKeys, modifierKeys) {
  // do not derive class names, if the user did not specify any class name
  if (!className) {
    return undefined;
  } // derive class names based using the passed modifier/element keys


  var firstClassName = className.split(' ')[0];
  var derivedClassNames = [].concat(toConsumableArray(elementKeys.length === 0 ? modifierKeys.map(function (key) {
    return "".concat(firstClassName, "--").concat(key.substring(1));
  }) : []), toConsumableArray(elementKeys.map(function (key) {
    return "".concat(firstClassName, "__").concat(key);
  }))); // also use the provided `className` if there is no sub-element selection

  return elementKeys.length === 0 ? [className].concat(toConsumableArray(derivedClassNames)) : derivedClassNames;
};

function createSubstyle(_ref) {
  var style = _ref.style,
      className = _ref.className,
      classNames = _ref.classNames;
  var propsDecorator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropsDecorator;
  var baseClassName = className || guessBaseClassName(classNames) || (style === null || style === void 0 ? void 0 : style.className);
  var substyle = typeof style === 'function' ? style : memoize(function (select, defaultStyle) {
    var selectedKeys = coerceSelection(select);
    invariant_1(Array.isArray(selectedKeys), 'First parameter must be a string, an array of strings, ' + 'a plain object with boolean values, or a falsy value.');
    invariant_1(!defaultStyle || isPlainObject$1(defaultStyle), 'Optional second parameter must be a plain object.');
    var modifierKeys = selectedKeys.filter(isModifier);
    var elementKeys = selectedKeys.filter(isElement$1);
    var collectElementStyles = elementKeys.length > 0 ? function (fromStyle) {
      return values(pickNestedStyles(fromStyle, elementKeys));
    } : function (fromStyle) {
      return [fromStyle];
    };

    var collectSelectedStyles = function collectSelectedStyles() {
      var fromStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return collectElementStyles(hoistModifierStylesRecursive(fromStyle, modifierKeys));
    };

    var derivedClassNames = deriveClassNames(baseClassName, elementKeys, modifierKeys);
    return createSubstyle(_objectSpread$1({}, (style || defaultStyle) && {
      style: merge$1.apply(void 0, [{}].concat(toConsumableArray(collectSelectedStyles(defaultStyle)), toConsumableArray(collectSelectedStyles(style))))
    }, {}, derivedClassNames && {
      className: derivedClassNames.join(' ')
    }, {}, classNames && {
      classNames: classNames
    }), propsDecorator);
  });

  var styleProps = _objectSpread$1({}, typeof style === 'function' ? style : {
    style: style
  });

  var classNameSplit = toConsumableArray(new Set([].concat(toConsumableArray(styleProps.className ? styleProps.className.split(' ') : []), toConsumableArray(baseClassName ? baseClassName.split(' ') : []))));

  var mappedClassNames = classNames ? compact(classNameSplit.map(function (singleClassName) {
    return classNames[singleClassName];
  })) : classNameSplit;
  var propsForSpread = propsDecorator(_objectSpread$1({}, styleProps, {}, mappedClassNames.length > 0 ? {
    className: mappedClassNames.join(' ')
  } : {})); // assign `style`, `className`, and/or any props added by the decorator to the return function object

  Object.assign(substyle, propsForSpread);
  return substyle;
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var inline = function inline() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (result, arg) {
    return _objectSpread$2({}, result, {}, typeof arg === 'function' ? arg : {}, {
      style: _objectSpread$2({}, result.style, {}, typeof arg === 'function' ? arg.style : arg)
    });
  }, {});
};

var useStyles = function useStyles(defaultStyle, _ref, modifiers) {
  var style = _ref.style,
      className = _ref.className,
      classNames = _ref.classNames;
  var propsDecorator = useContext(PropsDecoratorContext);
  var substyle = useMemo(function () {
    return createSubstyle({
      style: style,
      className: className,
      classNames: classNames
    }, propsDecorator);
  }, [style, className, classNames, propsDecorator]);
  return substyle(modifiers, defaultStyle);
};

// escape RegExp special characters https://stackoverflow.com/a/9310752/5142490
var escapeRegex = function escapeRegex(str) {
  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

var PLACEHOLDERS = {
  id: '__id__',
  display: '__display__'
};

var findPositionOfCapturingGroup = function findPositionOfCapturingGroup(markup, parameterName) {
  invariant_1(parameterName === 'id' || parameterName === 'display', "Second arg must be either \"id\" or \"display\", got: \"".concat(parameterName, "\"")); // find positions of placeholders in the markup

  var indexDisplay = markup.indexOf(PLACEHOLDERS.display);
  var indexId = markup.indexOf(PLACEHOLDERS.id); // set indices to null if not found

  if (indexDisplay < 0) indexDisplay = null;
  if (indexId < 0) indexId = null; // markup must contain one of the mandatory placeholders

  invariant_1(indexDisplay !== null || indexId !== null, "The markup '".concat(markup, "' does not contain either of the placeholders '__id__' or '__display__'"));

  if (indexDisplay !== null && indexId !== null) {
    // both placeholders are used, return 0 or 1 depending on the position of the requested parameter
    return parameterName === 'id' && indexId <= indexDisplay || parameterName === 'display' && indexDisplay <= indexId ? 0 : 1;
  } // just one placeholder is being used, we'll use the captured string for both parameters


  return 0;
};

var combineRegExps = function combineRegExps(regExps) {
  var serializedRegexParser = /^\/(.+)\/(\w+)?$/;
  return new RegExp(regExps.map(function (regex) {
    var _serializedRegexParse = serializedRegexParser.exec(regex.toString()),
        _serializedRegexParse2 = _slicedToArray$1(_serializedRegexParse, 3),
        regexString = _serializedRegexParse2[1],
        regexFlags = _serializedRegexParse2[2];

    invariant_1(!regexFlags, "RegExp flags are not supported. Change /".concat(regexString, "/").concat(regexFlags, " into /").concat(regexString, "/"));
    return "(".concat(regexString, ")");
  }).join('|'), 'g');
};

var countPlaceholders = function countPlaceholders(markup) {
  var count = 0;
  if (markup.indexOf('__id__') >= 0) count++;
  if (markup.indexOf('__display__') >= 0) count++;
  return count;
};

var emptyFn = function emptyFn() {}; // Finds all occurrences of the markup in the value and calls the `markupIteratee` callback for each of them.
// The optional `textIteratee` callback is called for each plain text ranges in between these markup occurrences.


var iterateMentionsMarkup = function iterateMentionsMarkup(value, config, markupIteratee) {
  var textIteratee = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : emptyFn;
  var regex = combineRegExps(config.map(function (c) {
    return c.regex;
  }));
  var accOffset = 2; // first is whole match, second is the for the capturing group of first regexp component

  var captureGroupOffsets = config.map(function (_ref) {
    var markup = _ref.markup;
    var result = accOffset; // + 1 is for the capturing group we add around each regexp component in combineRegExps

    accOffset += countPlaceholders(markup) + 1;
    return result;
  });
  var match;
  var start = 0;
  var currentPlainTextIndex = 0; // detect all mention markup occurrences in the value and iterate the matches

  while ((match = regex.exec(value)) !== null) {
    var offset = captureGroupOffsets.find(function (o) {
      return !!match[o];
    }); // eslint-disable-line no-loop-func

    var mentionChildIndex = captureGroupOffsets.indexOf(offset);
    var _config$mentionChildI = config[mentionChildIndex],
        markup = _config$mentionChildI.markup,
        displayTransform = _config$mentionChildI.displayTransform;
    var idPos = offset + findPositionOfCapturingGroup(markup, 'id');
    var displayPos = offset + findPositionOfCapturingGroup(markup, 'display');
    var id = match[idPos];
    var display = displayTransform(id, match[displayPos]);
    var substr = value.substring(start, match.index);
    textIteratee(substr, start, currentPlainTextIndex);
    currentPlainTextIndex += substr.length;
    markupIteratee(match[0], match.index, currentPlainTextIndex, id, display, mentionChildIndex, start);
    currentPlainTextIndex += display.length;
    start = regex.lastIndex;
  }

  if (start < value.length) {
    textIteratee(value.substring(start), start, currentPlainTextIndex);
  }
};

var getPlainText = function getPlainText(value, config) {
  var result = '';
  iterateMentionsMarkup(value, config, function (match, index, plainTextIndex, id, display) {
    result += display;
  }, function (plainText) {
    result += plainText;
  });
  return result;
};

// in the marked up value string.
// If the passed character index lies inside a mention, the value of `inMarkupCorrection` defines the
// correction to apply:
//   - 'START' to return the index of the mention markup's first char (default)
//   - 'END' to return the index after its last char
//   - 'NULL' to return null

var mapPlainTextIndex = function mapPlainTextIndex(value, config, indexInPlainText) {
  var inMarkupCorrection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'START';

  if (typeof indexInPlainText !== 'number') {
    return indexInPlainText;
  }

  var result;

  var textIteratee = function textIteratee(substr, index, substrPlainTextIndex) {
    if (result !== undefined) return;

    if (substrPlainTextIndex + substr.length >= indexInPlainText) {
      // found the corresponding position in the current plain text range
      result = index + indexInPlainText - substrPlainTextIndex;
    }
  };

  var markupIteratee = function markupIteratee(markup, index, mentionPlainTextIndex, id, display, childIndex, lastMentionEndIndex) {
    if (result !== undefined) return;

    if (mentionPlainTextIndex + display.length > indexInPlainText) {
      // found the corresponding position inside current match,
      // return the index of the first or after the last char of the matching markup
      // depending on whether the `inMarkupCorrection`
      if (inMarkupCorrection === 'NULL') {
        result = null;
      } else {
        result = index + (inMarkupCorrection === 'END' ? markup.length : 0);
      }
    }
  };

  iterateMentionsMarkup(value, config, markupIteratee, textIteratee); // when a mention is at the end of the value and we want to get the caret position
  // at the end of the string, result is undefined

  return result === undefined ? value.length : result;
};

var spliceString = function spliceString(str, start, end, insert) {
  return str.substring(0, start) + insert + str.substring(end);
};

// guided by the textarea text selection ranges before and after the change

var applyChangeToValue = function applyChangeToValue(value, plainTextValue, _ref, config) {
  var selectionStartBefore = _ref.selectionStartBefore,
      selectionEndBefore = _ref.selectionEndBefore,
      selectionEndAfter = _ref.selectionEndAfter;
  var oldPlainTextValue = getPlainText(value, config);
  var lengthDelta = oldPlainTextValue.length - plainTextValue.length;

  if (selectionStartBefore === 'undefined') {
    selectionStartBefore = selectionEndAfter + lengthDelta;
  }

  if (selectionEndBefore === 'undefined') {
    selectionEndBefore = selectionStartBefore;
  } // Fixes an issue with replacing combined characters for complex input. Eg like acented letters on OSX


  if (selectionStartBefore === selectionEndBefore && selectionEndBefore === selectionEndAfter && oldPlainTextValue.length === plainTextValue.length) {
    selectionStartBefore = selectionStartBefore - 1;
  } // extract the insertion from the new plain text value


  var insert = plainTextValue.slice(selectionStartBefore, selectionEndAfter); // handling for Backspace key with no range selection

  var spliceStart = Math.min(selectionStartBefore, selectionEndAfter);
  var spliceEnd = selectionEndBefore;

  if (selectionStartBefore === selectionEndAfter) {
    // handling for Delete key with no range selection
    spliceEnd = Math.max(selectionEndBefore, selectionStartBefore + lengthDelta);
  }

  var mappedSpliceStart = mapPlainTextIndex(value, config, spliceStart, 'START');
  var mappedSpliceEnd = mapPlainTextIndex(value, config, spliceEnd, 'END');
  var controlSpliceStart = mapPlainTextIndex(value, config, spliceStart, 'NULL');
  var controlSpliceEnd = mapPlainTextIndex(value, config, spliceEnd, 'NULL');
  var willRemoveMention = controlSpliceStart === null || controlSpliceEnd === null;
  var newValue = spliceString(value, mappedSpliceStart, mappedSpliceEnd, insert);

  if (!willRemoveMention) {
    // test for auto-completion changes
    var controlPlainTextValue = getPlainText(newValue, config);

    if (controlPlainTextValue !== plainTextValue) {
      // some auto-correction is going on
      // find start of diff
      spliceStart = 0;

      while (plainTextValue[spliceStart] === controlPlainTextValue[spliceStart]) {
        spliceStart++;
      } // extract auto-corrected insertion


      insert = plainTextValue.slice(spliceStart, selectionEndAfter); // find index of the unchanged remainder

      spliceEnd = oldPlainTextValue.lastIndexOf(plainTextValue.substring(selectionEndAfter)); // re-map the corrected indices

      mappedSpliceStart = mapPlainTextIndex(value, config, spliceStart, 'START');
      mappedSpliceEnd = mapPlainTextIndex(value, config, spliceEnd, 'END');
      newValue = spliceString(value, mappedSpliceStart, mappedSpliceEnd, insert);
    }
  }

  return newValue;
};

// returns a the index of of the first char of the mention in the plain text.
// If indexInPlainText does not lie inside a mention, returns indexInPlainText.

var findStartOfMentionInPlainText = function findStartOfMentionInPlainText(value, config, indexInPlainText) {
  var result = indexInPlainText;
  var foundMention = false;

  var markupIteratee = function markupIteratee(markup, index, mentionPlainTextIndex, id, display, childIndex, lastMentionEndIndex) {
    if (mentionPlainTextIndex <= indexInPlainText && mentionPlainTextIndex + display.length > indexInPlainText) {
      result = mentionPlainTextIndex;
      foundMention = true;
    }
  };

  iterateMentionsMarkup(value, config, markupIteratee);

  if (foundMention) {
    return result;
  }
};

var getMentions = function getMentions(value, config) {
  var mentions = [];
  iterateMentionsMarkup(value, config, function (match, index, plainTextIndex, id, display, childIndex, start) {
    mentions.push({
      id: id,
      display: display,
      childIndex: childIndex,
      index: index,
      plainTextIndex: plainTextIndex
    });
  });
  return mentions;
};

var countSuggestions = function countSuggestions(suggestions) {
  return Object.values(suggestions).reduce(function (acc, _ref) {
    var results = _ref.results;
    return acc + results.length;
  }, 0);
};

var getEndOfLastMention = function getEndOfLastMention(value, config) {
  var mentions = getMentions(value, config);
  var lastMention = mentions[mentions.length - 1];
  return lastMention ? lastMention.plainTextIndex + lastMention.display.length : 0;
};

var markupToRegex = function markupToRegex(markup) {
  var escapedMarkup = escapeRegex(markup);
  var charAfterDisplay = markup[markup.indexOf(PLACEHOLDERS.display) + PLACEHOLDERS.display.length];
  var charAfterId = markup[markup.indexOf(PLACEHOLDERS.id) + PLACEHOLDERS.id.length];
  return new RegExp(escapedMarkup.replace(PLACEHOLDERS.display, "([^".concat(escapeRegex(charAfterDisplay || ''), "]+?)")).replace(PLACEHOLDERS.id, "([^".concat(escapeRegex(charAfterId || ''), "]+?)")));
};

var readConfigFromChildren = function readConfigFromChildren(children) {
  return Children.toArray(children).map(function (_ref) {
    var _ref$props = _ref.props,
        markup = _ref$props.markup,
        regex = _ref$props.regex,
        displayTransform = _ref$props.displayTransform;
    return {
      markup: markup,
      regex: regex ? coerceCapturingGroups(regex, markup) : markupToRegex(markup),
      displayTransform: displayTransform || function (id, display) {
        return display || id;
      }
    };
  });
}; // make sure that the custom regex defines the correct number of capturing groups


var coerceCapturingGroups = function coerceCapturingGroups(regex, markup) {
  var numberOfGroups = new RegExp(regex.toString() + '|').exec('').length - 1;
  var numberOfPlaceholders = countPlaceholders(markup);
  invariant_1(numberOfGroups === numberOfPlaceholders, "Number of capturing groups in RegExp ".concat(regex.toString(), " (").concat(numberOfGroups, ") does not match the number of placeholders in the markup '").concat(markup, "' (").concat(numberOfPlaceholders, ")"));
  return regex;
};

var makeMentionsMarkup = function makeMentionsMarkup(markup, id, display) {
  return markup.replace(PLACEHOLDERS.id, id).replace(PLACEHOLDERS.display, display);
};

// This contains all the latin letters and the regex that match these letters with diacritics
// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
var lettersDiacritics = [{
  base: 'A',
  letters: /(&#65;|&#9398;|&#65313;|&#192;|&#193;|&#194;|&#7846;|&#7844;|&#7850;|&#7848;|&#195;|&#256;|&#258;|&#7856;|&#7854;|&#7860;|&#7858;|&#550;|&#480;|&#196;|&#478;|&#7842;|&#197;|&#506;|&#461;|&#512;|&#514;|&#7840;|&#7852;|&#7862;|&#7680;|&#260;|&#570;|&#11375;|[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F])/g
}, {
  base: 'AA',
  letters: /(&#42802;|[\uA732])/g
}, {
  base: 'AE',
  letters: /(&#198;|&#508;|&#482;|[\u00C6\u01FC\u01E2])/g
}, {
  base: 'AO',
  letters: /(&#42804;|[\uA734])/g
}, {
  base: 'AU',
  letters: /(&#42806;|[\uA736])/g
}, {
  base: 'AV',
  letters: /(&#42808;|&#42810;|[\uA738\uA73A])/g
}, {
  base: 'AY',
  letters: /(&#42812;|[\uA73C])/g
}, {
  base: 'B',
  letters: /(&#66;|&#9399;|&#65314;|&#7682;|&#7684;|&#7686;|&#579;|&#386;|&#385;|[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181])/g
}, {
  base: 'C',
  letters: /(&#67;|&#9400;|&#65315;|&#262;|&#264;|&#266;|&#268;|&#199;|&#7688;|&#391;|&#571;|&#42814;|[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E])/g
}, {
  base: 'D',
  letters: /(&#68;|&#9401;|&#65316;|&#7690;|&#270;|&#7692;|&#7696;|&#7698;|&#7694;|&#272;|&#395;|&#394;|&#393;|&#42873;|&#208;|[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0])/g
}, {
  base: 'DZ',
  letters: /(&#497;|&#452;|[\u01F1\u01C4])/g
}, {
  base: 'Dz',
  letters: /(&#498;|&#453;|[\u01F2\u01C5])/g
}, {
  base: 'E',
  letters: /(&#69;|&#9402;|&#65317;|&#200;|&#201;|&#202;|&#7872;|&#7870;|&#7876;|&#7874;|&#7868;|&#274;|&#7700;|&#7702;|&#276;|&#278;|&#203;|&#7866;|&#282;|&#516;|&#518;|&#7864;|&#7878;|&#552;|&#7708;|&#280;|&#7704;|&#7706;|&#400;|&#398;|[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E])/g
}, {
  base: 'F',
  letters: /(&#70;|&#9403;|&#65318;|&#7710;|&#401;|&#42875;|[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B])/g
}, {
  base: 'G',
  letters: /(&#71;|&#9404;|&#65319;|&#500;|&#284;|&#7712;|&#286;|&#288;|&#486;|&#290;|&#484;|&#403;|&#42912;|&#42877;|&#42878;|[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E])/g
}, {
  base: 'H',
  letters: /(&#72;|&#9405;|&#65320;|&#292;|&#7714;|&#7718;|&#542;|&#7716;|&#7720;|&#7722;|&#294;|&#11367;|&#11381;|&#42893;|[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D])/g
}, {
  base: 'I',
  letters: /(&#73;|&#9406;|&#65321;|&#204;|&#205;|&#206;|&#296;|&#298;|&#300;|&#304;|&#207;|&#7726;|&#7880;|&#463;|&#520;|&#522;|&#7882;|&#302;|&#7724;|&#407;|[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197])/g
}, {
  base: 'J',
  letters: /(&#74;|&#9407;|&#65322;|&#308;|&#584;|[\u004A\u24BF\uFF2A\u0134\u0248])/g
}, {
  base: 'K',
  letters: /(&#75;|&#9408;|&#65323;|&#7728;|&#488;|&#7730;|&#310;|&#7732;|&#408;|&#11369;|&#42816;|&#42818;|&#42820;|&#42914;|[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2])/g
}, {
  base: 'L',
  letters: /(&#76;|&#9409;|&#65324;|&#319;|&#313;|&#317;|&#7734;|&#7736;|&#315;|&#7740;|&#7738;|&#321;|&#573;|&#11362;|&#11360;|&#42824;|&#42822;|&#42880;|[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780])/g
}, {
  base: 'LJ',
  letters: /(&#455;|[\u01C7])/g
}, {
  base: 'Lj',
  letters: /(&#456;|[\u01C8])/g
}, {
  base: 'M',
  letters: /(&#77;|&#9410;|&#65325;|&#7742;|&#7744;|&#7746;|&#11374;|&#412;|[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C])/g
}, {
  base: 'N',
  letters: /(&#78;|&#9411;|&#65326;|&#504;|&#323;|&#209;|&#7748;|&#327;|&#7750;|&#325;|&#7754;|&#7752;|&#544;|&#413;|&#42896;|&#42916;|&#330;|[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4\u014A])/g
}, {
  base: 'NJ',
  letters: /(&#458;|[\u01CA])/g
}, {
  base: 'Nj',
  letters: /(&#459;|[\u01CB])/g
}, {
  base: 'O',
  letters: /(&#79;|&#9412;|&#65327;|&#210;|&#211;|&#212;|&#7890;|&#7888;|&#7894;|&#7892;|&#213;|&#7756;|&#556;|&#7758;|&#332;|&#7760;|&#7762;|&#334;|&#558;|&#560;|&#214;|&#554;|&#7886;|&#336;|&#465;|&#524;|&#526;|&#416;|&#7900;|&#7898;|&#7904;|&#7902;|&#7906;|&#7884;|&#7896;|&#490;|&#492;|&#216;|&#510;|&#390;|&#415;|&#42826;|&#42828;|[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C])/g
}, {
  base: 'OE',
  letters: /(&#338;|[\u0152])/g
}, {
  base: 'OI',
  letters: /(&#418;|[\u01A2])/g
}, {
  base: 'OO',
  letters: /(&#42830;|[\uA74E])/g
}, {
  base: 'OU',
  letters: /(&#546;|[\u0222])/g
}, {
  base: 'P',
  letters: /(&#80;|&#9413;|&#65328;|&#7764;|&#7766;|&#420;|&#11363;|&#42832;|&#42834;|&#42836;|[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754])/g
}, {
  base: 'Q',
  letters: /(&#81;|&#9414;|&#65329;|&#42838;|&#42840;|&#586;|[\u0051\u24C6\uFF31\uA756\uA758\u024A])/g
}, {
  base: 'R',
  letters: /(&#82;|&#9415;|&#65330;|&#340;|&#7768;|&#344;|&#528;|&#530;|&#7770;|&#7772;|&#342;|&#7774;|&#588;|&#11364;|&#42842;|&#42918;|&#42882;|[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782])/g
}, {
  base: 'S',
  letters: /(&#83;|&#9416;|&#65331;|&#7838;|&#346;|&#7780;|&#348;|&#7776;|&#352;|&#7782;|&#7778;|&#7784;|&#536;|&#350;|&#11390;|&#42920;|&#42884;|[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784])/g
}, {
  base: 'T',
  letters: /(&#84;|&#9417;|&#65332;|&#7786;|&#356;|&#7788;|&#538;|&#354;|&#7792;|&#7790;|&#358;|&#428;|&#430;|&#574;|&#42886;|[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786])/g
}, {
  base: 'TH',
  letters: /(&#222;|[\u00DE])/g
}, {
  base: 'TZ',
  letters: /(&#42792;|[\uA728])/g
}, {
  base: 'U',
  letters: /(&#85;|&#9418;|&#65333;|&#217;|&#218;|&#219;|&#360;|&#7800;|&#362;|&#7802;|&#364;|&#220;|&#475;|&#471;|&#469;|&#473;|&#7910;|&#366;|&#368;|&#467;|&#532;|&#534;|&#431;|&#7914;|&#7912;|&#7918;|&#7916;|&#7920;|&#7908;|&#7794;|&#370;|&#7798;|&#7796;|&#580;|[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244])/g
}, {
  base: 'V',
  letters: /(&#86;|&#9419;|&#65334;|&#7804;|&#7806;|&#434;|&#42846;|&#581;|[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245])/g
}, {
  base: 'VY',
  letters: /(&#42848;|[\uA760])/g
}, {
  base: 'W',
  letters: /(&#87;|&#9420;|&#65335;|&#7808;|&#7810;|&#372;|&#7814;|&#7812;|&#7816;|&#11378;|[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72])/g
}, {
  base: 'X',
  letters: /(&#88;|&#9421;|&#65336;|&#7818;|&#7820;|[\u0058\u24CD\uFF38\u1E8A\u1E8C])/g
}, {
  base: 'Y',
  letters: /(&#89;|&#9422;|&#65337;|&#7922;|&#221;|&#374;|&#7928;|&#562;|&#7822;|&#376;|&#7926;|&#7924;|&#435;|&#590;|&#7934;|[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE])/g
}, {
  base: 'Z',
  letters: /(&#90;|&#9423;|&#65338;|&#377;|&#7824;|&#379;|&#381;|&#7826;|&#7828;|&#437;|&#548;|&#11391;|&#11371;|&#42850;|[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762])/g
}, {
  base: 'a',
  letters: /(&#97;|&#9424;|&#65345;|&#7834;|&#224;|&#225;|&#226;|&#7847;|&#7845;|&#7851;|&#7849;|&#227;|&#257;|&#259;|&#7857;|&#7855;|&#7861;|&#7859;|&#551;|&#481;|&#228;|&#479;|&#7843;|&#229;|&#507;|&#462;|&#513;|&#515;|&#7841;|&#7853;|&#7863;|&#7681;|&#261;|&#11365;|&#592;|[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250])/g
}, {
  base: 'aa',
  letters: /(&#42803;|[\uA733])/g
}, {
  base: 'ae',
  letters: /(&#230;|&#509;|&#483;|[\u00E6\u01FD\u01E3])/g
}, {
  base: 'ao',
  letters: /(&#42805;|[\uA735])/g
}, {
  base: 'au',
  letters: /(&#42807;|[\uA737])/g
}, {
  base: 'av',
  letters: /(&#42809;|&#42811;|[\uA739\uA73B])/g
}, {
  base: 'ay',
  letters: /(&#42813;|[\uA73D])/g
}, {
  base: 'b',
  letters: /(&#98;|&#9425;|&#65346;|&#7683;|&#7685;|&#7687;|&#384;|&#387;|&#595;|[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253])/g
}, {
  base: 'c',
  letters: /(&#99;|&#9426;|&#65347;|&#263;|&#265;|&#267;|&#269;|&#231;|&#7689;|&#392;|&#572;|&#42815;|&#8580;|[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184])/g
}, {
  base: 'd',
  letters: /(&#100;|&#9427;|&#65348;|&#7691;|&#271;|&#7693;|&#7697;|&#7699;|&#7695;|&#273;|&#396;|&#598;|&#599;|&#42874;|&#240;|[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A\u00F0])/g
}, {
  base: 'dz',
  letters: /(&#499;|&#454;|[\u01F3\u01C6])/g
}, {
  base: 'e',
  letters: /(&#101;|&#9428;|&#65349;|&#232;|&#233;|&#234;|&#7873;|&#7871;|&#7877;|&#7875;|&#7869;|&#275;|&#7701;|&#7703;|&#277;|&#279;|&#235;|&#7867;|&#283;|&#517;|&#519;|&#7865;|&#7879;|&#553;|&#7709;|&#281;|&#7705;|&#7707;|&#583;|&#603;|&#477;|[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD])/g
}, {
  base: 'f',
  letters: /(&#102;|&#9429;|&#65350;|&#7711;|&#402;|&#42876;|[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C])/g
}, {
  base: 'g',
  letters: /(&#103;|&#9430;|&#65351;|&#501;|&#285;|&#7713;|&#287;|&#289;|&#487;|&#291;|&#485;|&#608;|&#42913;|&#7545;|&#42879;|[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F])/g
}, {
  base: 'h',
  letters: /(&#104;|&#9431;|&#65352;|&#293;|&#7715;|&#7719;|&#543;|&#7717;|&#7721;|&#7723;|&#7830;|&#295;|&#11368;|&#11382;|&#613;|[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265])/g
}, {
  base: 'hv',
  letters: /(&#405;|[\u0195])/g
}, {
  base: 'i',
  letters: /(&#105;|&#9432;|&#65353;|&#236;|&#237;|&#238;|&#297;|&#299;|&#301;|&#239;|&#7727;|&#7881;|&#464;|&#521;|&#523;|&#7883;|&#303;|&#7725;|&#616;|&#305;|[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131])/g
}, {
  base: 'ij',
  letters: /(&#307;|[\u0133])/g
}, {
  base: 'j',
  letters: /(&#106;|&#9433;|&#65354;|&#309;|&#496;|&#585;|[\u006A\u24D9\uFF4A\u0135\u01F0\u0249])/g
}, {
  base: 'k',
  letters: /(&#107;|&#9434;|&#65355;|&#7729;|&#489;|&#7731;|&#311;|&#7733;|&#409;|&#11370;|&#42817;|&#42819;|&#42821;|&#42915;|[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3])/g
}, {
  base: 'l',
  letters: /(&#108;|&#9435;|&#65356;|&#320;|&#314;|&#318;|&#7735;|&#7737;|&#316;|&#7741;|&#7739;|&#322;|&#410;|&#619;|&#11361;|&#42825;|&#42881;|&#42823;|[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u0142\u019A\u026B\u2C61\uA749\uA781\uA747])/g
}, {
  base: 'lj',
  letters: /(&#457;|[\u01C9])/g
}, {
  base: 'm',
  letters: /(&#109;|&#9436;|&#65357;|&#7743;|&#7745;|&#7747;|&#625;|&#623;|[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F])/g
}, {
  base: 'n',
  letters: /(&#110;|&#9437;|&#65358;|&#505;|&#324;|&#241;|&#7749;|&#328;|&#7751;|&#326;|&#7755;|&#7753;|&#414;|&#626;|&#329;|&#42897;|&#42917;|&#331;|[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u014B])/g
}, {
  base: 'nj',
  letters: /(&#460;|[\u01CC])/g
}, {
  base: 'o',
  letters: /(&#111;|&#9438;|&#65359;|&#242;|&#243;|&#244;|&#7891;|&#7889;|&#7895;|&#7893;|&#245;|&#7757;|&#557;|&#7759;|&#333;|&#7761;|&#7763;|&#335;|&#559;|&#561;|&#246;|&#555;|&#7887;|&#337;|&#466;|&#525;|&#527;|&#417;|&#7901;|&#7899;|&#7905;|&#7903;|&#7907;|&#7885;|&#7897;|&#491;|&#493;|&#248;|&#511;|&#596;|&#42827;|&#42829;|&#629;|[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275])/g
}, {
  base: 'oe',
  letters: /(&#339;|[\u0153])/g
}, {
  base: 'oi',
  letters: /(&#419;|[\u01A3])/g
}, {
  base: 'ou',
  letters: /(&#547;|[\u0223])/g
}, {
  base: 'oo',
  letters: /(&#42831;|[\uA74F])/g
}, {
  base: 'p',
  letters: /(&#112;|&#9439;|&#65360;|&#7765;|&#7767;|&#421;|&#7549;|&#42833;|&#42835;|&#42837;|[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755])/g
}, {
  base: 'q',
  letters: /(&#113;|&#9440;|&#65361;|&#587;|&#42839;|&#42841;|[\u0071\u24E0\uFF51\u024B\uA757\uA759])/g
}, {
  base: 'r',
  letters: /(&#114;|&#9441;|&#65362;|&#341;|&#7769;|&#345;|&#529;|&#531;|&#7771;|&#7773;|&#343;|&#7775;|&#589;|&#637;|&#42843;|&#42919;|&#42883;|[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783])/g
}, {
  base: 's',
  letters: /(&#115;|&#9442;|&#65363;|&#347;|&#7781;|&#349;|&#7777;|&#353;|&#7783;|&#7779;|&#7785;|&#537;|&#351;|&#575;|&#42921;|&#42885;|&#7835;|&#383;|[\u0073\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u017F])/g
}, {
  base: 'ss',
  letters: /(&#223;|[\u00DF])/g
}, {
  base: 't',
  letters: /(&#116;|&#9443;|&#65364;|&#7787;|&#7831;|&#357;|&#7789;|&#539;|&#355;|&#7793;|&#7791;|&#359;|&#429;|&#648;|&#11366;|&#42887;|[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787])/g
}, {
  base: 'th',
  letters: /(&#254;|[\u00FE])/g
}, {
  base: 'tz',
  letters: /(&#42793;|[\uA729])/g
}, {
  base: 'u',
  letters: /(&#117;|&#9444;|&#65365;|&#249;|&#250;|&#251;|&#361;|&#7801;|&#363;|&#7803;|&#365;|&#252;|&#476;|&#472;|&#470;|&#474;|&#7911;|&#367;|&#369;|&#468;|&#533;|&#535;|&#432;|&#7915;|&#7913;|&#7919;|&#7917;|&#7921;|&#7909;|&#7795;|&#371;|&#7799;|&#7797;|&#649;|[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289])/g
}, {
  base: 'v',
  letters: /(&#118;|&#9445;|&#65366;|&#7805;|&#7807;|&#651;|&#42847;|&#652;|[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C])/g
}, {
  base: 'vy',
  letters: /(&#42849;|[\uA761])/g
}, {
  base: 'w',
  letters: /(&#119;|&#9446;|&#65367;|&#7809;|&#7811;|&#373;|&#7815;|&#7813;|&#7832;|&#7817;|&#11379;|[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73])/g
}, {
  base: 'x',
  letters: /(&#120;|&#9447;|&#65368;|&#7819;|&#7821;|[\u0078\u24E7\uFF58\u1E8B\u1E8D])/g
}, {
  base: 'y',
  letters: /(&#121;|&#9448;|&#65369;|&#7923;|&#253;|&#375;|&#7929;|&#563;|&#7823;|&#255;|&#7927;|&#7833;|&#7925;|&#436;|&#591;|&#7935;|[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF])/g
}, {
  base: 'z',
  letters: /(&#122;|&#9449;|&#65370;|&#378;|&#7825;|&#380;|&#382;|&#7827;|&#7829;|&#438;|&#549;|&#576;|&#11372;|&#42851;|[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763])/g
}];

var removeAccents = function removeAccents(str) {
  var formattedStr = str;
  lettersDiacritics.forEach(function (letterDiacritics) {
    formattedStr = formattedStr.replace(letterDiacritics.letters, letterDiacritics.base);
  });
  return formattedStr;
};

var normalizeString = function normalizeString(str) {
  return removeAccents(str).toLowerCase();
};

var getSubstringIndex = function getSubstringIndex(str, substr, ignoreAccents) {
  if (!ignoreAccents) {
    return str.toLowerCase().indexOf(substr.toLowerCase());
  }

  return normalizeString(str).indexOf(normalizeString(substr));
};

var isNumber$1 = function isNumber(val) {
  return typeof val === 'number';
};

var keys$1 = function keys(obj) {
  return obj === Object(obj) ? Object.keys(obj) : [];
};

var omit$1 = function omit(obj) {
  var _ref;

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var keys = (_ref = []).concat.apply(_ref, rest);

  return Object.keys(obj).reduce(function (acc, k) {
    if (obj.hasOwnProperty(k) && !keys.includes(k) && obj[k] !== undefined) {
      acc[k] = obj[k];
    }

    return acc;
  }, {});
};

function createDefaultStyle(defaultStyle, getModifiers) {
  var enhance = function enhance(ComponentToWrap) {
    var DefaultStyleEnhancer = function DefaultStyleEnhancer(_ref) {
      var style = _ref.style,
          className = _ref.className,
          classNames = _ref.classNames,
          rest = _objectWithoutProperties$1(_ref, ["style", "className", "classNames"]);

      var modifiers = getModifiers ? getModifiers(rest) : undefined;
      var styles = useStyles(defaultStyle, {
        style: style,
        className: className,
        classNames: classNames
      }, modifiers);
      return React.createElement(ComponentToWrap, _extends$1({}, rest, {
        style: styles
      }));
    };

    var displayName = ComponentToWrap.displayName || ComponentToWrap.name || 'Component';
    DefaultStyleEnhancer.displayName = "defaultStyle(".concat(displayName, ")");
    return DefaultStyleEnhancer;
  };

  return enhance;
}

var _generateComponentKey = function _generateComponentKey(usedKeys, id) {
  if (!usedKeys.hasOwnProperty(id)) {
    usedKeys[id] = 0;
  } else {
    usedKeys[id]++;
  }

  return id + '_' + usedKeys[id];
};

var Highlighter =
/*#__PURE__*/
function (_Component) {
  _inherits$1(Highlighter, _Component);

  function Highlighter() {
    var _this;

    _classCallCheck$1(this, Highlighter);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Highlighter).apply(this, arguments));

    _defineProperty$1(_assertThisInitialized$1(_this), "setCaretElement", function (el) {
      _this.caretElement = el;
    });

    _this.state = {
      left: undefined,
      top: undefined
    };
    return _this;
  }

  _createClass$1(Highlighter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.notifyCaretPosition();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.notifyCaretPosition();
    }
  }, {
    key: "notifyCaretPosition",
    value: function notifyCaretPosition() {
      if (!this.caretElement) {
        return;
      }

      var _this$caretElement = this.caretElement,
          offsetLeft = _this$caretElement.offsetLeft,
          offsetTop = _this$caretElement.offsetTop;

      if (this.state.left === offsetLeft && this.state.top === offsetTop) {
        return;
      }

      var newPosition = {
        left: offsetLeft,
        top: offsetTop
      };
      this.setState(newPosition);
      this.props.onCaretPositionChange(newPosition);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          selectionStart = _this$props.selectionStart,
          selectionEnd = _this$props.selectionEnd,
          value = _this$props.value,
          style = _this$props.style,
          children = _this$props.children,
          containerRef = _this$props.containerRef;
      var config = readConfigFromChildren(children); // If there's a caret (i.e. no range selection), map the caret position into the marked up value

      var caretPositionInMarkup;

      if (selectionStart === selectionEnd) {
        caretPositionInMarkup = mapPlainTextIndex(value, config, selectionStart, 'START');
      }

      var resultComponents = [];
      var componentKeys = {}; // start by appending directly to the resultComponents

      var components = resultComponents;
      var substringComponentKey = 0;

      var textIteratee = function textIteratee(substr, index, indexInPlainText) {
        // check whether the caret element has to be inserted inside the current plain substring
        if (isNumber$1(caretPositionInMarkup) && caretPositionInMarkup >= index && caretPositionInMarkup <= index + substr.length) {
          // if yes, split substr at the caret position and insert the caret component
          var splitIndex = caretPositionInMarkup - index;
          components.push(_this2.renderSubstring(substr.substring(0, splitIndex), substringComponentKey)); // add all following substrings and mention components as children of the caret component

          components = [_this2.renderSubstring(substr.substring(splitIndex), substringComponentKey)];
        } else {
          // otherwise just push the plain text substring
          components.push(_this2.renderSubstring(substr, substringComponentKey));
        }

        substringComponentKey++;
      };

      var mentionIteratee = function mentionIteratee(markup, index, indexInPlainText, id, display, mentionChildIndex, lastMentionEndIndex) {
        // generate a component key based on the id
        var key = _generateComponentKey(componentKeys, id);

        components.push(_this2.getMentionComponentForMatch(id, display, mentionChildIndex, key));
      };

      iterateMentionsMarkup(value, config, mentionIteratee, textIteratee); // append a span containing a space, to ensure the last text line has the correct height

      components.push(' ');

      if (components !== resultComponents) {
        // if a caret component is to be rendered, add all components that followed as its children
        resultComponents.push(this.renderHighlighterCaret(components));
      }

      return React.createElement("div", _extends$1({}, style, {
        ref: containerRef
      }), resultComponents);
    }
  }, {
    key: "renderSubstring",
    value: function renderSubstring(string, key) {
      // set substring span to hidden, so that Emojis are not shown double in Mobile Safari
      return React.createElement("span", _extends$1({}, this.props.style('substring'), {
        key: key
      }), string);
    } // Returns a clone of the Mention child applicable for the specified type to be rendered inside the highlighter

  }, {
    key: "getMentionComponentForMatch",
    value: function getMentionComponentForMatch(id, display, mentionChildIndex, key) {
      var props = {
        id: id,
        display: display,
        key: key
      };
      var child = Children.toArray(this.props.children)[mentionChildIndex];
      return React.cloneElement(child, props);
    } // Renders an component to be inserted in the highlighter at the current caret position

  }, {
    key: "renderHighlighterCaret",
    value: function renderHighlighterCaret(children) {
      return React.createElement("span", _extends$1({}, this.props.style('caret'), {
        ref: this.setCaretElement,
        key: "caret"
      }), children);
    }
  }]);

  return Highlighter;
}(Component);

_defineProperty$1(Highlighter, "propTypes", {
  selectionStart: propTypes.number,
  selectionEnd: propTypes.number,
  value: propTypes.string.isRequired,
  onCaretPositionChange: propTypes.func.isRequired,
  containerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: typeof Element === 'undefined' ? propTypes.any : propTypes.instanceOf(Element)
  })]),
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)]).isRequired
});

_defineProperty$1(Highlighter, "defaultProps", {
  value: ''
});

var styled = createDefaultStyle({
  position: 'relative',
  boxSizing: 'border-box',
  width: '100%',
  color: 'transparent',
  overflow: 'hidden',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  border: '1px solid transparent',
  textAlign: 'start',
  '&singleLine': {
    whiteSpace: 'pre',
    wordWrap: null
  },
  substring: {
    visibility: 'hidden'
  }
}, function (props) {
  return {
    '&singleLine': props.singleLine
  };
});
var Highlighter$1 = styled(Highlighter);

var Suggestion =
/*#__PURE__*/
function (_Component) {
  _inherits$1(Suggestion, _Component);

  function Suggestion() {
    _classCallCheck$1(this, Suggestion);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(Suggestion).apply(this, arguments));
  }

  _createClass$1(Suggestion, [{
    key: "render",
    value: function render() {
      var rest = omit$1(this.props, ['style', 'classNames', 'className'], // substyle props
      keys$1(Suggestion.propTypes));
      return React.createElement("li", _extends$1({}, rest, this.props.style), this.renderContent());
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          query = _this$props.query,
          renderSuggestion = _this$props.renderSuggestion,
          suggestion = _this$props.suggestion,
          index = _this$props.index,
          focused = _this$props.focused;
      var display = this.getDisplay();
      var highlightedDisplay = this.renderHighlightedDisplay(display, query);

      if (renderSuggestion) {
        return renderSuggestion(suggestion, query, highlightedDisplay, index, focused);
      }

      return highlightedDisplay;
    }
  }, {
    key: "getDisplay",
    value: function getDisplay() {
      var suggestion = this.props.suggestion;

      if (suggestion instanceof String) {
        return suggestion;
      }

      var id = suggestion.id,
          display = suggestion.display;

      if (id === undefined || !display) {
        return id;
      }

      return display;
    }
  }, {
    key: "renderHighlightedDisplay",
    value: function renderHighlightedDisplay(display) {
      var _this$props2 = this.props,
          ignoreAccents = _this$props2.ignoreAccents,
          query = _this$props2.query,
          style = _this$props2.style;
      var i = getSubstringIndex(display, query, ignoreAccents);

      if (i === -1) {
        return React.createElement("span", style('display'), display);
      }

      return React.createElement("span", style('display'), display.substring(0, i), React.createElement("b", style('highlight'), display.substring(i, i + query.length)), display.substring(i + query.length));
    }
  }]);

  return Suggestion;
}(Component);

_defineProperty$1(Suggestion, "propTypes", {
  id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  query: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  ignoreAccents: propTypes.bool,
  suggestion: propTypes.oneOfType([propTypes.string, propTypes.shape({
    id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    display: propTypes.string
  })]).isRequired,
  renderSuggestion: propTypes.func,
  focused: propTypes.bool
});

var styled$1 = createDefaultStyle({
  cursor: 'pointer'
}, function (props) {
  return {
    '&focused': props.focused
  };
});
var Suggestion$1 = styled$1(Suggestion);

function LoadingIndicator() {
  var styles = useStyles();
  var spinnerStyles = styles('spinner');
  return React.createElement("div", styles, React.createElement("div", spinnerStyles, React.createElement("div", spinnerStyles(['element', 'element1'])), React.createElement("div", spinnerStyles(['element', 'element2'])), React.createElement("div", spinnerStyles(['element', 'element3'])), React.createElement("div", spinnerStyles(['element', 'element4'])), React.createElement("div", spinnerStyles(['element', 'element5']))));
}

var SuggestionsOverlay =
/*#__PURE__*/
function (_Component) {
  _inherits$1(SuggestionsOverlay, _Component);

  function SuggestionsOverlay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$1(this, SuggestionsOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf$1(SuggestionsOverlay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_this), "handleMouseEnter", function (index, ev) {
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(index);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "select", function (suggestion, queryInfo) {
      _this.props.onSelect(suggestion, queryInfo);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "setUlElement", function (el) {
      _this.ulElement = el;
    });

    return _this;
  }

  _createClass$1(SuggestionsOverlay, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.ulElement || this.ulElement.offsetHeight >= this.ulElement.scrollHeight || !this.props.scrollFocusedIntoView) {
        return;
      }

      var scrollTop = this.ulElement.scrollTop;

      var _this$ulElement$child = this.ulElement.children[this.props.focusIndex].getBoundingClientRect(),
          top = _this$ulElement$child.top,
          bottom = _this$ulElement$child.bottom;

      var _this$ulElement$getBo = this.ulElement.getBoundingClientRect(),
          topContainer = _this$ulElement$getBo.top;

      top = top - topContainer + scrollTop;
      bottom = bottom - topContainer + scrollTop;

      if (top < scrollTop) {
        this.ulElement.scrollTop = top;
      } else if (bottom > this.ulElement.offsetHeight) {
        this.ulElement.scrollTop = bottom - this.ulElement.offsetHeight;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          suggestions = _this$props.suggestions,
          isLoading = _this$props.isLoading,
          style = _this$props.style,
          onMouseDown = _this$props.onMouseDown,
          containerRef = _this$props.containerRef,
          position = _this$props.position,
          left = _this$props.left,
          top = _this$props.top; // do not show suggestions until there is some data

      if (countSuggestions(suggestions) === 0 && !isLoading) {
        return null;
      }

      return React.createElement("div", _extends$1({}, inline({
        position: position || 'absolute',
        left: left,
        top: top
      }, style), {
        onMouseDown: onMouseDown,
        ref: containerRef
      }), React.createElement("ul", _extends$1({
        ref: this.setUlElement
      }, style('list')), this.renderSuggestions()), this.renderLoadingIndicator());
    }
  }, {
    key: "renderSuggestions",
    value: function renderSuggestions() {
      var _this2 = this;

      return Object.values(this.props.suggestions).reduce(function (accResults, _ref) {
        var results = _ref.results,
            queryInfo = _ref.queryInfo;
        return [].concat(_toConsumableArray$1(accResults), _toConsumableArray$1(results.map(function (result, index) {
          return _this2.renderSuggestion(result, queryInfo, accResults.length + index);
        })));
      }, []);
    }
  }, {
    key: "renderSuggestion",
    value: function renderSuggestion(result, queryInfo, index) {
      var _this3 = this;

      var id = getID(result);
      var isFocused = index === this.props.focusIndex;
      var childIndex = queryInfo.childIndex,
          query = queryInfo.query;
      var renderSuggestion = Children.toArray(this.props.children)[childIndex].props.renderSuggestion;
      var ignoreAccents = this.props.ignoreAccents;
      return React.createElement(Suggestion$1, {
        style: this.props.style('item'),
        key: "".concat(childIndex, "-").concat(id),
        id: id,
        query: query,
        index: index,
        ignoreAccents: ignoreAccents,
        renderSuggestion: renderSuggestion,
        suggestion: result,
        focused: isFocused,
        onClick: function onClick() {
          return _this3.select(result, queryInfo);
        },
        onMouseEnter: function onMouseEnter() {
          return _this3.handleMouseEnter(index);
        }
      });
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      if (!this.props.isLoading) {
        return;
      }

      return React.createElement(LoadingIndicator, {
        style: this.props.style('loadingIndicator')
      });
    }
  }]);

  return SuggestionsOverlay;
}(Component);

_defineProperty$1(SuggestionsOverlay, "propTypes", {
  suggestions: propTypes.object.isRequired,
  focusIndex: propTypes.number,
  position: propTypes.string,
  left: propTypes.number,
  top: propTypes.number,
  scrollFocusedIntoView: propTypes.bool,
  isLoading: propTypes.bool,
  onSelect: propTypes.func,
  ignoreAccents: propTypes.bool,
  containerRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: typeof Element === 'undefined' ? propTypes.any : propTypes.instanceOf(Element)
  })]),
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)]).isRequired
});

_defineProperty$1(SuggestionsOverlay, "defaultProps", {
  suggestions: {},
  onSelect: function onSelect() {
    return null;
  }
});

var getID = function getID(suggestion) {
  if (suggestion instanceof String) {
    return suggestion;
  }

  return suggestion.id;
};

var styled$2 = createDefaultStyle({
  zIndex: 1,
  backgroundColor: 'white',
  marginTop: 14,
  minWidth: 100,
  list: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
});
var SuggestionsOverlay$1 = styled$2(SuggestionsOverlay);

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var makeTriggerRegex = function makeTriggerRegex(trigger) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (trigger instanceof RegExp) {
    return trigger;
  } else {
    var allowSpaceInQuery = options.allowSpaceInQuery;
    var escapedTriggerChar = escapeRegex(trigger); // first capture group is the part to be replaced on completion
    // second capture group is for extracting the search query

    return new RegExp("(?:^|\\s)(".concat(escapedTriggerChar, "([^").concat(allowSpaceInQuery ? '' : '\\s').concat(escapedTriggerChar, "]*))$"));
  }
};

var getDataProvider = function getDataProvider(data, ignoreAccents) {
  if (data instanceof Array) {
    // if data is an array, create a function to query that
    return function (query, callback) {
      var results = [];

      for (var i = 0, l = data.length; i < l; ++i) {
        var display = data[i].display || data[i].id;

        if (getSubstringIndex(display, query, ignoreAccents) >= 0) {
          results.push(data[i]);
        }
      }

      return results;
    };
  } else {
    // expect data to be a query function
    return data;
  }
};

var KEY = {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  UP: 38,
  DOWN: 40
};
var isComposing = false;
var propTypes$1 = {
  /**
   * If set to `true` a regular text input element will be rendered
   * instead of a textarea
   */
  singleLine: propTypes.bool,
  allowSpaceInQuery: propTypes.bool,
  allowSuggestionsAboveCursor: propTypes.bool,
  ignoreAccents: propTypes.bool,
  value: propTypes.string,
  onKeyDown: propTypes.func,
  onSelect: propTypes.func,
  onBlur: propTypes.func,
  onChange: propTypes.func,
  suggestionsPortalHost: typeof Element === 'undefined' ? propTypes.any : propTypes.PropTypes.instanceOf(Element),
  inputRef: propTypes.oneOfType([propTypes.func, propTypes.shape({
    current: typeof Element === 'undefined' ? propTypes.any : propTypes.instanceOf(Element)
  })]),
  children: propTypes.oneOfType([propTypes.element, propTypes.arrayOf(propTypes.element)]).isRequired
};

var MentionsInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(MentionsInput, _React$Component);

  function MentionsInput(_props) {
    var _this;

    _classCallCheck$1(this, MentionsInput);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(MentionsInput).call(this, _props));

    _defineProperty$1(_assertThisInitialized$1(_this), "setContainerElement", function (el) {
      _this.containerElement = el;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getInputProps", function () {
      var _this$props = _this.props,
          readOnly = _this$props.readOnly,
          disabled = _this$props.disabled,
          style = _this$props.style; // pass all props that neither we, nor substyle, consume through to the input control

      var props = omit$1(_this.props, ['style', 'classNames', 'className'], // substyle props
      keys$1(propTypes$1));
      return _objectSpread$3({}, props, {}, style('input'), {
        value: _this.getPlainText()
      }, !readOnly && !disabled && {
        onChange: _this.handleChange,
        onSelect: _this.handleSelect,
        onKeyDown: _this.handleKeyDown,
        onBlur: _this.handleBlur,
        onCompositionStart: _this.handleCompositionStart,
        onCompositionEnd: _this.handleCompositionEnd,
        onScroll: _this.updateHighlighterScroll
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderControl", function () {
      var _this$props2 = _this.props,
          singleLine = _this$props2.singleLine,
          style = _this$props2.style;

      var inputProps = _this.getInputProps();

      return React.createElement("div", style('control'), _this.renderHighlighter(), singleLine ? _this.renderInput(inputProps) : _this.renderTextarea(inputProps));
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderInput", function (props) {
      return React.createElement("input", _extends$1({
        type: "text",
        ref: _this.setInputRef
      }, props));
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderTextarea", function (props) {
      return React.createElement("textarea", _extends$1({
        ref: _this.setInputRef
      }, props));
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "setInputRef", function (el) {
      _this.inputElement = el;
      var inputRef = _this.props.inputRef;

      if (typeof inputRef === 'function') {
        inputRef(el);
      } else if (inputRef) {
        inputRef.current = el;
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "setSuggestionsElement", function (el) {
      _this.suggestionsElement = el;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderSuggestionsOverlay", function () {
      if (!isNumber$1(_this.state.selectionStart)) {
        // do not show suggestions when the input does not have the focus
        return null;
      }

      var _this$state$suggestio = _this.state.suggestionsPosition,
          position = _this$state$suggestio.position,
          left = _this$state$suggestio.left,
          top = _this$state$suggestio.top;
      var suggestionsNode = React.createElement(SuggestionsOverlay$1, {
        style: _this.props.style('suggestions'),
        position: position,
        left: left,
        top: top,
        focusIndex: _this.state.focusIndex,
        scrollFocusedIntoView: _this.state.scrollFocusedIntoView,
        containerRef: _this.setSuggestionsElement,
        suggestions: _this.state.suggestions,
        onSelect: _this.addMention,
        onMouseDown: _this.handleSuggestionsMouseDown,
        onMouseEnter: _this.handleSuggestionsMouseEnter,
        isLoading: _this.isLoading(),
        ignoreAccents: _this.props.ignoreAccents
      }, _this.props.children);

      if (_this.props.suggestionsPortalHost) {
        return ReactDOM.createPortal(suggestionsNode, _this.props.suggestionsPortalHost);
      } else {
        return suggestionsNode;
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderHighlighter", function () {
      var _this$state = _this.state,
          selectionStart = _this$state.selectionStart,
          selectionEnd = _this$state.selectionEnd;
      var _this$props3 = _this.props,
          singleLine = _this$props3.singleLine,
          children = _this$props3.children,
          value = _this$props3.value,
          style = _this$props3.style;
      return React.createElement(Highlighter$1, {
        containerRef: _this.setHighlighterElement,
        style: style('highlighter'),
        value: value,
        singleLine: singleLine,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        onCaretPositionChange: _this.handleCaretPositionChange
      }, children);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "setHighlighterElement", function (el) {
      _this.highlighterElement = el;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleCaretPositionChange", function (position) {
      _this.setState({
        caretPosition: position
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getPlainText", function () {
      return getPlainText(_this.props.value || '', readConfigFromChildren(_this.props.children));
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "executeOnChange", function (event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (_this.props.onChange) {
        var _this$props4;

        return (_this$props4 = _this.props).onChange.apply(_this$props4, [event].concat(args));
      }

      if (_this.props.valueLink) {
        var _this$props$valueLink;

        return (_this$props$valueLink = _this.props.valueLink).requestChange.apply(_this$props$valueLink, [event.target.value].concat(args));
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleChange", function (ev) {
      isComposing = false; // if we are inside iframe, we need to find activeElement within its contentDocument

      var currentDocument = document.activeElement && document.activeElement.contentDocument || document;

      if (currentDocument.activeElement !== ev.target) {
        // fix an IE bug (blur from empty input element with placeholder attribute trigger "input" event)
        return;
      }

      var value = _this.props.value || '';
      var config = readConfigFromChildren(_this.props.children);
      var newPlainTextValue = ev.target.value; // Derive the new value to set by applying the local change in the textarea's plain text

      var newValue = applyChangeToValue(value, newPlainTextValue, {
        selectionStartBefore: _this.state.selectionStart,
        selectionEndBefore: _this.state.selectionEnd,
        selectionEndAfter: ev.target.selectionEnd
      }, config); // In case a mention is deleted, also adjust the new plain text value

      newPlainTextValue = getPlainText(newValue, config); // Save current selection after change to be able to restore caret position after rerendering

      var selectionStart = ev.target.selectionStart;
      var selectionEnd = ev.target.selectionEnd;
      var setSelectionAfterMentionChange = false; // Adjust selection range in case a mention will be deleted by the characters outside of the
      // selection range that are automatically deleted

      var startOfMention = findStartOfMentionInPlainText(value, config, selectionStart);

      if (startOfMention !== undefined && _this.state.selectionEnd > startOfMention) {
        // only if a deletion has taken place
        selectionStart = startOfMention;
        selectionEnd = selectionStart;
        setSelectionAfterMentionChange = true;
      }

      _this.setState({
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        setSelectionAfterMentionChange: setSelectionAfterMentionChange
      });

      var mentions = getMentions(newValue, config); // Propagate change
      // let handleChange = this.getOnChange(this.props) || emptyFunction;

      var eventMock = {
        target: {
          value: newValue
        }
      }; // this.props.onChange.call(this, eventMock, newValue, newPlainTextValue, mentions);

      _this.executeOnChange(eventMock, newValue, newPlainTextValue, mentions);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleSelect", function (ev) {
      // keep track of selection range / caret position
      _this.setState({
        selectionStart: ev.target.selectionStart,
        selectionEnd: ev.target.selectionEnd
      }); // do nothing while a IME composition session is active


      if (isComposing) return; // refresh suggestions queries

      var el = _this.inputElement;

      if (ev.target.selectionStart === ev.target.selectionEnd) {
        _this.updateMentionsQueries(el.value, ev.target.selectionStart);
      } else {
        _this.clearSuggestions();
      } // sync highlighters scroll position


      _this.updateHighlighterScroll();

      _this.props.onSelect(ev);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleKeyDown", function (ev) {
      // do not intercept key events if the suggestions overlay is not shown
      var suggestionsCount = countSuggestions(_this.state.suggestions);

      if (suggestionsCount === 0 || !_this.suggestionsElement) {
        _this.props.onKeyDown(ev);

        return;
      }

      if (Object.values(KEY).indexOf(ev.keyCode) >= 0) {
        ev.preventDefault();
      }

      switch (ev.keyCode) {
        case KEY.ESC:
          {
            _this.clearSuggestions();

            return;
          }

        case KEY.DOWN:
          {
            _this.shiftFocus(+1);

            return;
          }

        case KEY.UP:
          {
            _this.shiftFocus(-1);

            return;
          }

        case KEY.RETURN:
          {
            _this.selectFocused();

            return;
          }

        case KEY.TAB:
          {
            _this.selectFocused();

            return;
          }

        default:
          {
            return;
          }
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "shiftFocus", function (delta) {
      var suggestionsCount = countSuggestions(_this.state.suggestions);

      _this.setState({
        focusIndex: (suggestionsCount + _this.state.focusIndex + delta) % suggestionsCount,
        scrollFocusedIntoView: true
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "selectFocused", function () {
      var _this$state2 = _this.state,
          suggestions = _this$state2.suggestions,
          focusIndex = _this$state2.focusIndex;
      var _Object$values$reduce = Object.values(suggestions).reduce(function (acc, _ref) {
        var results = _ref.results,
            queryInfo = _ref.queryInfo;
        return [].concat(_toConsumableArray$1(acc), _toConsumableArray$1(results.map(function (result) {
          return {
            result: result,
            queryInfo: queryInfo
          };
        })));
      }, [])[focusIndex],
          result = _Object$values$reduce.result,
          queryInfo = _Object$values$reduce.queryInfo;

      _this.addMention(result, queryInfo);

      _this.setState({
        focusIndex: 0
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleBlur", function (ev) {
      var clickedSuggestion = _this._suggestionsMouseDown;
      _this._suggestionsMouseDown = false; // only reset selection if the mousedown happened on an element
      // other than the suggestions overlay

      if (!clickedSuggestion) {
        _this.setState({
          selectionStart: null,
          selectionEnd: null
        });
      }

      window.setTimeout(function () {
        _this.updateHighlighterScroll();
      }, 1);

      _this.props.onBlur(ev, clickedSuggestion);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleSuggestionsMouseDown", function (ev) {
      _this._suggestionsMouseDown = true;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleSuggestionsMouseEnter", function (focusIndex) {
      _this.setState({
        focusIndex: focusIndex,
        scrollFocusedIntoView: false
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateSuggestionsPosition", function () {
      var caretPosition = _this.state.caretPosition;
      var _this$props5 = _this.props,
          suggestionsPortalHost = _this$props5.suggestionsPortalHost,
          allowSuggestionsAboveCursor = _this$props5.allowSuggestionsAboveCursor;

      if (!caretPosition || !_this.suggestionsElement) {
        return;
      }

      var suggestions = _this.suggestionsElement;
      var highlighter = _this.highlighterElement; // first get viewport-relative position (highlighter is offsetParent of caret):

      var caretOffsetParentRect = highlighter.getBoundingClientRect();
      var caretHeight = getComputedStyleLengthProp(highlighter, 'font-size');
      var viewportRelative = {
        left: caretOffsetParentRect.left + caretPosition.left,
        top: caretOffsetParentRect.top + caretPosition.top + caretHeight
      };
      var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      if (!suggestions) {
        return;
      }

      var position = {}; // if suggestions menu is in a portal, update position to be releative to its portal node

      if (suggestionsPortalHost) {
        position.position = 'fixed';
        var left = viewportRelative.left;
        var top = viewportRelative.top; // absolute/fixed positioned elements are positioned according to their entire box including margins; so we remove margins here:

        left -= getComputedStyleLengthProp(suggestions, 'margin-left');
        top -= getComputedStyleLengthProp(suggestions, 'margin-top'); // take into account highlighter/textinput scrolling:

        left -= highlighter.scrollLeft;
        top -= highlighter.scrollTop; // guard for mentions suggestions list clipped by right edge of window

        var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (left + suggestions.offsetWidth > viewportWidth) {
          position.left = Math.max(0, viewportWidth - suggestions.offsetWidth);
        } else {
          position.left = left;
        } // guard for mentions suggestions list clipped by bottom edge of window if allowSuggestionsAboveCursor set to true.
        // Move the list up above the caret if it's getting cut off by the bottom of the window, provided that the list height
        // is small enough to NOT cover up the caret


        if (allowSuggestionsAboveCursor && top + suggestions.offsetHeight > viewportHeight && suggestions.offsetHeight < top - caretHeight) {
          position.top = Math.max(0, top - suggestions.offsetHeight - caretHeight);
        } else {
          position.top = top;
        }
      } else {
        var _left = caretPosition.left - highlighter.scrollLeft;

        var _top = caretPosition.top - highlighter.scrollTop; // guard for mentions suggestions list clipped by right edge of window


        if (_left + suggestions.offsetWidth > _this.containerElement.offsetWidth) {
          position.right = 0;
        } else {
          position.left = _left;
        } // guard for mentions suggestions list clipped by bottom edge of window if allowSuggestionsAboveCursor set to true.
        // move the list up above the caret if it's getting cut off by the bottom of the window, provided that the list height
        // is small enough to NOT cover up the caret


        if (allowSuggestionsAboveCursor && viewportRelative.top - highlighter.scrollTop + suggestions.offsetHeight > viewportHeight && suggestions.offsetHeight < caretOffsetParentRect.top - caretHeight - highlighter.scrollTop) {
          position.top = _top - suggestions.offsetHeight - caretHeight;
        } else {
          position.top = _top;
        }
      }

      if (position.left === _this.state.suggestionsPosition.left && position.top === _this.state.suggestionsPosition.top && position.position === _this.state.suggestionsPosition.position) {
        return;
      }

      _this.setState({
        suggestionsPosition: position
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateHighlighterScroll", function () {
      var input = _this.inputElement;
      var highlighter = _this.highlighterElement;

      if (!input || !highlighter) {
        // since the invocation of this function is deferred,
        // the whole component may have been unmounted in the meanwhile
        return;
      }

      highlighter.scrollLeft = input.scrollLeft;
      highlighter.scrollTop = input.scrollTop;
      highlighter.height = input.height;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleCompositionStart", function () {
      isComposing = true;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleCompositionEnd", function () {
      isComposing = false;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "setSelection", function (selectionStart, selectionEnd) {
      if (selectionStart === null || selectionEnd === null) return;
      var el = _this.inputElement;

      if (el.setSelectionRange) {
        el.setSelectionRange(selectionStart, selectionEnd);
      } else if (el.createTextRange) {
        var range = el.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateMentionsQueries", function (plainTextValue, caretPosition) {
      // Invalidate previous queries. Async results for previous queries will be neglected.
      _this._queryId++;
      _this.suggestions = {};

      _this.setState({
        suggestions: {}
      });

      var value = _this.props.value || '';
      var children = _this.props.children;
      var config = readConfigFromChildren(children);
      var positionInValue = mapPlainTextIndex(value, config, caretPosition, 'NULL'); // If caret is inside of mention, do not query

      if (positionInValue === null) {
        return;
      } // Extract substring in between the end of the previous mention and the caret


      var substringStartIndex = getEndOfLastMention(value.substring(0, positionInValue), config);
      var substring = plainTextValue.substring(substringStartIndex, caretPosition); // Check if suggestions have to be shown:
      // Match the trigger patterns of all Mention children on the extracted substring

      React.Children.forEach(children, function (child, childIndex) {
        if (!child) {
          return;
        }

        var regex = makeTriggerRegex(child.props.trigger, _this.props);
        var match = substring.match(regex);

        if (match) {
          var querySequenceStart = substringStartIndex + substring.indexOf(match[1], match.index);

          _this.queryData(match[2], childIndex, querySequenceStart, querySequenceStart + match[1].length, plainTextValue);
        }
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "clearSuggestions", function () {
      // Invalidate previous queries. Async results for previous queries will be neglected.
      _this._queryId++;
      _this.suggestions = {};

      _this.setState({
        suggestions: {},
        focusIndex: 0
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "queryData", function (query, childIndex, querySequenceStart, querySequenceEnd, plainTextValue) {
      var _this$props6 = _this.props,
          children = _this$props6.children,
          ignoreAccents = _this$props6.ignoreAccents;
      var mentionChild = Children.toArray(children)[childIndex];
      var provideData = getDataProvider(mentionChild.props.data, ignoreAccents);
      var syncResult = provideData(query, _this.updateSuggestions.bind(null, _this._queryId, childIndex, query, querySequenceStart, querySequenceEnd, plainTextValue));

      if (syncResult instanceof Array) {
        _this.updateSuggestions(_this._queryId, childIndex, query, querySequenceStart, querySequenceEnd, plainTextValue, syncResult);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateSuggestions", function (queryId, childIndex, query, querySequenceStart, querySequenceEnd, plainTextValue, results) {
      // neglect async results from previous queries
      if (queryId !== _this._queryId) return; // save in property so that multiple sync state updates from different mentions sources
      // won't overwrite each other

      _this.suggestions = _objectSpread$3({}, _this.suggestions, _defineProperty$1({}, childIndex, {
        queryInfo: {
          childIndex: childIndex,
          query: query,
          querySequenceStart: querySequenceStart,
          querySequenceEnd: querySequenceEnd,
          plainTextValue: plainTextValue
        },
        results: results
      }));
      var focusIndex = _this.state.focusIndex;
      var suggestionsCount = countSuggestions(_this.suggestions);

      _this.setState({
        suggestions: _this.suggestions,
        focusIndex: focusIndex >= suggestionsCount ? Math.max(suggestionsCount - 1, 0) : focusIndex
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "addMention", function (_ref2, _ref3) {
      var id = _ref2.id,
          display = _ref2.display;
      var childIndex = _ref3.childIndex,
          querySequenceStart = _ref3.querySequenceStart,
          querySequenceEnd = _ref3.querySequenceEnd,
          plainTextValue = _ref3.plainTextValue;
      // Insert mention in the marked up value at the correct position
      var value = _this.props.value || '';
      var config = readConfigFromChildren(_this.props.children);
      var mentionsChild = Children.toArray(_this.props.children)[childIndex];
      var _mentionsChild$props = mentionsChild.props,
          markup = _mentionsChild$props.markup,
          displayTransform = _mentionsChild$props.displayTransform,
          appendSpaceOnAdd = _mentionsChild$props.appendSpaceOnAdd,
          onAdd = _mentionsChild$props.onAdd;
      var start = mapPlainTextIndex(value, config, querySequenceStart, 'START');
      var end = start + querySequenceEnd - querySequenceStart;
      var insert = makeMentionsMarkup(markup, id, display);

      if (appendSpaceOnAdd) {
        insert += ' ';
      }

      var newValue = spliceString(value, start, end, insert); // Refocus input and set caret position to end of mention

      _this.inputElement.focus();

      var displayValue = displayTransform(id, display);

      if (appendSpaceOnAdd) {
        displayValue += ' ';
      }

      var newCaretPosition = querySequenceStart + displayValue.length;

      _this.setState({
        selectionStart: newCaretPosition,
        selectionEnd: newCaretPosition,
        setSelectionAfterMentionChange: true
      }); // Propagate change


      var eventMock = {
        target: {
          value: newValue
        }
      };
      var mentions = getMentions(newValue, config);
      var newPlainTextValue = spliceString(plainTextValue, querySequenceStart, querySequenceEnd, displayValue);

      _this.executeOnChange(eventMock, newValue, newPlainTextValue, mentions);

      if (onAdd) {
        onAdd(id, display);
      } // Make sure the suggestions overlay is closed


      _this.clearSuggestions();
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "isLoading", function () {
      var isLoading = false;
      React.Children.forEach(_this.props.children, function (child) {
        isLoading = isLoading || child && child.props.isLoading;
      });
      return isLoading;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "_queryId", 0);

    _this.suggestions = {};
    _this.handleCopy = _this.handleCopy.bind(_assertThisInitialized$1(_this));
    _this.handleCut = _this.handleCut.bind(_assertThisInitialized$1(_this));
    _this.handlePaste = _this.handlePaste.bind(_assertThisInitialized$1(_this));
    _this.state = {
      focusIndex: 0,
      selectionStart: null,
      selectionEnd: null,
      suggestions: {},
      caretPosition: null,
      suggestionsPosition: {}
    };
    return _this;
  }

  _createClass$1(MentionsInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('copy', this.handleCopy);
      document.addEventListener('cut', this.handleCut);
      document.addEventListener('paste', this.handlePaste);
      this.updateSuggestionsPosition();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Update position of suggestions unless this componentDidUpdate was
      // triggered by an update to suggestionsPosition.
      if (prevState.suggestionsPosition === this.state.suggestionsPosition) {
        this.updateSuggestionsPosition();
      } // maintain selection in case a mention is added/removed causing
      // the cursor to jump to the end


      if (this.state.setSelectionAfterMentionChange) {
        this.setState({
          setSelectionAfterMentionChange: false
        });
        this.setSelection(this.state.selectionStart, this.state.selectionEnd);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('copy', this.handleCopy);
      document.removeEventListener('cut', this.handleCut);
      document.removeEventListener('paste', this.handlePaste);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", _extends$1({
        ref: this.setContainerElement
      }, this.props.style), this.renderControl(), this.renderSuggestionsOverlay());
    }
  }, {
    key: "handlePaste",
    value: function handlePaste(event) {
      if (event.target !== this.inputElement) {
        return;
      }

      if (!this.supportsClipboardActions(event)) {
        return;
      }

      event.preventDefault();
      var _this$state3 = this.state,
          selectionStart = _this$state3.selectionStart,
          selectionEnd = _this$state3.selectionEnd;
      var _this$props7 = this.props,
          value = _this$props7.value,
          children = _this$props7.children;
      var config = readConfigFromChildren(children);
      var markupStartIndex = mapPlainTextIndex(value, config, selectionStart, 'START');
      var markupEndIndex = mapPlainTextIndex(value, config, selectionEnd, 'END');
      var pastedMentions = event.clipboardData.getData('text/react-mentions');
      var pastedData = event.clipboardData.getData('text/plain');
      var newValue = spliceString(value, markupStartIndex, markupEndIndex, pastedMentions || pastedData).replace(/\r/g, '');
      var newPlainTextValue = getPlainText(newValue, config);
      var eventMock = {
        target: _objectSpread$3({}, event.target, {
          value: newValue
        })
      };
      this.executeOnChange(eventMock, newValue, newPlainTextValue, getMentions(newValue, config));
    }
  }, {
    key: "saveSelectionToClipboard",
    value: function saveSelectionToClipboard(event) {
      var _this$state4 = this.state,
          selectionStart = _this$state4.selectionStart,
          selectionEnd = _this$state4.selectionEnd;
      var _this$props8 = this.props,
          children = _this$props8.children,
          value = _this$props8.value;
      var config = readConfigFromChildren(children);
      var markupStartIndex = mapPlainTextIndex(value, config, selectionStart, 'START');
      var markupEndIndex = mapPlainTextIndex(value, config, selectionEnd, 'END');
      event.clipboardData.setData('text/plain', event.target.value.slice(selectionStart, selectionEnd));
      event.clipboardData.setData('text/react-mentions', value.slice(markupStartIndex, markupEndIndex));
    }
  }, {
    key: "supportsClipboardActions",
    value: function supportsClipboardActions(event) {
      return !!event.clipboardData;
    }
  }, {
    key: "handleCopy",
    value: function handleCopy(event) {
      if (event.target !== this.inputElement) {
        return;
      }

      if (!this.supportsClipboardActions(event)) {
        return;
      }

      event.preventDefault();
      this.saveSelectionToClipboard(event);
    }
  }, {
    key: "handleCut",
    value: function handleCut(event) {
      if (event.target !== this.inputElement) {
        return;
      }

      if (!this.supportsClipboardActions(event)) {
        return;
      }

      event.preventDefault();
      this.saveSelectionToClipboard(event);
      var _this$state5 = this.state,
          selectionStart = _this$state5.selectionStart,
          selectionEnd = _this$state5.selectionEnd;
      var _this$props9 = this.props,
          children = _this$props9.children,
          value = _this$props9.value;
      var config = readConfigFromChildren(children);
      var markupStartIndex = mapPlainTextIndex(value, config, selectionStart, 'START');
      var markupEndIndex = mapPlainTextIndex(value, config, selectionEnd, 'END');
      var newValue = [value.slice(0, markupStartIndex), value.slice(markupEndIndex)].join('');
      var newPlainTextValue = getPlainText(newValue, config);
      var eventMock = {
        target: _objectSpread$3({}, event.target, {
          value: newPlainTextValue
        })
      };
      this.executeOnChange(eventMock, newValue, newPlainTextValue, getMentions(value, config));
    } // Handle input element's change event

  }]);

  return MentionsInput;
}(React.Component);
/**
 * Returns the computed length property value for the provided element.
 * Note: According to spec and testing, can count on length values coming back in pixels. See https://developer.mozilla.org/en-US/docs/Web/CSS/used_value#Difference_from_computed_value
 */


_defineProperty$1(MentionsInput, "propTypes", propTypes$1);

_defineProperty$1(MentionsInput, "defaultProps", {
  ignoreAccents: false,
  singleLine: false,
  allowSuggestionsAboveCursor: false,
  onKeyDown: function onKeyDown() {
    return null;
  },
  onSelect: function onSelect() {
    return null;
  },
  onBlur: function onBlur() {
    return null;
  }
});

var getComputedStyleLengthProp = function getComputedStyleLengthProp(forElement, propertyName) {
  var length = parseFloat(window.getComputedStyle(forElement, null).getPropertyValue(propertyName));
  return isFinite(length) ? length : 0;
};

var isMobileSafari = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);
var styled$3 = createDefaultStyle({
  position: 'relative',
  overflowY: 'visible',
  input: {
    display: 'block',
    width: '100%',
    position: 'absolute',
    margin: 0,
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    letterSpacing: 'inherit'
  },
  '&multiLine': {
    input: _objectSpread$3({
      height: '100%',
      bottom: 0,
      overflow: 'hidden',
      resize: 'none'
    }, isMobileSafari ? {
      marginTop: 1,
      marginLeft: -3
    } : null)
  }
}, function (_ref4) {
  var singleLine = _ref4.singleLine;
  return {
    '&singleLine': singleLine,
    '&multiLine': !singleLine
  };
});
var MentionsInput$1 = styled$3(MentionsInput);

var defaultStyle = {
  fontWeight: 'inherit'
};

var Mention = function Mention(_ref) {
  var display = _ref.display,
      style = _ref.style,
      className = _ref.className,
      classNames = _ref.classNames;
  var styles = useStyles(defaultStyle, {
    style: style,
    className: className,
    classNames: classNames
  });
  return React.createElement("strong", styles, display);
};

Mention.propTypes = {
  /**
   * Called when a new mention is added in the input
   *
   * Example:
   *
   * ```js
   * function(id, display) {
   *   console.log("user " + display + " was mentioned!");
   * }
   * ```
   */
  onAdd: propTypes.func,
  onRemove: propTypes.func,
  renderSuggestion: propTypes.func,
  trigger: propTypes.oneOfType([propTypes.string, propTypes.instanceOf(RegExp)]),
  markup: propTypes.string,
  displayTransform: propTypes.func,

  /**
   * If set to `true` spaces will not interrupt matching suggestions
   */
  allowSpaceInQuery: propTypes.bool,
  isLoading: propTypes.bool
};
Mention.defaultProps = {
  trigger: '@',
  markup: '@[__display__](__id__)',
  displayTransform: function displayTransform(id, display) {
    return display || id;
  },
  onAdd: function onAdd() {
    return null;
  },
  onRemove: function onRemove() {
    return null;
  },
  renderSuggestion: null,
  isLoading: false,
  appendSpaceOnAdd: false
};

var _templateObject$h, _templateObject2$5;
var StyledChatAvatar = styled$4(_Avatar)(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["\n  &.ant-avatar {\n    font-size: 14px;\n    background: ", ";\n    font-weight: ", ";\n    color: ", ";\n  }\n"])), function (props) {
  return props.bg;
}, LUP_MAIN_FONT_BOLD600, WHITE);
var StyledChatBadge = styled$4(_Badge)(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["\n &.ant-badge-count, .ant-badge-dot, .ant-badge .ant-scroll-number-custom-component {\n   height: 10px;\n   width: 10px;\n }\n"])));

var avatarColor = {
  'internal': LUP_BASE_BLUE_DARK,
  'external': LUP_SECONDARY_DEEP_YELLOW
};

var ChatAvatar = function ChatAvatar(_ref) {
  var children = _ref.children,
      type = _ref.type,
      showDot = _ref.showDot;
  var avatar = /*#__PURE__*/React.createElement(StyledChatAvatar, {
    bg: avatarColor[type]
  }, children);

  if (showDot) {
    return /*#__PURE__*/React.createElement(StyledChatBadge, {
      offset: [-4, 4],
      color: LUP_FUNCTIONAL_ERROR_RED,
      dot: true
    }, "ChatAvatar", avatar);
  }

  return avatar;
};

ChatAvatar.propTypes = {
  children: propTypes.string,
  type: propTypes.oneOf(['internal', 'external']),
  showDot: propTypes.bool
};
ChatAvatar.defaultProps = {
  children: '',
  type: 'internal',
  showDot: false
};

var _templateObject$i;
var StyledMentionBottomArrow = styled$4.div(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["\nleft: 50%;\nbottom: -4.8px;\ntransform: translateX(-50%) rotate(45deg);\nborder-color: ", " transparent transparent ", ";\nbox-shadow: 3px 3px 7px rgba(0,0,0,.07);\nposition: absolute;\nz-index: 1;\ndisplay: block;\nposition: absolute;\nwidth: 12px;\nheight: 10px;\nbackground: ", ";\nborder-style: solid;\nborder-width: 4.24264069px;\n"])), WHITE, WHITE, WHITE);

var ChatReactMentions = function ChatReactMentions(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      users = _ref.users;
  return /*#__PURE__*/React.createElement(MentionsInput$1, {
    value: value,
    onChange: onChange,
    markup: "@{{__type__||__id__||__display__}}",
    placeholder: placeholder,
    className: "mentions",
    allowSuggestionsAboveCursor: true
  }, /*#__PURE__*/React.createElement(Mention, {
    type: "user",
    trigger: "@",
    data: users.map(function (user) {
      return {
        id: user.id,
        display: user.name
      };
    }),
    className: "mentions__mention",
    renderSuggestion: function renderSuggestion(entry, search, highlightedDisplay, index, focused) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, index === users.length - 1 ? /*#__PURE__*/React.createElement(StyledMentionBottomArrow, null) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(ChatAvatar, null, entry.display.split(' ').map(function (i) {
        return i.charAt(0);
      })), /*#__PURE__*/React.createElement(StyledText, {
        style: {
          paddingLeft: '8px'
        }
      }, entry.display));
    }
  }));
};

ChatReactMentions.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  users: propTypes.arrayOf({
    id: propTypes.string,
    name: propTypes.string
  })
};
ChatReactMentions.defaultProps = {
  value: "",
  onChange: function onChange() {},
  placeholder: "Add Comment...",
  users: [{
    id: '1',
    name: 'Abcd'
  }]
};

var CustomDropDown = function CustomDropDown(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      props = _objectWithoutProperties(_ref, ["children", "visible"]);

  return visible ? /*#__PURE__*/React.createElement(_Dropdown, props, children) : /*#__PURE__*/React.createElement(_Dropdown, _extends({
    visible: false
  }, props), children);
};

CustomDropDown.propTypes = {
  children: propTypes.node.isRequired,
  visible: propTypes.bool.isRequired
};

var Cross = "data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.15227%206L11.7614%2010.6091C12.0795%2010.9273%2012.0795%2011.4432%2011.7614%2011.7614C11.4432%2012.0795%2010.9273%2012.0795%2010.6091%2011.7614L6%207.15227L1.39091%2011.7614C1.07272%2012.0795%200.556834%2012.0795%200.238643%2011.7614C-0.0795477%2011.4432%20-0.0795477%2010.9273%200.238643%2010.6091L4.84773%206L0.238643%201.39091C-0.0795477%201.07272%20-0.0795477%200.556834%200.238643%200.238643C0.556834%20-0.0795477%201.07272%20-0.0795477%201.39091%200.238643L6%204.84773L10.6091%200.238643C10.9273%20-0.0795477%2011.4432%20-0.0795477%2011.7614%200.238643C12.0795%200.556834%2012.0795%201.07272%2011.7614%201.39091L7.15227%206Z%22%20fill%3D%22%23A4A4A4%22%2F%3E%3C%2Fsvg%3E";

var _templateObject$j;
var StyledImage$2 = styled$4.img(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["\n  width: ", ";\n  height:  ", ";\n  position: relative;\n  margin: auto;\n  display: block;\n"])), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});

var Cross1 = function Cross1(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(StyledImage$2, {
    src: Cross,
    size: size,
    onClick: onClick
  });
};

Cross1.propTypes = {
  size: propTypes.string,
  onClick: propTypes.func
};
Cross1.defaultProps = {
  size: LUP_SPACING_12,
  onClick: function onClick() {}
};

var Cross$1 = "data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.82263%204.99999L9.11484%208.2922C9.34211%208.51948%209.34211%208.88797%209.11484%209.11525C8.88756%209.34253%208.51906%209.34253%208.29178%209.11525L4.99958%205.82304L1.70738%209.11525C1.4801%209.34253%201.11161%209.34253%200.884327%209.11525C0.657047%208.88797%200.657047%208.51948%200.884327%208.2922L4.17653%204.99999L0.884327%201.70779C0.657047%201.48051%200.657047%201.11202%200.884327%200.884739C1.11161%200.657459%201.4801%200.657459%201.70738%200.884739L4.99958%204.17694L8.29178%200.884739C8.51906%200.657459%208.88756%200.657459%209.11484%200.884739C9.34211%201.11202%209.34211%201.48051%209.11484%201.70779L5.82263%204.99999Z%22%20fill%3D%22%235D5D5D%22%2F%3E%3C%2Fsvg%3E";

var _templateObject$k;
var StyledImage$3 = styled$4.img(_templateObject$k || (_templateObject$k = _taggedTemplateLiteral(["\n  width: ", ";\n  height:  ", ";\n  position: relative;\n  margin: auto;\n  display: block;\n"])), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});

var Cross2 = function Cross2(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(StyledImage$3, {
    src: Cross$1,
    size: size,
    onClick: onClick
  });
};

Cross2.propTypes = {
  size: propTypes.string,
  onClick: propTypes.func
};
Cross2.defaultProps = {
  size: LUP_SPACING_12,
  onClick: function onClick() {}
};

var Cross$2 = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.9754%2011.9999L21.8767%2019.9012C22.4221%2020.4467%2022.4221%2021.3311%2021.8767%2021.8766C21.3312%2022.422%2020.4468%2022.422%2019.9014%2021.8766L12.0001%2013.9753L4.09878%2021.8766C3.55331%2022.422%202.66893%2022.422%202.12346%2021.8766C1.57799%2021.3311%201.57799%2020.4467%202.12346%2019.9012L10.0247%2011.9999L2.12346%204.09866C1.57799%203.55319%201.57799%202.66881%202.12346%202.12334C2.66893%201.57787%203.55331%201.57787%204.09878%202.12334L12.0001%2010.0246L19.9014%202.12334C20.4468%201.57787%2021.3312%201.57787%2021.8767%202.12334C22.4221%202.66881%2022.4221%203.55319%2021.8767%204.09866L13.9754%2011.9999Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

var _templateObject$l;
var StyledImage$4 = styled$4.img(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["\n  width: ", ";\n  height:  ", ";\n  position: relative;\n  margin: auto;\n  display: block;\n"])), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});

var Cross3 = function Cross3(_ref) {
  var size = _ref.size,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(StyledImage$4, {
    src: Cross$2,
    size: size,
    onClick: onClick
  });
};

Cross3.propTypes = {
  size: propTypes.string,
  onClick: propTypes.func
};
Cross3.defaultProps = {
  size: LUP_SPACING_12,
  onClick: function onClick() {}
};

var _templateObject$m;
var FormSpace = styled$4(StyledBlock)(_templateObject$m || (_templateObject$m = _taggedTemplateLiteral(["\n    height: ", ";\n"])), LUP_SPACING_20);

var _templateObject$n, _templateObject2$6;
var StyledChatAvatar$1 = styled$4(_Avatar)(_templateObject$n || (_templateObject$n = _taggedTemplateLiteral(["\n  &.ant-avatar {\n    font-size: 14px;\n    background: ", ";\n    font-weight: ", ";\n    color: ", ";\n    line-height: ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: ", ";\n    width: ", ";\n  }\n"])), function (props) {
  return props.bg;
}, LUP_MAIN_FONT_BOLD600, WHITE, LUP_SPACING_16, LUP_SPACING_28, LUP_SPACING_28);
var StyledChatBadge$1 = styled$4(_Badge)(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["\n &.ant-badge-count, .ant-badge-dot, .ant-badge .ant-scroll-number-custom-component {\n   height: 10px;\n   width: 10px;\n   background:", ";\n\n }\n"])), LUP_FUNCTIONAL_ERROR_RED);

var avatarColor$1 = {
  'internal': LUP_BASE_BLUE,
  'external': LUP_SECONDARY_DEEP_YELLOW
};

var ChatAvatar$1 = function ChatAvatar(_ref) {
  var children = _ref.children,
      type = _ref.type,
      showDot = _ref.showDot;
  var avatar = /*#__PURE__*/React.createElement(StyledChatAvatar$1, {
    bg: avatarColor$1[type]
  }, children);

  if (showDot) {
    return /*#__PURE__*/React.createElement(StyledChatBadge$1, {
      offset: [-4, 4],
      dot: true
    }, avatar);
  }

  return avatar;
};

ChatAvatar$1.propTypes = {
  children: propTypes.array,
  type: propTypes.oneOf(['internal', 'external']),
  showDot: propTypes.bool
};
ChatAvatar$1.defaultProps = {
  children: '',
  type: 'internal',
  showDot: false
};

var _templateObject$o, _templateObject2$7, _templateObject3$3;
var StyledChatListDivider = styled$4.div(_templateObject$o || (_templateObject$o = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background: ", ";\n  border-radius: 3px;\n\n  width: max-content;\n  margin: 0 auto;\n  margin-top: ", ";\n"])), LUP_SECONDARY_DEEP_CYAN, function (_ref) {
  var marginTop = _ref.marginTop;
  return marginTop;
});
var StyledTextDiv = styled$4.div(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["\n  justify-content: center;\n  height: 16px;\n  display: flex;\n  padding-right: 6px;\n  padding-left: 6px;\n"])));
var StyledWrapper = styled$4.div(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["\n  position: sticky; \n  z-index: 1; \n  top: 0;\n  margin: auto;\n"])));

var ChatListDateLabel = function ChatListDateLabel(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var marginTop = !props.marginTop ? '5px' : props.marginTop;
  return /*#__PURE__*/React.createElement(StyledWrapper, {
    className: "date-timeline-label"
  }, /*#__PURE__*/React.createElement(StyledChatListDivider, {
    marginTop: marginTop
  }, /*#__PURE__*/React.createElement(StyledTextDiv, null, /*#__PURE__*/React.createElement(StyledText, {
    marginTop: LUP_SPACING_1,
    marginBottom: LUP_SPACING_1,
    color: WHITE,
    fontSize: LUP_MAIN_FONT_SIZE10,
    fontWeight: LUP_MAIN_FONT_BOLD600
  }, children))));
};

ChatListDateLabel.propTypes = {
  children: propTypes.string
};
ChatListDateLabel.defaultProps = {
  children: ''
};

var EditIconInternal = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M14.5024%202.52607C14.8341%202.85782%2015.0332%203.2891%2015.0332%203.78673C15.0332%204.28436%2014.8673%204.68246%2014.5024%205.04739L4.88152%2014.6682L1.76303%2015.0332C1.53081%2015.0663%201.36493%2015%201.23223%2014.8341C1.03318%2014.6682%201%2014.5024%201%2014.2701L1.36493%2011.1517L10.9858%201.53081C11.3175%201.19905%2011.7488%201%2012.2464%201C12.7441%201%2013.1422%201.16588%2013.5071%201.53081L14.5024%202.52607ZM4.45024%2013.8389L4.98104%2013.2749V12.3128H3.65403V10.9858H2.72512L2.19431%2011.5166L2.02844%2013.1422L2.85782%2013.9716L4.45024%2013.8389ZM11.8815%206.37441L9.62559%204.11848L3.48815%2010.2559H4.45024V11.5829H5.77725V12.545L11.8815%206.37441ZM13.9052%204.38389C14.0711%204.21801%2014.1374%204.01896%2014.1374%203.75355C14.1374%203.48815%2014.0379%203.32227%2013.9052%203.1564L12.8768%202.12796C12.7109%201.96209%2012.5118%201.89573%2012.2464%201.89573C11.981%201.89573%2011.782%201.96209%2011.6161%202.12796L10.2559%203.48815L12.5118%205.74408L13.9052%204.38389Z%22%20fill%3D%22%230076BF%22%2F%3E%3C%2Fsvg%3E";

var DeleteSVG = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11.1462%202.78302H13.5566C13.7217%202.78302%2013.8868%202.84906%2014.0189%202.98113C14.1509%203.11321%2014.217%203.2783%2014.217%203.4434V3.50943C14.217%203.54245%2014.184%203.57547%2014.1509%203.60849C14.1179%203.64151%2014.0849%203.67453%2014.0519%203.67453H13.3585V13.6792C13.3585%2014.0425%2013.2264%2014.3396%2012.9623%2014.6038C12.6981%2014.8679%2012.4009%2015%2012.0377%2015H4.17924C3.81603%2015%203.51886%2014.8679%203.25471%2014.6038C2.99056%2014.3396%202.85849%2014.0425%202.85849%2013.6792V3.64151H2.16509C2.13208%203.64151%202.09906%203.60849%202.06604%203.57547C2.03302%203.54245%202%203.50943%202%203.47641V3.41038C2%203.24528%202.06603%203.08019%202.19811%202.94811C2.33019%202.81604%202.49528%202.75%202.66038%202.75H5.07075L5.99528%201.5283C6.25943%201.19811%206.58962%201%207.01887%201H9.19811C9.62735%201%209.99056%201.16509%2010.2217%201.5283L11.1462%202.78302ZM12.434%2013.6462V3.64151H3.71698V13.6462C3.71698%2013.7783%203.75%2013.8774%203.84905%2013.9434C3.91509%2014.0094%204.04717%2014.0755%204.14623%2014.0755H12.0047C12.1368%2014.0755%2012.2358%2014.0425%2012.3019%2013.9434C12.4009%2013.8774%2012.434%2013.7783%2012.434%2013.6462ZM5.46698%2012.4575C5.46698%2012.5566%205.5%2012.6226%205.56603%2012.6887C5.63207%2012.7547%205.69811%2012.7877%205.79717%2012.7877H6.0283C6.12736%2012.7877%206.19339%2012.7547%206.25943%2012.6887C6.32547%2012.6226%206.35849%2012.5566%206.35849%2012.4575V5.25943C6.35849%205.16038%206.32547%205.09434%206.25943%205.0283C6.19339%204.96226%206.12736%204.92925%206.0283%204.92925H5.79717C5.69811%204.92925%205.63207%204.96226%205.56603%205.0283C5.5%205.09434%205.46698%205.16038%205.46698%205.25943V12.4575ZM6.98585%201.89151C6.85377%201.89151%206.7217%201.95755%206.62264%202.0566L6.09434%202.75H10.0236L9.49528%202.0566C9.39623%201.95755%209.29717%201.89151%209.13207%201.89151H6.98585ZM7.64622%2012.4575C7.64622%2012.5566%207.67924%2012.6226%207.74528%2012.6887C7.81132%2012.7547%207.87736%2012.7877%207.97641%2012.7877H8.20754C8.3066%2012.7877%208.37264%2012.7547%208.43868%2012.6887C8.50472%2012.6226%208.53773%2012.5566%208.53773%2012.4575V5.25943C8.53773%205.16038%208.50472%205.09434%208.43868%205.0283C8.37264%204.96226%208.3066%204.92925%208.20754%204.92925H7.97641C7.87736%204.92925%207.81132%204.96226%207.74528%205.0283C7.67924%205.09434%207.64622%205.16038%207.64622%205.25943V12.4575ZM9.82547%2012.4575C9.82547%2012.5566%209.85849%2012.6226%209.92453%2012.6887C9.99057%2012.7547%2010.0566%2012.7877%2010.1557%2012.7877H10.3868C10.4858%2012.7877%2010.5519%2012.7547%2010.6179%2012.6887C10.684%2012.6226%2010.717%2012.5566%2010.717%2012.4575V5.25943C10.717%205.16038%2010.684%205.09434%2010.6179%205.0283C10.5519%204.96226%2010.4858%204.92925%2010.3868%204.92925H10.1557C10.0566%204.92925%209.99057%204.96226%209.92453%205.0283C9.85849%205.09434%209.82547%205.16038%209.82547%205.25943V12.4575Z%22%20fill%3D%22%230076BF%22%2F%3E%3C%2Fsvg%3E";

var EditIconExternal = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2215%22%20viewBox%3D%220%200%2015%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M13.5024%201.52607C13.8341%201.85782%2014.0332%202.2891%2014.0332%202.78673C14.0332%203.28436%2013.8673%203.68246%2013.5024%204.04739L3.88152%2013.6682L0.763033%2014.0332C0.530806%2014.0663%200.364929%2014%200.232227%2013.8341C0.0331753%2013.6682%200%2013.5024%200%2013.2701L0.364929%2010.1517L9.98578%200.530806C10.3175%200.199052%2010.7488%200%2011.2464%200C11.7441%200%2012.1422%200.165877%2012.5071%200.530806L13.5024%201.52607ZM3.45024%2012.8389L3.98104%2012.2749V11.3128H2.65403V9.98578H1.72512L1.19431%2010.5166L1.02844%2012.1422L1.85782%2012.9716L3.45024%2012.8389ZM10.8815%205.37441L8.62559%203.11848L2.48815%209.25592H3.45024V10.5829H4.77725V11.545L10.8815%205.37441ZM12.9052%203.38389C13.0711%203.21801%2013.1374%203.01896%2013.1374%202.75355C13.1374%202.48815%2013.0379%202.32227%2012.9052%202.1564L11.8768%201.12796C11.7109%200.962085%2011.5118%200.895735%2011.2464%200.895735C10.981%200.895735%2010.782%200.962085%2010.6161%201.12796L9.25592%202.48815L11.5118%204.74408L12.9052%203.38389Z%22%20fill%3D%22%23F2994A%22%2F%3E%3C%2Fsvg%3E";

var DeleteIconExternal = "data:image/svg+xml,%3Csvg%20width%3D%2213%22%20height%3D%2214%22%20viewBox%3D%220%200%2013%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.14623%201.78302H11.5566C11.7217%201.78302%2011.8868%201.84906%2012.0189%201.98113C12.1509%202.11321%2012.217%202.2783%2012.217%202.4434V2.50943C12.217%202.54245%2012.184%202.57547%2012.1509%202.60849C12.1179%202.64151%2012.0849%202.67453%2012.0519%202.67453H11.3585V12.6792C11.3585%2013.0425%2011.2264%2013.3396%2010.9623%2013.6038C10.6981%2013.8679%2010.4009%2014%2010.0377%2014H2.17924C1.81603%2014%201.51886%2013.8679%201.25471%2013.6038C0.990562%2013.3396%200.858488%2013.0425%200.858488%2012.6792V2.64151H0.165094C0.132075%202.64151%200.0990556%202.60849%200.0660367%202.57547C0.0330179%202.54245%200%202.50943%200%202.47641V2.41038C0%202.24528%200.0660347%202.08019%200.19811%201.94811C0.330186%201.81604%200.495283%201.75%200.660377%201.75H3.07075L3.99528%200.528302C4.25943%200.198113%204.58962%200%205.01887%200H7.19811C7.62735%200%207.99056%200.165094%208.2217%200.528302L9.14623%201.78302ZM10.434%2012.6462V2.64151H1.71698V12.6462C1.71698%2012.7783%201.75%2012.8774%201.84905%2012.9434C1.91509%2013.0094%202.04717%2013.0755%202.14623%2013.0755H10.0047C10.1368%2013.0755%2010.2358%2013.0425%2010.3019%2012.9434C10.4009%2012.8774%2010.434%2012.7783%2010.434%2012.6462ZM3.46698%2011.4575C3.46698%2011.5566%203.5%2011.6226%203.56603%2011.6887C3.63207%2011.7547%203.69811%2011.7877%203.79717%2011.7877H4.0283C4.12736%2011.7877%204.19339%2011.7547%204.25943%2011.6887C4.32547%2011.6226%204.35849%2011.5566%204.35849%2011.4575V4.25943C4.35849%204.16038%204.32547%204.09434%204.25943%204.0283C4.19339%203.96226%204.12736%203.92925%204.0283%203.92925H3.79717C3.69811%203.92925%203.63207%203.96226%203.56603%204.0283C3.5%204.09434%203.46698%204.16038%203.46698%204.25943V11.4575ZM4.98585%200.891509C4.85377%200.891509%204.7217%200.957547%204.62264%201.0566L4.09434%201.75H8.02358L7.49528%201.0566C7.39623%200.957547%207.29717%200.891509%207.13207%200.891509H4.98585ZM5.64622%2011.4575C5.64622%2011.5566%205.67924%2011.6226%205.74528%2011.6887C5.81132%2011.7547%205.87736%2011.7877%205.97641%2011.7877H6.20754C6.3066%2011.7877%206.37264%2011.7547%206.43868%2011.6887C6.50472%2011.6226%206.53773%2011.5566%206.53773%2011.4575V4.25943C6.53773%204.16038%206.50472%204.09434%206.43868%204.0283C6.37264%203.96226%206.3066%203.92925%206.20754%203.92925H5.97641C5.87736%203.92925%205.81132%203.96226%205.74528%204.0283C5.67924%204.09434%205.64622%204.16038%205.64622%204.25943V11.4575ZM7.82547%2011.4575C7.82547%2011.5566%207.85849%2011.6226%207.92453%2011.6887C7.99057%2011.7547%208.0566%2011.7877%208.15566%2011.7877H8.38679C8.48585%2011.7877%208.55188%2011.7547%208.61792%2011.6887C8.68396%2011.6226%208.71698%2011.5566%208.71698%2011.4575V4.25943C8.71698%204.16038%208.68396%204.09434%208.61792%204.0283C8.55188%203.96226%208.48585%203.92925%208.38679%203.92925H8.15566C8.0566%203.92925%207.99057%203.96226%207.92453%204.0283C7.85849%204.09434%207.82547%204.16038%207.82547%204.25943V11.4575Z%22%20fill%3D%22%23F2994A%22%2F%3E%3C%2Fsvg%3E";

var ReplyIconInternal = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.2417%200C12.7062%200%2013.1374%200.165485%2013.4692%200.529551C13.8009%200.86052%2014%201.29078%2014%201.75414V9.59811C14%2010.0615%2013.8341%2010.4917%2013.4692%2010.8227C13.1374%2011.1537%2012.7062%2011.3522%2012.2417%2011.3522H8.32701L4.90995%2013.9338C4.8436%2013.9669%204.77725%2014%204.7109%2014C4.64455%2014%204.54502%2013.9669%204.47867%2013.9007C4.41232%2013.8345%204.37915%2013.7683%204.37915%2013.669V11.3853H1.75829C1.29384%2011.3853%200.862559%2011.2199%200.530806%2010.8558C0.199052%2010.4917%200%2010.0946%200%209.59811V1.75414C0%201.29078%200.165877%200.86052%200.530806%200.529551C0.862559%200.198582%201.29384%200%201.75829%200H12.2417V0ZM13.1374%209.59811V1.75414C13.1374%201.52246%2013.0379%201.32388%2012.872%201.1253C12.7062%200.959811%2012.5071%200.86052%2012.2417%200.86052H1.75829C1.52607%200.86052%201.32701%200.959811%201.12796%201.1253C0.92891%201.29078%200.862559%201.52246%200.862559%201.75414V9.59811C0.862559%209.82979%200.962085%2010.0284%201.12796%2010.227C1.29384%2010.4255%201.49289%2010.4917%201.75829%2010.4917H5.27488V12.5768L8.02844%2010.4917H12.2749C12.5071%2010.4917%2012.7062%2010.3924%2012.9052%2010.227C13.0379%2010.0615%2013.1374%209.82979%2013.1374%209.59811ZM10.2844%203.93853C10.3507%203.93853%2010.3839%203.97163%2010.4502%204.00473C10.4834%204.03783%2010.5166%204.10402%2010.5166%204.17021V4.60047C10.5166%204.66667%2010.4834%204.69976%2010.4502%204.76596C10.4171%204.79905%2010.3507%204.83215%2010.2844%204.83215H3.71564C3.64929%204.83215%203.61611%204.79905%203.54976%204.76596C3.51659%204.73286%203.48341%204.66667%203.48341%204.60047V4.17021C3.48341%204.10402%203.51659%204.07092%203.54976%204.00473C3.58294%203.97163%203.64929%203.93853%203.71564%203.93853H10.2844ZM7.66351%206.55319C7.72986%206.55319%207.76303%206.58629%207.82938%206.61939C7.86256%206.65248%207.89573%206.71868%207.89573%206.78487V7.21513C7.89573%207.28132%207.86256%207.31442%207.82938%207.38061C7.79621%207.41371%207.72986%207.44681%207.66351%207.44681H3.71564C3.64929%207.44681%203.61611%207.41371%203.54976%207.38061C3.51659%207.34752%203.48341%207.28132%203.48341%207.21513V6.78487C3.48341%206.71868%203.51659%206.68558%203.54976%206.61939C3.58294%206.58629%203.64929%206.55319%203.71564%206.55319H7.66351Z%22%20fill%3D%22%230076BF%22%2F%3E%3C%2Fsvg%3E";

var ReplyIconExternal = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.2417%200C12.7062%200%2013.1374%200.165485%2013.4692%200.529551C13.8009%200.86052%2014%201.29078%2014%201.75414V9.59811C14%2010.0615%2013.8341%2010.4917%2013.4692%2010.8227C13.1374%2011.1537%2012.7062%2011.3522%2012.2417%2011.3522H8.32701L4.90995%2013.9338C4.8436%2013.9669%204.77725%2014%204.7109%2014C4.64455%2014%204.54502%2013.9669%204.47867%2013.9007C4.41232%2013.8345%204.37915%2013.7683%204.37915%2013.669V11.3853H1.75829C1.29384%2011.3853%200.862559%2011.2199%200.530806%2010.8558C0.199052%2010.4917%200%2010.0946%200%209.59811V1.75414C0%201.29078%200.165877%200.86052%200.530806%200.529551C0.862559%200.198582%201.29384%200%201.75829%200H12.2417V0ZM13.1374%209.59811V1.75414C13.1374%201.52246%2013.0379%201.32388%2012.872%201.1253C12.7062%200.959811%2012.5071%200.86052%2012.2417%200.86052H1.75829C1.52607%200.86052%201.32701%200.959811%201.12796%201.1253C0.92891%201.29078%200.862559%201.52246%200.862559%201.75414V9.59811C0.862559%209.82979%200.962085%2010.0284%201.12796%2010.227C1.29384%2010.4255%201.49289%2010.4917%201.75829%2010.4917H5.27488V12.5768L8.02844%2010.4917H12.2749C12.5071%2010.4917%2012.7062%2010.3924%2012.9052%2010.227C13.0379%2010.0615%2013.1374%209.82979%2013.1374%209.59811ZM10.2844%203.93853C10.3507%203.93853%2010.3839%203.97163%2010.4502%204.00473C10.4834%204.03783%2010.5166%204.10402%2010.5166%204.17021V4.60047C10.5166%204.66667%2010.4834%204.69976%2010.4502%204.76596C10.4171%204.79905%2010.3507%204.83215%2010.2844%204.83215H3.71564C3.64929%204.83215%203.61611%204.79905%203.54976%204.76596C3.51659%204.73286%203.48341%204.66667%203.48341%204.60047V4.17021C3.48341%204.10402%203.51659%204.07092%203.54976%204.00473C3.58294%203.97163%203.64929%203.93853%203.71564%203.93853H10.2844ZM7.66351%206.55319C7.72986%206.55319%207.76303%206.58629%207.82938%206.61939C7.86256%206.65248%207.89573%206.71868%207.89573%206.78487V7.21513C7.89573%207.28132%207.86256%207.31442%207.82938%207.38061C7.79621%207.41371%207.72986%207.44681%207.66351%207.44681H3.71564C3.64929%207.44681%203.61611%207.41371%203.54976%207.38061C3.51659%207.34752%203.48341%207.28132%203.48341%207.21513V6.78487C3.48341%206.71868%203.51659%206.68558%203.54976%206.61939C3.58294%206.58629%203.64929%206.55319%203.71564%206.55319H7.66351Z%22%20fill%3D%22%23F2994A%22%2F%3E%3C%2Fsvg%3E";

var PinInternalIcon = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.3702%209.85325C10.7058%2010.5853%2010.8278%2011.3478%2010.7668%2012.0798C10.7363%2012.8729%2010.4923%2013.5744%2010.0347%2014.1844C9.94323%2014.2759%209.85173%2014.3369%209.72973%2014.3674C9.60772%2014.3979%209.48572%2014.3674%209.39421%2014.2759L5.79509%2011.5918L3.75151%2014.3064L2.98899%2014.9469C2.89748%2015.0079%202.80598%2015.0079%202.71448%2014.9469C2.62297%2014.8859%202.59247%2014.7944%202.62297%2014.6724L3.04999%2013.8184L5.12406%2011.0428L1.49443%208.3892C1.40293%208.29769%201.34193%208.20619%201.31143%208.08419C1.28092%207.96218%201.31143%207.84018%201.40293%207.74867C1.86045%207.13865%202.47047%206.68114%203.23299%206.43713C3.93452%206.16262%204.66655%206.07111%205.49008%206.19312L6.98463%204.63756L6.1611%204.02754C5.97809%203.90554%205.91709%203.75303%205.88659%203.57003C5.85609%203.38702%205.91709%203.23451%206.00859%203.08201L7.35064%201.28244C7.47265%201.12994%207.62515%201.03844%207.80816%201.00793C7.99116%200.977433%208.14367%201.03844%208.29618%201.12994L14.4269%205.7051C14.5794%205.82711%2014.6709%205.97961%2014.7014%206.16262C14.7319%206.34562%2014.6709%206.49813%2014.5794%206.65063L13.2069%208.4502C13.0848%208.6027%2012.9323%208.69421%2012.7493%208.72471C12.5663%208.75521%2012.4138%208.69421%2012.2613%208.6027L11.4378%207.99268L10.3702%209.85325Z%22%20fill%3D%22%230076BF%22%2F%3E%3C%2Fsvg%3E";

var moment = createCommonjsModule(function (module, exports) {
(function (global, factory) {
     module.exports = factory() ;
}(commonjsGlobal, (function () {
    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                }),
                isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key;
                for (i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === 'FullYear' &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i;
            for (i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                    matched,
                    p1,
                    p2,
                    p3,
                    p4
                ) {
                    return p1 || p2 || p3 || p4;
                })
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
        ),
        defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
        ),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
        ),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            'object' !== 'undefined' &&
            module &&
            module.exports
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = commonjsRequire;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
        input,
        array,
        config,
        token
    ) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) {
            getParsingFlags(config).era = era;
        } else {
            getParsingFlags(config).invalidEra = input;
        }
    });

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.29.1';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));
});

function isValidTime(data) {
  return !!moment(data).isValid();
}

function getTimeFromNow(updatedAt) {
  if (!isValidTime(updatedAt)) return null;
  return moment().diff(moment(updatedAt));
}

var checkUpdationTimePassed = function checkUpdationTimePassed(updatedAt, updationTimeLimit) {
  if (!isValidTime(updatedAt)) return true;
  var timeDiff = getTimeFromNow(updatedAt);
  var duration = moment.duration(timeDiff).asMinutes();
  return duration > Number(updationTimeLimit);
};
var getTimeLeftInWindow = function getTimeLeftInWindow(time, updationTimeLimit) {
  return Number(updationTimeLimit) * 60 * 1000 - getTimeFromNow(time);
};

var _templateObject$p, _templateObject2$8, _templateObject3$4, _templateObject4$3, _templateObject5$1, _templateObject6$1;
var StyledComment = styled$4(_Comment)(_templateObject$p || (_templateObject$p = _taggedTemplateLiteral(["\n    &.ant-comment {\n        width: 100%;\n        background: ", ";\n        white-space: break-spaces;\n    }\n\n    &.ant-comment\n    > .ant-comment-inner\n    > .ant-comment-content\n    > .ant-comment-content-author\n    > .ant-comment-content-author-name\n    > *:hover {\n        color: ", ";\n    }\n\n    &.ant-comment > .ant-comment-inner {\n        padding: 0px;\n    }\n    \n    &.ant-comment > .ant-comment-nested {\n        margin-left: 0px;\n    }\n\n    &.ant-comment > .ant-comment-inner\n    > .ant-comment-avatar {\n        margin-right: ", "\n    }\n\n    &.ant-comment\n    > .ant-comment-inner\n    > .ant-comment-content\n    > .ant-comment-content-author\n    > .ant-comment-content-author-name {\n        width: 100%;\n        padding-right: 0px;\n    }\n\n    &.ant-comment\n    > .ant-comment-inner\n    > .ant-comment-content\n    > .ant-comment-content-author\n    > .ant-comment-content-author-time {\n        right: 0;\n        position: absolute;\n    }\n\n    &.ant-comment \n    > .ant-comment-inner \n    > .ant-comment-content \n    > .ant-comment-actions {\n        margin: 0px;\n    }\n\n    &.ant-comment \n    > .ant-comment-inner \n    > .ant-comment-content \n    > .ant-comment-actions > li > span {\n        padding-right: ", ";\n        color: #0076BF;\n        font-size: ", ";\n        padding-top: ", ";\n    }\n"])), function (_ref) {
  var background = _ref.background;
  return background;
}, LUP_BASE_GREY_DARKEST, LUP_SPACING_8, LUP_SPACING_7, LUP_MAIN_FONT_SIZE14, LUP_SPACING_6);
var StyledChatAction = styled$4.span(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["\n    padding-right: ", ";\n"])), LUP_SPACING_12);
var StyledChatPinAction = styled$4.span(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["\n    padding-left: ", ";\n"])), LUP_SPACING_8);
var StyledChatReplyAction = styled$4.span(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["\n    color: ", " !important;\n    padding-right: ", ";\n    line-height: ", ";\n"])), function (props) {
  return props.color;
}, LUP_SPACING_13, LUP_SPACING_22);
var StyledChatReplyCountAction = styled$4.span(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n"])));
var StyleChatItemBlock = styled$4.div(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 0px ", ";\n"])), LUP_SPACING_14);

var ChatItem = function ChatItem(_ref) {
  var messageId = _ref.messageId,
      avatar = _ref.avatar,
      author = _ref.author,
      children = _ref.children,
      time = _ref.time,
      userType = _ref.userType,
      isNew = _ref.isNew,
      isReply = _ref.isReply,
      isPinned = _ref.isPinned,
      canEdit = _ref.canEdit,
      text = _ref.text,
      canDelete = _ref.canDelete,
      onTapEdit = _ref.onTapEdit,
      onTapDelete = _ref.onTapDelete,
      onTapPin = _ref.onTapPin,
      taggedUsers = _ref.taggedUsers,
      onTapReply = _ref.onTapReply,
      isDeleteLoading = _ref.isDeleteLoading,
      selectedChatRoomIndex = _ref.selectedChatRoomIndex,
      chatType = _ref.chatType,
      replyItems = _ref.replyItems,
      highlightedText = _ref.highlightedText,
      isFocused = _ref.isFocused,
      isHighLighted = _ref.isHighLighted,
      reference = _ref.reference,
      updatedAt = _ref.updatedAt,
      configs = _ref.configs;

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      key = _React$useState2[0],
      setKey = _React$useState2[1];

  var _taggedUsers = taggedUsers.map(function (user) {
    return user.name;
  });

  var config = configs.find(function (config) {
    return config.config_key === CONFIGURATION_KEY;
  });
  var message = Utils.removeUserMarkup(text, taggedUsers);

  var _React$useState3 = React.useState(checkUpdationTimePassed(updatedAt, config ? config.config_value : DEFAULT_UPDATION_TIME)),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      updationTimeWindowPassed = _React$useState4[0],
      setTimeWindow = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      commentRef = _React$useState6[0],
      setCommentRef = _React$useState6[1];

  useEffect(function () {
    if (isHighLighted || isFocused) {
      if (commentRef) {
        commentRef.scrollIntoView({
          block: 'center'
        });
      }
    }
  }, [commentRef, isFocused, isHighLighted]);
  React.useEffect(function () {
    var timeLeft = getTimeLeftInWindow(updatedAt, config ? config.config_value : DEFAULT_UPDATION_TIME);
    var timer;

    if (!updationTimeWindowPassed) {
      timer = setTimeout(function () {
        setTimeWindow(true);
      }, timeLeft);
    }

    return function () {
      return clearTimeout(timer);
    };
  }, [updatedAt]); // define in constants

  var HighlightTypes = {
    USER: 'user',
    SEARCH_TEXT: 'searchText',
    SEARCH_TEXT_FOCUSED: 'focusedSearchText'
  };

  var renderLoader = function renderLoader(loading) {
    if (loading && key === messageId) {
      return /*#__PURE__*/React.createElement(Spinner, {
        key: messageId,
        style: {},
        size: "16px"
      });
    } else {
      return /*#__PURE__*/React.createElement(IconButton, {
        src: selectedChatRoomIndex % 2 !== 0 ? DeleteIconExternal : DeleteSVG,
        onClick: function onClick() {
          onTapDelete(messageId, reference);
          setKey(messageId);
        }
      });
    }
  };

  var actions = [];

  if (chatType === ChatTypes.COMMENT) {
    actions.push( /*#__PURE__*/React.createElement(StyledChatReplyAction, null, /*#__PURE__*/React.createElement(IconButton, {
      src: selectedChatRoomIndex % 2 !== 0 ? ReplyIconExternal : ReplyIconInternal,
      onClick: function onClick() {
        return onTapReply(messageId);
      }
    })),
    /*#__PURE__*/
    // Replies Icon
    React.createElement(StyledChatReplyAction, {
      onClick: function onClick() {
        return onTapReply(messageId);
      },
      color: selectedChatRoomIndex % 2 !== 0 ? LUP_SECONDARY_DEEP_YELLOW : LUP_BASE_BLUE_DARK
    }, "Reply") // Reply/Replies text
    );

    if (replyItems && replyItems.length > 0) {
      actions.push( /*#__PURE__*/React.createElement(StyledChatReplyCountAction, null, /*#__PURE__*/React.createElement(Badge, {
        onClick: function onClick() {
          return onTapReply(messageId);
        },
        bg: selectedChatRoomIndex % 2 !== 0 ? LUP_SECONDARY_DEEP_YELLOW : LUP_BASE_BLUE_DARK
      }, replyItems.length))); // ReplyCount badge
    }
  }

  var getHighlightData = function getHighlightData() {
    var config = {}; // if this chatItem is focused, assing highlightText to SEARCH_TEXT_FOCUSED type

    if (isFocused) {
      config[HighlightTypes.SEARCH_TEXT] = [];
      config[HighlightTypes.SEARCH_TEXT_FOCUSED] = [highlightedText];
    } else {
      config[HighlightTypes.SEARCH_TEXT] = [highlightedText];
      config[HighlightTypes.SEARCH_TEXT_FOCUSED] = [];
    } // tagged users should be last in the list


    config[HighlightTypes.USER] = _taggedUsers;
    return config;
  };

  var _chatItem = /*#__PURE__*/React.createElement(StyledComment, {
    actions: !isReply ? actions : null,
    author: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledText, {
      fontSize: LUP_MAIN_FONT_SIZE14,
      lineHeight: LUP_SPACING_22
    }, author), isPinned && /*#__PURE__*/React.createElement(StyledChatPinAction, null, /*#__PURE__*/React.createElement(IconButton, {
      src: PinInternalIcon,
      onClick: function onClick() {
        return onTapPin(messageId);
      }
    }))),
    avatar: /*#__PURE__*/React.createElement(ChatAvatar$1, {
      type: userType // internal/external
      ,
      showDot: isNew // showDot if newNotification

    }, avatar, " "),
    content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledMessage, {
      text: message // userIndices={userIndices}
      ,
      config: getHighlightData()
    }), children),
    datetime: /*#__PURE__*/React.createElement(React.Fragment, null, canEdit && !updationTimeWindowPassed && /*#__PURE__*/React.createElement(StyledChatAction, null, /*#__PURE__*/React.createElement(IconButton, {
      src: selectedChatRoomIndex % 2 !== 0 ? EditIconExternal : EditIconInternal,
      onClick: function onClick() {
        return onTapEdit(messageId);
      }
    })), canDelete && !updationTimeWindowPassed && /*#__PURE__*/React.createElement(StyledChatAction, null, renderLoader(isDeleteLoading)), /*#__PURE__*/React.createElement(StyledText, {
      fontSize: LUP_MAIN_FONT_SIZE12,
      color: LUP_BASE_GREY_DARK,
      lineHeight: LUP_SPACING_19,
      style: {
        letterSpacing: '0.2px'
      }
    }, time))
  }); // if (chatType != ChatTypes.COMMENT) {
  //     return (<div ref={(value) => { setCommentRef(value) }}> { _chatItem} </div>);
  // }


  return /*#__PURE__*/React.createElement(StyledFlexBlock, {
    borderColor: FlexBlockChatBorderColor[chatType],
    padding: FlexBlockChatPadding[chatType],
    margin: FlexBlockChatMargin[chatType],
    background: isHighLighted ? LUP_FORM_ENABLED_BACKGROUND : FlexBlockChatBackground[chatType],
    key: messageId,
    ref: function ref(value) {
      setCommentRef(value);
    }
  }, _chatItem);
};

ChatItem.propTypes = {
  children: propTypes.object.isRequired,
  messageId: propTypes.string.isRequired,
  avatar: propTypes.array.isRequired,
  author: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  taggedUsers: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string,
    name: propTypes.string
  })),
  userType: propTypes.oneOf(['internal', 'external']),
  // flags
  isNew: propTypes.bool,
  // shows dot on avatar
  isPinned: propTypes.bool,
  // show pin icon
  canEdit: propTypes.bool,
  // show edit option
  canDelete: propTypes.bool,
  // show delete option
  isReply: propTypes.bool,
  // hide reply actions
  isFocused: propTypes.bool,
  // actions
  onTapPin: propTypes.func,
  onTapEdit: propTypes.func,
  onTapDelete: propTypes.func,
  onTapReply: propTypes.func,
  isDeleteLoading: propTypes.bool,
  selectedChatRoomIndex: propTypes.number.isRequired,
  chatType: propTypes.string,
  updatedAt: propTypes.number,
  highlightedText: propTypes.string,
  isHighLighted: propTypes.bool,
  configs: propTypes.arrayOf(propTypes.shape({
    app_code: propTypes.string.isRequired,
    config_key: propTypes.string.isRequired,
    config_value: propTypes.string.isRequired
  }))
};
ChatItem.defaultProps = {
  userType: 'internal',
  // flags
  isNew: false,
  isPinned: false,
  canEdit: false,
  updatedAt: 0,
  canDelete: false,
  isReply: false,
  configs: [],
  isFocused: false,
  // actions
  onTapPin: function onTapPin() {},
  onTapEdit: function onTapEdit() {},
  onTapDelete: function onTapDelete() {},
  onTapReply: function onTapReply() {},
  isDeleteLoading: false,
  chatType: 'comment',
  highlightedText: "",
  taggedUsers: [],
  isHighLighted: false
};

var _templateObject$q, _templateObject2$9;
var StyledFlexBlock$1 = styled$4(StyledFlexBlock)(_templateObject$q || (_templateObject$q = _taggedTemplateLiteral(["\n    margin: 0px ", " 0px ", ";\n"])), LUP_SPACING_17, LUP_SPACING_15);
var StyledEditComment = styled$4(StyledComment)(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["\n    &.ant-comment \n    > .ant-comment-inner \n    > .ant-comment-content \n    > .ant-comment-actions {\n        padding-top: ", "\n    }\n    &.ant-comment \n    > .ant-comment-inner \n    > .ant-comment-content \n    > .ant-comment-actions\n    > li {\n        padding-right: ", "\n    }\n\n    &.ant-comment \n    > .ant-comment-inner \n    > .ant-comment-content {\n        margin-right: ", "\n    }\n\n    &.ant-comment > .ant-comment-inner\n    > .ant-comment-avatar {\n        margin-right: ", ";\n    }\n"])), LUP_SPACING_10, LUP_SPACING_20, LUP_SPACING_17, LUP_SPACING_15);

var ChatEditBox = function ChatEditBox(_ref) {
  var messageId = _ref.messageId,
      avatar = _ref.avatar,
      userType = _ref.userType,
      isNew = _ref.isNew,
      children = _ref.children,
      onCancel = _ref.onCancel,
      onSave = _ref.onSave,
      users = _ref.users,
      isEditLoading = _ref.isEditLoading,
      selectedChatRoomIndex = _ref.selectedChatRoomIndex,
      chatType = _ref.chatType,
      canAddAttachments = _ref.canAddAttachments;

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      key = _React$useState2[0],
      setKey = _React$useState2[1];

  var _React$useState3 = React.useState(children),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      message = _React$useState4[0],
      setMessage = _React$useState4[1];

  var handleChange = function handleChange(event, newValue, newPlainTextValue, mentions) {
    setMessage(newValue);
  };

  var renderLoader = function renderLoader(loading) {
    if (loading && key === messageId) {
      return /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement(Spinner, {
        style: {},
        size: "16px"
      }));
    } else {
      return /*#__PURE__*/React.createElement("label", null, "Save");
    }
  };

  return /*#__PURE__*/React.createElement(StyledFlexBlock$1, {
    borderColor: FlexBlockChatBorderColor[chatType],
    background: FlexBlockChatBackground[chatType],
    padding: FlexBlockChatPadding[chatType]
  }, /*#__PURE__*/React.createElement(StyledEditComment, {
    key: messageId,
    author: /*#__PURE__*/React.createElement(ChatInputArea, {
      value: message,
      onChange: handleChange,
      users: users,
      selectedChatRoomIndex: selectedChatRoomIndex,
      canAddAttachments: canAddAttachments
    }),
    avatar: chatType === ChatTypes.COMMENT ? /*#__PURE__*/React.createElement(ChatAvatar$1, {
      type: userType // internal/external
      ,
      showDot: isNew // showDot if newNotification

    }, avatar, " ") : null,
    actions: [/*#__PURE__*/React.createElement(Button, {
      size: "small",
      colored: "secondary",
      onClick: function onClick() {
        return onCancel(messageId);
      }
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      colored: "primary",
      size: "small",
      onClick: function onClick() {
        onSave(messageId, message);
        setKey(messageId);
      }
    }, renderLoader(isEditLoading))]
  }));
};

ChatEditBox.propTypes = {
  avatar: propTypes.string.isRequired,
  userType: propTypes.oneOf(['internal', 'external']),
  children: propTypes.string.isRequired,
  // flags
  isNew: propTypes.bool,
  // shows dot on avatar
  // actions
  onCancel: propTypes.func,
  onSave: propTypes.func,
  users: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string,
    name: propTypes.string
  })),
  isEditLoading: propTypes.bool,
  selectedChatRoomIndex: propTypes.number.isRequired,
  chatType: propTypes.string,
  canAddAttachments: propTypes.bool
};
ChatEditBox.defaultProps = {
  userType: 'internal',
  // flags
  isNew: false,
  // actions
  onCancel: function onCancel() {},
  users: [],
  onSave: function onSave() {},
  isEditLoading: false,
  chatType: 'comment',
  canAddAttachments: false
};

var ChatSubmitIconInternal = "data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2215%22%20r%3D%2215%22%20fill%3D%22%230076BF%22%2F%3E%3Cpath%20d%3D%22M25.5952%2014.2519L8.21026%205.05832C8.04956%205.00503%207.87845%204.98794%207.70992%205.00837C7.5414%205.02879%207.37989%205.08619%207.23767%205.17619C7.1313%205.29583%207.05862%205.44008%207.02667%205.59496C6.99472%205.74984%207.00459%205.91009%207.05531%206.06019L10.0946%2015.0181L7.05531%2023.9759C6.99803%2024.1059%206.98484%2024.2501%207.01761%2024.3878C7.05039%2024.5255%207.12745%2024.6496%207.23767%2024.7421L7.29846%2024.801C7.41662%2024.9174%207.57473%2024.9877%207.7428%2024.9985C7.91087%2025.0094%208.0772%2024.9601%208.21026%2024.8599L25.5952%2015.6663C25.7191%2015.5915%2025.8212%2015.4872%2025.892%2015.3635C25.9628%2015.2398%2026%2015.1006%2026%2014.9591C26%2014.8176%2025.9628%2014.6785%2025.892%2014.5547C25.8212%2014.431%2025.7191%2014.3268%2025.5952%2014.2519ZM22.0088%2014.193H11.5535L9.24363%207.47459L22.0088%2014.193ZM9.24363%2022.5615L11.5535%2015.7253L22.0696%2015.7842L9.24363%2022.5615Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

var ChatSubmitIconExternal = "data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2215%22%20cy%3D%2215%22%20r%3D%2215%22%20fill%3D%22%23F2994A%22%2F%3E%3Cpath%20d%3D%22M25.5952%2014.2519L8.21026%205.05832C8.04956%205.00503%207.87845%204.98794%207.70992%205.00837C7.5414%205.02879%207.37989%205.08619%207.23767%205.17619C7.1313%205.29583%207.05862%205.44008%207.02667%205.59496C6.99472%205.74984%207.00459%205.91009%207.05531%206.06019L10.0946%2015.0181L7.05531%2023.9759C6.99803%2024.1059%206.98484%2024.2501%207.01761%2024.3878C7.05039%2024.5255%207.12745%2024.6496%207.23767%2024.7421L7.29846%2024.801C7.41662%2024.9174%207.57473%2024.9877%207.7428%2024.9985C7.91087%2025.0094%208.0772%2024.9601%208.21026%2024.8599L25.5952%2015.6663C25.7191%2015.5915%2025.8212%2015.4872%2025.892%2015.3635C25.9628%2015.2398%2026%2015.1006%2026%2014.9591C26%2014.8176%2025.9628%2014.6785%2025.892%2014.5547C25.8212%2014.431%2025.7191%2014.3268%2025.5952%2014.2519ZM22.0088%2014.193H11.5535L9.24363%207.47459L22.0088%2014.193ZM9.24363%2022.5615L11.5535%2015.7253L22.0696%2015.7842L9.24363%2022.5615Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

var _templateObject$r, _templateObject2$a, _templateObject3$5, _templateObject4$4;
var StyleChatSubmitBox = styled$4.div(_templateObject$r || (_templateObject$r = _taggedTemplateLiteral(["\n  display: flex;\n  background: ", ";\n  box-shadow: ", ";\n  min-height: ", ";\n\n  justify-content: center;\n  align-items: center;\n"])), LUP_BASE_GREY_LIGHTEST, LUP_BOX_SHADOW_5, LUP_SPACING_65);
var StyleChatSubmitIcon = styled$4.div(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteral(["\n  padding: 0 ", ";\n  position: relative;\n  float: right;\n  display: flex;\n"])), LUP_SPACING_10);
var StyledBlock$1 = styled$4(StyledBlock)(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100%;\n  padding: ", ";\n  padding-right: 0;\n  padding-bottom: ", ";\n  padding-top: ", ";\n"])), LUP_SPACING_15, function (props) {
  return props.attachmentsLength ? 0 : LUP_SPACING_15;
}, function (props) {
  return props.boxLabel ? 0 : LUP_SPACING_15;
});
var StyledRow = styled$4(_Row)(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100%;\n"])));

var ChatSubmitBox = function ChatSubmitBox(_ref) {
  var isCreating = _ref.isCreating,
      onSubmit = _ref.onSubmit,
      users = _ref.users,
      addAttachment = _ref.addAttachment,
      attachments = _ref.attachments,
      deleteAttachment = _ref.deleteAttachment,
      cancelAttachmentUpload = _ref.cancelAttachmentUpload,
      selectedChatRoomIndex = _ref.selectedChatRoomIndex,
      canAddAttachments = _ref.canAddAttachments,
      placeholder = _ref.placeholder,
      boxLabel = _ref.boxLabel;

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      message = _React$useState2[0],
      setMessage = _React$useState2[1];

  var _React$useState3 = React.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      fileCountError = _React$useState4[0],
      setFileCountError = _React$useState4[1];

  var _React$useState5 = React.useState(""),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      messageLengthError = _React$useState6[0],
      setMessageLengthError = _React$useState6[1];

  useEffect(function () {
    if (message.length > 500) {
      setMessageLengthError("Maximum 500 characters allowed");
    } else {
      setMessageLengthError('');
    }
  }, [message]);
  useEffect(function () {
    setMessage('');
    setMessageLengthError('');
    attachments.forEach(function (attachment) {
      console.log(attachment);

      if (attachment.progress === 100 || attachment.error) {
        deleteAttachment(attachment);
      } else {
        cancelAttachmentUpload(attachment);
      }
    });
  }, [selectedChatRoomIndex]);

  var handleChange = function handleChange(event, newValue, newPlainTextValue, mentions) {
    setMessage(newValue);
  };

  var isDisabled = function isDisabled() {
    var disabled = true;

    if (message.length) {
      disabled = false;
    }

    if (attachments.length > 0) {
      for (var index = 0; index < attachments.length; index++) {
        var attachment = attachments[index];

        if (attachment.progress !== 100 && !attachment.error) {
          disabled = true;
          return disabled;
        }

        disabled = false;
      }
    }

    if (message.length > 500) {
      disabled = true;
    }

    return disabled;
  };

  return /*#__PURE__*/React.createElement(StyleChatSubmitBox, null, /*#__PURE__*/React.createElement(StyledBlock$1, {
    attachmentsLength: attachments.length,
    boxLabel: boxLabel
  }, boxLabel && /*#__PURE__*/React.createElement(StyledBlock, {
    style: {
      height: LUP_SPACING_15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(StyledText, {
    fontSize: LUP_MAIN_FONT_SIZE10,
    lineHeight: LUP_SPACING_12,
    fontWeight: LUP_MAIN_FONT_BOLD600,
    color: LUP_BASE_GREY_DARKER
  }, boxLabel)), /*#__PURE__*/React.createElement(StyledRow, null, /*#__PURE__*/React.createElement(ChatInputArea, {
    value: message,
    users: users,
    onChange: handleChange,
    addAttachment: addAttachment,
    attachments: attachments,
    setFileCountError: setFileCountError,
    messageLengthError: messageLengthError,
    selectedChatRoomIndex: selectedChatRoomIndex,
    canAddAttachments: canAddAttachments,
    placeholder: placeholder
  })), messageLengthError && /*#__PURE__*/React.createElement(_Row, null, /*#__PURE__*/React.createElement(StyledText, {
    color: "#E00000",
    fontSize: LUP_MAIN_FONT_SIZE12
  }, messageLengthError)), fileCountError && /*#__PURE__*/React.createElement(_Row, null, /*#__PURE__*/React.createElement(StyledText, {
    color: "#E00000",
    fontSize: LUP_MAIN_FONT_SIZE12
  }, fileCountError)), attachments && attachments.length > 0 && /*#__PURE__*/React.createElement(_Row, {
    style: {
      padding: '2px'
    }
  }, /*#__PURE__*/React.createElement(ChatAttachments, {
    attachments: attachments,
    deleteAttachment: deleteAttachment,
    setFileCountError: setFileCountError,
    cancelAttachmentUpload: cancelAttachmentUpload
  }))), /*#__PURE__*/React.createElement(StyleChatSubmitIcon, null, /*#__PURE__*/React.createElement(IconButton, {
    size: LUP_SPACING_30,
    src: selectedChatRoomIndex % 2 !== 0 ? ChatSubmitIconExternal : ChatSubmitIconInternal,
    onClick: function onClick() {
      if (!isDisabled()) {
        setMessage("");
        onSubmit(message, attachments);
      }
    }
  })));
};

ChatSubmitBox.propTypes = {
  isCreating: propTypes.bool,
  onSubmit: propTypes.func,
  addAttachment: propTypes.func,
  attachments: propTypes.arrayOf({}),
  deleteAttachment: propTypes.func,
  cancelAttachmentUpload: propTypes.func,
  users: propTypes.arrayOf({
    id: propTypes.string,
    name: propTypes.string
  }),
  selectedChatRoomIndex: propTypes.number.isRequired,
  canAddAttachments: propTypes.bool,
  placeholder: propTypes.string
};
ChatSubmitBox.defaultProps = {
  isCreating: false,
  onSubmit: function onSubmit() {},
  users: [],
  addAttachment: function addAttachment() {},
  attachments: [],
  deleteAttachment: function deleteAttachment() {},
  cancelAttachmentUpload: function cancelAttachmentUpload() {},
  canAddAttachments: false,
  placeholder: "Add Comment..."
};

var _templateObject$s, _templateObject2$b, _templateObject3$6, _templateObject4$5;
var StyledSelect$1 = styled$4(Select)(_templateObject$s || (_templateObject$s = _taggedTemplateLiteral(["\n  &.ant-select {\n    border: none;\n    width: ", ";\n    background: ", ";\n  }\n\n  &.ant-select\n    > .ant-select-selection--single\n    > .ant-select-selection__rendered {\n    color: #2d9cdb;\n    font-weight: ", ";\n    width: ", ";\n  }\n\n  .ant-select-selection-selected-value {\n    padding-top: ", ";\n    padding-right: ", " !important;\n  }\n\n  .ant-select-selection {\n    width: ", ";\n    padding-left: 0;\n  }\n\n  .ant-select-selection--single .ant-select-selection__rendered {\n    margin-right: ", ";\n    margin-left: ", ";\n    width: ", ";\n  }\n\n  .ant-select-arrow {\n    position: absolute;\n    right: ", ";\n    padding-top: ", ";\n  }\n"])), LUP_SPACING_50, WHITE, LUP_MAIN_FONT_BOLD600, LUP_SPACING_50, LUP_SPACING_4, LUP_SPACING_5, LUP_SPACING_50, LUP_SPACING_8, LUP_SPACING_4, LUP_SPACING_40, LUP_SPACING_5, LUP_SPACING_2);
var StyledFlexBlock$2 = styled$4(StyledFlexBlock)(_templateObject2$b || (_templateObject2$b = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  margin: 0px ", " 0px 0px;\n  padding: 0px;\n"])), LUP_BASE_GREY_DARKEST, LUP_MAIN_FONT_BOLD600, LUP_MAIN_FONT_SIZE14, LUP_SPACING_20);
var StyledBlockWrapper = styled$4.div(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: none;\n  align-items: center;\n  justify-content: space-between;\n  line-height: ", ";\n"])), LUP_SPACING_16);
var StyledWrapper$1 = styled$4.div(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: none;\n  align-items: center;\n  justify-content: space-between;\n  height: ", ";\n  padding: ", " ", " ", " ", "\n"])), LUP_SPACING_34, LUP_SPACING_8, LUP_SPACING_15, LUP_SPACING_10, LUP_SPACING_15);

var CrossIcon = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.15227%207L12.7614%2011.6091C13.0795%2011.9273%2013.0795%2012.4432%2012.7614%2012.7614C12.4432%2013.0795%2011.9273%2013.0795%2011.6091%2012.7614L7%208.15227L2.39091%2012.7614C2.07272%2013.0795%201.55683%2013.0795%201.23864%2012.7614C0.920452%2012.4432%200.920452%2011.9273%201.23864%2011.6091L5.84773%207L1.23864%202.39091C0.920452%202.07272%200.920452%201.55683%201.23864%201.23864C1.55683%200.920452%202.07272%200.920452%202.39091%201.23864L7%205.84773L11.6091%201.23864C11.9273%200.920452%2012.4432%200.920452%2012.7614%201.23864C13.0795%201.55683%2013.0795%202.07272%2012.7614%202.39091L8.15227%207Z%22%20fill%3D%22%23A4A4A4%22%2F%3E%3C%2Fsvg%3E";

var ChatHeader = function ChatHeader(_ref) {
  var headerText = _ref.headerText,
      suffix = _ref.suffix,
      showCloseIcon = _ref.showCloseIcon,
      onClose = _ref.onClose,
      showVersions = _ref.showVersions;
  return /*#__PURE__*/React.createElement(StyledWrapper$1, null, /*#__PURE__*/React.createElement(StyledBlockWrapper, null, /*#__PURE__*/React.createElement(StyledFlexBlock$2, null, headerText), showVersions && /*#__PURE__*/React.createElement(StyledFlexBlock, {
    style: {
      flexGrow: "1",
      borderBottom: "none",
      justifyContent: "flex-start",
      padding: "0px",
      margin: "0px"
    }
  }, suffix)), /*#__PURE__*/React.createElement(StyledBlockWrapper, null, /*#__PURE__*/React.createElement(StyledFlexBlock, {
    style: {
      borderBottom: "none",
      padding: "0px",
      margin: "0px"
    }
  }, showCloseIcon ? /*#__PURE__*/React.createElement(IconButton, {
    src: CrossIcon,
    onClick: onClose,
    size: LUP_SPACING_12
  }) : null)));
};

ChatHeader.propTypes = {
  onClose: propTypes.func,
  headerText: propTypes.string,
  showCloseIcon: propTypes.bool,
  suffix: propTypes.node,
  showVersions: propTypes.bool
};
ChatHeader.defaultProps = {
  headerText: "Comments",
  onClose: function onClose() {},
  suffix: "",
  showCloseIcon: false,
  showVersions: false
};

var _templateObject$t, _templateObject2$c, _templateObject3$7;
var StyledCommentOptionsBlock = styled$4.div(_templateObject$t || (_templateObject$t = _taggedTemplateLiteral(["\n  position: relative;\n  flex-grow: 1;\n  width: 100%;\n  \n\n  .ant-radio-group {\n    width: 100%;\n  }\n\n  .ant-radio-button-wrapper {\n    width: ", ";\n    line-height: 40px;\n    height: 40px;\n    font-size: 14px;\n    font-weight: ", ";\n    text-align: center;\n    vertical-align: middle;\n    padding: 0px 8px;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    display: inline-block;\n\n    color: #888888 !important;\n    :active {\n      color: #888888 !important;\n    }\n  }\n  \n  .ant-radio-button-wrapper:last-child {\n    border-radius: 0;\n  }\n\n  .ant-radio-button-wrapper:first-child{\n    border-radius: 0;\n  }\n\n  .ant-radio-button-wrapper-checked {\n    font-weight: ", ";\n    // text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);\n\n    color: #fff !important;\n    :active {\n      color: #fff !important;\n    }\n  }\n\n  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {\n    box-shadow: none !important;\n  }\n"])), function (props) {
  return props.optionsWidth;
}, LUP_MAIN_FONT_NORMAL, LUP_MAIN_FONT_BOLD600);
var StyledBadge$1 = styled$4(_Badge)(_templateObject2$c || (_templateObject2$c = _taggedTemplateLiteral(["\n  .ant-badge-count {\n    background: ", ";\n  }\n\n &.ant-badge {\n    right: ", ";\n    position: absolute;\n }\n"])), function (props) {
  return props.bgColor;
}, LUP_SPACING_15);
var StyledDiv = styled$4.div(_templateObject3$7 || (_templateObject3$7 = _taggedTemplateLiteral(["\n  display: flex; \n  align-items: center; \n  justify-content: center;\n  height: 100%;\n"])));

var getRoomBgColor = function getRoomBgColor(i, currentRoom, activeRoom) {
  if (i % 2 === 0 && activeRoom.id === currentRoom.value) {
    return '#0076BF';
  }

  if (i % 2 !== 0 && activeRoom.id === currentRoom.value) {
    return '#F2994A';
  }

  return '#EEEEEE';
};

var getRoomBorderColor = function getRoomBorderColor(i, currentRoom, activeRoom) {
  if (i % 2 === 0 && activeRoom.id === currentRoom.value) {
    return '#4C9FD2';
  }

  if (i % 2 !== 0 && activeRoom.id === currentRoom.value) {
    return '#F2C94C';
  }

  return '#DDDDDD';
};

var getLabelColor = function getLabelColor(currentRoom, activeRoom) {
  if (activeRoom.id === currentRoom) {
    return '#FFFFFF';
  }

  return '#A4A4A4';
};

var getStyle = function getStyle(i, button, activeButton) {
  return {
    backgroundColor: getRoomBgColor(i, button, activeButton),
    borderColor: getRoomBorderColor(i, button, activeButton)
  };
};

var renderRadioButtons = function renderRadioButtons(buttons, activeButton) {
  return buttons.map(function (button, i) {
    var value = button.value,
        count = button.count,
        label = button.label;
    return /*#__PURE__*/React.createElement(_Radio.Button, {
      value: value,
      style: getStyle(i, button, activeButton),
      id: value.id
    }, /*#__PURE__*/React.createElement(StyledDiv, null, /*#__PURE__*/React.createElement(StyledText, {
      color: getLabelColor(value, activeButton),
      fontSize: LUP_MAIN_FONT_SIZE12,
      lineHeight: LUP_MAIN_FONT_SIZE12,
      fontWeight: activeButton.id === value ? LUP_MAIN_FONT_BOLD700 : LUP_MAIN_FONT_NORMAL
    }, label), /*#__PURE__*/React.createElement(StyledBadge$1, {
      count: count,
      bgColor: activeButton.id === value ? LUP_FUNCTIONAL_ERROR_RED : LUP_FUNCTIONAL_ERROR_RED_LIGHTER
    })));
  });
};

var ChatHeaderTabs = function ChatHeaderTabs(props) {
  var width = 100 / props.tabs.length;
  return /*#__PURE__*/React.createElement(StyledCommentOptionsBlock, {
    optionsWidth: "".concat(width, "%")
  }, /*#__PURE__*/React.createElement(_Radio.Group, {
    onChange: props.onChange,
    value: props.selectedChatRoom
  }, renderRadioButtons(props.tabs, props.selectedChatRoom)));
};

ChatHeaderTabs.propTypes = {
  onChange: propTypes.func,
  tabs: propTypes.arrayOf(propTypes.shape({
    value: propTypes.string,
    label: propTypes.string,
    count: propTypes.number
  })),
  selectedChatRoom: propTypes.object.isRequired
};
ChatHeaderTabs.defaultProps = {
  tabs: [],
  onChange: function onChange() {}
};

var _templateObject$u;
var StyledBlock$2 = styled$4(StyledBlock)(_templateObject$u || (_templateObject$u = _taggedTemplateLiteral(["\n    padding-top: ", ";\n"])), LUP_SPACING_8);

var ChatAttachments = function ChatAttachments(_ref) {
  var attachments = _ref.attachments,
      searchText = _ref.searchText,
      _deleteAttachment = _ref.deleteAttachment,
      setFileCountError = _ref.setFileCountError,
      cancelAttachmentUpload = _ref.cancelAttachmentUpload,
      parent = _ref.parent,
      appCode = _ref.appCode,
      isFocused = _ref.isFocused;
  return /*#__PURE__*/React.createElement(StyledBlock$2, null, attachments && attachments.map(function (attachment) {
    return /*#__PURE__*/React.createElement(AttachmentCard, {
      isFocused: isFocused,
      searchText: searchText,
      attachment: attachment,
      deleteAttachment: function deleteAttachment(file) {
        if (attachments.length < 10) {
          setFileCountError("");
        }

        _deleteAttachment(file);
      },
      cancelAttachmentUpload: cancelAttachmentUpload,
      parent: parent,
      appCode: appCode
    });
  }));
};

ChatAttachments.propTypes = {
  attachments: propTypes.arrayOf(propTypes.shape({})),
  deleteAttachment: propTypes.func,
  cancelAttachmentUpload: propTypes.func,
  setFileCountError: propTypes.func,
  parent: propTypes.string,
  appCode: propTypes.string,
  searchText: propTypes.string,
  isFocused: propTypes.bool
};
ChatAttachments.defaultProps = {
  attachments: [],
  deleteAttachment: function deleteAttachment() {},
  cancelAttachmentUpload: function cancelAttachmentUpload() {},
  setFileCountError: function setFileCountError() {},
  parent: "",
  searchText: "",
  appCode: "",
  isFocused: false
};

var XlsxIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2226%22%20viewBox%3D%220%200%2023%2026%22%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23E2E5E7%22%20d%3D%22M4.929%200c-.904%200-1.643.731-1.643%201.625v22.75c0%20.894.739%201.625%201.643%201.625h16.428c.904%200%201.643-.731%201.643-1.625V6.5L16.429%200h-11.5z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23B0B7BD%22%20d%3D%22M18.071%206.5H23L16.429%200v4.875c0%20.894.739%201.625%201.642%201.625z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M23%2011.375L18.071%206.5H23z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%231BB934%22%20d%3D%22M19.714%2021.125a.82.82%200%200%201-.821.813H.82A.82.82%200%200%201%200%2021.125V13a.82.82%200%200%201%20.821-.813h18.072a.82.82%200%200%201%20.821.813v8.125z%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23FFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3.56%2016.564l1.142-1.416c.342-.442%201.006.123.631.545a38.05%2038.05%200%200%200-1.202%201.475l1.34%201.65c.362.488-.36.955-.715.474l-1.21-1.533-1.188%201.566c-.335.474-1.078-.058-.703-.5l1.32-1.657c-.414-.513-.815-1.013-1.215-1.475-.413-.487.355-.987.657-.53l1.143%201.401zM16.138%2016.564l1.142-1.416c.342-.442%201.006.123.631.545a38.05%2038.05%200%200%200-1.201%201.475l1.34%201.65c.36.488-.361.955-.716.474l-1.21-1.533-1.188%201.566c-.335.474-1.078-.058-.703-.5l1.32-1.657c-.414-.513-.815-1.013-1.215-1.475-.413-.487.355-.987.657-.53l1.143%201.401zM6.282%2015.394c0-.214.184-.396.414-.396.21%200%20.388.183.388.396v3.255H8.87c.643%200%20.657.851%200%20.851H6.697c-.23%200-.414-.162-.414-.396v-3.71h-.001zM10.115%2015.98c.152-1.262%202.075-1.488%202.982-.8.447.357-.026.923-.42.637-.487-.305-1.59-.448-1.728.227-.177%201.066%202.68.455%202.634%202.184-.046%201.65-2.463%201.688-3.37.948a.477.477%200%200%201-.092-.637c.171-.168.36-.227.585-.045.538.363%201.925.636%202.022-.287-.084-.96-2.816-.382-2.613-2.228z%22%2F%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M18.893%2021.938H3.286v.812h15.607a.82.82%200%200%200%20.821-.813v-.812a.82.82%200%200%201-.821.813z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var JpgAIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2226%22%20viewBox%3D%220%200%2023%2026%22%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23E2E5E7%22%20d%3D%22M4.929%200c-.904%200-1.643.731-1.643%201.625v22.75c0%20.894.739%201.625%201.643%201.625h16.428c.904%200%201.643-.731%201.643-1.625V6.5L16.429%200h-11.5z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23B0B7BD%22%20d%3D%22M18.071%206.5H23L16.429%200v4.875c0%20.894.739%201.625%201.642%201.625z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M23%2011.375L18.071%206.5H23z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23FCC300%22%20d%3D%22M19.714%2021.125a.82.82%200%200%201-.821.813H.82A.82.82%200%200%201%200%2021.125V13a.82.82%200%200%201%20.821-.813h18.072a.82.82%200%200%201%20.821.813v8.125z%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23FFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M5.646%2015.394c0-.546.867-.546.867%200v2.566c0%201.02-.493%201.638-1.629%201.638-.558%200-1.024-.15-1.432-.67-.335-.396.296-.967.638-.552.276.338.572.416.86.403.367-.013.69-.176.697-.819v-2.566h-.001zM7.667%2015.394a.45.45%200%200%201%20.447-.448h1.517c.855%200%201.623.565%201.623%201.65%200%201.026-.768%201.598-1.623%201.598H8.535v.858c0%20.286-.184.448-.42.448a.44.44%200%200%201-.448-.448v-3.658zm.868.37v1.619H9.63c.44%200%20.789-.385.789-.788%200-.454-.348-.83-.789-.83H8.535zM15.945%2019c-.467.384-1.039.546-1.616.546-1.38%200-2.358-.779-2.358-2.326%200-1.311%201.031-2.33%202.416-2.33.52%200%201.09.174%201.498.57.4.39-.178.968-.571.624-.243-.234-.585-.41-.927-.41-.794%200-1.562.63-1.562%201.546%200%20.962.643%201.547%201.504%201.547.4%200%20.742-.118.985-.292v-.8h-.985c-.585%200-.526-.792%200-.792h1.313c.244%200%20.466.182.466.383v1.384c0%20.117-.052.226-.163.35z%22%2F%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M18.893%2021.938H3.286v.812h15.607a.82.82%200%200%200%20.821-.813v-.812a.82.82%200%200%201-.821.813z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var PdfAIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2226%22%20viewBox%3D%220%200%2023%2026%22%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23E2E5E7%22%20d%3D%22M4.665%200C3.75%200%203%20.731%203%201.625v22.75c0%20.894.75%201.625%201.666%201.625h16.661c.916%200%201.666-.731%201.666-1.625V6.5L16.328%200H4.665z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23B0B7BD%22%20d%3D%22M18.082%206h4.91l-6.546-6v4.5c0%20.825.736%201.5%201.636%201.5z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M22.992%2011l-5.455-5h5.455z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23E00000%22%20d%3D%22M19.993%2021.167a.836.836%200%200%201-.833.833H.833A.836.836%200%200%201%200%2021.167v-8.334C0%2012.375.375%2012%20.833%2012H19.16c.458%200%20.833.375.833.833v8.334z%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23FFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3.656%2015.393c0-.205.173-.429.452-.429h1.536c.865%200%201.644.541%201.644%201.579%200%20.983-.779%201.53-1.644%201.53h-1.11v.822c0%20.274-.186.428-.426.428-.22%200-.452-.154-.452-.428v-3.502zm.878.354v1.55h1.11c.446%200%20.799-.368.799-.754a.797.797%200%200%200-.799-.796h-1.11zM8.59%2019.323c-.22%200-.459-.112-.459-.385v-3.532c0-.223.24-.386.46-.386h1.522c3.04%200%202.973%204.303.06%204.303H8.59zm.42-3.544v2.786h1.103c1.796%200%201.876-2.786%200-2.786H9.01zM14.164%2015.829v.988h1.695c.24%200%20.48.224.48.441%200%20.206-.24.374-.48.374h-1.695v1.306c0%20.217-.166.385-.399.385-.293%200-.471-.168-.471-.385v-3.533c0-.223.18-.386.471-.386H16.1c.292%200%20.465.163.465.386%200%20.2-.173.423-.465.423h-1.936z%22%2F%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M19.143%2021.933H3v.5h16.144c.468%200%20.85-.225.85-.5v-.5c0%20.275-.382.5-.85.5z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var PngAIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2226%22%20viewBox%3D%220%200%2023%2026%22%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23E2E5E7%22%20d%3D%22M4.929%200c-.904%200-1.643.731-1.643%201.625v22.75c0%20.894.739%201.625%201.643%201.625h16.428c.904%200%201.643-.731%201.643-1.625V6.5L16.429%200h-11.5z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23B0B7BD%22%20d%3D%22M18.071%206.5H23L16.429%200v4.875c0%20.894.739%201.625%201.642%201.625z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M23%2011.375L18.071%206.5H23z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23FCC300%22%20d%3D%22M19.714%2021.125a.82.82%200%200%201-.821.813H.82A.82.82%200%200%201%200%2021.125V13a.82.82%200%200%201%20.821-.813h18.072a.82.82%200%200%201%20.821.813v8.125z%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23FFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3.122%2015.394c0-.214.17-.449.446-.449h1.518c.854%200%201.623.566%201.623%201.65%200%201.027-.77%201.598-1.623%201.598H3.988v.858c0%20.287-.182.449-.42.449a.44.44%200%200%201-.446-.449v-3.657zm.866.37v1.618h1.097c.44%200%20.788-.384.788-.787%200-.455-.348-.83-.788-.83H3.988zM7.546%2015.46c0-.235.052-.462.394-.462.236%200%20.29.058.466.227l2.173%202.69v-2.52c0-.215.19-.45.414-.45.237%200%20.466.235.466.45v3.656c0%20.287-.178.396-.348.449-.23%200-.342-.052-.532-.227l-2.173-2.729v2.508c0%20.287-.178.449-.414.449a.43.43%200%200%201-.447-.449V15.46zM16.4%2019c-.467.383-1.038.546-1.616.546-1.38%200-2.358-.78-2.358-2.326%200-1.312%201.031-2.332%202.416-2.332.52%200%201.09.176%201.498.572.4.39-.178.968-.571.624-.243-.235-.585-.41-.927-.41-.794%200-1.562.63-1.562%201.546%200%20.962.643%201.546%201.504%201.546.4%200%20.742-.117.985-.292v-.798h-.985c-.585%200-.526-.794%200-.794h1.314c.243%200%20.465.183.465.384v1.384c0%20.116-.051.226-.163.35z%22%2F%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M18.893%2021.938H3.286v.812h15.607a.82.82%200%200%200%20.821-.813v-.812a.82.82%200%200%201-.821.813z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var PptAIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2226%22%20viewBox%3D%220%200%2023%2026%22%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23E2E5E7%22%20d%3D%22M4.929%200c-.904%200-1.643.731-1.643%201.625v22.75c0%20.894.739%201.625%201.643%201.625h16.428c.904%200%201.643-.731%201.643-1.625V6.5L16.429%200h-11.5z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23B0B7BD%22%20d%3D%22M18.071%206.5H23L16.429%200v4.875c0%20.894.739%201.625%201.642%201.625z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M23%2011.375L18.071%206.5H23z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23F77B0D%22%20d%3D%22M19.714%2021.125a.82.82%200%200%201-.821.813H.82A.82.82%200%200%201%200%2021.125V13a.82.82%200%200%201%20.821-.813h18.072a.82.82%200%200%201%20.821.813v8.125z%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23FFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3.771%2015.394a.45.45%200%200%201%20.446-.448h1.517c.855%200%201.624.565%201.624%201.65%200%201.026-.77%201.598-1.624%201.598H4.638v.858c0%20.286-.183.448-.42.448a.44.44%200%200%201-.446-.448v-3.658zm.867.37v1.619h1.096c.44%200%20.789-.385.789-.788%200-.454-.348-.83-.789-.83H4.638zM8.195%2015.394a.45.45%200%200%201%20.446-.448h1.518c.854%200%201.623.565%201.623%201.65%200%201.026-.77%201.598-1.623%201.598H9.062v.858c0%20.286-.184.448-.42.448a.44.44%200%200%201-.447-.448v-3.658zm.866.37v1.619h1.097c.44%200%20.788-.385.788-.788%200-.454-.348-.83-.788-.83H9.06zM13.845%2015.817h-1.148c-.572%200-.572-.831%200-.831h3.106c.585%200%20.585.83%200%20.83h-1.09v3.282c0%20.565-.868.578-.868%200v-3.281z%22%2F%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M18.893%2021.938H3.286v.812h15.607a.82.82%200%200%200%20.821-.813v-.812a.82.82%200%200%201-.821.813z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var XlsAIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2226%22%20viewBox%3D%220%200%2023%2026%22%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23E2E5E7%22%20d%3D%22M4.888%200c-.905%200-1.646.731-1.646%201.625v22.75c0%20.894.74%201.625%201.646%201.625h16.465C22.26%2026%2023%2025.269%2023%2024.375V6.5L16.414%200H4.888z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23B0B7BD%22%20d%3D%22M18.06%206.5H23L16.414%200v4.875c0%20.894.74%201.625%201.646%201.625z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M22.981%2011.375L18.046%206.5h4.935z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%231BB934%22%20d%3D%22M19.45%2021.125a.814.814%200%200%201-.81.813H.81a.814.814%200%200%201-.81-.813V13c0-.447.365-.813.81-.813h17.83c.445%200%20.81.366.81.813v8.125z%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23FFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M5.69%2016.564l1.127-1.416c.337-.442.992.123.622.545-.388.462-.796.962-1.185%201.475l1.322%201.65c.356.488-.356.955-.706.474l-1.193-1.533-1.173%201.566c-.33.474-1.063-.058-.693-.5l1.302-1.657c-.409-.513-.804-1.013-1.199-1.475-.407-.487.35-.987.649-.53l1.127%201.401zM8.376%2015.394c0-.214.181-.396.408-.396.207%200%20.382.183.382.396v3.255h1.763c.635%200%20.648.851%200%20.851H8.785c-.227%200-.409-.162-.409-.396v-3.71zM12.158%2015.98c.149-1.262%202.047-1.488%202.941-.8.441.357-.026.923-.415.637-.48-.305-1.568-.448-1.704.227-.175%201.066%202.644.455%202.598%202.184-.045%201.65-2.43%201.688-3.324.948a.481.481%200%200%201-.09-.637c.168-.168.355-.227.576-.045.531.363%201.9.636%201.996-.287-.084-.96-2.78-.382-2.578-2.228z%22%2F%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M18.64%2021.938H3.241v.812h15.397c.446%200%20.81-.366.81-.813v-.812a.814.814%200%200%201-.81.813z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var DocAIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2226%22%20viewBox%3D%220%200%2023%2026%22%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23E2E5E7%22%20d%3D%22M4.929%200c-.904%200-1.643.731-1.643%201.625v22.75c0%20.894.739%201.625%201.643%201.625h16.428c.904%200%201.643-.731%201.643-1.625V6.5L16.429%200h-11.5z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23B0B7BD%22%20d%3D%22M18.071%206.5H23L16.429%200v4.875c0%20.894.739%201.625%201.642%201.625z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M23%2011.375L18.071%206.5H23z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%234C9FD2%22%20d%3D%22M19.714%2021.125a.82.82%200%200%201-.821.813H.82A.82.82%200%200%201%200%2021.125V13a.82.82%200%200%201%20.821-.813h18.072a.82.82%200%200%201%20.821.813v8.125z%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23FFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3.11%2019.5c-.217%200-.453-.118-.453-.403v-3.69c0-.234.236-.403.453-.403h1.504c3.001%200%202.935%204.496.058%204.496H3.11zm.414-3.703v2.91h1.09c1.773%200%201.851-2.91%200-2.91h-1.09zM10.063%2019.565c-1.215.052-2.477-.748-2.477-2.34%200-1.597%201.26-2.383%202.477-2.383%201.149.058%202.35.844%202.35%202.384s-1.201%202.339-2.35%202.339zm-.073-3.878c-.736%200-1.537.513-1.537%201.54%200%201.02.802%201.54%201.537%201.54.756%200%201.563-.52%201.563-1.54%200-1.027-.807-1.54-1.563-1.54zM13.186%2017.22c0-1.254.796-2.333%202.306-2.333.572%200%201.025.17%201.504.579a.439.439%200%200%201%20.02.63.45.45%200%200%201-.605-.02c-.268-.28-.544-.357-.919-.357-1.011%200-1.496.709-1.496%201.501%200%20.806.478%201.546%201.496%201.546.375%200%20.723-.15%201.025-.416a.444.444%200%200%201%20.604.078c.105.143.157.384-.072.61-.46.424-1.011.508-1.558.508-1.588%200-2.305-1.073-2.305-2.327z%22%2F%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M18.893%2021.938H3.286v.812h15.607a.82.82%200%200%200%20.821-.813v-.812a.82.82%200%200%201-.821.813z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var DocxAIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2226%22%20viewBox%3D%220%200%2023%2026%22%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23E2E5E7%22%20d%3D%22M4.929%200c-.904%200-1.643.731-1.643%201.625v22.75c0%20.894.739%201.625%201.643%201.625h16.428c.904%200%201.643-.731%201.643-1.625V6.5L16.429%200h-11.5z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23B0B7BD%22%20d%3D%22M18.071%206.5H23L16.429%200v4.875c0%20.894.739%201.625%201.642%201.625z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M23%2011.375L18.071%206.5H23z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%234C9FD2%22%20d%3D%22M19.714%2021.125a.82.82%200%200%201-.821.813H.82A.82.82%200%200%201%200%2021.125V13a.82.82%200%200%201%20.821-.813h18.072a.82.82%200%200%201%20.821.813v8.125z%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23FFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M1.364%2019.5c-.216%200-.453-.118-.453-.403v-3.69c0-.234.237-.403.453-.403h1.504c3.002%200%202.935%204.496.059%204.496H1.364zm.414-3.703v2.91h1.09c1.774%200%201.852-2.91%200-2.91h-1.09z%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M7.89%2019.565c-1.215.052-2.476-.748-2.476-2.34%200-1.597%201.26-2.383%202.476-2.383%201.15.058%202.351.844%202.351%202.384s-1.202%202.339-2.35%202.339zm-.072-3.878c-.736%200-1.537.513-1.537%201.54%200%201.02.802%201.54%201.537%201.54.756%200%201.563-.52%201.563-1.54%200-1.027-.807-1.54-1.563-1.54zM10.553%2017.22c0-1.254.795-2.333%202.305-2.333.572%200%201.026.17%201.505.579a.439.439%200%200%201%20.02.63.45.45%200%200%201-.605-.02c-.269-.28-.545-.357-.92-.357-1.01%200-1.496.709-1.496%201.501%200%20.806.479%201.546%201.496%201.546.375%200%20.723-.15%201.026-.416a.444.444%200%200%201%20.603.078c.106.143.157.384-.072.61-.46.424-1.011.508-1.557.508-1.589%200-2.305-1.073-2.305-2.327zM16.895%2016.562l1.143-1.416c.342-.442%201.005.123.631.546-.394.461-.807.962-1.202%201.473l1.34%201.65c.36.488-.361.956-.716.475l-1.208-1.533-1.189%201.566c-.335.473-1.078-.059-.702-.5l1.319-1.658c-.413-.512-.814-1.012-1.215-1.473-.414-.488.355-.988.656-.533l1.143%201.403z%22%2F%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M18.893%2021.938H3.286v.812h15.607a.82.82%200%200%200%20.821-.813v-.812a.82.82%200%200%201-.821.813z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var OthersIcon = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2223px%22%20height%3D%2226px%22%20viewBox%3D%220%200%20448%20512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3Efile%20%2F%20others%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22file-%2F-others%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Others%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M96%2C0%20C78.4%2C0%2064%2C14.4%2064%2C32%20L64%2C480%20C64%2C497.6%2078.4%2C512%2096%2C512%20L416%2C512%20C433.6%2C512%20448%2C497.6%20448%2C480%20L448%2C128%20L320%2C0%20L96%2C0%20Z%22%20id%3D%22Shape%22%20fill%3D%22%23E2E5E7%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M352%2C128%20L448%2C128%20L320%2C0%20L320%2C96%20C320%2C113.6%20334.4%2C128%20352%2C128%20Z%22%20id%3D%22Shape%22%20fill%3D%22%23B0B7BD%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20fill%3D%22%23CAD1D8%22%20points%3D%22448%20224%20352%20128%20448%20128%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M384%2C416%20C384%2C424.8%20376.8%2C432%20368%2C432%20L16%2C432%20C7.2%2C432%200%2C424.8%200%2C416%20L0%2C256%20C0%2C247.2%207.2%2C240%2016%2C240%20L368%2C240%20C376.8%2C240%20384%2C247.2%20384%2C256%20L384%2C416%20Z%22%20id%3D%22Shape%22%20fill%3D%22%23B0B7BD%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M368%2C432%20L64%2C432%20L64%2C448%20L368%2C448%20C376.8%2C448%20384%2C440.8%20384%2C432%20L384%2C416%20C384%2C424.8%20376.8%2C432%20368%2C432%20Z%22%20id%3D%22Shape%22%20fill%3D%22%23CAD1D8%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var HtmlIcon = "data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2236%22%20viewBox%3D%220%200%2030%2036%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M19.8134%202H4.2659C3.83304%202%203.48215%202.35089%203.48215%203.03179V31.4643C3.48215%2031.6491%203.83304%2032%204.2659%2032H25.7341C26.167%2032%2026.5179%2031.6491%2026.5179%2031.4643V8.9525C26.5179%208.57964%2026.468%208.45964%2026.3802%208.37125L20.1466%202.13768C20.0582%202.04982%2019.9382%202%2019.8134%202Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M20.0893%202.08089V8.42857H26.437L20.0893%202.08089Z%22%20fill%3D%22%23D9D7CA%22%2F%3E%3Cpath%20d%3D%22M25.7341%2032H4.2659C3.83304%2032%203.48215%2031.6491%203.48215%2031.2163V22.8929H26.5179V31.2163C26.5179%2031.6491%2026.167%2032%2025.7341%2032Z%22%20fill%3D%22%23EC6630%22%2F%3E%3Cpath%20d%3D%22M9.3509%2024.995V30.3929H8.4718V27.9613H6.13555V30.3929H5.24197V24.995H6.13555V27.3607H8.4718V24.995H9.3509V24.995Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M14.5216%2024.995V25.5955H12.9107V30.3929H12.0247V25.5955H10.4132V24.995H14.5216Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M19.6634%2024.995H20.557V30.3929H19.6634V26.6793L18.4548%2029.682H17.6786L16.4625%2026.6793V30.3929H15.5689V24.995H16.4625L18.0664%2028.6866L19.6634%2024.995Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M22.8054%2024.995V29.7264H25.2884V30.3929H21.9118V24.995H22.8054Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M12.4323%2010.7284C12.2229%2010.5189%2011.8843%2010.5189%2011.6748%2010.7284L8.46053%2013.9427C8.25107%2014.1521%208.25107%2014.4907%208.46053%2014.7002L11.6748%2017.9145C11.7793%2018.0189%2011.9164%2018.0714%2012.0536%2018.0714C12.1907%2018.0714%2012.3279%2018.0189%2012.4323%2017.9145C12.6418%2017.705%2012.6418%2017.3664%2012.4323%2017.157L9.59678%2014.3214L12.4323%2011.4859C12.6418%2011.2764%2012.6418%2010.9379%2012.4323%2010.7284Z%22%20fill%3D%22%23EC6630%22%2F%3E%3Cpath%20d%3D%22M22.0752%2013.9427L18.8609%2010.7284C18.6514%2010.5189%2018.3129%2010.5189%2018.1034%2010.7284C17.8939%2010.9379%2017.8939%2011.2764%2018.1034%2011.4859L20.9389%2014.3214L18.1034%2017.157C17.8939%2017.3664%2017.8939%2017.705%2018.1034%2017.9145C18.2079%2018.0189%2018.345%2018.0714%2018.4821%2018.0714C18.6193%2018.0714%2018.7564%2018.0189%2018.8609%2017.9145L22.0752%2014.7002C22.2846%2014.4907%2022.2846%2014.1521%2022.0752%2013.9427Z%22%20fill%3D%22%23EC6630%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%22-3%22%20y%3D%220%22%20width%3D%2236%22%20height%3D%2236%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221.5%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var TxtIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2226%22%20viewBox%3D%220%200%2023%2026%22%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23E2E5E7%22%20d%3D%22M4.929%200c-.904%200-1.643.731-1.643%201.625v22.75c0%20.894.739%201.625%201.643%201.625h16.428c.904%200%201.643-.731%201.643-1.625V6.5L16.429%200h-11.5z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23B0B7BD%22%20d%3D%22M18.071%206.5H23L16.429%200v4.875c0%20.894.739%201.625%201.642%201.625z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M23%2011.375L18.071%206.5H23z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%234C9FD2%22%20d%3D%22M19.714%2021.125a.82.82%200%200%201-.821.813H.82A.82.82%200%200%201%200%2021.125V13a.82.82%200%200%201%20.821-.813h18.072a.82.82%200%200%201%20.821.813v8.125z%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20fill%3D%22%23FFF%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M5.174%2015.817H4.025c-.572%200-.572-.831%200-.831h3.107c.585%200%20.585.83%200%20.83H6.04v3.281c0%20.565-.868.579-.868%200v-3.28h.001zM9.878%2016.564l1.144-1.417c.342-.44%201.005.124.63.546-.393.462-.807.962-1.202%201.474l1.34%201.65c.361.488-.36.956-.715.475l-1.209-1.533-1.188%201.566c-.336.473-1.078-.059-.703-.501l1.32-1.657c-.414-.512-.815-1.012-1.215-1.474-.414-.487.354-.987.656-.532l1.143%201.403zM13.671%2015.817h-1.148c-.572%200-.572-.831%200-.831h3.106c.584%200%20.584.83%200%20.83h-1.09v3.281c0%20.565-.868.579-.868%200v-3.28z%22%2F%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23CAD1D8%22%20d%3D%22M18.893%2021.938H3.286v.812h15.607a.82.82%200%200%200%20.821-.813v-.812a.82.82%200%200%201-.821.813z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var AiIcon = "data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2236%22%20viewBox%3D%220%200%2030%2036%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M19.8134%202H4.2659C3.83304%202%203.48215%202.35089%203.48215%203.03179V31.4643C3.48215%2031.6491%203.83304%2032%204.2659%2032H25.7341C26.167%2032%2026.5179%2031.6491%2026.5179%2031.4643V8.9525C26.5179%208.57964%2026.468%208.45964%2026.3802%208.37125L20.1466%202.13768C20.0582%202.04982%2019.9382%202%2019.8134%202Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M25.7341%2032H4.2659C3.83304%2032%203.48215%2031.6491%203.48215%2031.2163V22.8929H26.5179V31.2163C26.5179%2031.6491%2026.167%2032%2025.7341%2032Z%22%20fill%3D%22%23F2C94C%22%2F%3E%3Cpath%20d%3D%22M10.7502%2030.3929L12.6396%2025.002H13.5113L15.3868%2030.3929H14.4788L14.0904%2029.2721H12.0616L11.6657%2030.3929H10.7502ZM12.2663%2028.6791H13.8777L13.0795%2026.3498L12.2663%2028.6791Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M17.43%2030.3929H16.5364V24.995H17.43V30.3929Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M20.0893%207.89286V8.13982C18.4441%208.6584%2017.1413%209.95161%2016.6061%2011.5898C16.238%2011.2925%2015.7768%2011.1071%2015.2679%2011.1071C14.272%2011.1071%2013.4405%2011.7929%2013.2011%2012.7143H11.5179V11.6429H8.30358V14.8571H11.5179V13.7857H13.0827C12.9027%2015.2123%2012.0193%2016.4525%2010.7314%2017.0873C10.3736%2016.4021%209.6643%2015.9286%208.8393%2015.9286C7.65751%2015.9286%206.69644%2016.8896%206.69644%2018.0714C6.69644%2019.2532%207.65751%2020.2143%208.8393%2020.2143C9.98894%2020.2143%2010.9222%2019.3025%2010.9725%2018.1652C12.3948%2017.5486%2013.462%2016.3507%2013.9318%2014.9118C14.2993%2015.208%2014.76%2015.3929%2015.2679%2015.3929C16.2638%2015.3929%2017.0952%2014.7071%2017.3347%2013.7857H19.0179V14.8571H22.2322V11.6429H19.0179V12.7143H17.4477C17.6507%2011.097%2018.757%209.76036%2020.2452%209.2225C20.5623%2010.0116%2021.3311%2010.5714%2022.2322%2010.5714C23.4139%2010.5714%2024.375%209.61036%2024.375%208.42857V7.89286H20.0893ZM10.4464%2013.7857H9.37501V12.7143H10.4464V13.7857ZM8.8393%2019.1429C8.24841%2019.1429%207.76787%2018.6623%207.76787%2018.0714C7.76787%2017.4805%208.24841%2017%208.8393%2017C9.43019%2017%209.91073%2017.4805%209.91073%2018.0714C9.91073%2018.6623%209.43019%2019.1429%208.8393%2019.1429ZM20.0893%2012.7143H21.1607V13.7857H20.0893V12.7143ZM15.2679%2014.3214C14.677%2014.3214%2014.1964%2013.8409%2014.1964%2013.25C14.1964%2012.6591%2014.677%2012.1786%2015.2679%2012.1786C15.8588%2012.1786%2016.3393%2012.6591%2016.3393%2013.25C16.3393%2013.8409%2015.8588%2014.3214%2015.2679%2014.3214ZM22.2322%209.5C21.8448%209.5%2021.5073%209.29161%2021.3193%208.98357C21.4436%208.97232%2021.5689%208.96429%2021.6964%208.96429H23.1595C22.9747%209.28411%2022.628%209.5%2022.2322%209.5Z%22%20fill%3D%22%23BDBDBD%22%2F%3E%3Cpath%20d%3D%22M20.0893%202.08089V8.42857H26.437L20.0893%202.08089Z%22%20fill%3D%22%23D9D7CA%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%22-3%22%20y%3D%220%22%20width%3D%2236%22%20height%3D%2236%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221.5%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var MP4Icon = "data:image/svg+xml,%3Csvg%20width%3D%22151%22%20height%3D%22172%22%20viewBox%3D%220%200%20151%20172%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M32.1533%200C26.2585%200%2021.4355%204.82143%2021.4355%2010.7143V160.714C21.4355%20166.607%2026.2585%20171.429%2032.1533%20171.429H139.331C145.225%20171.429%20150.048%20166.607%20150.048%20160.714V42.8571L107.177%200H32.1533Z%22%20fill%3D%22%23EEEEEE%22%2F%3E%3Cpath%20d%3D%22M117.895%2042.8571H150.049L107.178%200V32.1429C107.178%2038.0357%20112.001%2042.8571%20117.895%2042.8571Z%22%20fill%3D%22%23A4A4A4%22%2F%3E%3Cpath%20d%3D%22M117.895%2042.8571L150.048%2075V42.8571H117.895Z%22%20fill%3D%22%23C4C4C4%22%2F%3E%3Cpath%20d%3D%22M21.4355%20144.643H123.254C126.201%20144.643%20128.613%20142.232%20128.613%20139.286V144.643C128.613%20147.589%20126.201%20150%20123.254%20150H21.4355V144.643Z%22%20fill%3D%22%23C4C4C4%22%2F%3E%3Cpath%20d%3D%22M130.432%20139.561C130.432%20142.583%20127.986%20145.055%20124.997%20145.055H5.43465C2.44559%20145.055%200%20142.583%200%20139.561V84.6158C0%2081.5938%202.44559%2079.1213%205.43465%2079.1213H124.997C127.986%2079.1213%20130.432%2081.5938%20130.432%2084.6158V139.561Z%22%20fill%3D%22%239C27B0%22%2F%3E%3Cpath%20d%3D%22M23.8992%20128.571C23.2344%20128.571%2022.6563%20128.353%2022.1648%20127.915C21.6734%20127.477%2021.4277%20126.963%2021.4277%20126.371V102.587C21.4277%20101.995%2021.6734%20101.48%2022.1648%20101.042C22.6563%20100.605%2023.2344%20100.386%2023.8992%20100.386H24.9832C25.7348%20100.386%2026.4285%20100.566%2027.0645%20100.927C27.7004%20101.287%2028.1629%20101.763%2028.452%20102.355L36.0399%20116.95C36.0399%20116.976%2036.0544%20116.988%2036.0833%20116.988C36.1122%20116.988%2036.1267%20116.976%2036.1267%20116.95L43.7146%20102.355C44.0037%20101.763%2044.4662%20101.287%2045.1021%20100.927C45.7381%20100.566%2046.4318%20100.386%2047.1834%20100.386H48.4408C49.1057%20100.386%2049.6838%20100.605%2050.1752%20101.042C50.6666%20101.48%2050.9123%20101.995%2050.9123%20102.587V126.371C50.9123%20126.963%2050.6666%20127.477%2050.1752%20127.915C49.6838%20128.353%2049.1057%20128.571%2048.4408%20128.571H47.4869C46.8221%20128.571%2046.2439%20128.353%2045.7525%20127.915C45.2611%20127.477%2045.0154%20126.963%2045.0154%20126.371V109.575C45.0154%20109.55%2045.0009%20109.537%2044.972%20109.537C44.9431%20109.537%2044.9287%20109.55%2044.9287%20109.575L39.7255%20119.498C39.4075%20120.09%2038.9161%20120.579%2038.2513%20120.965C37.6153%20121.326%2036.936%20121.506%2036.2134%20121.506H35.9532C35.2306%20121.506%2034.5368%20121.326%2033.872%20120.965C33.236%20120.579%2032.7591%20120.09%2032.4411%20119.498L27.2379%20109.575C27.2379%20109.55%2027.2235%20109.537%2027.1946%20109.537C27.1657%20109.537%2027.1512%20109.55%2027.1512%20109.575V126.371C27.1512%20126.963%2026.9055%20127.477%2026.4141%20127.915C25.9227%20128.353%2025.3446%20128.571%2024.6797%20128.571H23.8992Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M63.742%20104.788V114.093C63.742%20114.273%2063.8577%20114.389%2064.0889%20114.44C65.1874%20114.569%2066.2569%20114.633%2067.2975%20114.633C69.6389%20114.633%2071.4167%20114.183%2072.6308%20113.282C73.8737%20112.355%2074.4952%20111.042%2074.4952%20109.344C74.4952%20105.92%2072.096%20104.208%2067.2975%20104.208C66.2569%20104.208%2065.1874%20104.273%2064.0889%20104.402C63.8577%20104.453%2063.742%20104.582%2063.742%20104.788ZM60.1865%20128.571C59.5217%20128.571%2058.9436%20128.353%2058.4522%20127.915C57.9896%20127.477%2057.7584%20126.963%2057.7584%20126.371V102.78C57.7584%20102.162%2057.9896%20101.609%2058.4522%20101.12C58.9147%20100.631%2059.4928%20100.36%2060.1865%20100.309C62.6436%20100.103%2065.0139%20100%2067.2975%20100C71.6335%20100%2074.8855%20100.772%2077.0535%20102.317C79.2214%20103.835%2080.3054%20106.049%2080.3054%20108.958C80.3054%20112.175%2079.2503%20114.607%2077.1402%20116.255C75.0589%20117.902%2071.9659%20118.726%2067.8612%20118.726C66.9073%20118.726%2065.6499%20118.674%2064.0889%20118.571C63.8577%20118.571%2063.742%20118.674%2063.742%20118.88V126.371C63.742%20126.963%2063.4963%20127.477%2063.0049%20127.915C62.5135%20128.353%2061.9354%20128.571%2061.2705%20128.571H60.1865Z%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M87.8036%20118.417C87.8036%20118.443%2087.7891%20118.456%2087.7602%20118.456C87.7602%20118.456%2087.7602%20118.468%2087.7602%20118.494C87.7602%20118.52%2087.7747%20118.533%2087.8036%20118.533H96.0853C96.3165%20118.533%2096.4322%20118.417%2096.4322%20118.185V107.49C96.4322%20107.465%2096.4177%20107.452%2096.3888%20107.452H96.3455L87.8036%20118.417ZM84.5083%20122.78C83.8723%20122.78%2083.3086%20122.574%2082.8172%20122.162C82.3547%20121.75%2082.1235%20121.248%2082.1235%20120.656C82.1235%20119.215%2082.586%20117.928%2083.511%20116.795L95.0447%20102.162C95.9697%20100.978%2097.256%20100.386%2098.9037%20100.386H99.8576C100.522%20100.386%20101.101%20100.605%20101.592%20101.042C102.083%20101.48%20102.329%20101.995%20102.329%20102.587V118.185C102.329%20118.417%20102.445%20118.533%20102.676%20118.533H104.757C105.422%20118.533%20105.986%20118.739%20106.448%20119.151C106.911%20119.562%20107.142%20120.064%20107.142%20120.656C107.142%20121.248%20106.911%20121.75%20106.448%20122.162C105.986%20122.574%20105.422%20122.78%20104.757%20122.78H102.676C102.445%20122.78%20102.329%20122.896%20102.329%20123.127V126.371C102.329%20126.963%20102.083%20127.477%20101.592%20127.915C101.101%20128.353%20100.522%20128.571%2099.8576%20128.571H98.9037C98.2388%20128.571%2097.6607%20128.353%2097.1693%20127.915C96.6779%20127.477%2096.4322%20126.963%2096.4322%20126.371V123.127C96.4322%20122.896%2096.3165%20122.78%2096.0853%20122.78H84.5083Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

var _AttachmentFileIcons;
var AttachmentFileIcons = (_AttachmentFileIcons = {
  png: PngAIcon,
  jpg: JpgAIcon,
  jpeg: JpgAIcon,
  pdf: PdfAIcon,
  ppt: PptAIcon,
  pptx: PptAIcon,
  xls: XlsAIcon,
  docx: DocxAIcon,
  xlsx: XlsxIcon,
  doc: DocAIcon
}, _defineProperty(_AttachmentFileIcons, "ppt", PptAIcon), _defineProperty(_AttachmentFileIcons, "html", HtmlIcon), _defineProperty(_AttachmentFileIcons, "htm", HtmlIcon), _defineProperty(_AttachmentFileIcons, "txt", TxtIcon), _defineProperty(_AttachmentFileIcons, "ai", AiIcon), _defineProperty(_AttachmentFileIcons, "ods", OthersIcon), _defineProperty(_AttachmentFileIcons, "odt", OthersIcon), _defineProperty(_AttachmentFileIcons, "mp4", MP4Icon), _AttachmentFileIcons);
var getAttachmentFileIcon = function getAttachmentFileIcon(value) {
  return AttachmentFileIcons[value] || OthersIcon;
};

var CancelIcon = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%226%22%20fill%3D%22%23A4A4A4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.67216%208L11.3608%2010.6886C11.5464%2010.8742%2011.5464%2011.1752%2011.3608%2011.3608C11.1752%2011.5464%2010.8742%2011.5464%2010.6886%2011.3608L8%208.67216L5.31137%2011.3608C5.12576%2011.5464%204.82482%2011.5464%204.63921%2011.3608C4.4536%2011.1752%204.4536%2010.8742%204.63921%2010.6886L7.32784%208L4.63921%205.31137C4.4536%205.12576%204.4536%204.82482%204.63921%204.63921C4.82482%204.4536%205.12576%204.4536%205.31137%204.63921L8%207.32784L10.6886%204.63921C10.8742%204.4536%2011.1752%204.4536%2011.3608%204.63921C11.5464%204.82482%2011.5464%205.12576%2011.3608%205.31137L8.67216%208Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

var _templateObject$v, _templateObject2$d, _templateObject3$8, _templateObject4$6, _templateObject5$2;
var StyledAttachmentCard = styled$4.div(_templateObject$v || (_templateObject$v = _taggedTemplateLiteral(["\n    display: inline-block;  \n    margin: ", " ", " 0 0; \n    width: ", "; \n    height: ", "; \n    border: 1px solid;\n    border-color: ", ";\n    border-color: ", ";\n    border-color: ", ";\n    background: ", ";\n    border-radius: ", " ;\n    padding: ", " ", ";\n    margin-top: -", ";\n"])), LUP_SPACING_5, LUP_SPACING_11, LUP_SPACING_170, LUP_SPACING_32, function (props) {
  return props.isUploading ? LUP_BASE_GREY_LIGHT : LUP_BASE_BLUE_DARK;
}, function (props) {
  return props.isError && LUP_FUNCTIONAL_ERROR_RED;
}, function (props) {
  return props.isHighlightedAndFocused && LUP_FUNCTIONAL_ALERT_YELLOW;
}, function (props) {
  return props.isHighlighted && LUP_FUNCTIONAL_ALERT_YELLOW_LIGHT;
}, LUP_MAIN_BORDER_RADIUS4, LUP_SPACING_3, LUP_SPACING_4, LUP_SPACING_2);
var StyledProgressBar = styled$4(_Progress)(_templateObject2$d || (_templateObject2$d = _taggedTemplateLiteral(["\n    .ant-progress-outer {\n        margin-top: -", ";\n        position: absolute;\n\n        .ant-progress-bg {\n            background-image: linear-gradient(to right, ", ", ", ") !important;\n        }\n    }\n"])), LUP_SPACING_22, LUP_BASE_BLUE_DARK, LUP_BASE_BLUE_DARK);
var StyledText$1 = styled$4(StyledText)(_templateObject3$8 || (_templateObject3$8 = _taggedTemplateLiteral(["\n    color: ", ";\n    color: ", ";\n    color: ", ";\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: ", ";\n    display: block;\n    overflow: hidden;\n    line-height: ", ";\n"])), function (props) {
  return props.isError && 'red';
}, function (props) {
  return props.isHighlighted && LUP_BASE_GREY_DARKER;
}, function (props) {
  return !props.isError && !props.isHighlighted && LUP_BASE_BLUE_DARK;
}, function (props) {
  return props.isUploading ? '80px' : '110px';
}, LUP_SPACING_22);
var StyledLink = styled$4.a(_templateObject4$6 || (_templateObject4$6 = _taggedTemplateLiteral(["\n    color: ", ";\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: ", ";\n    display: block;\n    overflow: hidden;\n\n    &:hover, &:active, &:focus {\n        color: ", ";\n    }\n"])), function (props) {
  return props.isHighlighted ? LUP_BASE_GREY_DARKER : LUP_BASE_BLUE_DARK;
}, LUP_SPACING_130, LUP_BASE_BLUE_DARK);
var IconButtonWrapper = styled$4(StyledBlock)(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["\n    padding-right: ", ";\n"])), LUP_SPACING_4);

var REACT_APP_FILE_SERVICE_URL = process.env.REACT_APP_FILE_SERVICE_URL;

var AttachmentCard = function AttachmentCard(_ref) {
  var isFocused = _ref.isFocused,
      searchText = _ref.searchText,
      attachment = _ref.attachment,
      deleteAttachment = _ref.deleteAttachment,
      cancelAttachmentUpload = _ref.cancelAttachmentUpload,
      parent = _ref.parent,
      appCode = _ref.appCode;
  var fileNameSplit = attachment.name.split('.');
  var isHighlighted = searchText && attachment.name && attachment.name.toLowerCase().includes(searchText.toLowerCase());
  var isHighlightedAndFocused = isHighlighted && isFocused;
  var fileExtension = fileNameSplit[fileNameSplit.length - 1].toLowerCase();
  var fileIcon = getAttachmentFileIcon(fileExtension);
  var isUploading = attachment.progress !== 100 && !attachment.id;
  var isError = attachment.error;
  var src = "".concat(REACT_APP_FILE_SERVICE_URL, "/").concat(appCode, "/file/").concat(attachment.id);
  return /*#__PURE__*/React.createElement(StyledAttachmentCard, {
    isHighlighted: isHighlighted,
    isHighlightedAndFocused: isHighlightedAndFocused,
    isUploading: isUploading,
    isError: attachment.error
  }, /*#__PURE__*/React.createElement(_Row, null, /*#__PURE__*/React.createElement(_Col, {
    span: 4
  }, /*#__PURE__*/React.createElement(IconButton, {
    src: fileIcon,
    size: "20px"
  })), parent === "chatItems" ? /*#__PURE__*/React.createElement(_Col, {
    span: 20
  }, /*#__PURE__*/React.createElement(StyledLink, {
    href: src,
    isHighlighted: isHighlighted,
    target: "_blank"
  }, attachment.name)) : /*#__PURE__*/React.createElement(_Col, {
    span: isUploading && !isError ? 12 : 16
  }, /*#__PURE__*/React.createElement(StyledText$1, {
    isHighlighted: isHighlighted,
    isUploading: isUploading
  }, attachment.name)), parent !== "chatItems" && /*#__PURE__*/React.createElement(React.Fragment, null, isUploading && !isError && /*#__PURE__*/React.createElement(_Col, {
    span: 4
  }, /*#__PURE__*/React.createElement(StyledText, {
    color: LUP_BASE_BLUE_DARK,
    fontSize: "10px"
  }, attachment.progress, "%")), /*#__PURE__*/React.createElement(_Col, {
    span: 4,
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(IconButtonWrapper, null, /*#__PURE__*/React.createElement(IconButton, {
    src: isUploading && !isError ? CancelIcon : DeleteSVG,
    onClick: function onClick() {
      return isUploading && !isError ? cancelAttachmentUpload(attachment) : deleteAttachment(attachment);
    }
  }))))), parent !== "chatItems" && !isError && /*#__PURE__*/React.createElement(StyledProgressBar, {
    percent: attachment.progress,
    size: "small",
    strokeWidth: isUploading ? 1 : 0.5,
    type: "line",
    strokeLinecap: "square",
    showInfo: false,
    strokeColor: LUP_BASE_BLUE_DARK
  }), isError && /*#__PURE__*/React.createElement(StyledText, {
    color: LUP_FUNCTIONAL_ERROR_RED,
    fontSize: LUP_MAIN_FONT_SIZE12,
    lineHeight: LUP_SPACING_18
  }, "Failed to upload.Try again."));
};

AttachmentCard.propTypes = {
  attachment: propTypes.object,
  deleteAttachment: propTypes.func,
  cancelAttachmentUpload: propTypes.func,
  parent: propTypes.string,
  appCode: propTypes.string,
  searchText: propTypes.string,
  isFocused: propTypes.bool
};
AttachmentCard.defaultProps = {
  attachment: {},
  deleteAttachment: function deleteAttachment() {},
  cancelAttachmentUpload: function cancelAttachmentUpload() {},
  parent: "",
  appCode: "",
  searchText: "",
  isFocused: false
};

var RichTextIconInternal = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%2012.8576L3.54235%203H5.79033L8.33268%2012.8576H7.31574L6.6467%2010.3219H2.68598L2.01694%2012.8576H1ZM4.31844%203.94017L2.91346%209.33903H6.41923L5.01424%203.94017H4.31844Z%22%20fill%3D%22%230076BF%22%2F%3E%3Cpath%20d%3D%22M10.5977%2013C9.45588%2013%208.88497%2012.2925%208.88497%2010.8775C8.88497%2010.0893%209.00094%209.30579%209.23287%208.52707C9.47373%207.73884%209.86177%207.05508%2010.397%206.47578C10.9322%205.88699%2011.5522%205.59259%2012.2569%205.59259C12.8011%205.59259%2013.546%205.67806%2014.4915%205.849L15%205.94872L13.9831%2010.5783C13.8582%2011.1102%2013.7511%2011.7369%2013.6619%2012.4587L13.6084%2012.8291L12.6316%2012.8718C12.7565%2012.0551%2012.8368%2011.547%2012.8725%2011.3476C12.8278%2011.433%2012.694%2011.5992%2012.471%2011.8462C12.2569%2012.0836%2012.0651%2012.2783%2011.8957%2012.4302C11.7262%2012.5726%2011.521%2012.7056%2011.2801%2012.8291C11.0393%2012.943%2010.8118%2013%2010.5977%2013ZM13.8359%206.71795C13.2114%206.585%2012.6717%206.51852%2012.2168%206.51852C11.7708%206.51852%2011.3604%206.76543%2010.9858%207.25926C10.6111%207.74359%2010.339%208.31339%2010.1695%208.96866C10%209.61443%209.91529%2010.1937%209.91529%2010.7066C9.91529%2011.2194%209.99112%2011.5755%2010.1428%2011.7749C10.2944%2011.9744%2010.5219%2012.0741%2010.8252%2012.0741C11.1285%2012.0741%2011.4585%2011.9221%2011.8154%2011.6182C12.1811%2011.3048%2012.4844%2010.9915%2012.7253%2010.6781L13.0732%2010.208L13.8359%206.71795Z%22%20fill%3D%22%230076BF%22%2F%3E%3C%2Fsvg%3E";

var AttachmentIconInternal = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M3.68428%2014.755C3.26152%2014.58%202.87398%2014.3%202.52168%2013.95C2.06369%2013.495%201.74661%2012.97%201.60569%2012.375C1.46477%2011.78%201.46477%2011.15%201.60569%2010.555C1.74661%209.96%202.06369%209.435%202.52168%208.98L9.7439%201.805C10.2724%201.28%2010.9417%201%2011.7168%201C12.4919%201%2013.126%201.28%2013.6897%201.805C14.2534%202.33%2014.5%202.995%2014.5%203.765C14.5%204.535%2014.2182%205.165%2013.6897%205.69L7.55962%2011.815C7.17209%2012.2%206.71409%2012.375%206.15041%2012.375C5.58672%2012.375%205.12873%2012.2%204.74119%2011.815C4.35366%2011.43%204.17751%2010.975%204.17751%2010.415C4.17751%209.855%204.35366%209.4%204.74119%209.015L9.42683%204.325C9.49729%204.255%209.56775%204.22%209.63821%204.22C9.70867%204.22%209.81436%204.255%209.84959%204.325L10.0257%204.465C10.0962%204.535%2010.1314%204.605%2010.1314%204.71C10.1314%204.815%2010.0962%204.885%2010.0257%204.92L5.34011%209.61C5.12873%209.82%205.02304%2010.1%205.02304%2010.38C5.02304%2010.66%205.12873%2010.94%205.34011%2011.15C5.55149%2011.36%205.83333%2011.465%206.11518%2011.465C6.39702%2011.465%206.67886%2011.36%206.89024%2011.15L13.0203%205.095C13.3726%204.71%2013.584%204.255%2013.584%203.73C13.584%203.205%2013.4079%202.785%2013.0203%202.4C12.6328%202.015%2012.2453%201.875%2011.7168%201.875C11.1883%201.875%2010.7304%202.05%2010.3428%202.435L3.15583%209.575C2.62737%2010.1%202.38076%2010.73%202.38076%2011.465C2.38076%2012.2%202.62737%2012.83%203.15583%2013.355C3.68428%2013.88%204.31843%2014.125%205.05827%2014.125C5.7981%2014.125%206.43225%2013.88%206.9607%2013.355L12.9499%207.405C13.0203%207.335%2013.0908%207.3%2013.1612%207.3C13.2317%207.3%2013.3374%207.335%2013.4079%207.405L13.5488%207.58C13.6192%207.65%2013.6545%207.72%2013.6545%207.79C13.6545%207.86%2013.6192%207.965%2013.5488%208L7.55962%2013.95C7.24255%2014.3%206.85501%2014.545%206.39702%2014.72C5.93902%2014.895%205.51626%2015%205.05827%2015C4.60027%2015%204.14228%2014.93%203.68428%2014.755Z%22%20fill%3D%22%230076BF%22%2F%3E%3C%2Fsvg%3E";

var RichTextIconExternal = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2210%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%209.85755L2.54235%200H4.79033L7.33268%209.85755H6.31574L5.6467%207.32194H1.68598L1.01694%209.85755H0ZM3.31844%200.940171L1.91346%206.33903H5.41923L4.01424%200.940171H3.31844Z%22%20fill%3D%22%23F2994A%22%2F%3E%3Cpath%20d%3D%22M9.59771%2010C8.45588%2010%207.88497%209.2925%207.88497%207.87749C7.88497%207.08927%208.00094%206.30579%208.23287%205.52707C8.47373%204.73884%208.86177%204.05508%209.397%203.47578C9.93223%202.88699%2010.5522%202.59259%2011.2569%202.59259C11.8011%202.59259%2012.546%202.67806%2013.4915%202.849L14%202.94872L12.9831%207.57835C12.8582%208.11016%2012.7511%208.73694%2012.6619%209.45869L12.6084%209.82906L11.6316%209.8718C11.7565%209.05508%2011.8368%208.54701%2011.8725%208.34758C11.8278%208.43305%2011.694%208.59924%2011.471%208.84615C11.2569%209.08357%2011.0651%209.27825%2010.8957%209.4302C10.7262%209.57265%2010.521%209.7056%2010.2801%209.82906C10.0393%209.94302%209.81181%2010%209.59771%2010ZM12.8359%203.71795C12.2114%203.585%2011.6717%203.51852%2011.2168%203.51852C10.7708%203.51852%2010.3604%203.76543%209.98576%204.25926C9.61109%204.74359%209.33902%205.31339%209.16953%205.96866C9.00004%206.61443%208.91529%207.19373%208.91529%207.70655C8.91529%208.21937%208.99112%208.5755%209.14277%208.77493C9.29442%208.97436%209.52189%209.07407%209.82519%209.07407C10.1285%209.07407%2010.4585%208.92213%2010.8154%208.61823C11.1811%208.30484%2011.4844%207.99145%2011.7253%207.67806L12.0732%207.20798L12.8359%203.71795Z%22%20fill%3D%22%23F2994A%22%2F%3E%3C%2Fsvg%3E";

var AttachmentIconExternal = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.68428%2013.755C2.26152%2013.58%201.87398%2013.3%201.52168%2012.95C1.06369%2012.495%200.746612%2011.97%200.605691%2011.375C0.46477%2010.78%200.46477%2010.15%200.605691%209.555C0.746612%208.96%201.06369%208.435%201.52168%207.98L8.7439%200.805C9.27236%200.28%209.94173%200%2010.7168%200C11.4919%200%2012.126%200.28%2012.6897%200.805C13.2534%201.33%2013.5%201.995%2013.5%202.765C13.5%203.535%2013.2182%204.165%2012.6897%204.69L6.55962%2010.815C6.17209%2011.2%205.71409%2011.375%205.15041%2011.375C4.58672%2011.375%204.12873%2011.2%203.74119%2010.815C3.35366%2010.43%203.17751%209.975%203.17751%209.415C3.17751%208.855%203.35366%208.4%203.74119%208.015L8.42683%203.325C8.49729%203.255%208.56775%203.22%208.63821%203.22C8.70867%203.22%208.81436%203.255%208.84959%203.325L9.02575%203.465C9.09621%203.535%209.13144%203.605%209.13144%203.71C9.13144%203.815%209.09621%203.885%209.02575%203.92L4.34011%208.61C4.12873%208.82%204.02304%209.1%204.02304%209.38C4.02304%209.66%204.12873%209.94%204.34011%2010.15C4.55149%2010.36%204.83333%2010.465%205.11518%2010.465C5.39702%2010.465%205.67886%2010.36%205.89024%2010.15L12.0203%204.095C12.3726%203.71%2012.584%203.255%2012.584%202.73C12.584%202.205%2012.4079%201.785%2012.0203%201.4C11.6328%201.015%2011.2453%200.875%2010.7168%200.875C10.1883%200.875%209.73035%201.05%209.34282%201.435L2.15583%208.575C1.62737%209.1%201.38076%209.73%201.38076%2010.465C1.38076%2011.2%201.62737%2011.83%202.15583%2012.355C2.68428%2012.88%203.31843%2013.125%204.05827%2013.125C4.7981%2013.125%205.43225%2012.88%205.9607%2012.355L11.9499%206.405C12.0203%206.335%2012.0908%206.3%2012.1612%206.3C12.2317%206.3%2012.3374%206.335%2012.4079%206.405L12.5488%206.58C12.6192%206.65%2012.6545%206.72%2012.6545%206.79C12.6545%206.86%2012.6192%206.965%2012.5488%207L6.55962%2012.95C6.24255%2013.3%205.85501%2013.545%205.39702%2013.72C4.93902%2013.895%204.51626%2014%204.05827%2014C3.60027%2014%203.14228%2013.93%202.68428%2013.755Z%22%20fill%3D%22%23F2994A%22%2F%3E%3C%2Fsvg%3E";

var _templateObject$w, _templateObject2$e, _templateObject3$9;
var StyledChatAction$1 = styled$4.div(_templateObject$w || (_templateObject$w = _taggedTemplateLiteral(["\n    padding-left:", ";\n    padding-right:", ";\n    display: inline-flex;\n    float: right;\n"])), LUP_SPACING_8, LUP_SPACING_10);
var StyledChatInputTextArea = styled$4.div(_templateObject2$e || (_templateObject2$e = _taggedTemplateLiteral(["\n    border:  ", " solid ", ";\n    background-color: ", " !important;\n    border-radius: ", ";\n    position: relative;\n    display: flex;\n    min-height: ", ";\n    height: fit-content;\n    &:hover,\n    &:focus,\n    &:active,\n    &:focus-within {\n      outline: none;\n      border-width: ", ";\n      border-style: solid;\n      border-color: ", ";\n    }\n  \n    &:focus,\n    &:active,\n    &:focus-within {\n      border-width: ", ";\n    }\n"])), LUP_MAIN_BORDER_WIDTH1, LUP_BASE_GREY, WHITE, LUP_MAIN_BORDER_WIDTH2, LUP_SPACING_33, LUP_MAIN_BORDER_WIDTH2, function (props) {
  return props.index ? LUP_SECONDARY_DEEP_YELLOW : LUP_BASE_BLUE_DARK;
}, LUP_MAIN_BORDER_WIDTH2);
var StyledBlock$3 = styled$4(StyledBlock)(_templateObject3$9 || (_templateObject3$9 = _taggedTemplateLiteral(["\n  padding: ", " ", " ", " 0;\n  min-width: ", ";\n  height: ", ";\n  float: right;\n  background-color: ", " !important;\n"])), LUP_SPACING_8, LUP_SPACING_2, LUP_SPACING_8, LUP_SPACING_70, LUP_SPACING_33, WHITE);

var ChatInputArea = function ChatInputArea(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      users = _ref.users,
      onChange = _ref.onChange,
      attachments = _ref.attachments,
      addAttachment = _ref.addAttachment,
      setFileCountError = _ref.setFileCountError,
      messageLengthError = _ref.messageLengthError,
      selectedChatRoomIndex = _ref.selectedChatRoomIndex,
      canAddAttachments = _ref.canAddAttachments;
  var attachmentUploaderRef = /*#__PURE__*/React.createRef();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledChatInputTextArea, {
    messageLengthError: messageLengthError,
    index: selectedChatRoomIndex % 2 !== 0
  }, /*#__PURE__*/React.createElement(ChatReactMentions, {
    users: users,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(StyledBlock$3, null, canAddAttachments && /*#__PURE__*/React.createElement(StyledChatAction$1, null, /*#__PURE__*/React.createElement(IconButton, {
    src: selectedChatRoomIndex % 2 !== 0 ? AttachmentIconExternal : AttachmentIconInternal,
    onClick: function onClick() {
      var current = attachmentUploaderRef.current;
      current.click();
    },
    style: {
      height: '16px',
      display: 'inline-flex'
    }
  }), /*#__PURE__*/React.createElement("input", {
    ref: attachmentUploaderRef,
    id: "inputRef",
    type: "file",
    multiple: true,
    accept: ".doc,.docx,.pdf,.ppt,.jpg,.jpeg,.png,.xls,.xlsx,.htm,.html,.odt,.ods,.pptx,.txt,.ai,.mp4",
    style: {
      display: 'none'
    },
    onChange: function onChange() {
      var current = attachmentUploaderRef.current;
      var files = current.files;

      if (attachments.length + files.length <= 10 && files && files.length >= 1) {
        setFileCountError('');
        files.forEach(function (file) {
          return addAttachment(file);
        });
      } else if (attachments.length + files.length > 10) {
        setFileCountError("Maximum 10 files allowed");
      }

      current.value = '';
    }
  })), /*#__PURE__*/React.createElement(StyledChatAction$1, null, /*#__PURE__*/React.createElement(IconButton, {
    src: selectedChatRoomIndex % 2 !== 0 ? RichTextIconExternal : RichTextIconInternal,
    style: {
      height: '16px',
      display: 'inline-flex'
    }
  })))));
};

ChatInputArea.propTypes = {
  onChange: propTypes.func,
  value: propTypes.string,
  placeholder: propTypes.string,
  attachments: propTypes.arrayOf({}),
  addAttachment: propTypes.func,
  setFileCountError: propTypes.func,
  messageLengthError: propTypes.string,
  users: propTypes.arrayOf({
    id: propTypes.string,
    name: propTypes.string
  }),
  selectedChatRoomIndex: propTypes.number.isRequired,
  canAddAttachments: propTypes.bool
};
ChatInputArea.defaultProps = {
  value: "",
  onChange: function onChange() {},
  placeholder: "Add Comment...",
  attachments: [],
  addAttachment: function addAttachment() {},
  setFileCountError: function setFileCountError() {},
  messageLengthError: "",
  users: [],
  canAddAttachments: false
};

var CommentItems = function CommentItems(_ref) {
  var commentItems = _ref.commentItems,
      onTapReply = _ref.onTapReply,
      userId = _ref.userId,
      onTapEditMessage = _ref.onTapEditMessage,
      onTapDeleteMessage = _ref.onTapDeleteMessage,
      onCancelEditMessage = _ref.onCancelEditMessage,
      onSaveEditMessage = _ref.onSaveEditMessage,
      isEditLoading = _ref.isEditLoading,
      isDeleteLoading = _ref.isDeleteLoading,
      selectedChatRoomIndex = _ref.selectedChatRoomIndex,
      onTapPin = _ref.onTapPin,
      users = _ref.users,
      canAddAttachments = _ref.canAddAttachments,
      checkDeletePermission = _ref.checkDeletePermission,
      checkEditPermission = _ref.checkEditPermission,
      searchText = _ref.searchText,
      focusedCommentId = _ref.focusedCommentId,
      appCode = _ref.appCode,
      highLightedCommentId = _ref.highLightedCommentId,
      highLightedReplyId = _ref.highLightedReplyId,
      configs = _ref.configs;

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showReplies = _React$useState2[0],
      setShowReplies = _React$useState2[1];

  var dateLabels = [];
  return commentItems.map(function (commentItem) {
    var date = getDayIfSevenDaysOld(commentItem.createdAt);
    var time = getTime(commentItem.createdAt);
    var messageCreatedAt = "".concat(date, " ").concat(time);
    var isDateLabelAlreadyAdded = dateLabels.includes(date);
    dateLabels.push(date);
    var commentIsEditing = commentItem.isEditing;
    var commentShowReplies = showReplies[commentItem.messageId];
    return /*#__PURE__*/React.createElement(React.Fragment, null, !isDateLabelAlreadyAdded && /*#__PURE__*/React.createElement(ChatListDateLabel, {
      marginTop: LUP_SPACING_15
    }, date), commentIsEditing && !commentShowReplies && /*#__PURE__*/React.createElement(ChatEditBox, _extends({}, commentItem, {
      chatType: "comment",
      users: users,
      onCancel: onCancelEditMessage,
      onSave: onSaveEditMessage,
      isEditLoading: isEditLoading,
      selectedChatRoomIndex: selectedChatRoomIndex
    }), commentItem.text), commentShowReplies && /*#__PURE__*/React.createElement(ReplyItems, {
      commentItem: commentItem,
      replyItems: commentItem.replyItems && commentItem.replyItems.sort(function (a, b) {
        return a.createdAt - b.createdAt;
      }),
      selectedChatRoomIndex: selectedChatRoomIndex,
      onTapReply: onTapReply // onTapEditMessage={onTapEditMessage}
      ,
      onTapDeleteMessage: onTapDeleteMessage,
      isDeleteLoading: isDeleteLoading,
      userId: userId,
      messageId: commentItem.id,
      onTapPin: onTapPin,
      isPinned: commentItem.reference && commentItem.reference.pin,
      messageCreatedAt: messageCreatedAt,
      reference: commentItem.reference,
      canAddAttachments: canAddAttachments,
      appCode: appCode,
      highLightedReplyId: highLightedReplyId,
      highLightedCommentId: highLightedCommentId,
      searchText: searchText,
      focusedCommentId: focusedCommentId,
      users: users,
      configs: configs
    }), !commentIsEditing && !commentShowReplies && /*#__PURE__*/React.createElement(ChatItem, _extends({
      id: "chatItem_".concat(commentItem.messageId),
      key: commentItem.messageId
    }, commentItem, {
      time: time,
      chatType: "comment",
      canEdit: checkEditPermission(commentItem.userId),
      canDelete: checkDeletePermission(commentItem.userId),
      onTapReply: onTapReply,
      onTapEdit: onTapEditMessage,
      onTapDelete: onTapDeleteMessage,
      isDeleteLoading: isDeleteLoading,
      selectedChatRoomIndex: selectedChatRoomIndex,
      highlightedText: searchText,
      isFocused: focusedCommentId === commentItem.messageId,
      isPinned: commentItem.reference && commentItem.reference.pin,
      messageId: commentItem.messageId,
      onTapPin: onTapPin,
      isHighLighted: highLightedCommentId === commentItem.messageId,
      configs: configs
    }), /*#__PURE__*/React.createElement(ChatAttachments, {
      isFocused: focusedCommentId === commentItem.messageId,
      searchText: searchText,
      attachments: commentItem.attachments,
      parent: "chatItems",
      appCode: appCode
    })));
  });
};

CommentItems.propTypes = {
  commentItems: propTypes.arrayOf(propTypes.shape({
    avatar: propTypes.array,
    author: propTypes.author,
    userType: propTypes.oneOf(['internal', 'external']),
    text: propTypes.string,
    taggedUsers: propTypes.arrayOf(propTypes.shape({
      id: propTypes.string,
      name: propTypes.string
    })),
    timestamp: propTypes.oneOf([propTypes.string, propTypes.number]),
    messageId: propTypes.string,
    reference: propTypes.shape({
      pin_id: propTypes.string
    }),
    // flags
    isNew: propTypes.bool,
    isEditing: propTypes.bool,
    attachments: propTypes.arrayOf(propTypes.shape({}))
  })).isRequired,
  onTapPin: propTypes.func.isRequired,
  users: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string,
    name: propTypes.string
  })),
  onTapReply: propTypes.func,
  onTapEditMessage: propTypes.func,
  onTapDeleteMessage: propTypes.func,
  onCancelEditMessage: propTypes.func,
  onSaveEditMessage: propTypes.func,
  isEditLoading: propTypes.bool,
  isDeleteLoading: propTypes.bool,
  selectedChatRoomIndex: propTypes.number.isRequired,
  canAddAttachments: propTypes.bool,
  checkDeletePermission: propTypes.func,
  checkEditPermission: propTypes.func,
  searchText: propTypes.string,
  focusedCommentId: propTypes.string,
  appCode: propTypes.string,
  highLightedCommentId: propTypes.string,
  highLightedReplyId: propTypes.string,
  configs: propTypes.arrayOf(propTypes.shape({
    app_code: propTypes.string.isRequired,
    config_key: propTypes.string.isRequired,
    config_value: propTypes.string.isRequired
  }))
};
CommentItems.defaultProps = {
  onTapReply: function onTapReply() {},
  userId: '',
  users: [],
  onTapEditMessage: function onTapEditMessage() {},
  onTapDeleteMessage: function onTapDeleteMessage() {},
  onCancelEditMessage: function onCancelEditMessage() {},
  onSaveEditMessage: function onSaveEditMessage() {},
  isEditLoading: false,
  isDeleteLoading: false,
  canAddAttachments: false,
  checkDeletePermission: function checkDeletePermission() {},
  checkEditPermission: function checkEditPermission() {},
  searchText: "",
  focusedCommentId: "",
  appCode: "",
  highLightedCommentId: null,
  highLightedReplyId: null,
  configs: []
};

var ReplyItems = function ReplyItems(_ref) {
  var commentItem = _ref.commentItem,
      replyItems = _ref.replyItems,
      selectedChatRoomIndex = _ref.selectedChatRoomIndex,
      onTapPin = _ref.onTapPin,
      onTapReply = _ref.onTapReply,
      onTapDeleteMessage = _ref.onTapDeleteMessage,
      isDeleteLoading = _ref.isDeleteLoading,
      userId = _ref.userId,
      onTapEditMessage = _ref.onTapEditMessage,
      onCancelEditMessage = _ref.onCancelEditMessage,
      onSaveEditMessage = _ref.onSaveEditMessage,
      isEditLoading = _ref.isEditLoading,
      checkDeletePermission = _ref.checkDeletePermission,
      checkEditPermission = _ref.checkEditPermission,
      canAddAttachments = _ref.canAddAttachments,
      appCode = _ref.appCode,
      highLightedReplyId = _ref.highLightedReplyId,
      highLightedCommentId = _ref.highLightedCommentId,
      searchText = _ref.searchText,
      focusedCommentId = _ref.focusedCommentId,
      users = _ref.users,
      configs = _ref.configs;
  var dateLabels = [];
  return replyItems.map(function (replyItem) {
    var date = getDayIfSevenDaysOld(replyItem.createdAt);
    var time = getTime(replyItem.createdAt);
    var isDateLabelAlreadyAdded = dateLabels.includes(date);
    dateLabels.push(date);
    var commentIsEditing = replyItem.isEditing;
    return /*#__PURE__*/React.createElement(React.Fragment, null, !isDateLabelAlreadyAdded && /*#__PURE__*/React.createElement(ChatListDateLabel, {
      marginTop: LUP_SPACING_15
    }, date), commentIsEditing && /*#__PURE__*/React.createElement(ChatEditBox, _extends({}, replyItem, {
      chatType: "comment",
      users: users,
      onCancel: onCancelEditMessage,
      onSave: onSaveEditMessage,
      isEditLoading: isEditLoading,
      selectedChatRoomIndex: selectedChatRoomIndex
    }), replyItem.text), !commentIsEditing && /*#__PURE__*/React.createElement(ChatItem, _extends({
      id: "chatItem_".concat(replyItem.messageId),
      key: replyItem.messageId
    }, replyItem, {
      time: time,
      chatType: replyItem.replyItems && replyItem.replyItems.length ? ChatTypes.COMMENTWITHREPLIES : ChatTypes.REPLY,
      canEdit: checkEditPermission(replyItem.userId) && (!replyItem.replyItems || !replyItem.replyItems.length),
      canDelete: checkDeletePermission(replyItem.userId) && (!replyItem.replyItems || !replyItem.replyItems.length),
      onTapReply: onTapReply,
      onTapEdit: onTapEditMessage,
      onTapDelete: onTapDeleteMessage,
      isDeleteLoading: isDeleteLoading,
      selectedChatRoomIndex: selectedChatRoomIndex,
      highlightedText: searchText,
      isFocused: focusedCommentId === replyItem.messageId,
      isPinned: replyItem.reference && replyItem.reference.pin,
      messageId: replyItem.messageId,
      onTapPin: onTapPin,
      isHighLighted: highLightedReplyId === replyItem.messageId || highLightedCommentId === replyItem.messageId,
      canAddAttachments: canAddAttachments,
      configs: configs
    }), /*#__PURE__*/React.createElement(ChatAttachments, {
      attachments: replyItem.attachments,
      parent: "chatItems",
      appCode: appCode
    })));
  });
};

ReplyItems.propTypes = {
  commentItem: propTypes.shape({
    avatar: propTypes.string,
    author: propTypes.author,
    userType: propTypes.oneOf(['internal', 'external']),
    text: propTypes.string,
    timestamp: propTypes.oneOf([propTypes.string, propTypes.number]),
    // flags
    isNew: propTypes.bool,
    isEditing: propTypes.bool,
    messageId: propTypes.string,
    reference: propTypes.objectOf({
      pin_id: propTypes.string
    })
  }),
  replyItems: propTypes.arrayOf({
    avatar: propTypes.string,
    author: propTypes.author,
    userType: propTypes.oneOf(['internal', 'external']),
    text: propTypes.string,
    timestamp: propTypes.oneOf([propTypes.string, propTypes.number]),
    messageId: propTypes.string,
    reference: propTypes.objectOf({
      pin_id: propTypes.string
    }),
    // flags
    isNew: propTypes.bool,
    isEditing: propTypes.bool
  }).isRequired,
  // actions
  onTapEdit: propTypes.func,
  onTapDelete: propTypes.func,
  onTapReply: propTypes.func,
  onTapPin: propTypes.func,
  //
  selectedChatRoomIndex: propTypes.number.isRequired,
  checkDeletePermission: propTypes.func,
  checkEditPermission: propTypes.func,
  canAddAttachments: propTypes.bool,
  appCode: propTypes.string,
  highLightedReplyId: propTypes.string,
  highLightedCommentId: propTypes.string,
  configs: propTypes.arrayOf(propTypes.shape({
    app_code: propTypes.string.isRequired,
    config_key: propTypes.string.isRequired,
    config_value: propTypes.string.isRequired
  }))
};
ReplyItems.defaultProps = {
  commentItem: null,
  configs: [],
  onTapEdit: function onTapEdit() {},
  onTapDelete: function onTapDelete() {},
  onTapReply: function onTapReply() {},
  onTapPin: function onTapPin() {},
  checkDeletePermission: function checkDeletePermission() {},
  checkEditPermission: function checkEditPermission() {},
  canAddAttachments: false,
  appCode: "",
  highLightedCommentId: null,
  highLightedReplyId: null
};

var ChatItems = function ChatItems(_ref) {
  var chatItems = _ref.chatItems,
      replyItems = _ref.replyItems,
      chatType = _ref.chatType,
      onTapReply = _ref.onTapReply,
      userId = _ref.userId,
      onTapEditMessage = _ref.onTapEditMessage,
      onTapDeleteMessage = _ref.onTapDeleteMessage,
      onCancelEditMessage = _ref.onCancelEditMessage,
      onSaveEditMessage = _ref.onSaveEditMessage,
      isEditLoading = _ref.isEditLoading,
      isDeleteLoading = _ref.isDeleteLoading,
      users = _ref.users,
      selectedChatRoomIndex = _ref.selectedChatRoomIndex,
      searchText = _ref.searchText,
      focusedCommentId = _ref.focusedCommentId,
      onTapPin = _ref.onTapPin,
      pinItems = _ref.pinItems,
      checkEditPermission = _ref.checkEditPermission,
      checkDeletePermission = _ref.checkDeletePermission,
      canAddAttachments = _ref.canAddAttachments,
      appCode = _ref.appCode,
      highLightedCommentId = _ref.highLightedCommentId,
      highLightedReplyId = _ref.highLightedReplyId,
      configs = _ref.configs;
  return /*#__PURE__*/React.createElement(React.Fragment, null, chatType === ChatTypes.COMMENT ? /*#__PURE__*/React.createElement(CommentItems, {
    commentItems: chatItems,
    onTapReply: onTapReply,
    userId: userId,
    users: users,
    onTapEditMessage: onTapEditMessage,
    onTapDeleteMessage: onTapDeleteMessage,
    onCancelEditMessage: onCancelEditMessage,
    onSaveEditMessage: onSaveEditMessage,
    isEditLoading: isEditLoading,
    isDeleteLoading: isDeleteLoading,
    selectedChatRoomIndex: selectedChatRoomIndex,
    checkDeletePermission: checkDeletePermission,
    checkEditPermission: checkEditPermission,
    canAddAttachments: canAddAttachments,
    onTapPin: onTapPin,
    pinItems: pinItems,
    searchText: searchText,
    focusedCommentId: focusedCommentId,
    appCode: appCode,
    highLightedCommentId: highLightedCommentId,
    highLightedReplyId: highLightedReplyId,
    configs: configs
  }) : /*#__PURE__*/React.createElement(ReplyItems, {
    replyItems: replyItems,
    userId: userId,
    checkDeletePermission: checkDeletePermission,
    checkEditPermission: checkEditPermission,
    canAddAttachments: canAddAttachments,
    onTapPin: onTapPin,
    selectedChatRoomIndex: selectedChatRoomIndex,
    onTapDeleteMessage: onTapDeleteMessage,
    isDeleteLoading: isDeleteLoading,
    onTapEditMessage: onTapEditMessage,
    onCancelEditMessage: onCancelEditMessage,
    onSaveEditMessage: onSaveEditMessage,
    isEditLoading: isEditLoading,
    appCode: appCode,
    highLightedCommentId: highLightedCommentId,
    highLightedReplyId: highLightedReplyId,
    focusedCommentId: focusedCommentId,
    searchText: searchText,
    configs: configs // commentItems={chatItems}

  }));
};

ChatItems.propTypes = {
  chatItems: propTypes.arrayOf({
    avatar: propTypes.string,
    author: propTypes.author,
    userType: propTypes.oneOf(['internal', 'external']),
    text: propTypes.string,
    timestamp: propTypes.oneOf([propTypes.string, propTypes.number]),
    messageId: propTypes.string,
    reference: propTypes.objectOf({
      pin_id: propTypes.string
    }),
    taggedUsers: propTypes.arrayOf({
      id: propTypes.string,
      name: propTypes.string
    }),
    // flags
    isNew: propTypes.bool,
    isEditing: propTypes.bool,
    attachments: propTypes.arrayOf({})
  }),
  replyItems: propTypes.arrayOf({
    avatar: propTypes.string,
    author: propTypes.author,
    userType: propTypes.oneOf(['internal', 'external']),
    text: propTypes.string,
    timestamp: propTypes.oneOf([propTypes.string, propTypes.number]),
    // flags
    isNew: propTypes.bool,
    isEditing: propTypes.bool,
    attachments: propTypes.arrayOf({})
  }),
  chatType: propTypes.string,
  users: propTypes.arrayOf({
    id: propTypes.string,
    name: propTypes.string
  }),
  onTapReply: propTypes.func,
  userId: propTypes.string,
  onTapEditMessage: propTypes.func,
  onTapDeleteMessage: propTypes.func,
  onCancelEditMessage: propTypes.func,
  onSaveEditMessage: propTypes.func,
  isEditLoading: propTypes.bool,
  isDeleteLoading: propTypes.bool,
  selectedChatRoomIndex: propTypes.number.isRequired,
  searchText: propTypes.string,
  focusedCommentId: propTypes.string,
  onTapPin: propTypes.func,
  pinItems: propTypes.array,
  checkDeletePermission: propTypes.func,
  checkEditPermission: propTypes.func,
  canAddAttachments: propTypes.bool,
  appCode: propTypes.string,
  highLightedCommentId: propTypes.string,
  highLightedReplyId: propTypes.string,
  configs: propTypes.arrayOf(propTypes.shape({
    app_code: propTypes.string.isRequired,
    config_key: propTypes.string.isRequired,
    config_value: propTypes.string.isRequired
  }))
};
ChatItems.defaultProps = {
  chatItems: propTypes.arrayOf(propTypes.shape({})),
  replyItems: propTypes.arrayOf(propTypes.shape({})),
  chatType: 'comment',
  onTapReply: function onTapReply() {},
  userId: '',
  onTapEditMessage: function onTapEditMessage() {},
  onTapDeleteMessage: function onTapDeleteMessage() {},
  onCancelEditMessage: function onCancelEditMessage() {},
  onSaveEditMessage: function onSaveEditMessage() {},
  isEditLoading: false,
  isDeleteLoading: false,
  onTapPin: function onTapPin() {},
  pinItems: [],
  users: [],
  configs: [],
  checkDeletePermission: function checkDeletePermission() {},
  checkEditPermission: function checkEditPermission() {},
  canAddAttachments: false,
  searchText: "",
  focusedCommentId: "",
  appCode: "",
  highLightedCommentId: null,
  highLightedReplyId: null
};

var _templateObject$x, _templateObject2$f, _templateObject3$a, _templateObject4$7, _templateObject5$3, _templateObject6$2, _templateObject7$1, _templateObject8$1, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
var StyledLabel$2 = styled$4.span(_templateObject$x || (_templateObject$x = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  color: ", ";\n"])), LUP_MAIN_FONT_BOLD600, LUP_MAIN_FONT_SIZE16, LUP_SPACING_20, LUP_BASE_BLUE_DARKER);
var StyledComparisonName = styled$4(StyledText)(_templateObject2$f || (_templateObject2$f = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  padding-left: ", ";\n"])), LUP_MAIN_FONT_BOLD600, LUP_MAIN_FONT_SIZE16, LUP_SPACING_24, LUP_SPACING_20);
var StyledTable = styled$4(_Table)(_templateObject3$a || (_templateObject3$a = _taggedTemplateLiteral(["\n  display: flex;\n  white-space: pre-line;\n  margin-bottom: ", ";\n  .ant-table {\n    border: none;\n    height: 100%;\n\n    table {\n      table-layout: fixed;\n    }\n  }\n\n  .ant-table-small > .ant-table-content > .ant-table-body {\n    margin: 0;\n  }\n\n  .ant-table-placeholder {\n    border-top: none;\n    background: ", ";\n  }\n\n  .ant-empty-normal .ant-empty-image, .ant-empty-description {\n    display: none;\n  }\n\n  .ant-table-thead {\n    & > tr:first-child > th:first-child {\n      border-top-left-radius: 0;\n    }\n\n    & > tr:first-child > th {\n      padding: 0 !important;\n    }\n\n    & > tr:first-child > th:last-child {\n      border-top-right-radius: 0;\n    }\n\n    & > tr > th {\n      background: none;\n      #color: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      padding: ", " ", ";\n    }\n  }\n\n  .ant-table-tbody {\n    & tr:nth-child(2n) {\n      background-color: ", ";\n    }\n    & tr:nth-child(2n + 1) {\n      background-color: ", ";\n    }\n\n    & tr:nth-child(1) > td{\n      vertical-align: middle;\n      padding-left: 0 !important;\n      padding-right: ", " !important;\n    }\n\n    & > tr > td {\n      width: ", " !important;\n      //border: none;\n      font-size: ", ";\n      line-height: ", ";\n      text-align: center;\n      color: ", ";\n      // vertical-align: top;\n    }\n  }\n\n  .ant-table-empty .ant-table-body {\n    overflow-x: inherit !important;\n    overflow-y: unset !important;\n  }\n\n  .ant-table .ant-table-tbody > tr:hover > td {\n    background: unset;\n  }\n\n  .property {\n    width: ", ";\n    white-space: pre-line;\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    color: ", " !important;\n    text-align: left !important;\n    padding: ", " 0 0 ", " !important;\n  }\n  .min-column-width {\n    width: ", ";\n  }\n  .primary {\n    border-left: ", " solid ", " !important;\n    border-right: ", " solid ", " !important;\n    padding: ", " ", " !important;\n    vertical-align: middle !important;\n  }\n  .secondary {\n    border-left: ", " solid ", " !important;\n    border-right: ", " solid ", " !important;\n    padding: ", " ", " !important;\n    vertical-align: middle !important;\n  }\n  .sectionTitle {\n    padding:  ", " !important;\n    padding-left:  ", " !important;\n    height: ", ";\n    vertical-align: bottom !important;\n  }\n  .divider {\n    width:  ", ";\n    background: ", ";\n    border: none;\n    background: ", ";\n  }\n  .first_divider {\n    width:  ", ";\n    background: ", ";\n    border: none;\n    background: ", ";\n  }\n  .highlight {\n    background: ", ";\n  }\n  .highlightCheckbox {\n    padding-left: 0 !important; \n    border-bottom: 0;\n    padding-top: ", " !important; \n    position: relative;\n    padding-bottom: ", " !important;\n    padding-right: 0px !important;\n  }\n  .viewerSelector {\n    padding: 0 ", " !important;\n  }\n  .viewerSelectorFirstCol {\n    padding: 0 ", " !important;\n  }\n"])), LUP_SPACING_28, LUP_BASE_GREY_LIGHTEST, LUP_BASE_BLUE_DARKER, LUP_MAIN_FONT_SIZE12, LUP_MAIN_FONT_BOLD600, LUP_SPACING_14, LUP_SPACING_8, LUP_BASE_GREY_LIGHTEST, WHITE, LUP_SPACING_2, LUP_SPACING_150, LUP_MAIN_FONT_SIZE12, LUP_SPACING_18, LUP_BASE_GREY_DARKER, LUP_SPACING_187, LUP_MAIN_FONT_BOLD600, LUP_MAIN_FONT_SIZE12, LUP_SPACING_14, LUP_BASE_GREY_DARKEST, LUP_SPACING_5, LUP_SPACING_16, LUP_SPACING_200, LUP_MAIN_BORDER_WIDTH2, LUP_BASE_BLUE, LUP_MAIN_BORDER_WIDTH2, LUP_BASE_BLUE, LUP_SPACING_5, LUP_SPACING_10, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_GREY_LIGHT, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_GREY_LIGHT, LUP_SPACING_5, LUP_SPACING_10, LUP_SPACING_4, LUP_SPACING_16, LUP_SPACING_44, LUP_SPACING_16, WHITE, LUP_BASE_GREY_LIGHTEST, LUP_SPACING_16, WHITE, LUP_BASE_GREY_LIGHTEST, LUP_FUNCTIONAL_ALERT_YELLOW_LIGHTER, LUP_SPACING_15, LUP_SPACING_7, LUP_SPACING_8, LUP_SPACING_2);
var StyledCheckbox$1 = styled$4(Checkbox)(_templateObject4$7 || (_templateObject4$7 = _taggedTemplateLiteral(["\n  float: right;\n  .ant-checkbox + span + span  {\n      color: ", " !important;\n      font-size: ", ";\n      padding-left:  ", ";\n      padding-right: 0;\n  }\n\n  .ant-checkbox { \n      line-height:  ", ";\n  }\n  \n  .ant-checkbox-wrapper {\n    height: ", ";\n  }\n"])), LUP_BASE_GREY_DARK, LUP_MAIN_FONT_SIZE14, LUP_SPACING_4, LUP_SPACING_22, LUP_SPACING_22);
var CheckboxWrapper = styled$4.div(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["\n  right: 0;\n"])));
var StyledBlock$4 = styled$4(StyledBlock)(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["\n  padding: 0;\n"])));
var StyledText$2 = styled$4(StyledText)(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["\n  color: ", ";\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-weight: ", ";\n  font-size: ", ";\n  float: right;\n\n  &[disabled] {\n    opacity: 1;\n    cursor: not-allowed;\n    color: ", "\n  }\n"])), LUP_BASE_BLUE_DARK, LUP_MAIN_FONT_NORMAL, LUP_MAIN_FONT_SIZE14, LUP_BASE_GREY);
var GridWrapper = styled$4(StyledBlock)(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])));
var TitleWrapper = styled$4(StyledBlock)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));
var TableWrapper = styled$4(StyledBlock)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-grow: 1;\n  overflow-x: auto;\n"])));
var StyledRow$1 = styled$4(_Row)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding-bottom: ", ";\n"])), LUP_SPACING_11);
var StyledBlockBottomPadding = styled$4(StyledBlock)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  padding-bottom: ", "\n"])), function (props) {
  return props.size;
});
var StyledtrTopBottomPadding = styled$4.tr(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding: ", " 0;\n"])), function (props) {
  return props.size;
});
var StyledDiv$1 = styled$4.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  text-align: left;\n"])));

var GridHeaderCell = function GridHeaderCell(props) {
  var propertyHeaderCol = function propertyHeaderCol() {
    return /*#__PURE__*/React.createElement("th", {
      style: {
        borderBottom: 0
      },
      className: "property"
    });
  };

  var dividerHeaderCol = function dividerHeaderCol(className) {
    return /*#__PURE__*/React.createElement("th", {
      style: {
        borderBottom: 0
      },
      className: className || "divider"
    });
  };

  var itemSelectorHeaderCol = function itemSelectorHeaderCol() {
    return /*#__PURE__*/React.createElement("th", {
      style: {
        verticalAlign: "top",
        borderBottom: 0
      },
      className: "min-column-width"
    }, props.render());
  };

  if (props.colType === "gridPropertyHeaderCol") return propertyHeaderCol();
  if (props.colType === "gridDividerHeaderCol") return dividerHeaderCol(props.className);

  if (props.colType === "gridItemSelectorHeaderCol" || props.colType === "gridHeaderCol") {
    return itemSelectorHeaderCol();
  }

  return /*#__PURE__*/React.createElement("th", {
    style: {
      borderBottom: 0
    }
  }, /*#__PURE__*/React.createElement(StyledBlock, null, /*#__PURE__*/React.createElement(_Card, {
    style: {
      height: 200
    }
  }, "Titles")));
};

var _templateObject$y, _templateObject2$g, _templateObject3$b, _templateObject4$8, _templateObject5$4, _templateObject6$3, _templateObject7$2, _templateObject8$2;
var StyledSecondCol = styled$4.td(_templateObject$y || (_templateObject$y = _taggedTemplateLiteral(["\n  height: 30px;\n  display: flex;\n  flex-grow: 1;\n  vertical-align: middle;\n  align-items: center;\n  border-radius: 0px;\n  background:", ";\n  box-shadow: 0px 1px 8px rgba(136, 136, 136, 0.35);\n  justify-content: space-between;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-top: ", " !important;\n"])), WHITE, LUP_SPACING_9);
var StyledDiv$2 = styled$4.div(_templateObject2$g || (_templateObject2$g = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-end;\n  margin-right:  ", ";\n  text-align: left;\n  padding: ", " 0px ", " ", ";\n"])), LUP_SPACING_24, LUP_SPACING_5, LUP_SPACING_5, LUP_SPACING_11);
var StyledFirstDiv = styled$4.td(_templateObject3$b || (_templateObject3$b = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: ", ";\n"])), function (props) {
  return props.marginLeft;
});
var StyledButton$1 = styled$4(Button)(_templateObject4$8 || (_templateObject4$8 = _taggedTemplateLiteral(["\n  border-radius: 0 ", " ", " 0;\n  min-width: ", ";\n  width: ", ";\n  height: ", ";\n  margin-left: ", ";\n"])), LUP_SPACING_4, LUP_SPACING_4, LUP_SPACING_30, LUP_SPACING_30, LUP_SPACING_30, LUP_SPACING_3);
var StyledRow$2 = styled$4.tr(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteral(["\n  vertical-align: middle;\n"])));
var StyledSecondRow = styled$4.tr(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var StyledCol = styled$4.td(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteral(["\n  border: none !important;\n  text-align: right;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-top: ", " !important;\n  background: ", ";\n"])), LUP_SPACING_9, LUP_BASE_GREY_LIGHTEST);
var SelectAllWrapper = styled$4.div(_templateObject8$2 || (_templateObject8$2 = _taggedTemplateLiteral(["\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-top: ", " !important;\n"])), LUP_SPACING_9);

var ComparisonViewSelector = function ComparisonViewSelector(_ref) {
  var itemsToCompare = _ref.itemsToCompare,
      selectedProducts = _ref.selectedProducts,
      updateSelectedProducts = _ref.updateSelectedProducts,
      onClickSubmit = _ref.onClickSubmit;

  var handleSelectedProducts = function handleSelectedProducts(products) {
    var include = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (!include) {
      selectedProducts = selectedProducts.filter(function (selectedProduct) {
        return !products.includes(selectedProduct);
      });
    } else {
      selectedProducts = products.length === 1 ? selectedProducts.concat(products) : products;
    }

    updateSelectedProducts(selectedProducts);
  };

  var size = itemsToCompare.length;
  return /*#__PURE__*/React.createElement(StyledRow$2, {
    className: "viewerSelector"
  }, /*#__PURE__*/React.createElement(StyledCol, {
    className: "viewerSelectorFirstCol"
  }, /*#__PURE__*/React.createElement(SelectAllWrapper, null, /*#__PURE__*/React.createElement(StyledDiv$2, null, /*#__PURE__*/React.createElement(Checkbox, {
    indeterminate: selectedProducts && selectedProducts.length && selectedProducts.length < itemsToCompare.length,
    checked: selectedProducts && selectedProducts.length && selectedProducts.length === itemsToCompare.length,
    onChange: function onChange(e) {
      return e.target.checked ? handleSelectedProducts(itemsToCompare) : handleSelectedProducts(itemsToCompare, false);
    },
    label: selectAll
  })))), /*#__PURE__*/React.createElement(StyledCol, {
    colSpan: 2 * itemsToCompare.length - 1
  }, /*#__PURE__*/React.createElement(StyledSecondRow, null, /*#__PURE__*/React.createElement(StyledSecondCol, null, itemsToCompare.map(function (product) {
    return /*#__PURE__*/React.createElement(StyledFirstDiv, {
      id: product,
      marginLeft: size > 1 ? '20px' : '18px'
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: selectedProducts.includes(product),
      onChange: function onChange(e) {
        return e.target.checked ? handleSelectedProducts([product]) : handleSelectedProducts([product], false);
      },
      label: compareInViewer
    }), "\xA0");
  })), /*#__PURE__*/React.createElement(StyledCol, null, /*#__PURE__*/React.createElement(StyledButton$1, {
    disabled: selectedProducts.length < 2,
    onClick: onClickSubmit,
    size: "smaller",
    colored: "primary"
  }, /*#__PURE__*/React.createElement(StyledText, {
    fontSize: LUP_MAIN_FONT_SIZE12,
    lineHeight: LUP_SPACING_12,
    fontWeight: selectedProducts.length < 2 ? "normal" : "bold",
    color: selectedProducts.length < 2 ? LUP_BASE_GREY_LIGHTEST : WHITE
  }, "Go"))))));
};

ComparisonViewSelector.propTypes = {
  itemsToCompare: propTypes.arrayOf(propTypes.string),
  selectedProducts: propTypes.arrayOf(propTypes.string),
  updateSelectedProducts: propTypes.func,
  onClickSubmit: propTypes.func
};
ComparisonViewSelector.defaultProps = {
  itemsToCompare: [],
  selectedProducts: [],
  updateSelectedProducts: function updateSelectedProducts() {},
  onClickSubmit: function onClickSubmit() {}
};

var _templateObject$z, _templateObject2$h, _templateObject3$c, _templateObject4$9, _templateObject5$5, _templateObject6$4;
var StyledCard = styled$4(_Card)(_templateObject$z || (_templateObject$z = _taggedTemplateLiteral(["\n  border-width: ", ";\n  border-style: solid;\n  border-color: ", ";  \n\n  .ant-card-body {\n    padding: ", " ", ";\n    padding-top: ", ";\n    padding-bottom: ", ";\n    min-height: 140px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  box-shadow: ", ";\n"])), function (props) {
  return props.borderWidth;
}, function (props) {
  return props.color;
}, LUP_SPACING_4, LUP_SPACING_2, LUP_SPACING_5, LUP_SPACING_7, LUP_BOX_SHADOW_3);
var TitleText = styled$4(StyledText)(_templateObject2$h || (_templateObject2$h = _taggedTemplateLiteral(["\n  padding-left: ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n"])), LUP_SPACING_8, LUP_SPACING_2, LUP_SPACING_2);
var StyledText$3 = styled$4(StyledText)(_templateObject3$c || (_templateObject3$c = _taggedTemplateLiteral(["\n  padding-left: ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  height: ", ";\n"])), LUP_SPACING_8, LUP_SPACING_2, LUP_SPACING_2, LUP_SPACING_37);
var StyledBlock$5 = styled$4(StyledBlock)(_templateObject4$9 || (_templateObject4$9 = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: ", " ", " 0;\n"])), LUP_MAIN_FONT_SIZE4, LUP_MAIN_FONT_SIZE10);
var ExpandButtonWrapper = styled$4.div(_templateObject5$5 || (_templateObject5$5 = _taggedTemplateLiteral(["\n  padding-right: ", ";\n  padding-top: ", ";\n"])), LUP_SPACING_6, LUP_SPACING_7);
var RemoveButtonWrapper = styled$4.div(_templateObject6$4 || (_templateObject6$4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", "; \n  right: ", "; \n  height: ", "; \n  z-index: 1;\n  cursor: pointer;\n"])), LUP_SPACING_10, LUP_SPACING_10, LUP_SPACING_10);

var CompareCardImage = function CompareCardImage(_ref) {
  var source = _ref.source,
      onExpand = _ref.onExpand,
      style = _ref.style,
      height = _ref.height,
      width = _ref.width;
  return /*#__PURE__*/React.createElement(StyledBlock, {
    style: _objectSpread2({
      position: 'relative',
      padding: '2px 0',
      height: '100%',
      display: 'flex'
    }, style)
  }, /*#__PURE__*/React.createElement(Image, {
    src: source,
    height: height,
    width: width
  }));
};

CompareCardImage.propTypes = {
  source: propTypes.string,
  onExpand: propTypes.func,
  style: propTypes.object,
  ratio: propTypes.number.isRequired
};
CompareCardImage.defaultProps = {
  source: '',
  onExpand: function onExpand() {},
  style: {}
};

var ExpandSvg = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M3.99917%208.90884L1.54453%2011.3635V9.01851H0V14H5.00312V12.4555H2.63651L5.09116%2010.0008L3.99917%208.90884Z%22%20fill%3D%22%230076BF%22%2F%3E%3Cpath%20d%3D%22M12.4555%2011.3635L10.0001%208.90884L8.90808%2010.0008L11.3631%2012.4555H8.99689V14H14V9.01851H12.4555V11.3635Z%22%20fill%3D%22%230076BF%22%2F%3E%3Cpath%20d%3D%22M8.99689%200V1.54453H11.3631L8.90808%203.99995L10.0001%205.09193L12.4555%202.63651V4.98188H14V0H8.99689Z%22%20fill%3D%22%230076BF%22%2F%3E%3Cpath%20d%3D%22M5.00312%201.54453V0H0V4.98188H1.54453V2.6369L3.99917%205.09193L5.09116%203.99995L2.63613%201.54453H5.00312Z%22%20fill%3D%22%230076BF%22%2F%3E%3C%2Fsvg%3E";

var CompareCard = function CompareCard(_ref) {
  var propertiesUISchema = _ref.propertiesUISchema,
      itemCardProps = _ref.itemCardProps,
      itemData = _ref.itemData,
      extras = _ref.extras,
      removeCompareItem = _ref.removeCompareItem,
      showRemoveIcon = _ref.showRemoveIcon,
      itemKey = _ref.itemKey;

  var onExpand = function onExpand() {
    console.log('expand called');
  };

  var getExpandButton = /*#__PURE__*/React.createElement(ExpandButtonWrapper, null, /*#__PURE__*/React.createElement(IconButton, {
    src: ExpandSvg,
    onClick: onExpand,
    dataTestid: "expandTestId",
    size: LUP_SPACING_14,
    style: {
      float: 'right',
      display: 'inline-flex'
    }
  }));
  var getRemoveButton = /*#__PURE__*/React.createElement(RemoveButtonWrapper, null, /*#__PURE__*/React.createElement(Cross1, {
    size: LUP_SPACING_10,
    onClick: removeCompareItem
  }));
  return /*#__PURE__*/React.createElement(StyledCard, {
    itemKey: itemKey,
    color: itemKey === "IAN_1" && LUP_BASE_BLUE,
    borderWidth: itemKey === "IAN_1" ? '2px' : '1px'
  }, showRemoveIcon && getRemoveButton, itemCardProps.map(function (itemCardProp, i) {
    var isImageNext = false;

    if (i < itemCardProps.length - 1 && itemCardProps[i + 1] && propertiesUISchema[itemCardProps[i + 1]] && propertiesUISchema[itemCardProps[i + 1]].uiWidget === "imageWidget") {
      isImageNext = itemData[itemCardProps[i + 1]] ? true : false;
    }

    var uiSchema = propertiesUISchema[itemCardProp];

    if (uiSchema.uiWidget === "imageWidget") {
      return /*#__PURE__*/React.createElement(_Row, {
        key: "cardItem".concat(i),
        style: {
          height: '20vh',
          minHeight: '144px'
        }
      }, /*#__PURE__*/React.createElement(CompareCardImage, {
        source: itemData[itemCardProp],
        onExpand: onExpand,
        height: "auto",
        width: "auto"
      }));
    }

    return /*#__PURE__*/React.createElement(_Row, {
      key: "cardItem".concat(i)
    }, i === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Col, {
      span: showRemoveIcon ? 22 : 24
    }, /*#__PURE__*/React.createElement(TitleText, {
      color: LUP_SECONDARY_DEEP_CYAN,
      fontWeight: LUP_MAIN_FONT_BOLD600,
      lineHeight: LUP_SPACING_16
    }, itemData[itemCardProp]))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Col, {
      span: isImageNext ? 21 : 24
    }, /*#__PURE__*/React.createElement(_Tooltip, {
      title: itemData[itemCardProp]
    }, i !== 0 && /*#__PURE__*/React.createElement(StyledText$3, {
      fontWeight: LUP_MAIN_FONT_BOLD600,
      lineHeight: LUP_SPACING_16
    }, itemData[itemCardProp]))), isImageNext && /*#__PURE__*/React.createElement(_Col, {
      span: 3
    }, getExpandButton)));
  }), extras);
};

CompareCard.propTypes = {
  propertiesUISchema: propTypes.object,
  itemCardProps: propTypes.array,
  itemData: propTypes.object,
  extras: propTypes.node,
  removeCompareItem: propTypes.func,
  onExpand: propTypes.func,
  showRemoveIcon: propTypes.bool,
  itemKey: propTypes.string
};
CompareCard.defaultProps = {
  extras: [],
  propertiesUISchema: {},
  itemCardProp: [],
  itemData: {},
  removeCompareItem: function removeCompareItem() {},
  onExpand: function onExpand() {},
  showRemoveIcon: false,
  itemKey: ''
};

var _templateObject$A, _templateObject2$i, _templateObject3$d, _templateObject4$a, _templateObject5$6;
var StyledBlock$6 = styled$4(StyledBlock)(_templateObject$A || (_templateObject$A = _taggedTemplateLiteral(["\n    height: ", ";\n    background: ", ";\n    padding: ", ";\n    align-content: center;\n"])), LUP_SPACING_110, WHITE, LUP_SPACING_8);
var StyledButton$2 = styled$4(Button)(_templateObject2$i || (_templateObject2$i = _taggedTemplateLiteral(["\n    min-width: ", ";\n    display: block;\n    margin: auto;\n"])), LUP_SPACING_50);
var InputBlock = styled$4(StyledBlock)(_templateObject3$d || (_templateObject3$d = _taggedTemplateLiteral(["\n    margin: auto;\n"])));
var ErrorBlock = styled$4(StyledBlock)(_templateObject4$a || (_templateObject4$a = _taggedTemplateLiteral(["\n    height: ", ";\n    display: flex;\n"])), LUP_SPACING_20);
var StyledCard$1 = styled$4(_Card)(_templateObject5$6 || (_templateObject5$6 = _taggedTemplateLiteral(["\n    border-width: ", ";\n    padding: ", ";\n    border-style: solid;\n    border-color: ", ";\n    .ant-card-body {\n        padding: ", ";\n        width: ", ";\n        padding: ", ";\n    }\n    box-shadow: ", ";\n    min-width: ", ";\n\n"])), function (props) {
  return props.borderWidth;
}, function (props) {
  return props.borderWidth == '1px' && '1px';
}, function (props) {
  return props.color;
}, LUP_SPACING_10, function (props) {
  return props.bodyWidth;
}, function (props) {
  return props.bodyPadding;
}, LUP_BOX_SHADOW_3, LUP_SPACING_200);

var _templateObject$B;
var LabelWrapper = styled$4(StyledBlock)(_templateObject$B || (_templateObject$B = _taggedTemplateLiteral(["\n  margin: ", " 0;\n"])), LUP_SPACING_2);

var InputField = function InputField(_ref) {
  var label = _ref.label,
      style = _ref.style,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      error = _ref.error,
      onKeyPress = _ref.onKeyPress,
      value = _ref.value;
  return /*#__PURE__*/React.createElement(StyledBlock, {
    style: _objectSpread2({}, style)
  }, /*#__PURE__*/React.createElement(LabelWrapper, null, /*#__PURE__*/React.createElement(StyledLabel, {
    error: error,
    disabled: disabled
  }, label)), /*#__PURE__*/React.createElement(StyledInput, {
    className: error && "on-error",
    disabled: disabled,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onKeyPress: onKeyPress
  }));
};

InputField.PropTypes = {
  label: propTypes.string.isRequired,
  placeholder: propTypes.string,
  style: propTypes.object,
  onChange: propTypes.func,
  disabled: propTypes.bool,
  error: propTypes.string
};
InputField.defaultProps = {
  placeholder: '',
  style: {},
  onChange: function onChange() {},
  disabled: false,
  error: ''
};

var CompareItemSelector = function CompareItemSelector(_ref) {
  var title = _ref.title,
      type = _ref.type,
      placeholder = _ref.placeholder,
      onSubmit = _ref.onSubmit,
      compareKey = _ref.compareKey,
      error = _ref.error,
      currentItemKey = _ref.currentItemKey,
      inputValueForError = _ref.inputValueForError;

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  if (inputValueForError && error && !value) {
    setValue(inputValueForError);
  }

  return /*#__PURE__*/React.createElement(StyledCard$1, {
    compareKey: compareKey,
    color: compareKey === "IAN_1" && LUP_BASE_BLUE,
    borderWidth: compareKey === "IAN_1" ? LUP_MAIN_BORDER_WIDTH2 : LUP_MAIN_BORDER_WIDTH1
  }, /*#__PURE__*/React.createElement(InputBlock, null, /*#__PURE__*/React.createElement(InputField, {
    label: title,
    placeholder: placeholder,
    onChange: function onChange(event) {
      if (event.target.value) {
        setValue(event.target.value);
      } else {
        setValue(-1); //to change value after error
      }
    },
    error: error,
    disabled: currentItemKey !== compareKey,
    onKeyPress: function onKeyPress(event) {
      if (event.key === 'Enter') {
        onSubmit(value, compareKey);
      }
    },
    value: value !== -1 ? value : '' //to change value after error

  }), /*#__PURE__*/React.createElement(ErrorBlock, null, /*#__PURE__*/React.createElement(StyledText, {
    fontSize: LUP_MAIN_FONT_SIZE12,
    color: LUP_FUNCTIONAL_ERROR_RED,
    lineHeight: LUP_SPACING_18
  }, error))), /*#__PURE__*/React.createElement(StyledButton$2, {
    size: "smaller",
    colored: "primary",
    disabled: !value || currentItemKey !== compareKey,
    onClick: function onClick() {
      return onSubmit(value, compareKey);
    }
  }, "OK"));
};

CompareItemSelector.propTypes = {
  title: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  onSubmit: propTypes.func,
  currentItemKey: propTypes.string,
  compareKey: propTypes.string,
  styleCard: propTypes.shape({}),
  error: propTypes.bool
};
CompareItemSelector.defaultProps = {
  title: "",
  type: "String",
  placeholder: "Add IAN or Product No",
  onSubmit: function onSubmit() {},
  compareKey: "",
  currentItemKey: "",
  error: false
};

var ComparisonGrid = function ComparisonGrid(_ref) {
  var sections = _ref.sections,
      data = _ref.data,
      primary = _ref.primary,
      properties = _ref.properties,
      compareKey = _ref.compareKey,
      onSubmit = _ref.onSubmit,
      onClickSubmit = _ref.onClickSubmit,
      propertiesUISchema = _ref.propertiesUISchema,
      itemCardProps = _ref.itemCardProps,
      itemSelectorProp = _ref.itemSelectorProp,
      itemsToCompareCount = _ref.itemsToCompareCount,
      _removeCompareItem = _ref.removeCompareItem,
      selectedProducts = _ref.selectedProducts,
      updateSelectedProducts = _ref.updateSelectedProducts,
      onHighlightChange = _ref.onHighlightChange,
      highlightSelected = _ref.highlightSelected,
      comparisonDataError = _ref.comparisonDataError,
      currentItemKey = _ref.currentItemKey,
      handleClearAllData = _ref.handleClearAllData,
      clearAllDisabled = _ref.clearAllDisabled,
      comparisonName = _ref.comparisonName,
      label = _ref.label,
      loading = _ref.loading,
      renderLoader = _ref.renderLoader,
      inputValueForError = _ref.inputValueForError;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      highlightedRows = _useState2[0],
      setHighlightedRows = _useState2[1];

  useEffect(function () {
    findRowsToHighlight(highlightSelected);
  }, [highlightSelected]);

  var _generateColumns = function _generateColumns(itemsToCompare) {
    var propertyColumn = {
      dataIndex: "property",
      key: "property",
      className: "property",
      onHeaderCell: function onHeaderCell(column) {
        return {
          colType: "gridPropertyHeaderCol"
        };
      }
    };

    var _generateItemSelector = function _generateItemSelector(type, placeholder, title, compareKey) {
      var itemSelector = {
        dataIndex: "gridItemSelector",
        key: compareKey,
        onHeaderCell: function onHeaderCell() {
          return {
            colType: "gridItemSelectorHeaderCol",
            render: function render() {
              return /*#__PURE__*/React.createElement(StyledBlockBottomPadding, {
                size: LUP_SPACING_2
              }, /*#__PURE__*/React.createElement(CompareItemSelector, {
                type: type,
                placeholder: placeholder,
                title: title,
                compareKey: compareKey,
                onSubmit: onSubmit,
                error: compareKey === currentItemKey && comparisonDataError,
                currentItemKey: currentItemKey,
                parent: "comparisonGrid",
                inputValueForError: inputValueForError
              }));
            }
          };
        }
      };
      return itemSelector;
    };

    var columns = [propertyColumn];
    itemsToCompare.forEach(function (item, index) {
      var column = {
        title: item,
        dataIndex: item,
        key: item,
        onHeaderCell: function onHeaderCell(column) {
          return {
            colType: "gridHeaderCol",
            render: function render() {
              return /*#__PURE__*/React.createElement(StyledBlock$4, null, /*#__PURE__*/React.createElement(CompareCard, {
                propertiesUISchema: propertiesUISchema,
                itemCardProps: itemCardProps,
                itemData: data[item],
                extras: /*#__PURE__*/React.createElement(React.Fragment, null),
                itemKey: "".concat(compareKey, "_").concat(index + 1),
                showRemoveIcon: itemsToCompare.length > 1 && index !== 0 || itemsToCompare.length === 1,
                removeCompareItem: function removeCompareItem() {
                  return _removeCompareItem(item);
                }
              }));
            }
          };
        }
      };
      column.className = item === primary ? "primary" : "secondary";
      columns.push(column); // add a divider

      if (index !== itemsToCompareCount.length - 1) {
        columns.push({
          title: item,
          dataIndex: "divider_".concat(item.toLowerCase()),
          key: "divider_item_".concat(item),
          className: index == 0 ? "first_divider" : "divider",
          onHeaderCell: function onHeaderCell(column) {
            return {
              colType: "gridDividerHeaderCol"
            };
          }
        });
      }
    });

    for (var i = 0; i < itemsToCompareCount; i++) {
      var title = i === 0 ? MainProduct : "".concat(itemSelectorProp.title, " ").concat(i, " to Compare");
      columns.push(_generateItemSelector("String", "".concat(itemSelectorProp.placeholder), title, "".concat(compareKey, "_").concat(i + 1)));

      if (i !== 0 && i !== itemsToCompareCount.length - 1) {
        columns.push({
          title: i,
          dataIndex: "divider_".concat(i),
          key: "divider_item_".concat(i),
          className: "divider",
          onHeaderCell: function onHeaderCell(column) {
            return {
              colType: "gridDividerHeaderCol"
            };
          }
        });
      }
    }

    if (!itemsToCompare.length) {
      // add first divider for item selectors
      columns.splice(2, 0, {
        title: 'first_divider',
        dataIndex: "first_divider",
        key: "divider_item_1",
        className: "first_divider",
        onHeaderCell: function onHeaderCell(_) {
          return {
            colType: "gridDividerHeaderCol"
          };
        }
      });
    }

    var _loop = function _loop(index) {
      if (data.hasOwnProperty("".concat(compareKey, "_").concat(index))) {
        columns.splice(columns.findIndex(function (column) {
          return column.key === "".concat(compareKey, "_").concat(index) && column.dataIndex === "gridItemSelector";
        }), 1);

        if (index !== 1 && index !== itemsToCompareCount.length - 1) {
          columns.splice(columns.findIndex(function (column) {
            return column.key === "divider_item_".concat(index - 1) && column.dataIndex === "divider_".concat(index - 1);
          }), 1);
        }
      }
    };

    for (var index = 1; index <= itemsToCompare.length; index++) {
      _loop(index);
    }

    return columns;
  };

  var findRowsToHighlight = function findRowsToHighlight(value) {
    if (!value) {
      setHighlightedRows([]);
      return;
    }

    var itemKeys = Object.keys(data);
    var propertiesList = Object.keys(properties);
    var rowsToHighlight = [];

    if (itemKeys.length) {
      propertiesList.forEach(function (property) {
        var itemKey = itemKeys[0];
        var primaryValue = data[itemKey][property] && data[itemKey][property].toLowerCase();

        for (var index = 1; index < itemKeys.length; index++) {
          itemKey = itemKeys[index];

          if (data[itemKey][property] && primaryValue !== data[itemKey][property].toLowerCase()) {
            rowsToHighlight.push("field_".concat(property));
            break;
          }
        }
      });
      setHighlightedRows(rowsToHighlight);
    }
  };

  var _generateRows = function _generateRows(itemsToCompare) {
    var dataSource = [];

    if (!Object.keys(data).length) {
      return;
    }

    dataSource.push({
      rowType: "gridSectionCompareViewRow"
    });
    sections.forEach(function (section, index) {
      if (index === 0) {
        dataSource.push({
          rowType: "gridSectionFirstTitleRow",
          title: section.title
        });
      } else {
        dataSource.push({
          rowType: "gridSectionTitleRow",
          title: section.title
        });
      }

      section.fields.forEach(function (field) {
        var dataItem = {
          key: "field_".concat(field),
          property: properties[field] && properties[field].title,
          rowType: "gridSectionDataRow"
        };
        itemsToCompare.forEach(function (item) {
          var dataIndex = item;
          var dataField = field;
          dataItem[dataIndex] = data[item] && data[item][dataField] || "-";
        });
        dataSource.push(dataItem);
      });
    });
    return dataSource;
  };

  var itemsToCompare = Object.keys(data);

  var columns = _generateColumns(itemsToCompare);

  var dataSource = Object.keys(data).length > 0 ? _generateRows(itemsToCompare) : [];
  return /*#__PURE__*/React.createElement(GridWrapper, null, /*#__PURE__*/React.createElement(TitleWrapper, null, /*#__PURE__*/React.createElement(StyledRow$1, null, /*#__PURE__*/React.createElement(StyledComparisonName, null, comparisonName ? "Comparison ".concat(comparisonName) : label), /*#__PURE__*/React.createElement(StyledText$2, {
    onClick: handleClearAllData,
    disabled: clearAllDisabled
  }, ClearAll))), loading ? renderLoader(loading) : /*#__PURE__*/React.createElement(TableWrapper, null, /*#__PURE__*/React.createElement(StyledTable, {
    onRow: function onRow(record) {
      return {
        rowType: record.rowType,
        title: record.title
      };
    },
    components: {
      header: {
        cell: function cell(props) {
          return /*#__PURE__*/React.createElement(GridHeaderCell, props);
        }
      },
      body: {
        row: function row(props) {
          var dataRowKey = props['data-row-key'];

          switch (props.rowType) {
            case "gridSectionFirstTitleRow":
              return /*#__PURE__*/React.createElement(StyledtrTopBottomPadding, null, /*#__PURE__*/React.createElement("td", {
                colSpan: Object.keys(data).length * 2 - 1,
                style: {
                  paddingLeft: 0,
                  borderBottom: 0
                },
                className: "sectionTitle"
              }, /*#__PURE__*/React.createElement(StyledDiv$1, null, /*#__PURE__*/React.createElement(StyledLabel$2, null, props.title))), Object.keys(data).length > 1 && /*#__PURE__*/React.createElement("td", {
                className: "highlightCheckbox"
              }, /*#__PURE__*/React.createElement(CheckboxWrapper, null, /*#__PURE__*/React.createElement(StyledCheckbox$1, {
                onChange: function onChange(event) {
                  return onHighlightChange(event.target.checked);
                },
                checked: highlightSelected,
                subLabel: /*#__PURE__*/React.createElement(StyledText, {
                  color: LUP_BASE_GREY_DARK
                }, highlightCheckboxLabel)
              }))));

            case "gridSectionCompareViewRow":
              return /*#__PURE__*/React.createElement(ComparisonViewSelector, {
                itemsToCompare: itemsToCompare,
                selectedProducts: selectedProducts,
                updateSelectedProducts: updateSelectedProducts,
                onClickSubmit: onClickSubmit
              });

            case "gridSectionTitleRow":
              return /*#__PURE__*/React.createElement(StyledtrTopBottomPadding, null, /*#__PURE__*/React.createElement("td", {
                colSpan: columns.length,
                style: {
                  paddingLeft: 0,
                  borderBottom: 0
                },
                className: "sectionTitle"
              }, /*#__PURE__*/React.createElement(StyledDiv$1, null, /*#__PURE__*/React.createElement(StyledLabel$2, null, props.title))));

            default:
              return /*#__PURE__*/React.createElement("tr", null, props.children.map(function (_ref2) {
                var props = _ref2.props;
                var column = props.column,
                    record = props.record;

                if (column.dataIndex === "gridItemSelector") {
                  return null;
                }

                var highlight = highlightedRows.includes(dataRowKey) && column.dataIndex !== 'property' && !column.dataIndex.includes('divider') ? 'highlight' : '';
                return /*#__PURE__*/React.createElement("td", {
                  className: "".concat(column.className, " ").concat(highlight)
                }, record[column.dataIndex]);
              }));
          }
        }
      }
    },
    dataSource: dataSource,
    columns: columns,
    pagination: false,
    size: "small"
  })));
};

ComparisonGrid.propTypes = {
  label: propTypes.string.isRequired,
  onClickSubmit: propTypes.func.isRequired,
  data: propTypes.shape({}).isRequired,
  primary: propTypes.string.isRequired,
  itemsToCompareCount: propTypes.number,
  comparisonName: propTypes.string,
  inputValueForError: propTypes.string
};
ComparisonGrid.defaultProps = {
  itemsToCompareCount: 4,
  comparisonName: "",
  inputValueForError: ""
};

var _templateObject$C, _templateObject2$j, _templateObject3$e;
var StyledBlock$7 = styled$4(StyledBlock)(_templateObject$C || (_templateObject$C = _taggedTemplateLiteral(["\n    padding-top: ", ";\n    display: flex;\n    justify-content: space-around;\n"])), LUP_SPACING_13);
var StyledCheckbox$2 = styled$4(Checkbox)(_templateObject2$j || (_templateObject2$j = _taggedTemplateLiteral(["\n"])));
var BodyWrapper = styled$4(StyledBlock)(_templateObject3$e || (_templateObject3$e = _taggedTemplateLiteral(["\n  padding: ", " ", " ", ";\n"])), LUP_SPACING_26, LUP_SPACING_16, LUP_SPACING_18);

var _templateObject$D, _templateObject2$k, _templateObject3$f, _templateObject4$b;
var StyledModal$1 = styled$4(_Modal)(_templateObject$D || (_templateObject$D = _taggedTemplateLiteral(["\n  .ant-modal-title {\n    line-height: ", ";\n  }\n\n  .ant-modal-content {\n    box-shadow: 0 ", " ", " ", ";\n    border-radius: ", ";\n}\n\n  .ant-modal-header {\n    padding: ", " ", ";\n    padding-right: ", ";\n    background: ", ";\n    box-shadow: ", ";\n    border-bottom: ", " solid ", ";\n  }\n  .ant-modal-footer {\n    padding: 0;\n    padding-bottom: ", ";\n    text-align: center;\n    border-top: 0px;\n  }\n  .ant-modal-body {\n    padding: 0;\n  }\n\n  .ant-modal-footer button + button {\n    margin-left: 30px;\n  }\n\n  .ant-modal-close-x {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: ", ";\n    width: ", ";\n  }\n\n  border-radius: ", ";\n"])), LUP_SPACING_16, LUP_SPACING_1, LUP_SPACING_8, LUP_BASE_GREY_DARKER, LUP_SPACING_4, LUP_SPACING_14, LUP_SPACING_20, LUP_SPACING_15, LUP_BASE_GREY_LIGHTER, LUP_BOX_SHADOW_2, LUP_MAIN_BORDER_WIDTH1, LUP_BASE_GREY_LIGHTER, LUP_SPACING_40, LUP_SPACING_45, LUP_SPACING_45, LUP_MAIN_BORDER_RADIUS4);
var CloseWrapper = styled$4(StyledBlock)(_templateObject2$k || (_templateObject2$k = _taggedTemplateLiteral(["\n    padding-left: ", ";\n    display: inline-block;\n"])), LUP_SPACING_15);
var StyledButton$3 = styled$4(Button)(_templateObject3$f || (_templateObject3$f = _taggedTemplateLiteral(["\n  min-width: ", ";\n"])), LUP_MODAL_BUTTON_WIDTH_100);
var BodyWrapper$1 = styled$4(StyledBlock)(_templateObject4$b || (_templateObject4$b = _taggedTemplateLiteral(["\n  padding: ", " ", ";\n  padding-bottom: ", ";\n"])), LUP_SPACING_30, LUP_SPACING_20, LUP_SPACING_40);

var ModalPopup = function ModalPopup(_ref) {
  var modalTitle = _ref.modalTitle,
      isModalVisible = _ref.isModalVisible,
      handleOk = _ref.handleOk,
      handleCancel = _ref.handleCancel,
      okText = _ref.okText,
      cancelText = _ref.cancelText,
      modalWidth = _ref.modalWidth,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(StyledModal$1, {
    title: /*#__PURE__*/React.createElement(StyledBlock, {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(StyledText, {
      fontSize: LUP_MAIN_FONT_SIZE14,
      fontWeight: LUP_MAIN_FONT_BOLD600,
      lineHeight: LUP_SPACING_16
    }, modalTitle), /*#__PURE__*/React.createElement(CloseWrapper, null, /*#__PURE__*/React.createElement(Cross1, {
      onClick: handleCancel
    }))),
    visible: isModalVisible,
    onOk: handleOk,
    onCancel: handleCancel,
    okText: okText,
    cancelText: cancelText,
    centered: true,
    width: modalWidth,
    footer: [/*#__PURE__*/React.createElement(StyledButton$3, {
      size: "small",
      colored: "secondary",
      onClick: handleCancel
    }, cancelText), /*#__PURE__*/React.createElement(StyledButton$3, {
      size: "small",
      colored: "primary",
      onClick: handleOk
    }, okText)],
    maskStyle: {
      opacity: '50%',
      backgroundColor: '#444444'
    },
    closable: false
  }, children);
};

ModalPopup.propTypes = {
  children: propTypes.node.isRequired,
  modalTitle: propTypes.string,
  isModalVisible: propTypes.bool,
  handleOk: propTypes.func,
  handleCancel: propTypes.func,
  okText: propTypes.string,
  cancelText: propTypes.string,
  modalWidth: propTypes.string
};
ModalPopup.defaultProps = {
  modalTitle: "Title",
  isModalVisible: false,
  handleOk: function handleOk() {},
  handleCancel: function handleCancel() {},
  okText: "OK",
  cancelText: "CANCEL",
  modalWidth: "320px"
};

var SaveComparisonModal = function SaveComparisonModal(_ref) {
  var comparisonName = _ref.comparisonName,
      onSave = _ref.onSave,
      onCancel = _ref.onCancel,
      placeholder = _ref.placeholder,
      type = _ref.type,
      visible = _ref.visible,
      itemSelectorProp = _ref.itemSelectorProp,
      modalWidth = _ref.modalWidth;

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      checkboxValue = _React$useState4[0],
      setCheckboxValue = _React$useState4[1];

  var itemSelector = itemSelectorProp.title;

  var saveAsClick = function saveAsClick(event) {
    if (event.target && event.target.checked) {
      setValue(comparisonName);
      setCheckboxValue(true);
    } else {
      setValue('');
      setCheckboxValue(false);
    }
  };

  var closeModal = function closeModal() {
    saveAsClick(false);
    onCancel();
  };

  return /*#__PURE__*/React.createElement(ModalPopup, {
    modalTitle: SaveModalTitle,
    children: /*#__PURE__*/React.createElement(BodyWrapper, null, /*#__PURE__*/React.createElement(StyledInput, {
      placeholder: placeholder,
      value: value,
      id: "comparisonName",
      onChange: function onChange(event) {
        return setValue(event.target.value);
      }
    }), /*#__PURE__*/React.createElement(StyledBlock$7, null, /*#__PURE__*/React.createElement(StyledCheckbox$2, {
      subLabel: "".concat(saveAs, " ").concat(itemSelector),
      onChange: function onChange(event) {
        return saveAsClick(event);
      },
      checked: checkboxValue
    }))),
    isModalVisible: visible,
    handleOk: function handleOk() {
      onSave(value);
      closeModal();
    },
    handleCancel: closeModal,
    okText: save,
    cancelText: cancel,
    centered: true,
    modalWidth: modalWidth
  });
};

SaveComparisonModal.propTypes = {
  comparisonName: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  visible: propTypes.bool,
  onSave: propTypes.func,
  onCancel: propTypes.func,
  modalWidth: propTypes.string
};
SaveComparisonModal.defaultProps = {
  comparisonName: "",
  type: "string",
  placeholder: "Save Comparison as",
  visible: false,
  onSave: function onSave() {},
  onCancel: function onCancel() {},
  modalWidth: '340px'
};

var _templateObject$E, _templateObject2$l, _templateObject3$g, _templateObject4$c, _templateObject5$7, _templateObject6$5, _templateObject7$3, _templateObject8$3, _templateObject9$1, _templateObject10$1, _templateObject11$1, _templateObject12$1, _templateObject13$1, _templateObject14$1, _templateObject15, _templateObject16, _templateObject17;
var StyledSaveText = styled$4(StyledText)(_templateObject$E || (_templateObject$E = _taggedTemplateLiteral(["\n  font-size: ", ";\n  padding-right: ", ";\n  padding-left: ", ";\n  color: ", ";\n  line-height: ", ";\n"])), LUP_MAIN_FONT_SIZE14, LUP_SPACING_4, LUP_SPACING_6, LUP_BASE_BLUE_DARK, LUP_SPACING_22);
var StyledText$4 = styled$4(StyledText)(_templateObject2$l || (_templateObject2$l = _taggedTemplateLiteral(["\n  font-size: ", ";\n  padding-right: ", ";\n  color: ", ";\n  line-height: ", ";\n"])), LUP_MAIN_FONT_SIZE14, LUP_SPACING_2, LUP_BASE_GREY_DARKEST, LUP_SPACING_22);
var ExportText = styled$4(StyledText)(_templateObject3$g || (_templateObject3$g = _taggedTemplateLiteral(["\n  font-size: ", ";\n  padding-right: ", ";\n  color: ", ";\n  line-height: ", ";\n"])), LUP_MAIN_FONT_SIZE14, LUP_SPACING_6, LUP_BASE_GREY_DARKEST, LUP_SPACING_22);
var StyledButton$4 = styled$4(Button)(_templateObject4$c || (_templateObject4$c = _taggedTemplateLiteral(["\n  width: 132px;\n  height: 32px;\n  align-self: center;\n\n  &[disabled] {\n    opacity: 1;\n    cursor: not-allowed;\n    background: ", ";\n    border-color: ", ";\n  }\n"])), LUP_BASE_GREY, LUP_BASE_GREY);
var StyledDiv$3 = styled$4.div(_templateObject5$7 || (_templateObject5$7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n"])));
var StyledDropDropArrow$1 = styled$4.div(_templateObject6$5 || (_templateObject6$5 = _taggedTemplateLiteral(["\nleft: 50%;\ntransform: translateX(-50%) rotate(45deg);\ntop: -", ";\nborder-color: #fff transparent transparent #fff;\nbox-shadow: ", ";\nposition: absolute;\nz-index: 1;\ndisplay: block;\nwidth: ", ";\nheight: ", ";\nbackground: 0 0;\nborder-style: solid;\nborder-width: ", ";\n"])), LUP_SPACING_4, LUP_BOX_SHADOW_4, LUP_SPACING_12, LUP_SPACING_10, LUP_MAIN_BORDER_WIDTH6);
var StyledCol$1 = styled$4(_Col)(_templateObject7$3 || (_templateObject7$3 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n"])));
var StyledFirstCol = styled$4(_Col)(_templateObject8$3 || (_templateObject8$3 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  margin-left: ", ";\n  justify-content: center;\n"])), LUP_SPACING_16);
var StyledSecondCol$1 = styled$4(_Col)(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  margin-left: ", ";\n  justify-content: center;\n"])), LUP_SPACING_30);
var StyledThirdCol = styled$4(_Col)(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-left: auto;\n  margin-right: ", ";\n"])), LUP_SPACING_16);
var StyledDivider = styled$4.div(_templateObject11$1 || (_templateObject11$1 = _taggedTemplateLiteral(["\n  border: ", " solid #DDDDDD;\n  border-right: 0px;\n  margin-right: ", ";\n  height: ", ";\n"])), LUP_SPACING_1, LUP_SPACING_20, LUP_SPACING_24);
var StyledIconDiv = styled$4.div(_templateObject12$1 || (_templateObject12$1 = _taggedTemplateLiteral(["\n"])));
var StyledDropDown = styled$4(CustomDropDown)(_templateObject13$1 || (_templateObject13$1 = _taggedTemplateLiteral(["\n"])));
var StyledCard$2 = styled$4(_Card)(_templateObject14$1 || (_templateObject14$1 = _taggedTemplateLiteral(["\n  .ant-card-body {\n    padding: 0px;\n  }\n  padding: 0px;\n"])));
var StyledSaveIconDiv = styled$4.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  padding-top: 2px;\n"])));
var StyledMenu = styled$4(_Menu)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\ntop: 6px;\n&.ant-dropdown-menu {\n  padding: 7px 4px 10px 4px;\n}\n.ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover {\n  background-color: ", ";\n}\n.ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title { \n  height : 32px;\n  padding: 5px 16px 5px 0px;\n}\n"])), LUP_BASE_BLUE_LIGHTEST);
var IconButtonWrapper$1 = styled$4(StyledBlock)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\npadding-right: ", ";\npadding-left: ", ";\n"])), LUP_SPACING_6, LUP_SPACING_2);

var SaveSVG = "data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M14.5459%204.06487C14.8486%204.36757%2015%204.70811%2015%205.12432V13.4865C15%2013.9027%2014.8486%2014.2432%2014.5459%2014.5459C14.2432%2014.8486%2013.9027%2015%2013.4865%2015H2.51351C2.0973%2015%201.75676%2014.8486%201.45405%2014.5459C1.15135%2014.2432%201%2013.9027%201%2013.4865V2.51351C1%202.0973%201.15135%201.75676%201.45405%201.45405C1.75676%201.15135%202.0973%201%202.51351%201H10.8757C11.2919%201%2011.6324%201.15135%2011.9351%201.45405L14.5459%204.06487ZM13.9784%2013.4865V5.12432C13.9784%204.97297%2013.9405%204.85946%2013.827%204.78378L11.2162%202.17297C11.1405%202.0973%2011.0649%202.05946%2010.9892%202.02162V5.27568C10.9892%205.46486%2010.9135%205.65405%2010.7622%205.80541C10.6108%205.95676%2010.4216%206.03243%2010.2324%206.03243H3.72432C3.53513%206.03243%203.34594%205.95676%203.19459%205.80541C3.04324%205.65405%202.96757%205.46486%202.96757%205.27568V2.02162H2.47567C2.32432%202.02162%202.21081%202.05946%202.13514%202.17297C2.05946%202.28649%201.98378%202.4%201.98378%202.51351V13.4865C1.98378%2013.6378%202.02162%2013.7514%202.13514%2013.827C2.24865%2013.9027%202.36216%2013.9784%202.47567%2013.9784H13.4486C13.6%2013.9784%2013.7135%2013.9405%2013.7892%2013.827C13.9405%2013.7514%2013.9784%2013.6378%2013.9784%2013.4865ZM10.0054%202.02162H4.02703V5.01081H10.0054V2.02162ZM8%207.24324C8.75676%207.24324%209.4%207.50811%209.92973%208.03784C10.4595%208.56757%2010.7243%209.21081%2010.7243%209.96757C10.7243%2010.7243%2010.4595%2011.3676%209.92973%2011.8973C9.4%2012.427%208.75676%2012.6919%208%2012.6919C7.24324%2012.6919%206.6%2012.427%206.07027%2011.8973C5.54054%2011.3676%205.27567%2010.7243%205.27567%209.96757C5.27567%209.21081%205.54054%208.56757%206.07027%208.03784C6.6%207.50811%207.24324%207.24324%208%207.24324ZM8%2011.7459C8.49189%2011.7459%208.90811%2011.5568%209.24865%2011.2162C9.58919%2010.8757%209.77838%2010.4595%209.77838%209.96757C9.77838%209.47568%209.58919%209.05946%209.24865%208.71892C8.90811%208.37838%208.49189%208.18919%208%208.18919C7.50811%208.18919%207.09189%208.37838%206.75135%208.71892C6.41081%209.05946%206.22162%209.47568%206.22162%209.96757C6.22162%2010.4595%206.41081%2010.8757%206.75135%2011.2162C7.09189%2011.5568%207.50811%2011.7459%208%2011.7459Z%22%20fill%3D%22%230076BF%22%2F%3E%3C%2Fsvg%3E";

var CompareToolBar = function CompareToolBar(_ref) {
  var isDropDownVisible = _ref.isDropDownVisible,
      dropDownMenu = _ref.dropDownMenu,
      handleDropDown = _ref.handleDropDown,
      handleSaveComparison = _ref.handleSaveComparison,
      handleDeleteComparison = _ref.handleDeleteComparison,
      handleExportComparison = _ref.handleExportComparison,
      saveComparisonDisabled = _ref.saveComparisonDisabled,
      deleteComparisonDisabled = _ref.deleteComparisonDisabled,
      dataLength = _ref.dataLength;
  return /*#__PURE__*/React.createElement(StyledCard$2, null, /*#__PURE__*/React.createElement(_Row, {
    type: "flex",
    style: {
      padding: "9px 16px"
    }
  }, /*#__PURE__*/React.createElement(StyledFirstCol, null, /*#__PURE__*/React.createElement(StyledDropDown, {
    visible: isDropDownVisible,
    overlay: dropDownMenu,
    trigger: ["click"],
    placement: "bottomCenter",
    arrow: true
  }, /*#__PURE__*/React.createElement(StyledDiv$3, null, /*#__PURE__*/React.createElement(StyledSaveIconDiv, null, /*#__PURE__*/React.createElement(IconButton, {
    dataTestid: "SaveSVGTestId",
    src: SaveSVG,
    style: {
      display: 'flex'
    }
  })), /*#__PURE__*/React.createElement(StyledSaveText, null, DropDownText), /*#__PURE__*/React.createElement(IconButton, {
    dataTestid: "CaratDownSVGTestId",
    src: CaretDownBlackSVG,
    height: LUP_SPACING_4,
    width: LUP_SPACING_6,
    style: {
      display: 'flex',
      height: '10px',
      width: '10px',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })))), /*#__PURE__*/React.createElement(StyledSecondCol$1, null, /*#__PURE__*/React.createElement(Button, {
    colored: "primary",
    size: "small",
    onClick: handleSaveComparison,
    disabled: saveComparisonDisabled
  }, SaveButtonText)), /*#__PURE__*/React.createElement(StyledCol$1, null), dataLength || !deleteComparisonDisabled ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledThirdCol, null, /*#__PURE__*/React.createElement(StyledDivider, null), /*#__PURE__*/React.createElement(StyledText$4, null, DeleteButtonText), /*#__PURE__*/React.createElement(IconButton, {
    dataTestid: "DeleteSVGTestId",
    src: DeleteSVG,
    onClick: handleDeleteComparison,
    disabled: deleteComparisonDisabled,
    style: {
      display: 'flex',
      height: '16px',
      width: '16px'
    }
  }))) : /*#__PURE__*/React.createElement(StyledCol$1, {
    span: 6
  })));
};

CompareToolBar.propTypes = {
  dropDownMenu: propTypes.node.isRequired,
  isDropDownVisible: propTypes.bool,
  handleDropDown: propTypes.func,
  handleSaveComparison: propTypes.func,
  handleDeleteComparison: propTypes.func,
  handleExportComparison: propTypes.func,
  saveComparisonDisabled: propTypes.bool
};
CompareToolBar.defaultProps = {
  isDropDownVisible: false,
  saveComparisonDisabled: true,
  handleDropDown: function handleDropDown() {},
  handleSaveComparison: function handleSaveComparison() {},
  handleDeleteComparison: function handleDeleteComparison() {},
  handleExportComparison: function handleExportComparison() {}
};

var _templateObject$F, _templateObject2$m, _templateObject3$h, _templateObject4$d;
var StyledModal$2 = styled$4(StyledModal)(_templateObject$F || (_templateObject$F = _taggedTemplateLiteral(["\n    max-width: ", ";\n    \n    .ant-modal {\n        min-height: ", ";\n        border-radius: ", ";\n    }\n    .ant-modal-footer {\n        border-top: 0;\n    }\n\n    .ant-modal-header {\n        display: none;\n    }\n\n    .ant-modal-content {\n        border-width: ", ";\n        border-style: solid;\n        border-color: ", ";\n        width: fit-content;\n        margin: auto;\n        border-radius: ", ";\n    }\n\n    .ant-modal-close-x {\n        height: ", ";\n        width:  ", ";\n        display: contents;\n    }\n\n    .ant-modal-close-icon {\n        padding: ", ";\n    }\n\n    .ant-modal-body {\n        padding: ", ";\n        padding-right: ", ";\n        height: fit-content;\n        width: fit-content;\n        min-height: ", ";\n        display: flex;\n    }\n"])), LUP_SPACING_340, LUP_SPACING_60, LUP_MAIN_BORDER_RADIUS2, LUP_MAIN_BORDER_WIDTH2, function (props) {
  return props.color;
}, LUP_MAIN_BORDER_RADIUS2, LUP_SPACING_30, LUP_SPACING_30, LUP_SPACING_8, LUP_SPACING_15, LUP_SPACING_32, LUP_SPACING_66);
var CloseWrapper$1 = styled$4(StyledBlock)(_templateObject2$m || (_templateObject2$m = _taggedTemplateLiteral(["\n    padding: ", ";\n"])), LUP_SPACING_8);
var MessageWrapper = styled$4(StyledBlock)(_templateObject3$h || (_templateObject3$h = _taggedTemplateLiteral(["\n    padding-left: ", ";\n"])), LUP_SPACING_12);
var IconBlock = styled$4(StyledBlock)(_templateObject4$d || (_templateObject4$d = _taggedTemplateLiteral(["\n    display: contents;\n"])));

var Confirm = "data:image/svg+xml,%3Csvg%20width%3D%2222%22%20height%3D%2222%22%20viewBox%3D%220%200%2022%2022%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16.4732%201.50244C14.8098%200.482927%2012.9854%200%2011%200C9.01464%200%207.19024%200.482927%205.52683%201.50244C3.80976%202.52195%202.46829%203.86342%201.50244%205.52683C0.482926%207.19024%200%209.01464%200%2011C0%2012.9854%200.536585%2014.8098%201.50244%2016.4732C2.52195%2018.1902%203.86341%2019.5317%205.52683%2020.4976C7.19024%2021.5171%209.01464%2022%2011%2022C12.9854%2022%2014.7561%2021.5171%2016.4732%2020.4976C18.1902%2019.4781%2019.4781%2018.1366%2020.4976%2016.4732C21.5171%2014.8098%2022%2012.9854%2022%2011C22%209.01464%2021.5171%207.2439%2020.4976%205.52683C19.4781%203.80976%2018.1366%202.52195%2016.4732%201.50244ZM6.22439%202.68293C7.67317%201.82439%209.28293%201.39512%2011%201.39512C12.7171%201.39512%2014.3268%201.82439%2015.7756%202.68293C17.2244%203.54146%2018.4049%204.72195%2019.2634%206.17073C20.122%207.61951%2020.5512%209.22927%2020.5512%2010.9463C20.5512%2012.6634%2020.122%2014.2732%2019.2634%2015.722C18.4049%2017.1707%2017.2244%2018.3512%2015.7756%2019.2098C14.3268%2020.0683%2012.7171%2020.4976%2011%2020.4976C9.28293%2020.4976%207.67317%2020.0683%206.22439%2019.2098C4.77561%2018.3512%203.59512%2017.1707%202.73659%2015.722C1.87805%2014.2732%201.44878%2012.6634%201.44878%2010.9463C1.44878%209.22927%201.87805%207.61951%202.73659%206.17073C3.59512%204.72195%204.77561%203.54146%206.22439%202.68293ZM9.55924%2015.8316C9.79655%2016.0227%2010.1146%2016.0482%2010.3722%2015.923C10.4814%2015.8742%2010.5807%2015.7991%2010.6597%2015.6988L17.3374%207.22489C17.5971%206.89538%2017.5394%206.41912%2017.2085%206.16114C16.8777%205.90316%2016.399%205.96115%2016.1394%206.29066L9.9245%2014.1773L5.73965%2010.8065C5.41331%2010.5436%204.93431%2010.594%204.66978%2010.9189C4.40524%2011.2439%204.45534%2011.7205%204.78168%2011.9833L9.55924%2015.8316Z%22%20fill%3D%22%231BB934%22%2F%3E%3C%2Fsvg%3E";

var Error$1 = "data:image/svg+xml,%3Csvg%20width%3D%2226%22%20height%3D%2226%22%20viewBox%3D%220%200%2026%2026%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M13%202C14.9854%202%2016.8098%202.48293%2018.4732%203.50244C20.1366%204.52195%2021.4781%205.80976%2022.4976%207.52683C23.5171%209.2439%2024%2011.0146%2024%2013C24%2014.9854%2023.5171%2016.8098%2022.4976%2018.4732C21.4781%2020.1366%2020.1902%2021.4781%2018.4732%2022.4976C16.7561%2023.5171%2014.9854%2024%2013%2024C11.0146%2024%209.19024%2023.5171%207.52683%2022.4976C5.86341%2021.5317%204.52195%2020.1902%203.50244%2018.4732C2.53659%2016.8098%202%2014.9854%202%2013C2%2011.0146%202.48293%209.19024%203.50244%207.52683C4.46829%205.86342%205.80976%204.52195%207.52683%203.50244C9.19024%202.48293%2011.0146%202%2013%202ZM13%203.39512C11.2829%203.39512%209.67317%203.82439%208.22439%204.68293C6.77561%205.54146%205.59512%206.72195%204.73659%208.17073C3.87805%209.61951%203.44878%2011.2293%203.44878%2012.9463C3.44878%2014.6634%203.87805%2016.2732%204.73659%2017.722C5.59512%2019.1707%206.77561%2020.3512%208.22439%2021.2098C9.67317%2022.0683%2011.2829%2022.4976%2013%2022.4976C14.7171%2022.4976%2016.3268%2022.0683%2017.7756%2021.2098C19.2244%2020.3512%2020.4049%2019.1707%2021.2634%2017.722C22.122%2016.2732%2022.5512%2014.6634%2022.5512%2012.9463C22.5512%2011.2293%2022.122%209.61951%2021.2634%208.17073C20.4049%206.72195%2019.2244%205.54146%2017.7756%204.68293C16.3268%203.82439%2014.7171%203.39512%2013%203.39512ZM13%2016.7024C13.3756%2016.7024%2013.6439%2016.8098%2013.8585%2017.078C14.0732%2017.2927%2014.2341%2017.6146%2014.2341%2017.9366C14.2341%2018.3122%2014.1268%2018.5805%2013.8585%2018.7951C13.6439%2019.0098%2013.322%2019.1707%2013%2019.1707C12.6244%2019.1707%2012.3561%2019.0634%2012.1415%2018.7951C11.9268%2018.5805%2011.7659%2018.2585%2011.7659%2017.9366C11.7659%2017.561%2011.8732%2017.2927%2012.1415%2017.078C12.3561%2016.8098%2012.6244%2016.7024%2013%2016.7024ZM12.5171%207.3122C12.3561%207.3122%2012.1951%207.36585%2012.0878%207.47317C11.9805%207.58049%2011.9268%207.6878%2011.9805%207.84878L12.3024%2015.3073C12.3024%2015.4146%2012.3561%2015.522%2012.4634%2015.6293C12.5707%2015.7366%2012.6781%2015.7902%2012.839%2015.7902H13.2146C13.3756%2015.7902%2013.4829%2015.7366%2013.5902%2015.6293C13.6976%2015.522%2013.7512%2015.4146%2013.7512%2015.2537L14.0732%207.79512C14.1268%207.63415%2014.0732%207.52683%2013.9659%207.41951C13.8585%207.3122%2013.6439%207.3122%2013.4829%207.3122H12.5171Z%22%20fill%3D%22%23E00000%22%2F%3E%3C%2Fsvg%3E";

var AlertPopUp = function AlertPopUp(_ref) {
  var message = _ref.message,
      type = _ref.type,
      onCancelPopUp = _ref.onCancelPopUp;
  return /*#__PURE__*/React.createElement(StyledModal$2, {
    visible: message,
    footer: null,
    onCancel: onCancelPopUp,
    type: type,
    centered: true,
    closeIcon: /*#__PURE__*/React.createElement(CloseWrapper$1, null, /*#__PURE__*/React.createElement(Cross2, {
      size: LUP_SPACING_10
    })),
    color: type === "success" ? LUP_FUNCTIONAL_SUCCESS_GREEN : LUP_FUNCTIONAL_ERROR_RED,
    maskStyle: {
      opacity: '50%',
      backgroundColor: '#444444'
    }
  }, /*#__PURE__*/React.createElement(StyledBlock, {
    justify: "center",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconBlock, null, type === "success" && /*#__PURE__*/React.createElement(Image, {
    src: Confirm,
    height: LUP_SPACING_22,
    width: LUP_SPACING_22
  }), type === "error" && /*#__PURE__*/React.createElement(Image, {
    src: Error$1,
    height: LUP_SPACING_22,
    width: LUP_SPACING_22
  })), /*#__PURE__*/React.createElement(MessageWrapper, null, /*#__PURE__*/React.createElement(StyledText, {
    fontSize: LUP_MAIN_FONT_SIZE12,
    color: LUP_BASE_GREY_DARKER,
    lineHeight: LUP_SPACING_18
  }, message))));
};

AlertPopUp.propTypes = {
  message: propTypes.string,
  type: propTypes.string,
  onClose: propTypes.func
};
AlertPopUp.defaultProps = {
  message: "",
  type: "string",
  onClose: function onClose() {}
};

var _templateObject$G;
var BodyWrapper$2 = styled$4(StyledBlock)(_templateObject$G || (_templateObject$G = _taggedTemplateLiteral(["\n  padding: ", " ", " ", ";\n"])), LUP_SPACING_30, LUP_SPACING_20, LUP_SPACING_24);

var ConfirmModal = function ConfirmModal(_ref) {
  var confirmMessageContent = _ref.confirmMessageContent,
      modalTitle = _ref.modalTitle,
      isModalVisible = _ref.isModalVisible,
      handleOk = _ref.handleOk,
      handleCancel = _ref.handleCancel,
      okText = _ref.okText,
      cancelText = _ref.cancelText,
      modalWidth = _ref.modalWidth;
  return /*#__PURE__*/React.createElement(ModalPopup, {
    modalTitle: modalTitle,
    children: /*#__PURE__*/React.createElement(BodyWrapper$2, null, /*#__PURE__*/React.createElement(StyledText, {
      fontWeight: LUP_MAIN_FONT_NORMAL,
      color: LUP_BASE_GREY_DARKER,
      lineHeight: LUP_SPACING_22
    }, confirmMessageContent)),
    isModalVisible: isModalVisible,
    handleOk: handleOk,
    handleCancel: handleCancel,
    okText: okText,
    cancelText: cancelText,
    centered: true,
    modalWidth: modalWidth
  });
};

ConfirmModal.propTypes = {
  confirmMessageContent: propTypes.node.isRequired,
  modalTitle: propTypes.string,
  isModalVisible: propTypes.bool,
  handleOk: propTypes.func,
  handleCancel: propTypes.func,
  okText: propTypes.string,
  cancelText: propTypes.string,
  modalWidth: propTypes.string
};
ConfirmModal.defaultProps = {
  modalTitle: "Title",
  isModalVisible: false,
  handleOk: function handleOk() {},
  handleCancel: function handleCancel() {},
  okText: "OK",
  cancelText: "CANCEL",
  modalWidth: "320px"
};

var _templateObject$H, _templateObject2$n, _templateObject3$i, _templateObject4$e, _templateObject5$8, _templateObject6$6;
var StyledBlock$8 = styled$4(StyledBlock)(_templateObject$H || (_templateObject$H = _taggedTemplateLiteral(["\n    height: 110px;\n    background: ", ";\n    padding: ", ";\n    align-content: center;\n"])), WHITE, LUP_SPACING_8);
var StyledButton$5 = styled$4(_Button)(_templateObject2$n || (_templateObject2$n = _taggedTemplateLiteral(["\n    display: block;\n    margin: auto;\n    height: 24px;\n\n    &[disabled] {\n        cursor: not-allowed;\n    }\n\n    color: ", " !important;\n    font-size: ", ";\n    background: ", " !important;\n    border-color: ", " !important;\n\n\n    &:active, &:hover, &:focus {\n        color: ", " !important;\n        background: ", " !important;\n        border-color: ", " !important;\n    }\n\n"])), WHITE, LUP_MAIN_FONT_SIZE12, LUP_BASE_GREY, LUP_BASE_GREY, WHITE, LUP_BASE_GREY_MEDIUM, LUP_BASE_GREY_MEDIUM);
var InputBlock$1 = styled$4(StyledBlock)(_templateObject3$i || (_templateObject3$i = _taggedTemplateLiteral(["\n    margin: auto;\n    min-width: ", ";\n    width: 70%;\n"])), LUP_SPACING_230);
var ErrorBlock$1 = styled$4(StyledBlock)(_templateObject4$e || (_templateObject4$e = _taggedTemplateLiteral(["\n    min-height: 16px;\n"])));
var StyledDiv$4 = styled$4.div(_templateObject5$8 || (_templateObject5$8 = _taggedTemplateLiteral(["\n    border: 1px dashed ", ";\n    box-sizing: border-box;\n    padding: ", " ", ";\n    background-color: ", ";\n\n    display: flex; \n    justify-content: center;\n    align-items: center;\n    height: ", ";\n    width: ", ";\n"])), LUP_BASE_GREY, LUP_SPACING_12, LUP_SPACING_6, LUP_BASE_GREY_LIGHTEST, LUP_SPACING_130, function (props) {
  return props.width || '100%';
});
var StyledInput$1 = styled$4(StyledInput)(_templateObject6$6 || (_templateObject6$6 = _taggedTemplateLiteral(["\n    &[type='text'] {      \n        &:disabled {\n            border: 1px solid ", ";\n        }\n    }\n"])), LUP_FORM_DISABLED_BACKGROUND);

var CompareModalItemSelector = function CompareModalItemSelector(_ref) {
  var title = _ref.title,
      placeholder = _ref.placeholder,
      onSubmit = _ref.onSubmit,
      compareKey = _ref.compareKey,
      error = _ref.error,
      currentItemKey = _ref.currentItemKey,
      width = _ref.width,
      inputValueForError = _ref.inputValueForError;

  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  if (inputValueForError && error && !value) {
    setValue(inputValueForError);
  }

  return /*#__PURE__*/React.createElement(StyledDiv$4, {
    compareKey: compareKey,
    width: width
  }, /*#__PURE__*/React.createElement(InputBlock$1, null, /*#__PURE__*/React.createElement(InputField, {
    label: title,
    placeholder: placeholder,
    onChange: function onChange(event) {
      if (event.target.value) {
        setValue(event.target.value);
      } else {
        setValue(-1); //to change value after error
      }
    },
    error: compareKey === currentItemKey && error,
    disabled: currentItemKey !== compareKey,
    onKeyPress: function onKeyPress(event) {
      if (event.key === 'Enter') {
        onSubmit(value, compareKey);
      }
    },
    value: value !== -1 ? value : '' //to change value after error

  }), /*#__PURE__*/React.createElement(ErrorBlock$1, null, /*#__PURE__*/React.createElement(StyledText, {
    fontSize: LUP_MAIN_FONT_SIZE12,
    color: LUP_FUNCTIONAL_ERROR_RED
  }, error))));
};

CompareModalItemSelector.propTypes = {
  title: propTypes.string,
  placeholder: propTypes.string,
  onSubmit: propTypes.func,
  currentItemKey: propTypes.string,
  compareKey: propTypes.string,
  error: propTypes.bool,
  width: propTypes.string
};
CompareModalItemSelector.defaultProps = {
  title: "",
  placeholder: "Add IAN or Product No",
  onSubmit: function onSubmit() {},
  compareKey: "",
  currentItemKey: "",
  error: false
};

var _templateObject$I, _templateObject2$o, _templateObject3$j, _templateObject4$f, _templateObject5$9, _templateObject6$7, _templateObject7$4, _templateObject8$4;
var StyledCol$2 = styled$4(_Col)(_templateObject$I || (_templateObject$I = _taggedTemplateLiteral(["\n  padding: 0 ", " ", " 0;\n"])), LUP_SPACING_10, LUP_SPACING_10);
var StyledContainer = styled$4.div(_templateObject2$o || (_templateObject2$o = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: ", " ", ";\n"])), LUP_BASE_GREY_LIGHTEST, LUP_SPACING_5, LUP_SPACING_10);
var StyledRow$3 = styled$4(_Row)(_templateObject3$j || (_templateObject3$j = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n"])));
var StyledSecondRow$1 = styled$4(_Row)(_templateObject4$f || (_templateObject4$f = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n"])));
var StyledText$5 = styled$4(StyledText)(_templateObject5$9 || (_templateObject5$9 = _taggedTemplateLiteral(["\n  flex-grow: 1;\n"])));
var StyledSecondText = styled$4(StyledText)(_templateObject6$7 || (_templateObject6$7 = _taggedTemplateLiteral(["\n  cursor: pointer;\n"])));
var StyledModal$3 = styled$4(StyledModal)(_templateObject7$4 || (_templateObject7$4 = _taggedTemplateLiteral(["\n\n  padding-top: ", ";\n  padding-bottom: ", " !important;\n  background: transparent !important;\n\n  .ant-modal-centered .ant-modal {\n    background: transparent;\n  }\n\n  background: ", ";\n  padding-bottom: 0px;\n\n  .ant-modal-content {\n    box-shadow: ", ";\n  }\n\n  .ant-modal-title {\n    line-height: ", ";\n    font-weight: ", ";\n    color: ", ";\n  }\n\n  .ant-modal-header {\n    padding: ", ";\n    padding-top: ", ";\n    background: ", ";\n    border-radius: 0;\n    border: none;\n  }\n  .ant-modal-footer {\n    background: ", ";\n    text-align: center;\n    border-top: 0px;\n    padding: 0;\n  }\n  .ant-modal-body {\n    padding: ", " ", " ", " ", ";\n    padding-top: 0;\n    background: ", ";\n  }\n  .ant-btn {\n    padding: 0px;\n    width: ", ";\n    height: ", ";\n    font-size: ", ";\n  }\n  .ant-modal-footer button + button {\n    margin-left: ", ";\n  }\n\n  .ant-modal-close-x {\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    color: ", ";\n    width: ", ";\n    height: ", ";\n  }\n"])), LUP_SPACING_100, LUP_SPACING_100, LUP_BASE_GREY_LIGHTEST, LUP_BOX_SHADOW_3, LUP_SPACING_20, LUP_MAIN_FONT_BOLD600, LUP_BASE_GREY_DARKEST, LUP_SPACING_20, LUP_SPACING_7, LUP_BASE_GREY_LIGHTEST, LUP_BASE_GREY_LIGHTEST, LUP_SPACING_30, LUP_SPACING_10, LUP_SPACING_22, LUP_SPACING_20, LUP_BASE_GREY_LIGHTEST, LUP_SPACING_100, LUP_SPACING_32, LUP_SPACING_12, LUP_SPACING_30, WHITE, LUP_SPACING_24, LUP_SPACING_40);
var StyledCard$3 = styled$4(_Card)(_templateObject8$4 || (_templateObject8$4 = _taggedTemplateLiteral(["\n  .ant-card-body {\n    padding: 0px;\n  }\n"])));

var CompareViewModal = function CompareViewModal(_ref) {
  var products = _ref.products,
      visible = _ref.visible,
      handleRemove = _ref.handleRemove,
      selectedProducts = _ref.selectedProducts,
      handleCancel = _ref.handleCancel,
      compareKey = _ref.compareKey,
      onSubmitAndUpdate = _ref.onSubmitAndUpdate,
      loadingInModal = _ref.loadingInModal,
      inputValueForError = _ref.inputValueForError,
      comparisonDataError = _ref.comparisonDataError;
  return /*#__PURE__*/React.createElement(StyledModal$3, {
    visible: visible,
    title: "Product Viewer",
    onCancel: handleCancel,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null),
    width: "88%",
    centered: true,
    closeIcon: /*#__PURE__*/React.createElement(Cross3, {
      size: LUP_SPACING_24,
      onClick: handleCancel
    }),
    maskStyle: {
      opacity: '50%',
      background: '#444444'
    }
  }, /*#__PURE__*/React.createElement(StyledRow$3, null, selectedProducts.map(function (product) {
    return products[product] && /*#__PURE__*/React.createElement(StyledCol$2, {
      id: product,
      span: 8
    }, /*#__PURE__*/React.createElement(StyledCard$3, null, /*#__PURE__*/React.createElement(_Row, {
      style: {
        height: '76vh',
        maxHeight: '454px'
      }
    }, /*#__PURE__*/React.createElement(CompareCardImage, {
      source: products[product]['product thumbnail'],
      style: {
        padding: '9px 4px 7px'
      },
      height: "auto",
      width: "auto"
    })), /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement(StyledSecondRow$1, null, /*#__PURE__*/React.createElement(StyledText$5, {
      fontWeight: LUP_MAIN_FONT_BOLD600,
      fontSize: LUP_MAIN_FONT_SIZE14,
      lineHeight: "16px",
      color: LUP_SECONDARY_DEEP_CYAN
    }, products[product]['product identifier']), /*#__PURE__*/React.createElement(StyledSecondText, {
      fontSize: LUP_MAIN_FONT_SIZE14,
      lineHeight: "22px",
      color: LUP_BASE_BLUE_DARK,
      onClick: function onClick(e) {
        return handleRemove(product);
      }
    }, "Remove")), /*#__PURE__*/React.createElement(_Row, null, /*#__PURE__*/React.createElement(StyledText, {
      fontWeight: LUP_MAIN_FONT_BOLD600,
      fontSize: LUP_MAIN_FONT_SIZE14,
      lineHeight: "16px"
    }, products[product]['product name'])))));
  }), /*#__PURE__*/React.createElement(StyledCol$2, {
    id: "itemSelector",
    span: 8,
    style: {
      minHeight: '100px'
    }
  }, loadingInModal ? /*#__PURE__*/React.createElement(Spinner, {
    style: {
      position: 'absolute',
      marginTop: '25%',
      left: '50%'
    }
  }) : /*#__PURE__*/React.createElement(CompareModalItemSelector, {
    title: "Add Another Product",
    placeholder: "Type IAN or Product No",
    onSubmit: function onSubmit(value, key) {
      return onSubmitAndUpdate(value, key, "".concat(compareKey, "_").concat(Object.keys(products).length + 1));
    },
    compareKey: "".concat(compareKey, "_").concat(Object.keys(products).length + 1),
    currentItemKey: "".concat(compareKey, "_").concat(Object.keys(products).length + 1),
    inputValueForError: inputValueForError,
    error: comparisonDataError
  }))));
};

CompareViewModal.propTypes = {
  visible: propTypes.bool,
  products: propTypes.shape({}),
  selectedProducts: propTypes.arrayOf(propTypes.string),
  handleCancel: propTypes.func,
  handleRemove: propTypes.func,
  onSubmitAndUpdate: propTypes.func,
  loadingInModal: propTypes.bool
};
CompareViewModal.defaultProps = {
  visible: false,
  products: {},
  handleCancel: function handleCancel() {},
  handleRemove: function handleRemove() {},
  selectedProducts: [],
  onSubmitAndUpdate: function onSubmitAndUpdate() {},
  loadingInModal: false
};

var _templateObject$J, _templateObject2$p, _templateObject3$k, _templateObject4$g, _templateObject5$a, _templateObject6$8, _templateObject7$5, _templateObject8$5, _templateObject9$2, _templateObject10$2, _templateObject11$2, _templateObject12$2, _templateObject13$2, _templateObject14$2, _templateObject15$1;
var StyledSearchNavText = styled$4.div(_templateObject$J || (_templateObject$J = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-size: 14px;\n  line-height: 22px;\n  letter-spacing: 1px;\n  color: ", ";\n  margin-right: 10px;\n"])), BLACK);
var StyledSearchNavArrow = styled$4.div(_templateObject2$p || (_templateObject2$p = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-right: 5px;\n"])));
var StyledSearchNavClose = styled$4.div(_templateObject3$k || (_templateObject3$k = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-right: 12px;\n"])));
var StyledChatSearchInputBlock = styled$4.div(_templateObject4$g || (_templateObject4$g = _taggedTemplateLiteral(["\n  padding: ", ";\n"])), function (_ref) {
  var padding = _ref.padding;
  return padding;
});
var StyledChatbox = styled$4.div(_templateObject5$a || (_templateObject5$a = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n"])));
var StyledChatboxContent = styled$4.div(_templateObject6$8 || (_templateObject6$8 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  display: flex;\n  flex-grow: 1;\n  width: 100%;\n"])));
var StyledChatboxHeader = styled$4.div(_templateObject7$5 || (_templateObject7$5 = _taggedTemplateLiteral(["\nwidth: 100%;\n"])));
var StyledChatboxFooter = styled$4.div(_templateObject8$5 || (_templateObject8$5 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  display: flex;\n  bottom: 2px;\n  position: relative;\n  width: 100%;\n  box-shadow: 0px -2px 4px ", ";\n"])), LUP_BASE_GREY);
var StyledSelect$2 = styled$4(Select)(_templateObject9$2 || (_templateObject9$2 = _taggedTemplateLiteral(["\n  &.ant-select {\n    border: none;\n  }\n\n  &.ant-select > .ant-select-selection--single > .ant-select-selection__rendered {\n    color: #2d9cdb;\n    font-weight: ", ";\n  }\n"])), LUP_MAIN_FONT_BOLD600);
var StyledCancelReplyAction = styled$4.span(_templateObject10$2 || (_templateObject10$2 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-top: 14px;\n    padding-bottom: 13px;\n    float: right;\n    color: ", ";\n    cursor: pointer;\n    font-size: ", ";\n"])), function (props) {
  return props.color;
}, LUP_MAIN_FONT_SIZE14);
var StyledDropDropArrow$2 = styled$4.div(_templateObject11$2 || (_templateObject11$2 = _taggedTemplateLiteral(["\n    left: 50%;\n    transform: translateX(-50%) rotate(45deg);\n    top: -", ";\n    border-color: #fff transparent transparent #fff;\n    box-shadow: ", ";\n    position: absolute;\n    z-index: 1;\n    display: block;\n    width: ", ";\n    height: ", ";\n    background: 0 0;\n    border-style: solid;\n    border-width: ", ";\n"])), LUP_SPACING_4, LUP_BOX_SHADOW_4, LUP_SPACING_12, LUP_SPACING_10, LUP_MAIN_BORDER_WIDTH6);
var StyledMenu$1 = styled$4(_Menu)(_templateObject12$2 || (_templateObject12$2 = _taggedTemplateLiteral(["\n    top: 6px;\n    &.ant-dropdown-menu {\n      padding: 7px 4px 10px 4px;\n    }\n    .ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover {\n      background-color: ", ";\n    }\n    .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title { \n      height : 28px;\n      padding: 2px 5px;\n      text-align: center;\n    }\n"])), LUP_BASE_BLUE_LIGHTEST);
var StyledFlexWrapper = styled$4.div(_templateObject13$2 || (_templateObject13$2 = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n"])));
var StyledVerText = styled$4(StyledText)(_templateObject14$2 || (_templateObject14$2 = _taggedTemplateLiteral(["\n    margin-right: 4px;\n    color: ", ";\n    font-weight: normal;\n"])), LUP_BASE_GREY_DARKEST);
var StyledVerNoText = styled$4(StyledText)(_templateObject15$1 || (_templateObject15$1 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    color: ", ";\n    cursor: pointer;\n    font-weight: ", ";\n"])), LUP_BASE_BLUE_DARK, LUP_MAIN_FONT_BOLD600);

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = performanceNow()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel$1 = function() {
  caf.apply(root, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
raf_1.cancel = cancel$1;
raf_1.polyfill = polyfill;

var div = null;
var prefixes = [ 'Webkit', 'Moz', 'O', 'ms' ];

var prefixStyle = function prefixStyle (prop) {
  // re-use a dummy div
  if (!div) {
    div = document.createElement('div');
  }

  var style = div.style;

  // prop exists without prefix
  if (prop in style) {
    return prop
  }

  // borderRadius -> BorderRadius
  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1);

  // find the vendor-prefixed prop
  for (var i = prefixes.length; i >= 0; i--) {
    var name = prefixes[i] + titleCase;
    // e.g. WebkitBorderRadius or webkitBorderRadius
    if (name in style) {
      return name
    }
  }

  return false
};

/**
 * Export.
 */

var toNoCase_1 = toNoCase;

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}

/**
 * Export.
 */

var toSpaceCase_1 = toSpaceCase;

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return toNoCase_1(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}

/**
 * Export.
 */

var toCamelCase_1 = toCamelCase;

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return toSpaceCase_1(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}

/* The following list is defined in React's core */
var IS_UNITLESS = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

var addPxToStyle = function(name, value) {
  if(typeof value === 'number' && !IS_UNITLESS[ name ]) {
    return value + 'px';
  } else {
    return value;
  }
};

var cache = { 'float': 'cssFloat' };


function style (element, property, value) {
  var camel = cache[property];
  if (typeof camel === 'undefined') {
    camel = detect(property);
  }

  // may be false if CSS prop is unsupported
  if (camel) {
    if (value === undefined) {
      return element.style[camel]
    }

    element.style[camel] = addPxToStyle(camel, value);
  }
}

function each (element, properties) {
  for (var k in properties) {
    if (properties.hasOwnProperty(k)) {
      style(element, k, properties[k]);
    }
  }
}

function detect (cssProp) {
  var camel = toCamelCase_1(cssProp);
  var result = prefixStyle(camel);
  cache[camel] = cache[cssProp] = cache[result] = result;
  return result
}

function set () {
  if (arguments.length === 2) {
    if (typeof arguments[1] === 'string') {
      arguments[0].style.cssText = arguments[1];
    } else {
      each(arguments[0], arguments[1]);
    }
  } else {
    style(arguments[0], arguments[1], arguments[2]);
  }
}

var domCss = set;
var set_1 = set;

var get = function (element, properties) {
  if (Array.isArray(properties)) {
    return properties.reduce(function (obj, prop) {
      obj[prop] = style(element, prop || '');
      return obj
    }, {})
  } else {
    return style(element, properties || '')
  }
};
domCss.set = set_1;
domCss.get = get;

var isString_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isString;
function isString(maybe) {
    return typeof maybe === 'string';
}
});

var getScrollbarWidth_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getScrollbarWidth;



var _domCss2 = _interopRequireDefault(domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scrollbarWidth = false;

function getScrollbarWidth() {
    if (scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        var div = document.createElement('div');
        (0, _domCss2["default"])(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999,
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        document.body.appendChild(div);
        scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}
});

var returnFalse_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = returnFalse;
function returnFalse() {
    return false;
}
});

var getInnerWidth_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerWidth;
function getInnerWidth(el) {
    var clientWidth = el.clientWidth;

    var _getComputedStyle = getComputedStyle(el),
        paddingLeft = _getComputedStyle.paddingLeft,
        paddingRight = _getComputedStyle.paddingRight;

    return clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
}
});

var getInnerHeight_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerHeight;
function getInnerHeight(el) {
    var clientHeight = el.clientHeight;

    var _getComputedStyle = getComputedStyle(el),
        paddingTop = _getComputedStyle.paddingTop,
        paddingBottom = _getComputedStyle.paddingBottom;

    return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
}
});

var styles$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var containerStyleDefault = exports.containerStyleDefault = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
};

// Overrides containerStyleDefault properties
var containerStyleAutoHeight = exports.containerStyleAutoHeight = {
    height: 'auto'
};

var viewStyleDefault = exports.viewStyleDefault = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch'
};

// Overrides viewStyleDefault properties
var viewStyleAutoHeight = exports.viewStyleAutoHeight = {
    position: 'relative',
    top: undefined,
    left: undefined,
    right: undefined,
    bottom: undefined
};

var viewStyleUniversalInitial = exports.viewStyleUniversalInitial = {
    overflow: 'hidden',
    marginRight: 0,
    marginBottom: 0
};

var trackHorizontalStyleDefault = exports.trackHorizontalStyleDefault = {
    position: 'absolute',
    height: 6
};

var trackVerticalStyleDefault = exports.trackVerticalStyleDefault = {
    position: 'absolute',
    width: 6
};

var thumbHorizontalStyleDefault = exports.thumbHorizontalStyleDefault = {
    position: 'relative',
    display: 'block',
    height: '100%'
};

var thumbVerticalStyleDefault = exports.thumbVerticalStyleDefault = {
    position: 'relative',
    display: 'block',
    width: '100%'
};

var disableSelectStyle = exports.disableSelectStyle = {
    userSelect: 'none'
};

var disableSelectStyleReset = exports.disableSelectStyleReset = {
    userSelect: ''
};
});

var defaultRenderElements = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.renderViewDefault = renderViewDefault;
exports.renderTrackHorizontalDefault = renderTrackHorizontalDefault;
exports.renderTrackVerticalDefault = renderTrackVerticalDefault;
exports.renderThumbHorizontalDefault = renderThumbHorizontalDefault;
exports.renderThumbVerticalDefault = renderThumbVerticalDefault;



var _react2 = _interopRequireDefault(React);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable react/prop-types */

function renderViewDefault(props) {
    return _react2["default"].createElement('div', props);
}

function renderTrackHorizontalDefault(_ref) {
    var style = _ref.style,
        props = _objectWithoutProperties(_ref, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        left: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderTrackVerticalDefault(_ref2) {
    var style = _ref2.style,
        props = _objectWithoutProperties(_ref2, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        top: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbHorizontalDefault(_ref3) {
    var style = _ref3.style,
        props = _objectWithoutProperties(_ref3, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbVerticalDefault(_ref4) {
    var style = _ref4.style,
        props = _objectWithoutProperties(_ref4, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}
});

var Scrollbars_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _raf3 = _interopRequireDefault(raf_1);



var _domCss2 = _interopRequireDefault(domCss);





var _propTypes2 = _interopRequireDefault(propTypes);



var _isString2 = _interopRequireDefault(isString_1);



var _getScrollbarWidth2 = _interopRequireDefault(getScrollbarWidth_1);



var _returnFalse2 = _interopRequireDefault(returnFalse_1);



var _getInnerWidth2 = _interopRequireDefault(getInnerWidth_1);



var _getInnerHeight2 = _interopRequireDefault(getInnerHeight_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollbars = function (_Component) {
    _inherits(Scrollbars, _Component);

    function Scrollbars(props) {
        var _ref;

        _classCallCheck(this, Scrollbars);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Scrollbars.__proto__ || Object.getPrototypeOf(Scrollbars)).call.apply(_ref, [this, props].concat(rest)));

        _this.getScrollLeft = _this.getScrollLeft.bind(_this);
        _this.getScrollTop = _this.getScrollTop.bind(_this);
        _this.getScrollWidth = _this.getScrollWidth.bind(_this);
        _this.getScrollHeight = _this.getScrollHeight.bind(_this);
        _this.getClientWidth = _this.getClientWidth.bind(_this);
        _this.getClientHeight = _this.getClientHeight.bind(_this);
        _this.getValues = _this.getValues.bind(_this);
        _this.getThumbHorizontalWidth = _this.getThumbHorizontalWidth.bind(_this);
        _this.getThumbVerticalHeight = _this.getThumbVerticalHeight.bind(_this);
        _this.getScrollLeftForOffset = _this.getScrollLeftForOffset.bind(_this);
        _this.getScrollTopForOffset = _this.getScrollTopForOffset.bind(_this);

        _this.scrollLeft = _this.scrollLeft.bind(_this);
        _this.scrollTop = _this.scrollTop.bind(_this);
        _this.scrollToLeft = _this.scrollToLeft.bind(_this);
        _this.scrollToTop = _this.scrollToTop.bind(_this);
        _this.scrollToRight = _this.scrollToRight.bind(_this);
        _this.scrollToBottom = _this.scrollToBottom.bind(_this);

        _this.handleTrackMouseEnter = _this.handleTrackMouseEnter.bind(_this);
        _this.handleTrackMouseLeave = _this.handleTrackMouseLeave.bind(_this);
        _this.handleHorizontalTrackMouseDown = _this.handleHorizontalTrackMouseDown.bind(_this);
        _this.handleVerticalTrackMouseDown = _this.handleVerticalTrackMouseDown.bind(_this);
        _this.handleHorizontalThumbMouseDown = _this.handleHorizontalThumbMouseDown.bind(_this);
        _this.handleVerticalThumbMouseDown = _this.handleVerticalThumbMouseDown.bind(_this);
        _this.handleWindowResize = _this.handleWindowResize.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.handleDrag = _this.handleDrag.bind(_this);
        _this.handleDragEnd = _this.handleDragEnd.bind(_this);

        _this.state = {
            didMountUniversal: false
        };
        return _this;
    }

    _createClass(Scrollbars, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.addListeners();
            this.update();
            this.componentDidMountUniversal();
        }
    }, {
        key: 'componentDidMountUniversal',
        value: function componentDidMountUniversal() {
            // eslint-disable-line react/sort-comp
            var universal = this.props.universal;

            if (!universal) return;
            this.setState({ didMountUniversal: true });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.update();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.removeListeners();
            (0, raf_1.cancel)(this.requestFrame);
            clearTimeout(this.hideTracksTimeout);
            clearInterval(this.detectScrollingInterval);
        }
    }, {
        key: 'getScrollLeft',
        value: function getScrollLeft() {
            if (!this.view) return 0;
            return this.view.scrollLeft;
        }
    }, {
        key: 'getScrollTop',
        value: function getScrollTop() {
            if (!this.view) return 0;
            return this.view.scrollTop;
        }
    }, {
        key: 'getScrollWidth',
        value: function getScrollWidth() {
            if (!this.view) return 0;
            return this.view.scrollWidth;
        }
    }, {
        key: 'getScrollHeight',
        value: function getScrollHeight() {
            if (!this.view) return 0;
            return this.view.scrollHeight;
        }
    }, {
        key: 'getClientWidth',
        value: function getClientWidth() {
            if (!this.view) return 0;
            return this.view.clientWidth;
        }
    }, {
        key: 'getClientHeight',
        value: function getClientHeight() {
            if (!this.view) return 0;
            return this.view.clientHeight;
        }
    }, {
        key: 'getValues',
        value: function getValues() {
            var _ref2 = this.view || {},
                _ref2$scrollLeft = _ref2.scrollLeft,
                scrollLeft = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
                _ref2$scrollTop = _ref2.scrollTop,
                scrollTop = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop,
                _ref2$scrollWidth = _ref2.scrollWidth,
                scrollWidth = _ref2$scrollWidth === undefined ? 0 : _ref2$scrollWidth,
                _ref2$scrollHeight = _ref2.scrollHeight,
                scrollHeight = _ref2$scrollHeight === undefined ? 0 : _ref2$scrollHeight,
                _ref2$clientWidth = _ref2.clientWidth,
                clientWidth = _ref2$clientWidth === undefined ? 0 : _ref2$clientWidth,
                _ref2$clientHeight = _ref2.clientHeight,
                clientHeight = _ref2$clientHeight === undefined ? 0 : _ref2$clientHeight;

            return {
                left: scrollLeft / (scrollWidth - clientWidth) || 0,
                top: scrollTop / (scrollHeight - clientHeight) || 0,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                scrollWidth: scrollWidth,
                scrollHeight: scrollHeight,
                clientWidth: clientWidth,
                clientHeight: clientHeight
            };
        }
    }, {
        key: 'getThumbHorizontalWidth',
        value: function getThumbHorizontalWidth() {
            var _props = this.props,
                thumbSize = _props.thumbSize,
                thumbMinSize = _props.thumbMinSize;
            var _view = this.view,
                scrollWidth = _view.scrollWidth,
                clientWidth = _view.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var width = Math.ceil(clientWidth / scrollWidth * trackWidth);
            if (trackWidth === width) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(width, thumbMinSize);
        }
    }, {
        key: 'getThumbVerticalHeight',
        value: function getThumbVerticalHeight() {
            var _props2 = this.props,
                thumbSize = _props2.thumbSize,
                thumbMinSize = _props2.thumbMinSize;
            var _view2 = this.view,
                scrollHeight = _view2.scrollHeight,
                clientHeight = _view2.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var height = Math.ceil(clientHeight / scrollHeight * trackHeight);
            if (trackHeight === height) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(height, thumbMinSize);
        }
    }, {
        key: 'getScrollLeftForOffset',
        value: function getScrollLeftForOffset(offset) {
            var _view3 = this.view,
                scrollWidth = _view3.scrollWidth,
                clientWidth = _view3.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var thumbWidth = this.getThumbHorizontalWidth();
            return offset / (trackWidth - thumbWidth) * (scrollWidth - clientWidth);
        }
    }, {
        key: 'getScrollTopForOffset',
        value: function getScrollTopForOffset(offset) {
            var _view4 = this.view,
                scrollHeight = _view4.scrollHeight,
                clientHeight = _view4.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var thumbHeight = this.getThumbVerticalHeight();
            return offset / (trackHeight - thumbHeight) * (scrollHeight - clientHeight);
        }
    }, {
        key: 'scrollLeft',
        value: function scrollLeft() {
            var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!this.view) return;
            this.view.scrollLeft = left;
        }
    }, {
        key: 'scrollTop',
        value: function scrollTop() {
            var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!this.view) return;
            this.view.scrollTop = top;
        }
    }, {
        key: 'scrollToLeft',
        value: function scrollToLeft() {
            if (!this.view) return;
            this.view.scrollLeft = 0;
        }
    }, {
        key: 'scrollToTop',
        value: function scrollToTop() {
            if (!this.view) return;
            this.view.scrollTop = 0;
        }
    }, {
        key: 'scrollToRight',
        value: function scrollToRight() {
            if (!this.view) return;
            this.view.scrollLeft = this.view.scrollWidth;
        }
    }, {
        key: 'scrollToBottom',
        value: function scrollToBottom() {
            if (!this.view) return;
            this.view.scrollTop = this.view.scrollHeight;
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.addEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.addEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.addEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.addEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.addEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.addEventListener('resize', this.handleWindowResize);
        }
    }, {
        key: 'removeListeners',
        value: function removeListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.removeEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.removeEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.removeEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.removeEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.removeEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.removeEventListener('resize', this.handleWindowResize);
            // Possibly setup by `handleDragStart`
            this.teardownDragging();
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(event) {
            var _this2 = this;

            var _props3 = this.props,
                onScroll = _props3.onScroll,
                onScrollFrame = _props3.onScrollFrame;

            if (onScroll) onScroll(event);
            this.update(function (values) {
                var scrollLeft = values.scrollLeft,
                    scrollTop = values.scrollTop;

                _this2.viewScrollLeft = scrollLeft;
                _this2.viewScrollTop = scrollTop;
                if (onScrollFrame) onScrollFrame(values);
            });
            this.detectScrolling();
        }
    }, {
        key: 'handleScrollStart',
        value: function handleScrollStart() {
            var onScrollStart = this.props.onScrollStart;

            if (onScrollStart) onScrollStart();
            this.handleScrollStartAutoHide();
        }
    }, {
        key: 'handleScrollStartAutoHide',
        value: function handleScrollStartAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleScrollStop',
        value: function handleScrollStop() {
            var onScrollStop = this.props.onScrollStop;

            if (onScrollStop) onScrollStop();
            this.handleScrollStopAutoHide();
        }
    }, {
        key: 'handleScrollStopAutoHide',
        value: function handleScrollStopAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleWindowResize',
        value: function handleWindowResize() {
            this.update();
        }
    }, {
        key: 'handleHorizontalTrackMouseDown',
        value: function handleHorizontalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientX = event.clientX;

            var _target$getBoundingCl = target.getBoundingClientRect(),
                targetLeft = _target$getBoundingCl.left;

            var thumbWidth = this.getThumbHorizontalWidth();
            var offset = Math.abs(targetLeft - clientX) - thumbWidth / 2;
            this.view.scrollLeft = this.getScrollLeftForOffset(offset);
        }
    }, {
        key: 'handleVerticalTrackMouseDown',
        value: function handleVerticalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientY = event.clientY;

            var _target$getBoundingCl2 = target.getBoundingClientRect(),
                targetTop = _target$getBoundingCl2.top;

            var thumbHeight = this.getThumbVerticalHeight();
            var offset = Math.abs(targetTop - clientY) - thumbHeight / 2;
            this.view.scrollTop = this.getScrollTopForOffset(offset);
        }
    }, {
        key: 'handleHorizontalThumbMouseDown',
        value: function handleHorizontalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientX = event.clientX;
            var offsetWidth = target.offsetWidth;

            var _target$getBoundingCl3 = target.getBoundingClientRect(),
                left = _target$getBoundingCl3.left;

            this.prevPageX = offsetWidth - (clientX - left);
        }
    }, {
        key: 'handleVerticalThumbMouseDown',
        value: function handleVerticalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientY = event.clientY;
            var offsetHeight = target.offsetHeight;

            var _target$getBoundingCl4 = target.getBoundingClientRect(),
                top = _target$getBoundingCl4.top;

            this.prevPageY = offsetHeight - (clientY - top);
        }
    }, {
        key: 'setupDragging',
        value: function setupDragging() {
            (0, _domCss2["default"])(document.body, styles$1.disableSelectStyle);
            document.addEventListener('mousemove', this.handleDrag);
            document.addEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = _returnFalse2["default"];
        }
    }, {
        key: 'teardownDragging',
        value: function teardownDragging() {
            (0, _domCss2["default"])(document.body, styles$1.disableSelectStyleReset);
            document.removeEventListener('mousemove', this.handleDrag);
            document.removeEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = undefined;
        }
    }, {
        key: 'handleDragStart',
        value: function handleDragStart(event) {
            this.dragging = true;
            event.stopImmediatePropagation();
            this.setupDragging();
        }
    }, {
        key: 'handleDrag',
        value: function handleDrag(event) {
            if (this.prevPageX) {
                var clientX = event.clientX;

                var _trackHorizontal$getB = this.trackHorizontal.getBoundingClientRect(),
                    trackLeft = _trackHorizontal$getB.left;

                var thumbWidth = this.getThumbHorizontalWidth();
                var clickPosition = thumbWidth - this.prevPageX;
                var offset = -trackLeft + clientX - clickPosition;
                this.view.scrollLeft = this.getScrollLeftForOffset(offset);
            }
            if (this.prevPageY) {
                var clientY = event.clientY;

                var _trackVertical$getBou = this.trackVertical.getBoundingClientRect(),
                    trackTop = _trackVertical$getBou.top;

                var thumbHeight = this.getThumbVerticalHeight();
                var _clickPosition = thumbHeight - this.prevPageY;
                var _offset = -trackTop + clientY - _clickPosition;
                this.view.scrollTop = this.getScrollTopForOffset(_offset);
            }
            return false;
        }
    }, {
        key: 'handleDragEnd',
        value: function handleDragEnd() {
            this.dragging = false;
            this.prevPageX = this.prevPageY = 0;
            this.teardownDragging();
            this.handleDragEndAutoHide();
        }
    }, {
        key: 'handleDragEndAutoHide',
        value: function handleDragEndAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleTrackMouseEnter',
        value: function handleTrackMouseEnter() {
            this.trackMouseOver = true;
            this.handleTrackMouseEnterAutoHide();
        }
    }, {
        key: 'handleTrackMouseEnterAutoHide',
        value: function handleTrackMouseEnterAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleTrackMouseLeave',
        value: function handleTrackMouseLeave() {
            this.trackMouseOver = false;
            this.handleTrackMouseLeaveAutoHide();
        }
    }, {
        key: 'handleTrackMouseLeaveAutoHide',
        value: function handleTrackMouseLeaveAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'showTracks',
        value: function showTracks() {
            clearTimeout(this.hideTracksTimeout);
            (0, _domCss2["default"])(this.trackHorizontal, { opacity: 1 });
            (0, _domCss2["default"])(this.trackVertical, { opacity: 1 });
        }
    }, {
        key: 'hideTracks',
        value: function hideTracks() {
            var _this3 = this;

            if (this.dragging) return;
            if (this.scrolling) return;
            if (this.trackMouseOver) return;
            var autoHideTimeout = this.props.autoHideTimeout;

            clearTimeout(this.hideTracksTimeout);
            this.hideTracksTimeout = setTimeout(function () {
                (0, _domCss2["default"])(_this3.trackHorizontal, { opacity: 0 });
                (0, _domCss2["default"])(_this3.trackVertical, { opacity: 0 });
            }, autoHideTimeout);
        }
    }, {
        key: 'detectScrolling',
        value: function detectScrolling() {
            var _this4 = this;

            if (this.scrolling) return;
            this.scrolling = true;
            this.handleScrollStart();
            this.detectScrollingInterval = setInterval(function () {
                if (_this4.lastViewScrollLeft === _this4.viewScrollLeft && _this4.lastViewScrollTop === _this4.viewScrollTop) {
                    clearInterval(_this4.detectScrollingInterval);
                    _this4.scrolling = false;
                    _this4.handleScrollStop();
                }
                _this4.lastViewScrollLeft = _this4.viewScrollLeft;
                _this4.lastViewScrollTop = _this4.viewScrollTop;
            }, 100);
        }
    }, {
        key: 'raf',
        value: function raf(callback) {
            var _this5 = this;

            if (this.requestFrame) _raf3["default"].cancel(this.requestFrame);
            this.requestFrame = (0, _raf3["default"])(function () {
                _this5.requestFrame = undefined;
                callback();
            });
        }
    }, {
        key: 'update',
        value: function update(callback) {
            var _this6 = this;

            this.raf(function () {
                return _this6._update(callback);
            });
        }
    }, {
        key: '_update',
        value: function _update(callback) {
            var _props4 = this.props,
                onUpdate = _props4.onUpdate,
                hideTracksWhenNotNeeded = _props4.hideTracksWhenNotNeeded;

            var values = this.getValues();
            if ((0, _getScrollbarWidth2["default"])()) {
                var scrollLeft = values.scrollLeft,
                    clientWidth = values.clientWidth,
                    scrollWidth = values.scrollWidth;

                var trackHorizontalWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
                var thumbHorizontalWidth = this.getThumbHorizontalWidth();
                var thumbHorizontalX = scrollLeft / (scrollWidth - clientWidth) * (trackHorizontalWidth - thumbHorizontalWidth);
                var thumbHorizontalStyle = {
                    width: thumbHorizontalWidth,
                    transform: 'translateX(' + thumbHorizontalX + 'px)'
                };
                var scrollTop = values.scrollTop,
                    clientHeight = values.clientHeight,
                    scrollHeight = values.scrollHeight;

                var trackVerticalHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
                var thumbVerticalHeight = this.getThumbVerticalHeight();
                var thumbVerticalY = scrollTop / (scrollHeight - clientHeight) * (trackVerticalHeight - thumbVerticalHeight);
                var thumbVerticalStyle = {
                    height: thumbVerticalHeight,
                    transform: 'translateY(' + thumbVerticalY + 'px)'
                };
                if (hideTracksWhenNotNeeded) {
                    var trackHorizontalStyle = {
                        visibility: scrollWidth > clientWidth ? 'visible' : 'hidden'
                    };
                    var trackVerticalStyle = {
                        visibility: scrollHeight > clientHeight ? 'visible' : 'hidden'
                    };
                    (0, _domCss2["default"])(this.trackHorizontal, trackHorizontalStyle);
                    (0, _domCss2["default"])(this.trackVertical, trackVerticalStyle);
                }
                (0, _domCss2["default"])(this.thumbHorizontal, thumbHorizontalStyle);
                (0, _domCss2["default"])(this.thumbVertical, thumbVerticalStyle);
            }
            if (onUpdate) onUpdate(values);
            if (typeof callback !== 'function') return;
            callback(values);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var scrollbarWidth = (0, _getScrollbarWidth2["default"])();
            /* eslint-disable no-unused-vars */

            var _props5 = this.props,
                onScroll = _props5.onScroll,
                onScrollFrame = _props5.onScrollFrame,
                onScrollStart = _props5.onScrollStart,
                onScrollStop = _props5.onScrollStop,
                onUpdate = _props5.onUpdate,
                renderView = _props5.renderView,
                renderTrackHorizontal = _props5.renderTrackHorizontal,
                renderTrackVertical = _props5.renderTrackVertical,
                renderThumbHorizontal = _props5.renderThumbHorizontal,
                renderThumbVertical = _props5.renderThumbVertical,
                tagName = _props5.tagName,
                hideTracksWhenNotNeeded = _props5.hideTracksWhenNotNeeded,
                autoHide = _props5.autoHide,
                autoHideTimeout = _props5.autoHideTimeout,
                autoHideDuration = _props5.autoHideDuration,
                thumbSize = _props5.thumbSize,
                thumbMinSize = _props5.thumbMinSize,
                universal = _props5.universal,
                autoHeight = _props5.autoHeight,
                autoHeightMin = _props5.autoHeightMin,
                autoHeightMax = _props5.autoHeightMax,
                style = _props5.style,
                children = _props5.children,
                props = _objectWithoutProperties(_props5, ['onScroll', 'onScrollFrame', 'onScrollStart', 'onScrollStop', 'onUpdate', 'renderView', 'renderTrackHorizontal', 'renderTrackVertical', 'renderThumbHorizontal', 'renderThumbVertical', 'tagName', 'hideTracksWhenNotNeeded', 'autoHide', 'autoHideTimeout', 'autoHideDuration', 'thumbSize', 'thumbMinSize', 'universal', 'autoHeight', 'autoHeightMin', 'autoHeightMax', 'style', 'children']);
            /* eslint-enable no-unused-vars */

            var didMountUniversal = this.state.didMountUniversal;


            var containerStyle = _extends({}, styles$1.containerStyleDefault, autoHeight && _extends({}, styles$1.containerStyleAutoHeight, {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }), style);

            var viewStyle = _extends({}, styles$1.viewStyleDefault, {
                // Hide scrollbars by setting a negative margin
                marginRight: scrollbarWidth ? -scrollbarWidth : 0,
                marginBottom: scrollbarWidth ? -scrollbarWidth : 0
            }, autoHeight && _extends({}, styles$1.viewStyleAutoHeight, {
                // Add scrollbarWidth to autoHeight in order to compensate negative margins
                minHeight: (0, _isString2["default"])(autoHeightMin) ? 'calc(' + autoHeightMin + ' + ' + scrollbarWidth + 'px)' : autoHeightMin + scrollbarWidth,
                maxHeight: (0, _isString2["default"])(autoHeightMax) ? 'calc(' + autoHeightMax + ' + ' + scrollbarWidth + 'px)' : autoHeightMax + scrollbarWidth
            }), autoHeight && universal && !didMountUniversal && {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }, universal && !didMountUniversal && styles$1.viewStyleUniversalInitial);

            var trackAutoHeightStyle = {
                transition: 'opacity ' + autoHideDuration + 'ms',
                opacity: 0
            };

            var trackHorizontalStyle = _extends({}, styles$1.trackHorizontalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            var trackVerticalStyle = _extends({}, styles$1.trackVerticalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            return (0, React.createElement)(tagName, _extends({}, props, { style: containerStyle, ref: function ref(_ref3) {
                    _this7.container = _ref3;
                } }), [(0, React.cloneElement)(renderView({ style: viewStyle }), { key: 'view', ref: function ref(_ref4) {
                    _this7.view = _ref4;
                } }, children), (0, React.cloneElement)(renderTrackHorizontal({ style: trackHorizontalStyle }), { key: 'trackHorizontal', ref: function ref(_ref5) {
                    _this7.trackHorizontal = _ref5;
                } }, (0, React.cloneElement)(renderThumbHorizontal({ style: styles$1.thumbHorizontalStyleDefault }), { ref: function ref(_ref6) {
                    _this7.thumbHorizontal = _ref6;
                } })), (0, React.cloneElement)(renderTrackVertical({ style: trackVerticalStyle }), { key: 'trackVertical', ref: function ref(_ref7) {
                    _this7.trackVertical = _ref7;
                } }, (0, React.cloneElement)(renderThumbVertical({ style: styles$1.thumbVerticalStyleDefault }), { ref: function ref(_ref8) {
                    _this7.thumbVertical = _ref8;
                } }))]);
        }
    }]);

    return Scrollbars;
}(React.Component);

exports["default"] = Scrollbars;


Scrollbars.propTypes = {
    onScroll: _propTypes2["default"].func,
    onScrollFrame: _propTypes2["default"].func,
    onScrollStart: _propTypes2["default"].func,
    onScrollStop: _propTypes2["default"].func,
    onUpdate: _propTypes2["default"].func,
    renderView: _propTypes2["default"].func,
    renderTrackHorizontal: _propTypes2["default"].func,
    renderTrackVertical: _propTypes2["default"].func,
    renderThumbHorizontal: _propTypes2["default"].func,
    renderThumbVertical: _propTypes2["default"].func,
    tagName: _propTypes2["default"].string,
    thumbSize: _propTypes2["default"].number,
    thumbMinSize: _propTypes2["default"].number,
    hideTracksWhenNotNeeded: _propTypes2["default"].bool,
    autoHide: _propTypes2["default"].bool,
    autoHideTimeout: _propTypes2["default"].number,
    autoHideDuration: _propTypes2["default"].number,
    autoHeight: _propTypes2["default"].bool,
    autoHeightMin: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    autoHeightMax: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    universal: _propTypes2["default"].bool,
    style: _propTypes2["default"].object,
    children: _propTypes2["default"].node
};

Scrollbars.defaultProps = {
    renderView: defaultRenderElements.renderViewDefault,
    renderTrackHorizontal: defaultRenderElements.renderTrackHorizontalDefault,
    renderTrackVertical: defaultRenderElements.renderTrackVerticalDefault,
    renderThumbHorizontal: defaultRenderElements.renderThumbHorizontalDefault,
    renderThumbVertical: defaultRenderElements.renderThumbVerticalDefault,
    tagName: 'div',
    thumbMinSize: 30,
    hideTracksWhenNotNeeded: false,
    autoHide: false,
    autoHideTimeout: 1000,
    autoHideDuration: 200,
    autoHeight: false,
    autoHeightMin: 0,
    autoHeightMax: 200,
    universal: false
};
});

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollbars = undefined;



var _Scrollbars2 = _interopRequireDefault(Scrollbars_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Scrollbars2["default"];
exports.Scrollbars = _Scrollbars2["default"];
});

var HasRequiredPermission = function HasRequiredPermission(permissions, listOfPermission) {
  var notFound = true;
  listOfPermission && listOfPermission.forEach(function (permission) {
    if (permissions && !permissions.includes(permission)) {
      notFound = false;
    }
  });
  return notFound;
};

var ADD_ATTACHMENTS = 'ADD_ATTACHMENTS';
var ADD_COMMENTS = 'ADD_COMMENTS';
var DELETE_ALL_COMMENTS = 'DELETE_ALL_COMMENTS';
var DELETE_OWN_COMMENTS = 'DELETE_OWN_COMMENTS';
var EDIT_ALL_COMMENTS = 'EDIT_ALL_COMMENTS';
var EDIT_OWN_COMMENTS = 'EDIT_OWN_COMMENTS';
var VIEW_COMMENTS = 'VIEW_COMMENTS';

var SearchUpInactive = "data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10%207.22433C9.99704%207.17895%209.99739%207.1674%209.99004%207.12247C9.97343%207.02144%209.93696%206.92426%209.88339%206.83853C9.85631%206.79518%209.82481%206.75733%209.79121%206.71953L5.5053%202.2191C5.47362%202.18804%205.4664%202.17938%205.4318%202.15181C5.39294%202.12087%205.35104%202.09413%205.30697%202.07212C5.11442%201.97596%204.88595%201.97596%204.69341%202.07212C4.64933%202.09413%204.60744%202.12087%204.56858%202.15181C4.53401%202.17938%204.52676%202.18804%204.49511%202.2191L0.209206%206.71953C0.179633%206.7528%200.171347%206.76041%200.145131%206.79671C0.0762355%206.89205%200.0297335%207.00456%200.0103397%207.12247C-0.00344658%207.20667%20-0.00344658%207.29319%200.0103397%207.37738C0.0214117%207.4447%200.0412697%207.51037%200.0691995%207.57206C0.175311%207.80639%200.395428%207.96953%200.641225%207.99608C0.738372%208.00654%200.837305%207.99585%200.930381%207.96484C1.00792%207.939%201.0811%207.89921%201.14589%207.8476C1.1805%207.82004%201.18771%207.81137%201.21939%207.78032L5.00021%203.81026L8.78102%207.78032L8.81666%207.81527C8.85023%207.84396%208.85806%207.85214%208.89434%207.87712C8.96235%207.92396%209.03796%207.95846%209.11696%207.97868C9.18018%207.99484%209.24547%208.00189%209.31047%207.99957C9.55744%207.99072%209.78763%207.8437%209.90875%207.61756C9.9486%207.54311%209.97621%207.46154%209.99004%207.37738C9.99739%207.33245%209.99704%207.3209%2010%207.27552V7.22433Z%22%20fill%3D%22%23C4C4C4%22%2F%3E%3C%2Fsvg%3E";

var SearchDownInactive = "data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10%202.77567C9.99704%202.82105%209.99739%202.8326%209.99004%202.87753C9.97343%202.97856%209.93696%203.07574%209.88339%203.16147C9.85631%203.20482%209.82481%203.24267%209.79121%203.28047L5.5053%207.7809C5.47362%207.81196%205.4664%207.82062%205.4318%207.84819C5.39294%207.87913%205.35104%207.90587%205.30697%207.92788C5.11442%208.02404%204.88595%208.02404%204.69341%207.92788C4.64933%207.90587%204.60744%207.87913%204.56858%207.84819C4.53401%207.82062%204.52676%207.81196%204.49511%207.7809L0.209206%203.28047C0.179633%203.2472%200.171347%203.23959%200.145131%203.20329C0.0762355%203.10795%200.0297335%202.99544%200.0103397%202.87753C-0.00344658%202.79333%20-0.00344658%202.70681%200.0103397%202.62262C0.0214117%202.5553%200.0412697%202.48963%200.0691995%202.42794C0.175311%202.19361%200.395428%202.03047%200.641225%202.00392C0.738372%201.99346%200.837305%202.00415%200.930381%202.03516C1.00792%202.061%201.0811%202.10079%201.14589%202.1524C1.1805%202.17996%201.18771%202.18863%201.21939%202.21968L5.00021%206.18974L8.78102%202.21968L8.81666%202.18473C8.85023%202.15604%208.85806%202.14786%208.89434%202.12288C8.96235%202.07604%209.03796%202.04154%209.11696%202.02132C9.18018%202.00516%209.24547%201.99811%209.31047%202.00043C9.55744%202.00928%209.78763%202.1563%209.90875%202.38244C9.9486%202.45689%209.97621%202.53846%209.99004%202.62262C9.99739%202.66755%209.99704%202.6791%2010%202.72448V2.77567Z%22%20fill%3D%22%23C4C4C4%22%2F%3E%3C%2Fsvg%3E";

var SearchCrossIcon = "data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%226%22%20fill%3D%22%23A4A4A4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.67216%206L9.36079%208.68863C9.5464%208.87424%209.5464%209.17518%209.36079%209.36079C9.17518%209.5464%208.87424%209.5464%208.68863%209.36079L6%206.67216L3.31137%209.36079C3.12576%209.5464%202.82482%209.5464%202.63921%209.36079C2.4536%209.17518%202.4536%208.87424%202.63921%208.68863L5.32784%206L2.63921%203.31137C2.4536%203.12576%202.4536%202.82482%202.63921%202.63921C2.82482%202.4536%203.12576%202.4536%203.31137%202.63921L6%205.32784L8.68863%202.63921C8.87424%202.4536%209.17518%202.4536%209.36079%202.63921C9.5464%202.82482%209.5464%203.12576%209.36079%203.31137L6.67216%206Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";

var _ChatBox$defaultProps;
var Item = StyledMenu$1.Item;

var ChatBox = function ChatBox(_ref) {
  var chatItems = _ref.chatItems,
      replyItems = _ref.replyItems,
      onSubmit = _ref.onSubmit,
      onSearch = _ref.onSearch,
      searchText = _ref.searchText,
      onScrollFrame = _ref.onScrollFrame,
      loading = _ref.loading,
      chatType = _ref.chatType,
      users = _ref.users,
      addAttachment = _ref.addAttachment,
      attachments = _ref.attachments,
      deleteAttachment = _ref.deleteAttachment,
      cancelAttachmentUpload = _ref.cancelAttachmentUpload,
      userId = _ref.userId,
      onTapEditMessage = _ref.onTapEditMessage,
      onTapDeleteMessage = _ref.onTapDeleteMessage,
      onCancelEditMessage = _ref.onCancelEditMessage,
      onSaveEditMessage = _ref.onSaveEditMessage,
      isCreating = _ref.isCreating,
      isEditLoading = _ref.isEditLoading,
      isDeleteLoading = _ref.isDeleteLoading,
      errorMessage = _ref.errorMessage,
      rooms = _ref.rooms,
      roomLabelModifier = _ref.roomLabelModifier,
      currentRoom = _ref.currentRoom,
      onRoomChange = _ref.onRoomChange,
      onTapReply = _ref.onTapReply,
      onCancelReply = _ref.onCancelReply,
      userPermissions = _ref.userPermissions,
      onTapPin = _ref.onTapPin,
      pinItems = _ref.pinItems,
      highLightedMessage = _ref.highLightedMessage,
      prevLoading = _ref.prevLoading,
      nextLoading = _ref.nextLoading,
      repliesTo = _ref.repliesTo,
      onCancelPopUp = _ref.onCancelPopUp,
      updateRefId = _ref.updateRefId,
      versionOptions = _ref.versionOptions,
      configs = _ref.configs,
      headerComponent = _ref.headerComponent;

  var renderLoader = function renderLoader(isLoading) {
    if (isLoading) {
      // spinnerPosition
      var spinnerPosition = chatItems.length > 0 ? 'relative' : 'absolute';
      return /*#__PURE__*/React.createElement(Spinner, {
        style: {
          position: spinnerPosition,
          top: '50%',
          left: '50%'
        }
      });
    }
  };

  rooms = rooms.map(function (room) {
    return {
      index: room.index,
      label: room.app.ref.name.toUpperCase(),
      value: room.id
    };
  });
  var modifiedRooms = rooms.map(function (room) {
    return _objectSpread2(_objectSpread2({}, room), {}, {
      label: roomLabelModifier[room.label] || room.label
    });
  });

  var checkEditPermission = function checkEditPermission(commentUserId) {
    return userId === commentUserId && HasRequiredPermission(userPermissions, [EDIT_OWN_COMMENTS]) || HasRequiredPermission(userPermissions, [EDIT_ALL_COMMENTS]);
  };

  var checkDeletePermission = function checkDeletePermission(commentUserId) {
    return userId === commentUserId && HasRequiredPermission(userPermissions, [DELETE_OWN_COMMENTS]) || HasRequiredPermission(userPermissions, [DELETE_ALL_COMMENTS]);
  };
  /* Search */


  var scrollBar = /*#__PURE__*/React.createRef();

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      commentIDs = _React$useState2[0],
      setCommentIds = _React$useState2[1];

  var _React$useState3 = React.useState(""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      focusedCommentId = _React$useState4[0],
      setFocusedCommentID = _React$useState4[1];

  var _React$useState5 = React.useState({}),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      commentIdToPosMap = _React$useState6[0],
      setCommentIdToPosMap = _React$useState6[1];

  var _React$useState7 = React.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      scrollToCommentId = _React$useState8[0],
      setScrollToCommentId = _React$useState8[1];

  var _React$useState9 = React.useState(versionOptions.length && versionOptions[0].value),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      version = _React$useState10[0],
      setVersion = _React$useState10[1];

  var currentItemPos = commentIdToPosMap[focusedCommentId] || 0;
  var searchInputSuffix = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledSearchNavText, null, currentItemPos, "/", chatType === ChatTypes.COMMENT ? chatItems.length : replyItems.length), /*#__PURE__*/React.createElement(StyledSearchNavArrow, null, /*#__PURE__*/React.createElement(IconButton, {
    src: SearchUpInactive,
    onClick: function onClick() {
      return navigateSearch("prev");
    }
  })), /*#__PURE__*/React.createElement(StyledSearchNavArrow, null, /*#__PURE__*/React.createElement(IconButton, {
    src: SearchDownInactive,
    onClick: function onClick() {
      return navigateSearch("next");
    }
  })), /*#__PURE__*/React.createElement(StyledSearchNavClose, null, /*#__PURE__*/React.createElement(IconButton, {
    src: SearchCrossIcon,
    onClick: function onClick() {
      return onSearch("");
    }
  })));
  var showSearchPrefix = searchText !== "" && !loading && !prevLoading && !nextLoading; // methods

  var navigateSearch = function navigateSearch(to) {
    var currentIndex = currentItemPos - 1;

    switch (to) {
      case 'next':
        var nextIndex = currentIndex + 1 > commentIDs.length ? commentIDs.length : currentIndex + 1;
        var nextId = commentIDs[nextIndex];

        if (commentIdToPosMap[nextId]) {
          setFocusedCommentID(nextId);
        }

        break;

      case 'prev':
        var prevIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
        var prevId = commentIDs[prevIndex];

        if (commentIdToPosMap[prevId]) {
          setFocusedCommentID(prevId);
        }

        break;
    }
  };

  var handleVersionClick = function handleVersionClick(e) {
    if (e && e.key) {
      var selectedVersion = versionOptions.find(function (o) {
        return o.key == e.key;
      });

      if (selectedVersion) {
        setVersion(selectedVersion.value);
        updateRefId(selectedVersion.key);
      }
    }
  };

  var getVersionDropdown = function getVersionDropdown() {
    var versionMenu = /*#__PURE__*/React.createElement(StyledMenu$1, null, /*#__PURE__*/React.createElement(StyledDropDropArrow$2, null), versionOptions.length && versionOptions.map(function (version) {
      return /*#__PURE__*/React.createElement(Item, {
        key: version.key,
        onClick: function onClick(e) {
          handleVersionClick(e);
        }
      }, version.value);
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CustomDropDown, {
      visible: true,
      overlay: versionMenu,
      trigger: ["click"],
      placement: "bottomCenter"
    }, /*#__PURE__*/React.createElement(StyledFlexWrapper, null, /*#__PURE__*/React.createElement(StyledVerText, null, "Ver"), /*#__PURE__*/React.createElement(StyledVerNoText, null, version), /*#__PURE__*/React.createElement(IconButton, {
      src: CaretDownBlackSVG,
      style: {
        display: 'flex',
        height: '10px',
        width: '10px',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }))));
  }; //useEffect : chatItems


  useEffect(function () {
    var showSearchPrefix = searchText !== "" && !loading && !prevLoading && !nextLoading;

    if (showSearchPrefix) {
      var comments = chatType === ChatTypes.COMMENT ? chatItems : replyItems;

      var _commentIds = comments.map(function (chatItem) {
        return chatItem.messageId;
      });

      var _commentIdToPosMap = {};

      _commentIds.forEach(function (commentId, index) {
        return _commentIdToPosMap[commentId] = index + 1;
      });

      setCommentIdToPosMap(_commentIdToPosMap);

      if (replyItems.length && searchText === '') {
        setScrollToCommentId(replyItems[replyItems.length - 1].messageId);
      } else if (focusedCommentId !== "" && _commentIds.includes(focusedCommentId)) ; else {
        setFocusedCommentID(_commentIds[0]);
      }

      setCommentIds(_commentIds);
    }
  }, [searchText, loading, chatItems, replyItems]);

  var _prevLoading = Utils.usePrevious(prevLoading);

  var _nextLoading = Utils.usePrevious(nextLoading);

  var _loading = Utils.usePrevious(loading);

  var oldRepliesTo = Utils.usePrevious(repliesTo);

  var _isCreating = Utils.usePrevious(isCreating);

  useEffect(function () {
    // while fetching new previous comments, setting id to fix the scroll position
    if (prevLoading && !_prevLoading) {
      setScrollToCommentId(chatItems[0].messageId);
    } // while fetching new next comments, setting id to fix the scroll position


    if (nextLoading && !_nextLoading) {
      setScrollToCommentId(chatItems[chatItems.length - 1].messageId);
    } // when new previous/next comments are fetched, 
    // fix the scroll position from where new messages are fetched


    if (!prevLoading && _prevLoading || !nextLoading && _nextLoading) {
      setFocusedCommentID(scrollToCommentId); // setScrollToCommentId(null);
    } // when messages are fetched for the first time or reply section is opened


    if (!loading && _loading || repliesTo !== '' && !highLightedMessage.commentId || !isCreating && _isCreating) {
      if (scrollBar) {
        scrollBar.scrollToBottom();
      }
    } // when reply window is closed, to set the comment position of repliesTo id


    if (oldRepliesTo !== '' && repliesTo === '') {
      setFocusedCommentID(oldRepliesTo); // setScrollToCommentId(null);
    }
  }, [prevLoading, nextLoading, loading, repliesTo, isCreating]);
  /* Search */

  return /*#__PURE__*/React.createElement(StyledChatbox, null, /*#__PURE__*/React.createElement(StyledChatboxHeader, null, /*#__PURE__*/React.createElement(StyledHighlighter, {
    color: currentRoom.app && currentRoom.index % 2 !== 0 && '#F2994A'
  }), headerComponent || /*#__PURE__*/React.createElement(ChatHeader, {
    headerText: chatType === ChatTypes.COMMENT ? ChatHeaderText.COMMENT : ChatHeaderText.REPLY,
    showVersions: true,
    suffix: getVersionDropdown()
  }), /*#__PURE__*/React.createElement(ChatHeaderTabs, {
    selectedChatRoom: currentRoom,
    tabs: modifiedRooms,
    onChange: function onChange(event) {
      return onRoomChange(event);
    }
  }), /*#__PURE__*/React.createElement(StyledChatSearchInputBlock, {
    padding: ChatSearchBoxPadding[chatType]
  }, /*#__PURE__*/React.createElement(SearchInput, {
    value: searchText,
    onSearch: onSearch,
    suffix: showSearchPrefix && searchInputSuffix,
    allowClear: showSearchPrefix,
    noChatFound: searchText && !prevLoading && !nextLoading && !loading && !isCreating && !isEditLoading && !isDeleteLoading && (chatType === ChatTypes.COMMENT ? chatItems.length === 0 : replyItems.length === 0)
  })), chatType === ChatTypes.REPLY && /*#__PURE__*/React.createElement(StyledCancelReplyAction, {
    onClick: function onClick() {
      return onCancelReply();
    },
    color: currentRoom.index % 2 !== 0 ? LUP_SECONDARY_DEEP_YELLOW : LUP_BASE_BLUE_DARK
  }, "Cancel Reply")), /*#__PURE__*/React.createElement(StyledChatboxContent, null, /*#__PURE__*/React.createElement(lib.Scrollbars, {
    ref: function ref(elm) {
      scrollBar = elm;
    },
    onScrollFrame: onScrollFrame,
    renderTrackHorizontal: function renderTrackHorizontal(props) {
      return /*#__PURE__*/React.createElement("div", _extends({}, props, {
        className: "track-horizontal",
        style: {
          display: 'none'
        }
      }));
    }
  }, renderLoader(prevLoading || loading), /*#__PURE__*/React.createElement(AlertPopUp, {
    type: "error",
    message: errorMessage,
    onCancelPopUp: onCancelPopUp
  }), HasRequiredPermission(userPermissions, [VIEW_COMMENTS]) && /*#__PURE__*/React.createElement(ChatItems, {
    chatItems: chatItems,
    replyItems: replyItems,
    focusedCommentId: focusedCommentId,
    chatType: chatType,
    users: users,
    userId: userId,
    onTapReply: onTapReply,
    appCode: currentRoom.app && currentRoom.app.code,
    onTapPin: onTapPin,
    pinItems: pinItems,
    onTapEditMessage: onTapEditMessage,
    onTapDeleteMessage: onTapDeleteMessage,
    onCancelEditMessage: onCancelEditMessage,
    onSaveEditMessage: onSaveEditMessage,
    isEditLoading: isEditLoading,
    isDeleteLoading: isDeleteLoading,
    selectedChatRoomIndex: currentRoom.index,
    configs: configs,
    checkEditPermission: checkEditPermission,
    checkDeletePermission: checkDeletePermission,
    canAddAttachments: HasRequiredPermission(userPermissions, [ADD_ATTACHMENTS]),
    searchText: searchText,
    highLightedCommentId: highLightedMessage && highLightedMessage.commentId,
    highLightedReplyId: highLightedMessage && highLightedMessage.replyId,
    setFocusedCommentID: setFocusedCommentID
  }), renderLoader(nextLoading))), HasRequiredPermission(userPermissions, [ADD_COMMENTS]) && /*#__PURE__*/React.createElement(StyledChatboxFooter, null, /*#__PURE__*/React.createElement(ChatSubmitBox, {
    isCreating: isCreating,
    onScrollFrame: onScrollFrame,
    onSubmit: onSubmit,
    users: users,
    addAttachment: addAttachment,
    attachments: attachments,
    deleteAttachment: deleteAttachment,
    cancelAttachmentUpload: cancelAttachmentUpload,
    selectedChatRoomIndex: currentRoom.index,
    canAddAttachments: HasRequiredPermission(userPermissions, [ADD_ATTACHMENTS]),
    placeholder: chatType === ChatTypes.COMMENT ? ChatSubmitBoxPlaceholderText.COMMENT : ChatSubmitBoxPlaceholderText.REPLY,
    boxLabel: chatType === ChatTypes.REPLY && ChatSubmitBoxReplyLabel
  })));
};

ChatBox.propTypes = {
  versionOptions: propTypes.array,
  chatItems: propTypes.arrayOf(propTypes.shape({
    avatar: propTypes.string,
    author: propTypes.author,
    userType: propTypes.oneOf(['internal', 'external']),
    isNew: propTypes.bool,
    taggedUsers: propTypes.arrayOf({
      id: propTypes.string,
      name: propTypes.string
    }),
    text: propTypes.string,
    timestamp: propTypes.oneOf([propTypes.string, propTypes.number]),
    messageId: propTypes.string,
    reference: propTypes.objectOf({
      pin_id: propTypes.string
    })
  })),
  replyItems: propTypes.arrayOf(propTypes.shape({
    avatar: propTypes.string,
    author: propTypes.author,
    userType: propTypes.oneOf(['internal', 'external']),
    isNew: propTypes.bool,
    taggedUsers: propTypes.arrayOf({
      id: propTypes.string,
      name: propTypes.string
    }),
    text: propTypes.string,
    timestamp: propTypes.oneOf([propTypes.string, propTypes.number]),
    messageId: propTypes.string,
    reference: propTypes.objectOf({
      pin_id: propTypes.string
    })
  })),
  users: propTypes.arrayOf({
    id: propTypes.string,
    name: propTypes.string
  }).isRequired,
  onSubmit: propTypes.func,
  onSearch: propTypes.func,
  searchText: propTypes.string,
  onScrollFrame: propTypes.func,
  loading: propTypes.bool,
  errorMessage: propTypes.string,
  chatType: propTypes.string.isRequired,
  addAttachment: propTypes.func,
  attachments: propTypes.arrayOf(propTypes.shape({})),
  deleteAttachment: propTypes.func,
  cancelAttachmentUpload: propTypes.func,
  userId: propTypes.string,
  onTapEditMessage: propTypes.func,
  onCancelEditMessage: propTypes.func,
  onSaveEditMessage: propTypes.func,
  onTapDeleteMessage: propTypes.func,
  isCreating: propTypes.bool,
  isEditLoading: propTypes.bool,
  isDeleteLoading: propTypes.bool,
  currentRoom: propTypes.object,
  onRoomChange: propTypes.func,
  rooms: propTypes.array,
  roomLabelModifier: propTypes.shape({}),
  onTapReply: propTypes.func,
  onCancelReply: propTypes.func,
  userPermissions: propTypes.array,
  onTapPin: propTypes.func.isRequired,
  pinItems: propTypes.array,
  highLightedMessage: propTypes.shape({
    commentId: propTypes.string,
    replyId: propTypes.string
  }),
  onCancelPopUp: propTypes.func,
  configs: propTypes.arrayOf(propTypes.shape({
    app_code: propTypes.string.isRequired,
    config_key: propTypes.string.isRequired,
    config_value: propTypes.string.isRequired
  })),
  headerComponent: propTypes.node
};
ChatBox.defaultProps = (_ChatBox$defaultProps = {
  versionOptions: [],
  chatItems: propTypes.arrayOf(propTypes.shape({})),
  replyItems: propTypes.arrayOf(propTypes.shape({})),
  onSubmit: function onSubmit() {},
  onSearch: function onSearch() {},
  searchText: "",
  onScrollFrame: function onScrollFrame() {},
  loading: false,
  configs: [],
  errorMessage: '',
  addAttachment: function addAttachment() {},
  attachments: [],
  deleteAttachment: function deleteAttachment() {},
  cancelAttachmentUpload: function cancelAttachmentUpload() {},
  userId: '',
  onTapEditMessage: function onTapEditMessage() {},
  onCancelEditMessage: function onCancelEditMessage() {},
  onSaveEditMessage: function onSaveEditMessage() {},
  onTapDeleteMessage: function onTapDeleteMessage() {},
  isCreating: false,
  isEditLoading: false,
  isDeleteLoading: false,
  currentRoom: {},
  onRoomChange: function onRoomChange() {},
  rooms: [],
  roomLabelModifier: {},
  onTapReply: function onTapReply() {},
  onCancelReply: function onCancelReply() {},
  userPermissions: [],
  pinItems: []
}, _defineProperty(_ChatBox$defaultProps, "versionOptions", []), _defineProperty(_ChatBox$defaultProps, "highLightedMessage", {}), _defineProperty(_ChatBox$defaultProps, "onCancelPopUp", function onCancelPopUp() {}), _defineProperty(_ChatBox$defaultProps, "headerComponent", null), _ChatBox$defaultProps);

var _templateObject$K, _templateObject2$q, _templateObject3$l, _templateObject4$h, _templateObject5$b;
var StyledModal$4 = styled$4(_Modal)(_templateObject$K || (_templateObject$K = _taggedTemplateLiteral(["\n  .ant-modal-content {\n    padding: ", ";\n    width: ", ";\n    height: ", ";\n  }\n\n  .ant-modal-footer {\n    padding-top: ", ";\n    text-align: center;\n    border-top: 0;\n  }\n\n  .ant-modal-body {\n    padding: 0;\n  }\n"])), LUP_SPACING_32, LUP_SPACING_500, LUP_SPACING_300, LUP_SPACING_16);
var StyledIcon = styled$4.p(_templateObject2$q || (_templateObject2$q = _taggedTemplateLiteral(["\n  font-size: ", ";\n  text-align: center;\n  margin-bottom: ", ";\n"])), LUP_SPACING_25, LUP_SPACING_8);
var Title = styled$4.p(_templateObject3$l || (_templateObject3$l = _taggedTemplateLiteral(["\n  font-style: normal;\n  font-weight: ", ";\n  font-size: ", ";\n  text-align: center;\n  color: ", ";\n  margin-bottom: ", ";\n"])), LUP_MAIN_FONT_BOLD600, LUP_SPACING_18, HEX, LUP_SPACING_8);
var Description = styled$4.p(_templateObject4$h || (_templateObject4$h = _taggedTemplateLiteral(["\n  font-size: ", ";\n  text-align: center;\n  font-weight: 500;\n  color: ", ";\n"])), LUP_SPACING_16, LUP_BASE_GREY_DARK);
var StyledButton$6 = styled$4(Button)(_templateObject5$b || (_templateObject5$b = _taggedTemplateLiteral(["\n  margin: 0px 8px;\n  font-family: Titillium Web;\n  font-size: ", ";\n  width: ", ";\n  ", ";\n"])), LUP_SPACING_18, LUP_SPACING_160, color);

var ConfirmationPopup = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfirmationPopup, _React$Component);

  var _super = _createSuper(ConfirmationPopup);

  function ConfirmationPopup() {
    _classCallCheck(this, ConfirmationPopup);

    return _super.apply(this, arguments);
  }

  _createClass(ConfirmationPopup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          icon = _this$props.icon,
          description = _this$props.description,
          visible = _this$props.visible,
          okText = _this$props.okText,
          cancelText = _this$props.cancelText,
          okHandler = _this$props.okHandler,
          cancelHandler = _this$props.cancelHandler;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StyledModal$4, {
        visible: visible,
        onCancel: cancelHandler,
        maskClosable: false,
        footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledButton$6, {
          size: "large",
          textTransform: "capitalize",
          colored: "default",
          color: LUP_SECONDARY_CHARCOAL_BLACK,
          onClick: cancelHandler
        }, cancelText), /*#__PURE__*/React.createElement(StyledButton$6, {
          size: "large",
          textTransform: "capitalize",
          colored: "primary",
          onClick: okHandler
        }, okText))
      }, icon &&
      /*#__PURE__*/
      // <StyledIcon style={LUP_SPACING_5}>
      React.createElement(StyledIcon, null, /*#__PURE__*/React.createElement(_Icon, {
        component: icon
      })), /*#__PURE__*/React.createElement(Title, null, title), /*#__PURE__*/React.createElement(Description, null, description)));
    }
  }]);

  return ConfirmationPopup;
}(React.Component);
ConfirmationPopup.propTypes = {
  visible: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  icon: propTypes.node,
  description: propTypes.string.isRequired,
  okText: propTypes.string.isRequired,
  cancelText: propTypes.string.isRequired,
  okHandler: propTypes.func.isRequired,
  cancelHandler: propTypes.func.isRequired
};
ConfirmationPopup.defaultProps = {
  icon: null
};

var alertSVG = function alertSVG() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "52",
    height: "52",
    viewBox: "0 0 40 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39.48 28.2C39.48 27.2 39.2 26.2 38.64 25.36L24.48 3.24005C23.48 1.72005 21.84 0.800049 20 0.800049C18.2 0.800049 16.52 1.72005 15.52 3.24005L1.35999 25.32C0.319988 26.96 0.239988 29.04 1.15999 30.72C2.07999 32.44 3.87999 33.48 5.79999 33.48H34.16C36.12 33.48 37.88 32.44 38.8 30.72C39.24 29.96 39.48 29.08 39.48 28.2ZM36.68 29.6C36.16 30.52 35.2 31.08 34.16 31.08H5.83999C4.79999 31.08 3.79999 30.52 3.31999 29.6C2.79999 28.68 2.83999 27.56 3.39999 26.68L17.6 4.56005C18.12 3.72005 19.04 3.24005 20.04 3.24005C21.04 3.24005 21.92 3.72005 22.48 4.56005L36.64 26.68C36.92 27.12 37.08 27.68 37.08 28.24C37.04 28.68 36.92 29.16 36.68 29.6ZM21.44 25.1401C21.44 24.3337 20.7864 23.6801 19.98 23.6801C19.1737 23.6801 18.52 24.3337 18.52 25.1401V25.3001C18.52 26.1064 19.1737 26.7601 19.98 26.7601C20.7864 26.7601 21.44 26.1064 21.44 25.3001V25.1401ZM18.52 12.5801C18.52 11.7737 19.1737 11.1201 19.98 11.1201C20.7864 11.1201 21.44 11.7737 21.44 12.5801V19.6201C21.44 20.4264 20.7864 21.0801 19.98 21.0801C19.1737 21.0801 18.52 20.4264 18.52 19.6201V12.5801Z",
    fill: "#F2994A"
  }));
};

var ChatContainer = function ChatContainer(_ref) {
  var appId = _ref.appId,
      refId = _ref.refId,
      userId = _ref.userId,
      authKey = _ref.authKey,
      reference = _ref.reference,
      onDeleteMessageRef = _ref.onDeleteMessageRef,
      onCreateMessageRef = _ref.onCreateMessageRef,
      focusMessage = _ref.focusMessage,
      roomLabelModifier = _ref.roomLabelModifier,
      versionOptions = _ref.versionOptions,
      token = _ref.token,
      headerComponent = _ref.headerComponent;

  // add event listeners when component mounts
  var createMessageEventHandler = function createMessageEventHandler(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();

    if (state.roomId) {
      var _e$detail = e.detail,
          message = _e$detail.message,
          attachments = _e$detail.attachments,
          pinReference = _e$detail.pinReference;
      handleSubmit(message, attachments, pinReference, function () {
        dispatch({
          type: GET_MESSAGES,
          loading: true,
          pageNum: 0,
          searchText: '',
          chatItems: [],
          highlightMessage: {},
          fetchedPages: {}
        });

        if (state.appId && state.roomId) {
          messageAction.getMessages(state);
        }
      });
    }
  }; // get the state and messageAction handle from useMessage reducer hook


  var _useContext = useContext(MessageContext),
      _useContext2 = _slicedToArray(_useContext, 3),
      state = _useContext2[0],
      dispatch = _useContext2[1],
      messageAction = _useContext2[2];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      commentBoxChangeConfirmationVisible = _useState2[0],
      setCommentBoxChangeConfirmationVisible = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      targetRoomId = _useState4[0],
      setTargetRoomId = _useState4[1];

  var _useState5 = useState(ExternalRoomName),
      _useState6 = _slicedToArray(_useState5, 2),
      commentBoxChangeName = _useState6[0],
      setCommentBoxChangeName = _useState6[1]; // update authKey when component mounts


  useEffect(function () {
    dispatch({
      type: SET_AUTHKEY,
      authKey: authKey
    }); // component will unmount

    return function () {
      dispatch({
        type: SET_AUTHKEY,
        authKey: ""
      });
    };
  }, [authKey]); //fetch rooms when component mounts

  useEffect(function () {
    messageAction.fetchCurrentUser(userId);
    dispatch({
      type: GET_ROOMS,
      appId: appId,
      refId: state.refId
    });
    if (state.refId) messageAction.fetchRooms(appId, state.refId, userId);else messageAction.fetchRooms(appId, refId, userId); // component will unmount

    return function () {
      dispatch({
        type: RESET_STATE
      });
    };
  }, [appId, state.refId, refId, userId]); //get permssions when user/room changed

  useEffect(function () {
    document.cookie = token;
  }, [token]);
  useEffect(function () {
    if (state.room.app && state.room.app.code && state.room.app.code.length) {
      messageAction.getAppConfig(state.room.app.code, CONFIGURATION_KEY);
    }
  }, [state.room.app]); // load the messages w.hen the container loads - componentDidMount

  useEffect(function () {
    var commentId = state.highlightMessage.commentId;
    dispatch({
      type: SET_AUTHKEY,
      authKey: authKey
    });
    dispatch({
      type: GET_MESSAGES,
      loading: true,
      pageNum: state.pageNum,
      searchText: state.searchText,
      chatItems: state.chatItems,
      highlightMessage: focusMessage,
      fetchedPages: {}
    });

    if (state.appId && state.roomId) {
      messageAction.getMessages(state);
    }
  }, [state.appId, state.roomId]); // check for any update - componentDidUpdate
  //useEffect hook to check for pageNum updation(loading older messages)

  useEffect(function () {
    var commentId = state.highlightMessage.commentId;

    if (state.appId && state.roomId && state.chatItems.length && !commentId) {
      messageAction.getMessages(state);
    }
  }, [state.pageNum]);
  useEffect(function () {
    if (state.highlightMessage.commentId !== focusMessage.commentId || state.highlightMessage.replyId !== focusMessage.replyId) {
      dispatch({
        type: SET_HIGHLIGHT_MESSAGE,
        highlightMessage: focusMessage
      });
    }
  }, [focusMessage]); //useEffect hook to check for searching text(searching for messages)

  useEffect(function () {
    if (state.searchText) {
      messageAction.getMessages(state);
    }

    if ((state.searchText === '' || state.repliesTo === '') && state.loading === true) {
      messageAction.getMessages(state);
    }
  }, [state.searchText, state.repliesTo]);
  useEffect(function () {
    if (state.chatItems.length && state.highlightMessage.replyId) {
      handleTapReplyMessage(focusMessage.commentId, true);
    }
  }, [state.chatItems]); // emit event on change of rooms

  useEffect(function () {
    var event = new CustomEvent("rooms-changed", {
      detail: {
        rooms: state.rooms
      },
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(event);
  }, [state.rooms]); // emit event on change of room

  useEffect(function () {
    var event = new CustomEvent("current-room-changed", {
      detail: {
        room: state.room
      },
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(event);
  }, [state.room]); // whenever roomId changes , remove & add create-message event listener

  useEffect(function () {
    document.addEventListener('create-message', createMessageEventHandler, false);
    return function () {
      document.removeEventListener('create-message', createMessageEventHandler);
    };
  }, [state.roomId]); // submit message handler

  var handleSubmit = function handleSubmit(message, attachments) {
    var pinReference = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var messageBody = {
      message: message,
      attachments: attachments,
      reference: pinReference || reference
    }; // dispatch({ type: types.POST_MESSAGE, loading: true, scrollPosition: 'bottom' });

    dispatch({
      type: POST_MESSAGE,
      isCreating: true
    });
    messageAction.postMessage(messageBody, function (messageObj) {
      onCreateMessageRef(messageObj);
      if (cb) cb();
    });
  }; // search message handler


  var handleSearch = function handleSearch(searchText) {
    dispatch({
      type: GET_MESSAGES,
      loading: true,
      pageNum: 0,
      searchText: searchText,
      chatItems: state.repliesTo !== '' ? state.chatItems : [],
      highlightMessage: {},
      fetchedPages: {}
    });
  };

  var handleDateLabels = function handleDateLabels() {
    var labels = document.getElementsByClassName('date-timeline-label');

    if (labels.length) {
      var previousOffSet = 0;
      var labelsToHide = [];
      labels.forEach(function (label, index) {
        var labelTopOffSet = label.getBoundingClientRect().top;

        if (labelTopOffSet) {
          if (!previousOffSet) {
            previousOffSet = labelTopOffSet;
          }

          if (labelTopOffSet === previousOffSet) {
            labels[index > 1 ? index - 1 : index].style.opacity = 0;
            labelsToHide.push(label);
          } else {
            previousOffSet = labelTopOffSet;
            labels[index > 1 ? index - 1 : index].style.opacity = 1;
          }
        }
      });

      if (labelsToHide.length) {
        labelsToHide[labelsToHide.length - 1].style.opacity = 1;
      }
    }
  }; // pagination handler


  var handleScrollFrame = function handleScrollFrame(event) {
    handleDateLabels();

    if (event.top === 0 && state.loading === false && state.hasPrev === true && state.prevLoading === false && state.repliesTo === '') {
      var _pageNum = Utils.getPageNum(state.fetchedPages, state.pageNum, 1, 'increment');

      dispatch({
        type: GET_PREV_MESSAGES,
        prevLoading: true,
        pageNum: _pageNum,
        searchText: state.searchText,
        chatItems: state.chatItems
      });
    }

    if (event.top >= 1 && state.loading === false && state.hasNext === true && state.nextLoading === false && state.repliesTo === '' && state.pageNum > 0) {
      var _pageNum2 = Utils.getPageNum(state.fetchedPages, state.pageNum, 1, 'decrement');

      if (_pageNum2 > -1) {
        dispatch({
          type: GET_NEXT_MESSAGES,
          nextLoading: true,
          pageNum: _pageNum2,
          searchText: state.searchText,
          chatItems: state.chatItems
        });
      }
    }
  }; // edit message handler to show edit box in main comment box and reply box section


  var handleTapEditMessage = function handleTapEditMessage(messageId) {
    var updatedReplyItems = [];
    var updatedChatItems = state.chatItems;

    if (state.repliesTo !== '') {
      updatedReplyItems = state.replyItems.map(function (replyItem) {
        return replyItem.messageId === messageId ? _objectSpread2(_objectSpread2({}, replyItem), {}, {
          isEditing: true
        }) : replyItem;
      });
    } else {
      updatedChatItems = state.chatItems.map(function (chatItem) {
        return chatItem.messageId === messageId ? _objectSpread2(_objectSpread2({}, chatItem), {}, {
          isEditing: true
        }) : chatItem;
      });
    }

    dispatch({
      type: UPDATE_CHAT_ITEMS,
      chatItems: updatedChatItems,
      replyItems: updatedReplyItems,
      repliesTo: state.repliesTo,
      highlightMessage: {},
      searchText: state.searchText
    });
  }; // cancel message handler to hide edit box in main comment box and reply box section


  var handleCancelEditMessage = function handleCancelEditMessage(messageId) {
    var updatedReplyItems = [];
    var updatedChatItems = state.chatItems;

    if (state.repliesTo !== '') {
      updatedReplyItems = state.replyItems.map(function (replyItem) {
        return replyItem.messageId === messageId ? _objectSpread2(_objectSpread2({}, replyItem), {}, {
          isEditing: false
        }) : replyItem;
      });
    } else {
      updatedChatItems = updatedChatItems.map(function (chatItem) {
        return chatItem.messageId === messageId ? _objectSpread2(_objectSpread2({}, chatItem), {}, {
          isEditing: false
        }) : chatItem;
      });
    }

    dispatch({
      type: UPDATE_CHAT_ITEMS,
      chatItems: updatedChatItems,
      replyItems: updatedReplyItems,
      repliesTo: state.repliesTo,
      highlightMessage: {},
      searchText: state.searchText
    });
  }; // save message handler to save edit messages in main comment box and reply box section


  var handleSaveEditMessage = function handleSaveEditMessage(messageId, message) {
    if (state.repliesTo !== '') {
      var updatedReplyItem = state.replyItems.find(function (replyItem) {
        return replyItem.messageId === messageId;
      });
      messageAction.editMessage(message, updatedReplyItem.attachments, messageId, updatedReplyItem.taggedUsers);
    } else {
      var updatedChatItem = state.chatItems.find(function (chatItem) {
        return chatItem.messageId === messageId;
      });
      messageAction.editMessage(message, updatedChatItem.attachments, messageId, updatedChatItem.taggedUsers);
    }
  }; // delete message handler to delete messages


  var handleTapDeleteMessage = function handleTapDeleteMessage(messageId, reference) {
    messageAction.removeMessage(messageId, function () {
      onDeleteMessageRef({
        messageId: messageId,
        reference: reference
      });
    });
  };

  var addAttachment = function addAttachment(file) {
    messageAction.addAttachment(file);
  };

  var deleteAttachment = function deleteAttachment(file) {
    messageAction.deleteAttachment(file);
  };

  var cancelAttachmentUpload = function cancelAttachmentUpload(file) {
    messageAction.cancelAttachmentUpload(file);
  };

  var okHandler = function okHandler() {
    setCommentBoxChangeConfirmationVisible(false);
    var rooms = state.rooms,
        room = state.room;

    if (targetRoomId !== room.id) {
      room.source.cancel('get messages canceled');
      var targetRoom = rooms.find(function (room) {
        return room.id === targetRoomId;
      });
      dispatch({
        type: CHANGE_ROOM,
        loading: true,
        room: targetRoom,
        roomId: targetRoomId,
        pins: targetRoom.pins
      });
    }
  };

  var cancelHandler = function cancelHandler() {
    setCommentBoxChangeConfirmationVisible(false);
  }; // change room in state to room with room id in method argument


  var onRoomChange = function onRoomChange(event) {
    var rooms = state.rooms,
        room = state.room;

    if (room && room.app.ref && room.app.ref.name && room.app.ref.name.toLowerCase().includes('internal')) {
      var currentTargetRoomId = event.target.value;
      var targetRoom = rooms.find(function (room) {
        return room.id === currentTargetRoomId;
      });
      var targetRoomName = targetRoom && targetRoom.app.ref && targetRoom.app.ref.name;
      setCommentBoxChangeName(roomLabelModifier[targetRoomName.toUpperCase()] ? Utils.convertToCapitalCase(roomLabelModifier[targetRoomName.toUpperCase()]) : ExternalRoomName);
      setCommentBoxChangeConfirmationVisible(true);
      setTargetRoomId(event.target.value);
    } else {
      var _currentTargetRoomId = event.target.value;

      if (_currentTargetRoomId !== room.id) {
        // cancel existing getMessages request
        room.source.cancel('get messages canceled');

        var _targetRoom = rooms.find(function (room) {
          return room.id === _currentTargetRoomId;
        });

        dispatch({
          type: CHANGE_ROOM,
          loading: true,
          room: _targetRoom,
          roomId: _currentTargetRoomId,
          pins: _targetRoom.pins
        });
      }
    }
  }; // handle tap replies


  var handleTapReplyMessage = function handleTapReplyMessage(messageId) {
    var highlightReply = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var chatItem = state.chatItems.find(function (chatItem) {
      return chatItem.messageId === messageId;
    });

    if (chatItem) {
      var updatedReplyItems = [chatItem].concat(_toConsumableArray(chatItem.replyItems.sort(function (a, b) {
        return a.createdAt - b.createdAt;
      })));
      dispatch({
        type: UPDATE_CHAT_ITEMS,
        chatItems: state.chatItems,
        replyItems: updatedReplyItems,
        repliesTo: messageId,
        highlightMessage: highlightReply ? state.highlightMessage : {},
        searchText: ''
      });
      var event = new CustomEvent("open-replies", {
        detail: {
          chatHeader: 'Comment Replies'
        },
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(event);
    }
  }; // handle cancel replies


  var handleCancelReply = function handleCancelReply() {
    dispatch({
      type: UPDATE_CHAT_ITEMS,
      chatItems: state.chatItems,
      replyItems: [],
      repliesTo: '',
      highlightMessage: {}
    });
    dispatch({
      type: GET_MESSAGES,
      loading: true,
      pageNum: 0,
      searchText: '',
      chatItems: [],
      highlightMessage: {},
      fetchedPages: {}
    }); // dispatch event for replies close 

    var event = new CustomEvent("close-replies", {
      detail: {
        chatHeader: 'Comments'
      },
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(event);

    if (chatItem) {
      var updatedReplyItems = [chatItem].concat(_toConsumableArray(chatItem.replyItems.sort(function (a, b) {
        return a.createdAt - b.createdAt;
      })));
      dispatch({
        type: UPDATE_CHAT_ITEMS,
        chatItems: state.chatItems,
        replyItems: updatedReplyItems,
        repliesTo: messageId,
        highlightMessage: highlightReply ? state.highlightMessage : {},
        searchText: ''
      });
    }
  }; // handle tap pin


  var onTapPin = function onTapPin(messageId) {
    var message = state.chatItems.find(function (item) {
      return item.messageId === messageId;
    });

    if (message) {
      message.createdAt = "".concat(getDate(message.createdAt), " ").concat(getTime(message.createdAt));
      var event = new CustomEvent("pin-clicked", {
        detail: {
          message: message
        },
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(event);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ChatBox //state
  , {
    chatItems: state.chatItems,
    replyItems: state.replyItems,
    loading: state.loading,
    roomLabelModifier: roomLabelModifier,
    attachments: state.chatInput.attachments,
    errorMessage: state.errorMessage,
    rooms: state.rooms,
    users: state.room && state.room.users || [],
    currentRoom: state.room,
    chatType: state.repliesTo === '' ? ChatTypes.COMMENT : ChatTypes.REPLY,
    isCreating: state.isCreating,
    isEditLoading: state.isEditLoading,
    isDeleteLoading: state.isDeleteLoading,
    userId: userId // user who is logged in
    ,
    pinItems: state.pins,
    userPermissions: state.userPermissions,
    highLightedMessage: state.highlightMessage,
    prevLoading: state.prevLoading,
    nextLoading: state.nextLoading,
    repliesTo: state.repliesTo,
    searchText: state.searchText,
    updateRefId: messageAction.updateRefId,
    versionOptions: versionOptions //actions
    ,
    onSubmit: handleSubmit,
    onSearch: handleSearch,
    onScrollFrame: handleScrollFrame,
    addAttachment: addAttachment,
    deleteAttachment: deleteAttachment,
    cancelAttachmentUpload: cancelAttachmentUpload,
    onRoomChange: onRoomChange,
    onTapPin: onTapPin,
    onTapEditMessage: handleTapEditMessage,
    onCancelEditMessage: handleCancelEditMessage,
    onSaveEditMessage: handleSaveEditMessage,
    onTapDeleteMessage: handleTapDeleteMessage,
    onTapReply: handleTapReplyMessage,
    onCancelReply: handleCancelReply,
    onCancelPopUp: messageAction.closePopup,
    configs: state.configs,
    headerComponent: headerComponent
  }), /*#__PURE__*/React.createElement(ConfirmationPopup, {
    visible: commentBoxChangeConfirmationVisible,
    title: ConfirmationPopUpTexts.TITLE,
    description: ConfirmationPopUpTexts.DESCRIPTION_FIRST_PART + commentBoxChangeName + ConfirmationPopUpTexts.DESCRIPTION_SECOND_PART,
    okText: ConfirmationPopUpTexts.YES,
    icon: alertSVG,
    cancelText: ConfirmationPopUpTexts.NO,
    okHandler: okHandler,
    cancelHandler: cancelHandler
  }));
};

ChatContainer.propTypes = {
  appId: propTypes.string.isRequired,
  onCreateMessageRef: propTypes.func,
  onMessagePinClickRef: propTypes.func,
  roomLabelModifier: propTypes.shape({}),
  onDeleteMessageRef: propTypes.func,
  refId: propTypes.string.isRequired,
  userId: propTypes.string.isRequired,
  reference: propTypes.shape({}),
  focusMessage: propTypes.shape({
    commendId: propTypes.string,
    replyId: propTypes.string
  })
};
ChatContainer.defaultProps = {
  onCreateMessageRef: function onCreateMessageRef() {},
  onMessagePinClickRef: function onMessagePinClickRef() {},
  onDeleteMessageRef: function onDeleteMessageRef() {},
  reference: {},
  roomLabelModifier: {},
  focusMessage: {}
};

var Chat = function Chat(_ref) {
  var appId = _ref.appId,
      refId = _ref.refId,
      userId = _ref.userId,
      authKey = _ref.authKey,
      reference = _ref.reference,
      onMessagePinClickRef = _ref.onMessagePinClickRef,
      onDeleteMessageRef = _ref.onDeleteMessageRef,
      onCreateMessageRef = _ref.onCreateMessageRef,
      focusMessage = _ref.focusMessage,
      roomLabelModifier = _ref.roomLabelModifier,
      versionOptions = _ref.versionOptions,
      headerComponent = _ref.headerComponent;
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(MessageContextProvider, null, /*#__PURE__*/React.createElement(ChatContainer, {
    appId: appId,
    refId: refId,
    userId: userId,
    authKey: authKey,
    reference: reference,
    onMessagePinClickRef: onMessagePinClickRef,
    onDeleteMessageRef: onDeleteMessageRef,
    onCreateMessageRef: onCreateMessageRef,
    focusMessage: focusMessage,
    roomLabelModifier: roomLabelModifier,
    versionOptions: versionOptions,
    headerComponent: headerComponent
  })));
};

export default Chat;
//# sourceMappingURL=chat.esm.js.map
