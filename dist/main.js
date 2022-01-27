/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// this file will deal with the project items, which will include an array of todo items

class Project{
    constructor(title){
        this.title = title;
        this.todos = [];
    }

    setTitle(title){
        this.title = title;
    }
    getTitle(){
        return this.title;
    }

    getTodos(){
        return this.todos;
    }
    addTodo(todo){
        this.todos.push(todo);
    }
    deleteTodo(todo){
        // deletes todo from the array
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
// this file will deal with the todo items

class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

     setTitle(title){
        this.title = title;
    }
     getTitle(){
        return this.title;
    }

     setDescription(description){
        this.description = description;
    }
     getDescription(){
        return this.description;
    }

     setDueDate(dueDate){
        this.dueDate = dueDate;
    }
     getDueDate(){
        return this.dueDate;
    }

     setPriority(priority){
        this.priority = priority;
    }
     getPriority(){
        return this.priority;
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



const add_project_button = document.getElementById('new_project_button');
const add_project_modal = document.getElementById('project_modal');
const add_project_form = document.getElementById('project_name_input');
const add_project = document.getElementById('addProject');

let projectList = [];

add_project_button.addEventListener('click', () => {
    add_project_modal.style.display = 'block';
})

add_project.addEventListener('click', () => {
    console.log('test');
    let a = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](add_project_form.value);
    projectList.push(a);
    add_project_modal.style.display = 'none';
})

window.onclick = function(event){
    if(event.target == add_project_modal)
        add_project_modal.style.display = 'none';
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ2Qjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUNIOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsZ0JBQWdCLGdEQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgZmlsZSB3aWxsIGRlYWwgd2l0aCB0aGUgcHJvamVjdCBpdGVtcywgd2hpY2ggd2lsbCBpbmNsdWRlIGFuIGFycmF5IG9mIHRvZG8gaXRlbXNcblxuY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBnZXRUaXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBnZXRUb2Rvcygpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcbiAgICB9XG4gICAgYWRkVG9kbyh0b2RvKXtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICBkZWxldGVUb2RvKHRvZG8pe1xuICAgICAgICAvLyBkZWxldGVzIHRvZG8gZnJvbSB0aGUgYXJyYXlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCIvLyB0aGlzIGZpbGUgd2lsbCBkZWFsIHdpdGggdGhlIHRvZG8gaXRlbXNcblxuZXhwb3J0IGNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgIHNldFRpdGxlKHRpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICAgZ2V0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKXtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICAgZ2V0RGVzY3JpcHRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgIHNldER1ZURhdGUoZHVlRGF0ZSl7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgICBnZXREdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgIHNldFByaW9yaXR5KHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgICAgZ2V0UHJpb3JpdHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnXG5cbmNvbnN0IGFkZF9wcm9qZWN0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdfcHJvamVjdF9idXR0b24nKTtcbmNvbnN0IGFkZF9wcm9qZWN0X21vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbW9kYWwnKTtcbmNvbnN0IGFkZF9wcm9qZWN0X2Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lX2lucHV0Jyk7XG5jb25zdCBhZGRfcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG5cbmxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5hZGRfcHJvamVjdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkX3Byb2plY3RfbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59KVxuXG5hZGRfcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgIGxldCBhID0gbmV3IFByb2plY3QoYWRkX3Byb2plY3RfZm9ybS52YWx1ZSk7XG4gICAgcHJvamVjdExpc3QucHVzaChhKTtcbiAgICBhZGRfcHJvamVjdF9tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSlcblxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgaWYoZXZlbnQudGFyZ2V0ID09IGFkZF9wcm9qZWN0X21vZGFsKVxuICAgICAgICBhZGRfcHJvamVjdF9tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9