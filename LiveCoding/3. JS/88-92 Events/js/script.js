window.onload = function (ev) {
    var input = document.getElementsByClassName('textInput')[0];
    input.addEventListener('focus', function () {
        this.style.border='3px solid lightgray';
    });

    input.addEventListener('blur' , function () {
        this.style.border='1px solid lightgray';
    })

input.addEventListener('keyup', function () {
    var text = this.value;
    document.getElementsByClassName('writtenText')[0].textContent = text;
});

document.getElementsByClassName('listOfItems')[0].addEventListener('click',function (e) {
    if(e.target.className.includes('item')){
        this.removeChild(e.target);
    }
});

document.getElementById('addItem').addEventListener('click', function () {
    var input = document.getElementsByClassName('textInput')[0];
    var text = input.value;

    var newElement = document.createElement('li');
    var newTextNode = document.createTextNode(text);
    newElement.appendChild(newTextNode);
    newElement.classList.add('item');

    document.getElementsByClassName('listOfItems')[0].appendChild(newElement);
    input.value ='';

});

    var clickCtn = 0;

document.addEventListener('click' , function () {
    document.getElementsByClassName('clickCtn')[0].textContent = ++clickCtn;
});

    var dblClickCtn = 0;
    document.addEventListener('dblclick', function () {
        document.getElementsByClassName('dblClickCtn')[0].textContent = ++dblClickCtn;
    });

var keydownCtn = 0;
    document.addEventListener('keydown', function () {
        document.getElementsByClassName('keyDownCtn')[0].textContent = ++keydownCtn;
    });



}