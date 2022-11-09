const keyBoard = document.querySelector(".keyboard");

keyBoard.addEventListener("keyup",(e)=>{
   let key = document.getElementById("key-text");
   let ans=document.getElementById('ans');
     ans.innerHTML=  "value is"+" "+e.keyCode;
     key.innerHTML =  "you pressed"+"  " + e.key;
});