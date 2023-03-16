"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPage = void 0;
var react_1 = __importDefault(require("react"));
var _ui_kit_1 = require("../../../../ui-kit/dist/web");
function MainPage() {
    return (react_1.default.createElement(_ui_kit_1.Col, null,
        react_1.default.createElement(_ui_kit_1.Text, { fontSize: _ui_kit_1.FontSize.T3, fontWeight: _ui_kit_1.FontWeight.Bold }, "Hello, World!"),
        react_1.default.createElement(_ui_kit_1.Row, null,
            react_1.default.createElement(_ui_kit_1.Button, { variant: _ui_kit_1.ButtonVariant.Secondary, text: "No", onPress: function () { return console.log('No pressed'); } }),
            react_1.default.createElement(_ui_kit_1.Button, { variant: _ui_kit_1.ButtonVariant.Primary, text: "Yes", onPress: function () { return console.log('Yes pressed'); } }))));
}
exports.MainPage = MainPage;
//# sourceMappingURL=main-page.js.map