import './style.css'

$(".elem").on("click", function(){
    console.log('Click at rect '+$(this).data("num"))
})


let current_num = 1;

function moveRect(e){
    switch(e.keyCode){
        case 37:  // если нажата клавиша влево
            if ($(".elem[data-num='"+current_num+"'").data("left")) {
                console.log("left")
                console.log("current_num: "+current_num);
                $(".check").removeClass("check");
                current_num = +$(".elem[data-num='"+current_num+"'").data("left");
                $(".elem[data-num='"+current_num+"'").addClass("check");
            } else {console.log("current_num: "+current_num);console.log("влево запрещено")}
            break;

        case 38:   // если нажата клавиша вверх
        if ($(".elem[data-num='"+current_num+"'").data("top")) {
            console.log("top")
            console.log("current_num: "+current_num);
            $(".check").removeClass("check");
            current_num = +$(".elem[data-num='"+current_num+"'").data("top");
            $(".elem[data-num='"+current_num+"'").addClass("check");
            } else {console.log("current_num: "+current_num);console.log("вверх запрещено")}
            break;

        case 39:   // если нажата клавиша вправо
        if ($(".elem[data-num='"+current_num+"'").data("right")) {
            console.log("right")
            console.log("current_num: "+current_num);
            $(".check").removeClass("check");
            current_num = +$(".elem[data-num='"+current_num+"'").data("right");
            $(".elem[data-num='"+current_num+"'").addClass("check");
            } else {console.log("current_num: "+current_num);console.log("вправо запрещено")}
            break;

        case 40:   // если нажата клавиша вниз
        if ($(".elem[data-num='"+current_num+"'").data("bottom")) {
            console.log("bottom")
            console.log("current_num: "+current_num);
            $(".check").removeClass("check");
            current_num = +$(".elem[data-num='"+current_num+"'").data("bottom");
            $(".elem[data-num='"+current_num+"'").addClass("check");
            } else {console.log("current_num: "+current_num);console.log("вниз запрещено")}
            break;
    }
}
 
addEventListener("keydown", moveRect);