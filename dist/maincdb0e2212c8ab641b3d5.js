/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/articlesService.js":
/*!********************************!*\
  !*** ./src/articlesService.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAllArticles: () => (/* binding */ fetchAllArticles),\n/* harmony export */   fetchPostById: () => (/* binding */ fetchPostById)\n/* harmony export */ });\n\r\nfunction fetchAllArticles(limit = 10){\r\n  return fetch(`https://dummyjson.com/posts?limit=${limit}`)\r\n  .then((response)=> response.json())\r\n  .then((data) =>  data.posts)\r\n}\r\n\r\n\r\n\r\nfunction fetchPostById(Id) {\r\n  return fetch(`https://dummyjson.com/posts/${Id}`)\r\n    .then((response) => response.json())\r\n    .then((post) =>  post);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://html-css-master/./src/articlesService.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   articleSection: () => (/* binding */ articleSection)\n/* harmony export */ });\n/* harmony import */ var _articlesService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articlesService.js */ \"./src/articlesService.js\");\n\r\n\r\nlet allArticles = document.getElementById(\"allarticles\");\r\nlet contacts = document.getElementById(\"contacts\");\r\n\r\n\r\n\r\nconst articles = await (0,_articlesService_js__WEBPACK_IMPORTED_MODULE_0__.fetchAllArticles)();\r\n\r\n  allArticles.querySelector(\"a\").textContent = `Все статьи  (${articles.length})`;\r\n\r\n\r\n\r\nlet articleSection = document.querySelector(\".article_section\")\r\n\r\n\r\nlet scrollIntoElement = (el) => {\r\n  el.scrollIntoView ({behavior: \"smooth\"})\r\n};\r\nallArticles.addEventListener(\"click\" , (e)=>{\r\n  e.preventDefault();\r\n  scrollIntoElement(articleSection)\r\n});\r\n\r\nlet contactsSection = document.querySelector(\".contacts\")\r\ncontacts.addEventListener(\"click\" , (e)=>{\r\n  e.preventDefault();\r\n  scrollIntoElement(contactsSection)\r\n});\r\n\r\nfunction displayArticles(articles) {\r\n\r\n  articleSection.innerHTML = \"\";\r\n  let header = document.createElement(\"h2\");\r\n  header.textContent = \"Статьи\";\r\n  articleSection.append(header);\r\n  \r\nlet articleElements = articles.map((article) =>{\r\n  let { title, body, id } = article;\r\n  \r\n  let articleCard = document.createElement(\"article\");\r\n  articleCard.className = \"section_element\";\r\n\r\n  let titles = document.createElement(\"h2\");\r\n  titles.textContent = title;\r\n  articleCard.append(titles)\r\n\r\n  let paragraph = document.createElement(\"p\");\r\n  paragraph.textContent = body.substring(0, 100) + '....';\r\n  articleCard.append(paragraph);\r\n\r\n  let linkbt = document.createElement(\"a\");\r\n  linkbt.setAttribute(\"href\", `article.html?articleId=${id}`);\r\n  linkbt.textContent = \"Читать далее\";\r\n  articleCard.append(linkbt);\r\n  return articleCard;\r\n  });\r\n \r\n  articleSection.append(...articleElements);\r\n\r\n  let button = document.createElement(\"button\");\r\n  button.addEventListener(\"click\", nextArticlesList);\r\n  button.textContent = \"Далее\";\r\n  articleSection.append(button);\r\n  \r\n}\r\n\r\n\r\n\r\n  displayArticles(articles);\r\n\r\nlet skipArticles = 10;\r\nasync function nextArticlesList() {\r\n  let response = await fetch(`https://dummyjson.com/posts?limit=10&skip=${skipArticles}`\r\n  ).then((res) => res.json());\r\n  console.log(response);\r\n  displayArticles(response.posts);\r\n  skipArticles += 10;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://html-css-master/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;