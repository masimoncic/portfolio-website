const generateTruthTable = require('generate-truth-table');

module.exports.home = async (req, res) => {
  res.render('home');
}

module.exports.projects = async (req, res) => {
  res.render('projects');
}

module.exports.generateTruthTable = async (req, res) => {
  try {
    res.render('generateTruthTable', { table, filteredProps });
  } catch {
    let table = null;
    let filteredProps = null;
    let valid = true;
    res.render('generateTruthTable', { table, filteredProps, valid });
  }
}



module.exports.submit = async (req, res) => {
  let table = null;
  let filteredProps = null;
  let valid = true;
  if (req.body.propositions) {
    let propositions = req.body.propositions;
    let filteredProps = [];
    for (i = 0; i < propositions.length; i++) {
      if (propositions[i] !== '') {
        filteredProps.push(propositions[i]);
      }
    }
    try { 
      table = generateTruthTable(filteredProps);
      res.render('generateTruthTable', { table, filteredProps, valid })
    } catch {
      valid = false;
      res.render('generateTruthTable', { table, filteredProps, valid })
    }
  } else {
    res.render('generateTruthTable', { table, filteredProps, valid })
  }

/*  try {
    const { propositions } = req.body;
    let table = generateTruthTable(propositions)
    res.render('generateTruthTable', { table });
  } catch {
    table = null;
    res.render('generateTruthTable', { table });
  }*/
}