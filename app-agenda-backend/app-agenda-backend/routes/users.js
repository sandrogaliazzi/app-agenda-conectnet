var express = require("express");
var router = express.Router();
const knex = require("../database");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/teste", function (req, res, next) {
  try {
    knex("mk_os")
      .select(
        "codos AS Código os",
        "dt_hr_fechamento",
        "mk_pessoas.nome_razaosocial",
        "servico_prestado"
      )
      .join("mk_pessoas", "mk_os.cliente", "=", "mk_pessoas.codpessoa")
      .where("classificacao_encerramento", 6)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.error(err);
      });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
