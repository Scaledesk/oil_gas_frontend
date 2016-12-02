
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

