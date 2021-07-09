const { Schema, model } = require("mongoose");

const FormadorSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  curso: String,
  activo: Boolean,
});

const Formador = model("Formador", FormadorSchema, "formadores");

module.exports = Formador;
