const generateTruthTable = require('generate-truth-table');

module.exports.home = async (req, res) => {
  res.render('home');
}

module.exports.projects = async (req, res) => {
  res.render('projects');
}

module.exports.generateTruthTable = async (req, res) => {
  res.render('generateTruthTable');
}

module.exports.submit = async (req, res) => {
  function createTable(array) {
    var table = document.createElement('table');
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
  }

  console.log(req.body);
  res.redirect('/generateTruthTable');

}