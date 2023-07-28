var first_dist =document.getElementById("first_dist");
var second_dist =document.getElementById("second_dist");
var third_dist =document.getElementById("third_dist");
var forth_dist =document.getElementById("fourth_dist");
var menu =document.getElementById("menu").getElementsByTagName("li");
for(i=0;i<menu.length;i++){
menu[0].addEventListener("click",switching);
menu[1].addEventListener("click",switching1);
menu[2].addEventListener("click",switching2);
menu[3].addEventListener("click",switching3);
}





    function switching(){
      first_dist.innerHTML=first_dist.innerHTML;
    }
    
    function switching1(){
    first_dist.innerHTML=second_dist.innerHTML;
    }
    function switching2(){
      first_dist.innerHTML=third_dist.innerHTML;
    }
    function switching3(){
      first_dist.innerHTML=forth_dist.innerHTML;
    }

 

