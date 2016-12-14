function countUp(count)
{
    var div_by = 100,
        speed = Math.round(count / div_by),
        $display = $('.count'),
        run_count = 1,
        int_speed = 12;

    var int = setInterval(function() {
        if(run_count < div_by){
            $display.text(speed * run_count);
            run_count++;
        } else if(parseInt($display.text()) < count) {
            var curr_count = parseInt($display.text()) + 1;
            $display.text(curr_count);
        } else {
            clearInterval(int);
        }
    }, int_speed);
}

/*
 // countUp(1209);

 $("#counters").mouseov(function () {
 countUp(1209);
 })
 */

var x = true;
$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 3200) {
        if (x==true){
            countUp(1209);
            x=false;
        }
    };
}