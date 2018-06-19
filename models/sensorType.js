const mongoose = require('mongoose');

// Defining the schema for Users
const SensorTypeSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    version: {
        type: Number,
        default: "v0.0"
    },
    fields: [new mongoose.Schema({fields:{type:String,required:true},
                                 title:{type:String,required:true},
                                 type:{type:String,enum:["integer","string","boolean"],required:true},
                                 default:{type:String,required:true},
                                 required:{type:boolean,default:false}})  
    ],
    actions: [new mongoose.Schema({type:{type:String,required:true},
                                   fields:[{type:String}]
                                })
    ],
    events: [new mongoose.Schema({type:{type:String,required:true},
                                   fields:[{type:String}] })
    ],
    date: {
        type: Number,
        default: new Date()
    },
    deprecated: {
        type: Boolean,
        default:false
    }
});

SensorTypeSchema.index({ type: 1, version: 1 }, { unique: true });

// Naming and exporting  the user mongoose model
const SensorType = module.exports = mongoose.model('SensorType', SensorTypeSchema);

module.exports.getAllSensorType = function (callback) {
    SensorType.find(callback);
};

module.exports.addSensorType = function (Sensortype, callback) {
    SensorType.create(Sensortype, callback);
};
module.exports.getSensorType = function (callback) {
    SensorType.find(callback);
};