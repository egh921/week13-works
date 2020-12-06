$(document). ready(function () {
    var button_stautus = 1;
    $(".tape1_3"). on("click", function () {
        if (button_stautus == 1){
            $(".tapetape").addClass("move");
            $(".tapetapetape").addClass("move");
            $(".sound3")[0].play();
            button_stautus = 0;
        } else if
            (button_stautus == 0){
            $(".sound3")[0].pause();
            $(".tapetape").removeClass("move")
            $(".tapetapetape").removeClass("move");
            button_stautus = 1;
        }
    })

})    