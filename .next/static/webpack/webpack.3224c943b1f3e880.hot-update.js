"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("webpack",{},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/async module */
/******/ !function() {
/******/ 	var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 	var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 	var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 	var resolveQueue = function(queue) {
/******/ 		if(queue && queue.d < 1) {
/******/ 			queue.d = 1;
/******/ 			queue.forEach(function(fn) { fn.r--; });
/******/ 			queue.forEach(function(fn) { fn.r-- ? fn.r++ : fn(); });
/******/ 		}
/******/ 	}
/******/ 	var wrapDeps = function(deps) { return deps.map(function(dep) {
/******/ 		if(dep !== null && typeof dep === "object") {
/******/ 			if(dep[webpackQueues]) return dep;
/******/ 			if(dep.then) {
/******/ 				var queue = [];
/******/ 				queue.d = 0;
/******/ 				dep.then(function(r) {
/******/ 					obj[webpackExports] = r;
/******/ 					resolveQueue(queue);
/******/ 				}, function(e) {
/******/ 					obj[webpackError] = e;
/******/ 					resolveQueue(queue);
/******/ 				});
/******/ 				var obj = {};
/******/ 				obj[webpackQueues] = function(fn) { fn(queue); };
/******/ 				return obj;
/******/ 			}
/******/ 		}
/******/ 		var ret = {};
/******/ 		ret[webpackQueues] = function() {};
/******/ 		ret[webpackExports] = dep;
/******/ 		return ret;
/******/ 	}); };
/******/ 	__webpack_require__.a = function(module, body, hasAwait) {
/******/ 		var queue;
/******/ 		hasAwait && ((queue = []).d = -1);
/******/ 		var depQueues = new Set();
/******/ 		var exports = module.exports;
/******/ 		var currentDeps;
/******/ 		var outerResolve;
/******/ 		var reject;
/******/ 		var promise = new Promise(function(resolve, rej) {
/******/ 			reject = rej;
/******/ 			outerResolve = resolve;
/******/ 		});
/******/ 		promise[webpackExports] = exports;
/******/ 		promise[webpackQueues] = function(fn) { queue && fn(queue), depQueues.forEach(fn), promise["catch"](function() {}); };
/******/ 		module.exports = promise;
/******/ 		body(function(deps) {
/******/ 			currentDeps = wrapDeps(deps);
/******/ 			var fn;
/******/ 			var getResult = function() { return currentDeps.map(function(d) {
/******/ 				if(d[webpackError]) throw d[webpackError];
/******/ 				return d[webpackExports];
/******/ 			}); }
/******/ 			var promise = new Promise(function(resolve) {
/******/ 				fn = function() { resolve(getResult); };
/******/ 				fn.r = 0;
/******/ 				var fnQueue = function(q) { q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))); };
/******/ 				currentDeps.map(function(dep) { dep[webpackQueues](fnQueue); });
/******/ 			});
/******/ 			return fn.r ? promise : getResult();
/******/ 		}, function(err) { (err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue); });
/******/ 		queue && queue.d < 0 && (queue.d = 0);
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "708326e99ee0a859"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/harmony module decorator */
/******/ !function() {
/******/ 	__webpack_require__.hmd = function(module) {
/******/ 		module = Object.create(module);
/******/ 		if (!module.children) module.children = [];
/******/ 		Object.defineProperty(module, 'exports', {
/******/ 			enumerable: true,
/******/ 			set: function() {
/******/ 				throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 			}
/******/ 		});
/******/ 		return module;
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/relative url */
/******/ !function() {
/******/ 	__webpack_require__.U = function RelativeURL(url) {
/******/ 		var realUrl = new URL(url, "x:/");
/******/ 		var values = {};
/******/ 		for (var key in realUrl) values[key] = realUrl[key];
/******/ 		values.href = url;
/******/ 		values.pathname = url.replace(/[?#].*/, "");
/******/ 		values.origin = values.protocol = "";
/******/ 		values.toString = values.toJSON = function() { return url; };
/******/ 		for (var key in values) Object.defineProperty(this, key, { enumerable: true, configurable: true, value: values[key] });
/******/ 	};
/******/ 	__webpack_require__.U.prototype = URL.prototype;
/******/ }();
/******/ 
/******/ /* webpack/runtime/wasm loading */
/******/ !function() {
/******/ 	__webpack_require__.v = function(exports, wasmModuleId, wasmModuleHash, importsObj) {
/******/ 		var req = fetch(__webpack_require__.p + "static/wasm/" + wasmModuleHash + ".wasm");
/******/ 		if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 			return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 				.then(function(res) { return Object.assign(exports, res.instance.exports); });
/******/ 		}
/******/ 		return req
/******/ 			.then(function(x) { return x.arrayBuffer(); })
/******/ 			.then(function(bytes) { return WebAssembly.instantiate(bytes, importsObj); })
/******/ 			.then(function(res) { return Object.assign(exports, res.instance.exports); });
/******/ 	};
/******/ }();
/******/ 
/******/ }
);