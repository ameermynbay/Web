var tasks = [];
var checks = [];

function addTask() {
	var field = document.getElementById('field');
	if(field.value === ''){
		alert("Field is empty");
	}
	else{

	tasks.push(field.value);

	render();
	clearField();
	}
}

function clearField() {
	document.getElementById('field').value = '';
}

function render() {
	var listContainer = document.getElementById('tasks');

	listContainer.innerHTML = '';

	for (let i = 0; i < tasks.length; i++) {
		
		let item = document.createElement('li');
		let right = document.createElement('div');
		let left = document.createElement('div');
		let chckbox = document.createElement('input');
		chckbox.type = 'checkbox';
		chckbox.addEventListener('click', function(event){
			if(event.target.checked === true){
				
			} else {

			}
		}
		);
		right.classList.add("right");
		left.classList.add("left");
		left.appendChild(chckbox);
		item.appendChild(left);
		item.appendChild(right);

		let deleteBtn = document.createElement('button');
		deleteBtn.setAttribute('data-index', i);
		deleteBtn.innerHTML = 'Remove';
		deleteBtn.addEventListener('click', function (event) {
			let btn = event.target;
			tasks.splice(btn.dataset.index, 1);

			render();
		});
		left.innerHTML += tasks[i];
		
		right.appendChild(deleteBtn);

		listContainer.appendChild(item);
	}
}