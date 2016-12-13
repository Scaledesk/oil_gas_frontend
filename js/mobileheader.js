
$('.hmbr i').click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){

        $('.navigation').animate({left:'-385px'});


    }


    else{
        $('.navigation').animate({left:0});

        return false;
    }
});
$('.navigation').click(function(){

    return false;
});

$(document).click(function(){
    //alert('click')
    $('.navigation').animate({left:'-385px'});
});


/*scroll down button on banner*/
$('.scroll-down').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 650 }, 900);
//                                       |    |
//                                       |    --- duration (milliseconds)
//                                       ---- distance from the top
});


/*scroll down button on banner end*/


/*
header and logo shrink on scroll*/



/*
 header and logo shrink on scroll end*/
