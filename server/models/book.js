/**
 * copyright 2019 (C) ELAIYA
 *
 * created on: Aug, 2019
 * @author: Elaiya Raja E
 *
 * ---------------------------------------------------------
 * Revision History (Release 1.0.0)
 * ---------------------------------------------------------
 * VERSION | AUTHOR - DATE       | DESCRIPTION OF CHANGE
 * ---------------------------------------------------------
 * 1.0     | ELAIYA - 13-08-2019 | Initial Creation
 * ---------------------------------------------------------
 *
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);
