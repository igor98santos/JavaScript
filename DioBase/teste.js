var currenNumberWrapper = document.getElementById('currenNumber')
var currenNumber = 0
function adicionar(){
    currenNumber = currenNumber + 1;
    currenNumberWrapper.innerHTML = currenNumber;
}
function decrement(){
    currenNumber = currenNumber - 1;
    currenNumberWrapper.innerHTML = currenNumber;
}
 document.getElementsByName('p')[1].onclick = function (e){
    document.write('aoooba')
}
funct