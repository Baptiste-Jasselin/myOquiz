const middleware404 = (req, res) => {
  res.status(404).render("404");
};

module.exports = middleware404;

// Note : ici, j'ai extrait pour la démonstration, mais :
// - rien ne nous y oblige
// - préférer "KISS = keep it simple stupid" en cas de doute !

