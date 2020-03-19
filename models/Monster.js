const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonsterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        default: 1,
    },
    currentHP: {
        type: Number,
        default: 100,
    },
    totalHP: {
        type: Number,
        default: 100,
    },
    meleeAttack: {
        type: Number,
        default: 50,
    },
    meleeSpeed: {
        type: Number,
        default: 1,
    },
    rangedAttack: {
        type: Number,
        default: 25,
    },
    rangedSpeed: {
        type: Number,
        default: 2,
    },
    movementSpeed: {
        type: Number,
        default: 1,
    },
    defense: {
        type: Number,
        default: 0,
    },
    intelligent: {
        type: Boolean,
        default: false,
    }
    // add lobby and items later, possibly add crits
});

module.exports = Monster = mongoose.model('characters', MonsterSchema);