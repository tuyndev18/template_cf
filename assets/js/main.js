$(document).ready(function () {
  function destroyPopupAndOverlay() {
    $("#menu_mobile").removeClass("menu_mobile--active");
    $("#overlay_layer").removeClass("overlay_layer--active");
    $("#popup_center").removeClass("popup_center--active");
  }

  $("#menu_icon_mobile").click(function () {
    $("#menu_mobile").toggleClass("menu_mobile--active");
    $("#overlay_layer").toggleClass("overlay_layer--active");
  });

  $(".btn_recevice_10").each(function() {
    $(this).click(function() {
      $("#popup_center").toggleClass("popup_center--active");
      $("#overlay_layer").toggleClass("overlay_layer--active");
    })
  })

  $("#overlay_layer").click(function () {
    destroyPopupAndOverlay();
  });
});
