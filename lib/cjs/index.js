"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorInput = exports.ColorField = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var get_1 = __importDefault(require("lodash/get"));
var ra_core_1 = require("ra-core");
var react_1 = require("react");
var ReactColor = __importStar(require("react-color"));
require("./ColorInput.css");
var ColorField = function (_a) {
    var source = _a.source, className = _a.className;
    var record = (0, ra_core_1.useRecordContext)();
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ style: { display: 'flex' } }, { children: [(0, jsx_runtime_1.jsx)("div", { style: {
                    width: '20px',
                    height: '20px',
                    background: (0, get_1.default)(record, source),
                    marginRight: '5px',
                } }), (0, jsx_runtime_1.jsx)("span", __assign({ className: className }, { children: (0, get_1.default)(record, source) }))] })));
};
exports.ColorField = ColorField;
var ColorInput = function (props) {
    var _a = (0, react_1.useState)(false), show = _a[0], setShow = _a[1];
    var label = props.label, source = props.source, className = props.className, options = props.options, _b = props.picker, picker = _b === void 0 ? 'Chrome' : _b, resource = props.resource, helperText = props.helperText, validate = props.validate, _c = props.variant, variant = _c === void 0 ? 'standard' : _c;
    var _d = (0, ra_core_1.useInput)(__assign(__assign({}, props), { validate: validate })), field = _d.field, _e = _d.fieldState, isTouched = _e.isTouched, error = _e.error, isRequired = _d.isRequired;
    var handleOpen = function () { return setShow(true); };
    var handleClose = function () { return setShow(false); };
    var handleChange = function (_a) {
        var hex = _a.hex;
        field.onChange(hex);
    };
    var Picker = ReactColor["".concat(picker, "Picker")];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, field, { margin: "normal", variant: variant, onFocus: handleOpen, label: (0, jsx_runtime_1.jsx)(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), error: !!(isTouched && error), helperText: helperText, className: className })), show ? ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "ColorInput-popup" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "ColorInput-cover", onClick: handleClose }), (0, jsx_runtime_1.jsx)(Picker, __assign({}, options, { color: field.value, onChange: handleChange }))] }))) : null] }));
};
exports.ColorInput = ColorInput;
