'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  country: { type: String },
  address: { type: String },
  state: { type: String },
  zip: { type: String },
  cell_phone: { type: String }
});

_mongoose2.default.model('User', UserSchema);