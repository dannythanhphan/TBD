const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Monster = require('./Monster');
const Trap = require('./Trap');

const ROOM_WIDTH = 17;
const ROOM_HEIGHT = 11;

const RoomSchema = new Schema({
    position: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true,
        default: ROOM_WIDTH
    },
    height: {
        type: Number,
        required: true,
        default: ROOM_HEIGHT
    },    
    leftExit: {
        type: Number,
        required: true,
        default: -1
    },
    rightExit: {
        type: Number,
        required: true,
        default: -1
    },    
    topExit: {
        type: Number,
        required: true,
        default: -1
    },
    bottomExit: {
        type: Number,
        required: true,
        default: -1
    },
    monsters: {
        type: [Monster.schema]
    },
    traps: {
        type: [Trap.schema]
    }
});

module.exports = Room = mongoose.model('rooms', RoomSchema);
