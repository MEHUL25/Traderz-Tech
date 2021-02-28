
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({

      email : {
            type : String
      }
});


module.exports = mongoose.model("New",newsSchema);