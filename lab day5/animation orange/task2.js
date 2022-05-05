var all = document.getElementsByClassName("all")
var i=0;
var stp;
function go(){
    all[i].src="marble1.jpg"
     stp = setInterval(function(){
       
      if(i<all.length){

        all[i].src="marble3.jpg"
       
      }else{
          i=-1;
      }
      
     ++i;
     all[i].src="marble1.jpg"
     

    },1000)
 
}
function stop (){

    clearInterval(stp)
}

