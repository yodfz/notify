(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["notify"] = factory();
	else
		root["notify"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var $eventList = {};
    return {
        /**
         * 订阅事件
         * @param $name 需要订阅的通知名
         * @param $fn 需要执行的通知方法
         */
        subscribe: function subscribe($name, $fn) {
            if (!$eventList.hasOwnProperty($name)) {
                $eventList[$name] = [];
            }
            var $fnName = (Math.random() + '').substr(2);
            $eventList[$name].push({ key: $fnName, fn: $fn });
            return $fnName;
        },

        /**
         * 通知
         * @param $name
         */
        notify: function notify($name, $data) {
            var notifyItem = $eventList[$name];
            if (notifyItem) {
                notifyItem.forEach(function (item) {
                    try {
                        item.fn($data ? $data : null);
                    } catch (err) {
                        console.error(err);
                    }
                });
            }
        },

        /**
         * 移除
         */
        removeById: function removeById($id) {
            Object.keys($eventList).forEach(function (key) {
                var $index = -1;
                $eventList[key].forEach(function (fn, index) {
                    if (fn.key === $id) {
                        $index = index;
                    }
                });
                if ($index !== -1) {
                    $eventList[key].splice($index, 1);
                }
            });
        },

        /**
         * 移除
         */
        removeByName: function removeByName($name) {
            delete $eventList[$name];
        }
    };
};

/***/ })
/******/ ]);
});