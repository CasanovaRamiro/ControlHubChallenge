"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData_1 = __importDefault(require("./fetchData"));
// this function gets the Data from the RickAndMorty API
// then it separates the names and adds them to an array of strings
// then all strings are concatenated and and then we return the number of
// occurrences of the char we received
// First parameter is the Api Link and the second parameter is the character we want to count
const getCharCount = (apiLink, char) => __awaiter(void 0, void 0, void 0, function* () {
    const dataNames = yield (0, fetchData_1.default)(apiLink);
    const linkDataNames = dataNames === null || dataNames === void 0 ? void 0 : dataNames.map((e) => e.name.toLowerCase());
    if (linkDataNames) {
        return linkDataNames.toString().split(char).length - 1;
    }
    else {
        return null;
    }
});
module.exports = {
    getCharCount,
};
