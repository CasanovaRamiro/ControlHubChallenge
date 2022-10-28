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
const axios_1 = __importDefault(require("axios"));
// this function gets the Data from All pages of the RickAndMorty API
const fetchData = (link) => __awaiter(void 0, void 0, void 0, function* () {
    let { data } = yield axios_1.default.get(link);
    let promiseArr = [];
    while (data.info.pages > 0) {
        promiseArr.push(axios_1.default.get(`${link}?page=${data.info.pages}`));
        data.info.pages--;
    }
    try {
        const allData = yield Promise.all(promiseArr);
        const parsedData = allData.map((e) => e.data.results);
        return Array.prototype.concat.apply([], parsedData);
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.default = fetchData;
