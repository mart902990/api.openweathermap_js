$(document).ready(function(){  //событие ready фуния выполнится гда DOM загрузится полностью
 //$.
 $.get(
    "http://api.openweathermap.org/data/2.5/weather",
    {  //"id": "569143 " , 
     "q": "London,uk",
       "apiid": "76d3caedf25a7268a510458885660bf6",
   }, 
    function(data) {console.log(data); }
 ) ;  
}
); 