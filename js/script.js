$(document).ready((function(){$(".users__grid").length&&$(".users__grid").webTicker({startEmpty:!1,hoverpause:!1,speed:80,duplicate:!0}),$(".elem__faq").on("click",(function(){$(this).toggleClass("active"),$(this).find(".content").slideToggle(400),$(this).hasClass("active")?$(this).find(".head>span").text("-"):$(this).find(".head>span").text("+")})),$(".scrollable__link").on("click",(function(t){t.preventDefault();let e=$(this).attr("data-scroll");$("html").animate({scrollTop:$(e).offset().top},500)}))}));