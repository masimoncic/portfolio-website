let propCount = 1;
function createInputField() {
  let div = document.createElement('div');
  div.id = `input${propCount}`;
  let input = document.createElement('input');
  input.type = 'text';
  input.id = `prop${propCount}`;
  input.name = `propositions[${propCount}]`;
  let label = document.createElement('label');
  label.for = input.id;
  label.innerHTML = 'Enter a proposition';
  div.appendChild(label);
  div.appendChild(input);
  propInputs = document.getElementById('propInputs');
  propInputs.appendChild(div);
  propCount ++;
}

let addProp = document.getElementById('addProp');
addProp.addEventListener('click', createInputField);

