//функция управления прогрессбаром
function changeValue(data){
let value=String(data);
$(".progress-bar").attr({"style":'width:'+value+'%',"aria-valuenow":value});
$(".progress-bar").text(value+"%");
}
//обработчик 1-ой кнопки
function handlerButton1(){
    $("#btn1").on('click',function(){
        let now_value = $(".progress-bar").attr("aria-valuenow");
        let new_value = Number(now_value)+1;
        //console.log(new_value);
        if (new_value<=100) {changeValue(new_value);}    
    });
}
//обработчик 2-ой кнопки
function handlerButton2(){
    $("#btn2").on('click',function(){
        let now_value = $(".progress-bar").attr("aria-valuenow");
        let new_value = Number(now_value)+3;
        //console.log(new_value);
        if (new_value<=100) {changeValue(new_value);}
        else changeValue(100);
    });
}
//обработчик 3-ой кнопки
function handlerButton3(){
    $("#btn3").on('click',function(){
        let now_value = $(".progress-bar").attr("aria-valuenow");
        let new_value = Number(now_value)+7;
        //console.log(new_value);
        if (new_value<=100) {changeValue(new_value);}
        else changeValue(100);
    });
}
function init() {
  handlerButton1();
  handlerButton2();
  handlerButton3();
  console.log("скрипт подгрузился");
}
$(document).ready(init); 