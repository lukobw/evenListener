var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {

    var element = document.createElement('li');

    var counter = document.getElementsByTagName('li').length;

    element.innerHTML = 'Item ' + counter;

    list.appendChild(element);

});