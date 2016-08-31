/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var registerPromiseWorker = __webpack_require__(188);
	
	registerPromiseWorker(function (message) {
	    var retorno = [{ id: 1, nome: 'Um simples OK' }, { id: 2, nome: 'Um simples status 200' }];
	
	    return retorno;
	});

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isPromise = __webpack_require__(189);
	
	function parseJsonSafely(str) {
	  try {
	    return JSON.parse(str);
	  } catch (e) {
	    return false;
	  }
	}
	
	function registerPromiseWorker(callback) {
	
	  function postOutgoingMessage(e, messageId, error, result) {
	    function postMessage(msg) {
	      /* istanbul ignore if */
	      if (typeof self.postMessage !== 'function') {
	        // service worker
	        e.ports[0].postMessage(msg);
	      } else {
	        // web worker
	        self.postMessage(msg);
	      }
	    }
	    if (error) {
	      /* istanbul ignore else */
	      if (typeof console !== 'undefined' && 'error' in console) {
	        // This is to make errors easier to debug. I think it's important
	        // enough to just leave here without giving the user an option
	        // to silence it.
	        console.error('Worker caught an error:', error);
	      }
	      postMessage(JSON.stringify([messageId, {
	        message: error.message
	      }]));
	    } else {
	      postMessage(JSON.stringify([messageId, null, result]));
	    }
	  }
	
	  function tryCatchFunc(callback, message) {
	    try {
	      return { res: callback(message) };
	    } catch (e) {
	      return { err: e };
	    }
	  }
	
	  function handleIncomingMessage(e, callback, messageId, message) {
	
	    var result = tryCatchFunc(callback, message);
	
	    if (result.err) {
	      postOutgoingMessage(e, messageId, result.err);
	    } else if (!isPromise(result.res)) {
	      postOutgoingMessage(e, messageId, null, result.res);
	    } else {
	      result.res.then(function (finalResult) {
	        postOutgoingMessage(e, messageId, null, finalResult);
	      }, function (finalError) {
	        postOutgoingMessage(e, messageId, finalError);
	      });
	    }
	  }
	
	  function onIncomingMessage(e) {
	    var payload = parseJsonSafely(e.data);
	    if (!payload) {
	      // message isn't stringified json; ignore
	      return;
	    }
	    var messageId = payload[0];
	    var message = payload[1];
	
	    if (typeof callback !== 'function') {
	      postOutgoingMessage(e, messageId, new Error('Please pass a function into register().'));
	    } else {
	      handleIncomingMessage(e, callback, messageId, message);
	    }
	  }
	
	  self.addEventListener('message', onIncomingMessage);
	}
	
	module.exports = registerPromiseWorker;

/***/ },

/***/ 189:
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	module.exports = isPromise;
	
	function isPromise(obj) {
	  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}

/***/ }

/******/ });
//# sourceMappingURL=ApplicationWorker.js.map