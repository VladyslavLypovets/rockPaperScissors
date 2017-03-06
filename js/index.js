"use strict";
function start(value){
  switch (value) {
    case 'paper': $("#rock, #scissors").css("display","none"); $("#paper").attr("disabled", "disabled"); break;
    case 'rock': $("#paper, #scissors").css("display","none"); $("#rock").attr("disabled", "disabled");  break;
    case 'scissors': $("#rock, #paper").css("display","none"); $("#scissors").attr("disabled", "disabled");  break;
    default: alert("Ошибка!!!");
  }
  var randomNumber=getRandomInt(1,4);
  getResult(randomNumber, value);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getResult(number, value){
  $("#inputPC").css("visibility","visible");
  switch (number){
    case 1: $("#inputPC").css("background","url('img/paper.png')", "no-repeat");
    if(value=="scissors")
      {
        $(".textBLock").text("Вы победили");
      }
      else
      {
        if(value=="paper")
        {
          $(".textBLock").text("Ничья");
        }
        else
        {
          $(".textBLock").text("Победил компютер");
        }
      }
    break;
    case 2: $("#inputPC").css("background","url('img/rock.png')", "no-repeat");
    if(value=="paper")
      {
        $(".textBLock").text("Вы победили");
      }
      else
      {
        if(value=="rock")
        {
          $(".textBLock").text("Ничья");
        }
        else
        {
          $(".textBLock").text("Победил компютер");
        }
      }
     break;
    case 3: $("#inputPC").css("background","url('img/Scissors.png')", "no-repeat");
    if(value=="rock")
      {
        $(".textBLock").text("Вы победили");
      }
      else
      {
        if(value=="scissors")
        {
          $(".textBLock").text("Ничья");
        }
        else
        {
          $(".textBLock").text("Победил компютер");
        }
      }
     break;
    default: alert("Ошибка!!!");

  }

}
