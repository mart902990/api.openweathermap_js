$(document).ready(function(){  //событие ready фуния выполнится гда DOM загрузится полностью
 //$.
 $.get(
    "http:/.org/data/2.5/weather",
    {  //"id": "569143 " , 
     " q": "London",
      "apiid": "27a1d09d4954cd2b045e899fe11c76fb",
   }, 
    function(data) {console.log(data); }
 ) ;  
}
);