var title = document.getElementById('title');
var list = document.getElementById('list');
var li = list.getElementsByTagName('li');
var addBtn = document.getElementById('add-btn');

list.addEventListener('click', activeItem);

function activeItem(event){
	if(event.target.nodeName == 'LI'){
		title.innerHTML = event.target.innerHTML;

		for(var i = 0; i < event.target.parentNode.children.length; i++){
			event.target.parentNode.children[i].removeAttribute('class');
		}
		event.target.setAttribute('class', 'active');
	}
}

addBtn.addEventListener('click', function(){
	var txt = prompt('제목 입력');
	list.innerHTML += '<li>' + txt + '</li>';
});