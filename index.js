const form = document.getElementById('form');
const inputName = document.getElementById('inputName');
const inputDate = document.getElementById('inputDate');
const inputAmount = document.getElementById('inputAmount');
const table = document.querySelector('table');
const errorText = document.getElementById('errorText');
let value = 1;

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const delBtn = document.createElement('button')
 	delBtn.innerText = 'x';

 	if (inputName.value == '' || inputDate.value == '' || inputAmount == '') {
 		errorText.textContent = 'Fill up all the fields';
 		errorText.style.color = 'red';
 	} else {
 		const arrayData = [inputName.value, inputDate.value, inputAmount.value];

	 	if (document.getElementById('defaultTr')) {
			document.querySelector('tbody').removeChild(document.getElementById('defaultTr'));
			const tr = document.createElement('tr');
			document.querySelector('tbody').append(tr);


		 	for (let x = 0; x <= arrayData.length; x++) {
		 		const td = document.createElement('td');
		 		tr.append(td);
		 		td.innerText = arrayData[x];
		 	}

		 	tr.lastChild.innerText = '';
		 	tr.lastChild.append(delBtn);
		 	tr.setAttribute('id', `row${value}`);
		 	delBtn.setAttribute('id', value);

		 	inputName.value = inputDate.value = inputAmount.value = '';

		 	value++;
		} else {
			const tr = document.createElement('tr');
			document.querySelector('tbody').append(tr);

		 	for (let x = 0; x <= arrayData.length; x++) {
		 		const td = document.createElement('td');
		 		tr.append(td);
		 		td.innerText = arrayData[x];
		 	}

		 	tr.lastChild.innerText = '';
		 	tr.lastChild.append(delBtn);
		 	tr.setAttribute('id', `row${value}`);
		 	delBtn.setAttribute('id', value);

		 	inputName.value = inputDate.value = inputAmount.value = '';

		 	value++;
		}

	 	delBtn.addEventListener('click', (e) => {
	 		const btnClick = e.currentTarget;
	 		const tblRow = document.getElementById(`row${btnClick.getAttribute('id')}`);
	 		document.querySelector('tbody').removeChild(tblRow);
	 	});	

 	}

});