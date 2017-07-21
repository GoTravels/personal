;(function(w,d,$){
   
   $.fn.turnoff=function(idName){
      $("#"+idName).mouseover(function(){
      	alert("a");
      })
   }
})(window,document,$)