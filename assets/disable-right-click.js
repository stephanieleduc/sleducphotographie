$(document).ready(function(){
    $('body').bind('cut copy paste', function(e){
        e.preventDefault();
    })
    $("body").on("contextmenu", function(e){
        return false;
    })
})