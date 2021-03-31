

module.exports.home = async (req, res) => {
  res.render('home');
}

module.exports.projects = async (req, res) => {
  res.render('projects');
}

module.exports.generateTruthTable = async (req, res) => {
  res.render('generateTruthTable');
}