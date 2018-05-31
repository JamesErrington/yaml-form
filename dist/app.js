/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import * as fs from 'fs';
// import * as yamlParse from 'js-yaml';
/*

interface IFormSchema {
  form : {
    form_meta : string[]
  };
}

interface IConfig {
  required : {
    form : {
      [action : string] : boolean
      method : boolean
    };
  };
}

interface IFormMeta {
  [accept_charset : string] : string
  action : string
  autocomplete : string
  enctype : string
  method : string
  name : string
  novalidate : string
  target : string
}

interface IFormDef {
  form : {
    form_meta: IFormMeta;
  };
}

function getSchema(path : string) : IFormSchema {
  const file = yamlParse.safeLoad(fs.readFileSync(path, 'utf-8'));
  return convertToSchema(file);
}

function getConfig(path : string) : IConfig {
  const file = yamlParse.safeLoad(fs.readFileSync(path, 'utf-8'));
  return convertToConfig(file);
}

function getFormDef(path : string) : IFormDef {
  const file = yamlParse.safeLoad(fs.readFileSync(path, 'utf-8'));
  return convertToFormDef(file);
}

function convertToFormDef(file : yamlParse.DocumentLoadResult) : IFormDef {
  return JSON.parse(JSON.stringify(file));
}

function convertToConfig(file : yamlParse.DocumentLoadResult) : IConfig {
  return JSON.parse(JSON.stringify(file));
}

function convertToSchema(file : yamlParse.DocumentLoadResult) : IFormSchema {
  return JSON.parse(JSON.stringify(file));
}

function writeHTML(html : string) : void {
  fs.writeFileSync('basic-form.html', html, {
    encoding: 'utf-8'
  });
}

function makeMeta(meta_schema : string[], meta_def : IFormMeta) : string {
  let string = '';
  for(const attribute of meta_schema) {
    const value = meta_def[attribute];
    if(value) {
      string += ` ${attribute.replace('_', '-')}="${value}"`;
    } else if(config.required.form[attribute]) {
      console.error(`Undefined required attribute '${attribute}'`);
    }
  }
  return string;
}

function makeForm(form_def : IFormDef) : void {
  const metaString = makeMeta(schema.form.form_meta, form_def.form.form_meta);
  const html = `<form${metaString}>\n\n</form>`;
  console.log(html);
  writeHTML(html);
}

const schema = getSchema('./schema/formschema.yaml');

const config = getConfig('./yamlform.config.yaml');

const formDef = getFormDef('./basic-form.yaml');

makeForm(formDef);
*/


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCLElBQUksTUFBTTtBQUMxRCxLQUFLO0FBQ0wscURBQXFELFVBQVU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLy8gaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG4vLyBpbXBvcnQgKiBhcyB5YW1sUGFyc2UgZnJvbSAnanMteWFtbCc7XHJcbi8qXHJcblxyXG5pbnRlcmZhY2UgSUZvcm1TY2hlbWEge1xyXG4gIGZvcm0gOiB7XHJcbiAgICBmb3JtX21ldGEgOiBzdHJpbmdbXVxyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJQ29uZmlnIHtcclxuICByZXF1aXJlZCA6IHtcclxuICAgIGZvcm0gOiB7XHJcbiAgICAgIFthY3Rpb24gOiBzdHJpbmddIDogYm9vbGVhblxyXG4gICAgICBtZXRob2QgOiBib29sZWFuXHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJRm9ybU1ldGEge1xyXG4gIFthY2NlcHRfY2hhcnNldCA6IHN0cmluZ10gOiBzdHJpbmdcclxuICBhY3Rpb24gOiBzdHJpbmdcclxuICBhdXRvY29tcGxldGUgOiBzdHJpbmdcclxuICBlbmN0eXBlIDogc3RyaW5nXHJcbiAgbWV0aG9kIDogc3RyaW5nXHJcbiAgbmFtZSA6IHN0cmluZ1xyXG4gIG5vdmFsaWRhdGUgOiBzdHJpbmdcclxuICB0YXJnZXQgOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIElGb3JtRGVmIHtcclxuICBmb3JtIDoge1xyXG4gICAgZm9ybV9tZXRhOiBJRm9ybU1ldGE7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2NoZW1hKHBhdGggOiBzdHJpbmcpIDogSUZvcm1TY2hlbWEge1xyXG4gIGNvbnN0IGZpbGUgPSB5YW1sUGFyc2Uuc2FmZUxvYWQoZnMucmVhZEZpbGVTeW5jKHBhdGgsICd1dGYtOCcpKTtcclxuICByZXR1cm4gY29udmVydFRvU2NoZW1hKGZpbGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb25maWcocGF0aCA6IHN0cmluZykgOiBJQ29uZmlnIHtcclxuICBjb25zdCBmaWxlID0geWFtbFBhcnNlLnNhZmVMb2FkKGZzLnJlYWRGaWxlU3luYyhwYXRoLCAndXRmLTgnKSk7XHJcbiAgcmV0dXJuIGNvbnZlcnRUb0NvbmZpZyhmaWxlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybURlZihwYXRoIDogc3RyaW5nKSA6IElGb3JtRGVmIHtcclxuICBjb25zdCBmaWxlID0geWFtbFBhcnNlLnNhZmVMb2FkKGZzLnJlYWRGaWxlU3luYyhwYXRoLCAndXRmLTgnKSk7XHJcbiAgcmV0dXJuIGNvbnZlcnRUb0Zvcm1EZWYoZmlsZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb0Zvcm1EZWYoZmlsZSA6IHlhbWxQYXJzZS5Eb2N1bWVudExvYWRSZXN1bHQpIDogSUZvcm1EZWYge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpbGUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvQ29uZmlnKGZpbGUgOiB5YW1sUGFyc2UuRG9jdW1lbnRMb2FkUmVzdWx0KSA6IElDb25maWcge1xyXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpbGUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvU2NoZW1hKGZpbGUgOiB5YW1sUGFyc2UuRG9jdW1lbnRMb2FkUmVzdWx0KSA6IElGb3JtU2NoZW1hIHtcclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmaWxlKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlSFRNTChodG1sIDogc3RyaW5nKSA6IHZvaWQge1xyXG4gIGZzLndyaXRlRmlsZVN5bmMoJ2Jhc2ljLWZvcm0uaHRtbCcsIGh0bWwsIHtcclxuICAgIGVuY29kaW5nOiAndXRmLTgnXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VNZXRhKG1ldGFfc2NoZW1hIDogc3RyaW5nW10sIG1ldGFfZGVmIDogSUZvcm1NZXRhKSA6IHN0cmluZyB7XHJcbiAgbGV0IHN0cmluZyA9ICcnO1xyXG4gIGZvcihjb25zdCBhdHRyaWJ1dGUgb2YgbWV0YV9zY2hlbWEpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gbWV0YV9kZWZbYXR0cmlidXRlXTtcclxuICAgIGlmKHZhbHVlKSB7XHJcbiAgICAgIHN0cmluZyArPSBgICR7YXR0cmlidXRlLnJlcGxhY2UoJ18nLCAnLScpfT1cIiR7dmFsdWV9XCJgO1xyXG4gICAgfSBlbHNlIGlmKGNvbmZpZy5yZXF1aXJlZC5mb3JtW2F0dHJpYnV0ZV0pIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgVW5kZWZpbmVkIHJlcXVpcmVkIGF0dHJpYnV0ZSAnJHthdHRyaWJ1dGV9J2ApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlRm9ybShmb3JtX2RlZiA6IElGb3JtRGVmKSA6IHZvaWQge1xyXG4gIGNvbnN0IG1ldGFTdHJpbmcgPSBtYWtlTWV0YShzY2hlbWEuZm9ybS5mb3JtX21ldGEsIGZvcm1fZGVmLmZvcm0uZm9ybV9tZXRhKTtcclxuICBjb25zdCBodG1sID0gYDxmb3JtJHttZXRhU3RyaW5nfT5cXG5cXG48L2Zvcm0+YDtcclxuICBjb25zb2xlLmxvZyhodG1sKTtcclxuICB3cml0ZUhUTUwoaHRtbCk7XHJcbn1cclxuXHJcbmNvbnN0IHNjaGVtYSA9IGdldFNjaGVtYSgnLi9zY2hlbWEvZm9ybXNjaGVtYS55YW1sJyk7XHJcblxyXG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoJy4veWFtbGZvcm0uY29uZmlnLnlhbWwnKTtcclxuXHJcbmNvbnN0IGZvcm1EZWYgPSBnZXRGb3JtRGVmKCcuL2Jhc2ljLWZvcm0ueWFtbCcpO1xyXG5cclxubWFrZUZvcm0oZm9ybURlZik7XHJcbiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=