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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const { getCharCount } = require("./controllers/getCharCount.js");
const { getEpisodeLocations } = require("./controllers/getEpisodeLocations.js");
// this route solves the first exercise
router.get("/charcount", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const start = Date.now();
        const results = yield Promise.all([
            getCharCount("https://rickandmortyapi.com/api/location", "l"),
            getCharCount("https://rickandmortyapi.com/api/episode", "e"),
            getCharCount("https://rickandmortyapi.com/api/character", "c"),
        ]);
        const charCounterResult = {
            exercise_name: "Char counter 2",
            time: 'null',
            in_time: false,
            results: [
                {
                    char: "l",
                    count: results[0],
                    resource: "location",
                },
                {
                    char: "e",
                    count: results[1],
                    resource: "episode",
                },
                {
                    char: "c",
                    count: results[2],
                    resource: "character",
                },
            ],
        };
        const stop = Date.now();
        charCounterResult.time = `${(stop - start) / 1000}s`;
        if ((stop - start) / 1000 > 3) {
            charCounterResult.in_time = false;
        }
        else {
            charCounterResult.in_time = true;
        }
        res.send(charCounterResult);
    }
    catch (error) {
        res.sendStatus(404).send(`Error ${res.statusCode} ${error}`);
    }
}));
router.get("/episodelocations", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const start = Date.now();
        const episodeLocations = yield getEpisodeLocations('https://rickandmortyapi.com/api/episode');
        const episodeLocationResult = {
            exercise_name: "Episode locations",
            time: 'null',
            in_time: false,
            results: episodeLocations
        };
        const stop = Date.now();
        episodeLocationResult.time = `${(stop - start) / 1000}s`;
        if ((stop - start) / 1000 > 3) {
            episodeLocationResult.in_time = false;
        }
        else {
            episodeLocationResult.in_time = true;
        }
        res.send(episodeLocationResult);
    }
    catch (error) {
        res.sendStatus(404).send(`Error ${res.statusCode} ${error}`);
    }
}));
module.exports = router;
