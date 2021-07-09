const Alumno = require("../modelos/Alumno");

const listarAlumnos = async () => {
  /* const alumnos = await Alumno.find(
    {
      edad: {
        $gte: 25,
      },
    },
    "nombre edad -_id apellido"
  ); */
  /* const alumnos = await Alumno.find()
    .select("nombre edad -_id")
    .where("edad")
    .gte(25); */
  const alumnos = await Alumno.find()
    .where("dni")
    .exists()
    .sort("nombre")
    .populate("formador");
  console.log(alumnos);
};

module.exports = listarAlumnos;
