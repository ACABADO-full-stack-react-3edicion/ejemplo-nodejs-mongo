const Formador = require("../modelos/Formador");

const crearFormador = async (formador) => {
  try {
    const nuevoFormador = await Formador.create(formador);
    return nuevoFormador;
  } catch (err) {
    console.log("Error al crear el formador", err.message);
  }
};

const borrarFormador = async (id) => {
  try {
    const formadorBorrado = await Formador.deleteOne({
      _id: id,
    });
    console.log(formadorBorrado);
  } catch (err) {
    console.log("Error al borrar el formador", err.message);
  }
};

const modificarFormador = async (id, modificaciones) => {
  try {
    const formadorModificado = await Formador.findByIdAndUpdate(
      id,
      modificaciones
    );
    console.log(formadorModificado);
  } catch (err) {
    console.log("Error al modificar el formador", err.message);
  }
};

const listarFormadores = async () => {
  const formadores = await Formador.find();
  console.log(formadores);
};

module.exports = {
  crearFormador,
  borrarFormador,
  modificarFormador,
  listarFormadores,
};
