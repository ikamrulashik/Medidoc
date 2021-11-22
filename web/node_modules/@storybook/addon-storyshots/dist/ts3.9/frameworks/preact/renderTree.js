"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx h */
var preact_1 = require("preact");
var jsx_1 = __importDefault(require("preact-render-to-string/jsx"));
var boundRenderer = function (_storyElement, _rendererOptions) {
    return jsx_1.default(_storyElement, null, { pretty: '  ' });
};
function getRenderedTree(story, context, _a) {
    var renderer = _a.renderer, rendererOptions = __rest(_a, ["renderer"]);
    var currentRenderer = renderer || boundRenderer;
    var tree = currentRenderer(preact_1.h(story.render, null), rendererOptions);
    return tree;
}
exports.default = getRenderedTree;
