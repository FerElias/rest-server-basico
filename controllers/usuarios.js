const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const { q, nombre = "no name", apikey } = req.query;
  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
  });
};

const usuariosPost = (req, res = response) => {
  const { postPerron } = req.body;

  res.json({
    msg: "post API",
    postPerron,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "put API",
    id,
  });
};
const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};
const usuariosPatch = (req, res = response) => {
  res.status(403).json({
    msg: "patch API",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
};
