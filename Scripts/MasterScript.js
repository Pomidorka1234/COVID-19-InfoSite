$("#main-info-circle").on('click', function () {
    $("#info-title").css("visibility") == "hidden" ?
    $("#info-title").css("visibility", "visible") :
    $("#info-title").css("visibility", "hidden");
});
$("#main-info-circle-i").on("click", function() {
    $("#info-title").css("visibility", "hidden");
});


setInterval(function() {
    let zoomSize = Math.round((window.outerWidth / window.innerWidth) * 100);
    if (zoomSize >= 175) {
        $("#info-2").css("display", "none");
    }
    else {
        $("#info-2").css("display", "flex");
    }

    if (zoomSize > 200) {
        $(".section").css("width", "700px");
        $(".options").css("display", "none");
    }
    else {
        $(".section").css("width", "850px");
        $(".options").css("display", "flex");
    }
}, 0);