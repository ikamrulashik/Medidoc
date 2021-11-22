"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __importDefault(require("global"));
var document = global_1.default.document, Node = global_1.default.Node;
function getRenderedTree(story) {
    var component = story.render();
    if (component instanceof Node) {
        return component;
    }
    var section = document.createElement('section');
    section.innerHTML = component;
    if (section.childElementCount > 1) {
        return section;
    }
    return section.firstChild;
}
exports.default = getRenderedTree;
