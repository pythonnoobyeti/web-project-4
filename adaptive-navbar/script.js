$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.navbar__box').toggleClass('active');
        $('body').toggleClass('no__scroll');    
    });
});