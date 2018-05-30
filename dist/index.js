"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var yaml_parse = __importStar(require("js-yaml"));
var fs = __importStar(require("fs"));
function convert(file) {
    return JSON.parse(JSON.stringify(file));
}
function makeForm(form_def) {
    var html = "<form action=\"" + form_def.meta.action + "\" target=\"" + form_def.meta.target + "\" method=\"" + form_def.meta.method + "\">\n";
    for (var _i = 0, _a = form_def.body; _i < _a.length; _i++) {
        var element = _a[_i];
        if (element.element.label) {
            html += "\t<label for=\"" + element.element.name + "\">" + element.element.name + "</label>\n";
        }
        html += "\t<" + element.element.tag + " type=\"" + element.element.type + "\" name=\"" + element.element.name + "\">\n";
    }
    html += "</form>\n";
    fs.writeFileSync('basic-form.html', html, {
        encoding: 'utf-8'
    });
}
try {
    var file = yaml_parse.safeLoad(fs.readFileSync('./basic-form.yaml', 'utf-8'));
    var form_def = convert(file);
    makeForm(form_def);
}
catch (error) {
    console.error(error);
}
