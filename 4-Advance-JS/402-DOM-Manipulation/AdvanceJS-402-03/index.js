var ref = document.getElementById("btn");
var i=0;

ref.addEventListener(
  "click", function () {
    var f1 = document.getElementsByClassName('items')[i];
    var value = document.getElementById('blank').value;
    f1.innerHTML = value;
    
    i++;
    document.getElementById('blank').value = null
  }
   
);



