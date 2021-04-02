let propCount = 1;
function createInputField() {

  let input = document.createElement('input');
  input.type = 'text';
  input.id = `prop${propCount}`;
  input.name = `propositions[${propCount}]`;
  input.setAttribute("class", "form-control mb-3");

  propInputs = document.getElementById('propInputs');
  propInputs.appendChild(input);
  propCount ++;
}

let addProp = document.getElementById('addProp');
addProp.addEventListener('click', createInputField);