const listarAlumnos = require("./db/controladores/alumnos");
const {
  crearFormador,
  borrarFormador,
  modificarFormador,
  listarFormadores,
} = require("./db/controladores/formadores");

require("./db");

(async () => {
  /* const nuevoFormador = await crearFormador({
    nombre: "Amaranta",
    curso: "Moodle para dummies",
    activo: true,
  });
  console.log(nuevoFormador); */
  // borrarFormador("60daea13e648312b1cf132df");
  /* modificarFormador("60daea13e648312b1cf132de", {
    curso: "Videojuegos de Polo to guapos en ensamblador",
  }); */
  listarAlumnos();
})();
