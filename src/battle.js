"use strict";
exports.__esModule = true;
var Battle = /** @class */ (function () {
    function Battle(firstPokemon, secondPokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }
    Battle.prototype.getFastestPokemon = function (firstPokemon, secondPokemon) {
        var fastest;
        if (firstPokemon.speed == secondPokemon.speed) {
            fastest = Math.floor(Math.random() * 2) == 0 ? firstPokemon : secondPokemon;
        }
        else {
            fastest = firstPokemon.speed > secondPokemon.speed ? firstPokemon : secondPokemon;
        }
        return fastest;
    };
    return Battle;
}());
exports.Battle = Battle;
