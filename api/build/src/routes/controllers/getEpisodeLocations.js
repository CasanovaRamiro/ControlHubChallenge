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
const axios_1 = __importDefault(require("axios"));
const parseLocations = (arrOfCharacters) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const charactersToPromise = arrOfCharacters.map((e) => axios_1.default.get(e));
        const allCharacterData = yield Promise.all(charactersToPromise);
        const locations = allCharacterData.map((e) => e.data.origin.name);
        const locationsUnique = [...new Set(locations)];
        // console.log(locationsUnique)
        return locationsUnique;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
const getEpisodeLocations = (apiLink) => __awaiter(void 0, void 0, void 0, function* () {
    const dataEpisodes = yield (0, fetchData_1.default)(apiLink);
    const arrLocations = [];
    // console.log(locations);
    const parsedEpisodes = dataEpisodes === null || dataEpisodes === void 0 ? void 0 : dataEpisodes.map((e) => __awaiter(void 0, void 0, void 0, function* () {
        // console0.log(charLocation)
        const locations = yield parseLocations(e.characters);
        return {
            name: e.name,
            episode: e.episode,
            locations: locations,
        };
    }));
    console.log(parsedEpisodes);
    return parsedEpisodes;
});
module.exports = {
    getEpisodeLocations,
};
