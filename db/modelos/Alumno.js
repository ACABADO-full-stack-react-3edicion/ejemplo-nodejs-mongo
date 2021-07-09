const { Schema, model } = require("mongoose");

const AlumnoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: String,
  dni: {
    type: String,
    unique: true,
    maxLength: 9,
  },
  edad: {
    type: Number,
    min: 16,
    max: 29,
  },
  formador: {
    type: Schema.Types.ObjectId,
    ref: "Formador",
  },
});

const Alumno = model("Alumno", AlumnoSchema, "alumnos");

module.exports = Alumno;
