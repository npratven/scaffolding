const mongoose = require('mongoose');

const UsuariosSchema = new mongoose.Schema({
  userid: {
    type: String,
    match: [/^[a-zA-Z0-9@]+$/, 'is invqlid'],
  },
  usermail: {
    type: String,
    unique: true,
    match: [/^[a-zA-Z0-9@]+$/, 'is invqlid'],
  },
  userpassword: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true,
  },
  userfirstname: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true,
  },
  userslastname: String,
  useremail: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
  },
  userage: Number,
  usersex: {
    type: String,
    enum: ['HOMBRE', 'MUJER', 'OTRO'],
  },
  usercity: String,
  userdescription: String,
  userWork: String,
  useruniversity: String,
  usersing: String,
  userlocation: String,
  usergener: String,
  userrangemin: { type: Number, min: 18, max: 90 },
  userrangemax: { type: Number, min: 18, max: 90 },
  uservisibility: String,
  updated_at: { type: Date, default: Date.now },
  photos: {
    type: [String],
    required: false,
  },

});


const Usuarios = mongoose.model('Usuarios', UsuariosSchema);
module.exports = Usuarios;