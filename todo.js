let ul = document.getElementById('list');
function removeItem() {
    let list = ul.children
    for (let i=0; i<list.length;i++) {
        while (list[i] && list[i].children[0].checked) {
            ul.removeChild(list[i]);
        }
    }
}
function addItem() {
    let input = document.getElementById('input');
    let item = input.value;
    let node = document.createTextNode(item);
    if(item === '') {
        return false;
    }
    else {
        let li = document.createElement('li');
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.setAttribute('id','check');
        var label = document.createElement('label');
        label.setAttribute('id','text');
        ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(node);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        li.className = 'visual';
        input.value = '';
    }   
}