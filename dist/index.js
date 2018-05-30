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
function getSchema(path) {
    var file = yaml_parse.safeLoad(fs.readFileSync(path, 'utf-8'));
    return convertToSchema(file);
}
function getConfig(path) {
    var file = yaml_parse.safeLoad(fs.readFileSync(path, 'utf-8'));
    return convertToConfig(file);
}
function getFormDef(path) {
    var file = yaml_parse.safeLoad(fs.readFileSync(path, 'utf-8'));
    return convertToFormDef(file);
}
function convertToFormDef(file) {
    return JSON.parse(JSON.stringify(file));
}
function convertToConfig(file) {
    return JSON.parse(JSON.stringify(file));
}
function convertToSchema(file) {
    return JSON.parse(JSON.stringify(file));
}
function writeHTML(html) {
    fs.writeFileSync('basic-form.html', html, {
        encoding: 'utf-8'
    });
}
function makeMeta(meta_schema, meta_def) {
    var string = '';
    for (var _i = 0, meta_schema_1 = meta_schema; _i < meta_schema_1.length; _i++) {
        var attribute = meta_schema_1[_i];
        var value = meta_def[attribute];
        if (value) {
            string += " " + attribute.replace('_', '-') + "=\"" + value + "\"";
        }
        else if (config.required.form[attribute]) {
            console.error("Undefined required attribute '" + attribute + "'");
        }
    }
    return string;
}
function makeForm(form_def) {
    var metaString = makeMeta(schema.form.form_meta, form_def.form.form_meta);
    var html = "<form" + metaString + ">\n\n</form>";
    writeHTML(html);
}
var schema = getSchema('formschema.yaml');
var config = getConfig('./yamlform.config.yaml');
var formDef = getFormDef('./basic-form.yaml');
makeForm(formDef);
