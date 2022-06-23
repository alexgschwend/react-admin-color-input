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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TextField from '@mui/material/TextField';
import get from 'lodash/get';
import { FieldTitle, useInput, useRecordContext } from 'ra-core';
import { useState } from 'react';
import * as ReactColor from 'react-color';
import './ColorInput.css';
export var ColorField = function (_a) {
    var source = _a.source, className = _a.className;
    var record = useRecordContext();
    return (_jsxs("div", __assign({ style: { display: 'flex' } }, { children: [_jsx("div", { style: {
                    width: '20px',
                    height: '20px',
                    background: get(record, source),
                    marginRight: '5px',
                } }), _jsx("span", __assign({ className: className }, { children: get(record, source) }))] })));
};
export var ColorInput = function (props) {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    var label = props.label, source = props.source, className = props.className, options = props.options, _b = props.picker, picker = _b === void 0 ? 'Chrome' : _b, resource = props.resource, helperText = props.helperText, validate = props.validate, _c = props.variant, variant = _c === void 0 ? 'standard' : _c;
    var _d = useInput(__assign(__assign({}, props), { validate: validate })), field = _d.field, _e = _d.fieldState, isTouched = _e.isTouched, error = _e.error, isRequired = _d.isRequired;
    var handleOpen = function () { return setShow(true); };
    var handleClose = function () { return setShow(false); };
    var handleChange = function (_a) {
        var hex = _a.hex;
        field.onChange(hex);
    };
    var Picker = ReactColor["".concat(picker, "Picker")];
    return (_jsxs("div", { children: [_jsx(TextField, __assign({}, field, { margin: "normal", variant: variant, onFocus: handleOpen, label: _jsx(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), error: !!(isTouched && error), helperText: helperText, className: className })), show ? (_jsxs("div", __assign({ className: "ColorInput-popup" }, { children: [_jsx("div", { className: "ColorInput-cover", onClick: handleClose }), _jsx(Picker, __assign({}, options, { color: field.value, onChange: handleChange }))] }))) : null] }));
};
