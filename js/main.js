$(document).ready( function(){
    console.log('hellokjojjl');
    $(window).scroll(function () {
        if ($(document).scrollTop() > 89) {
            $('#hero').css("backgroundAttachment", "fixed");
        } else {
            $('#hero').css("backgroundAttachment", "scroll");
        }
    });
} ) ;