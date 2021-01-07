//ready()
$(document).ready(function () {
  //on(), hide(), show(), mouseenter(), mouseleave()
  $("#p1").on({
    mouseenter: function () {
      $(this).hide(1000);
    },
    mouseleave: function () {
      $(this).show(1000);
    },
  });

  //dblclick(), fadeOut() with callback func
  $("#p2").dblclick(function () {
    $(this).fadeOut("slow", function () {
      alert("Элемент скрыт");
    });
  });

  //click(), css()
  $("#btn").click(function () {
    $("#p3").css("color", "red");
  });

  //text()
  $(".bio p:last-child").click(function () {
    alert(`Текст этого <p>: ${$(this).text()}`);
  });

  //html()
  $(".bio p:first-child").click(function () {
    alert(`html-разметка этого <p>: ${$(this).html()}`);
  });

  //addClass(), removeClass()
  $("header h2").on({
    click: function () {
      $("p").addClass("yellow");
    },

    dblclick: function () {
      $("p").removeClass("yellow");
    },
  });
});
