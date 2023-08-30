"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const port = 5000;
const hostname = 'http://127.0.0.1';
index_1.default.listen(port, () => {
    console.log(`Server running on ${hostname}:${port}`);
});
//# sourceMappingURL=server.js.map