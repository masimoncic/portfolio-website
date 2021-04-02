const generateTruthTable = require('generate-truth-table');

module.exports.home = async (req, res) => {
  res.render('home');
}

module.exports.projects = async (req, res) => {
  res.render('projects');
}

module.exports.generateTruthTable = async (req, res) => {
  try {
    res.render('generateTruthTable', { table });
  } catch {
    let table = null;
    res.render('generateTruthTable', { table });
  }
}



module.exports.submit = async (req, res) => {
  if (req.body.propositions) {
    let propositions = req.body.propositions;
    const filteredProps = [];
    for (i = 0; i < propositions.length; i++) {
      if (propositions[i] !== '') {
        console.log(propositions[i])
        filteredProps.push(propositions[i]);
      }
    }
    let table = generateTruthTable(filteredProps);
    res.render('generateTruthTable', { table })
  } else {
    let table = null;
    res.render('generateTruthTable', { table })
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