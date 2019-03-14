// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




$(document).ready(function () {

    //TODO: This Function re-sizes all dl elements and shapes them according to size
    $("dl.row dt").addClass("col-6 col-sm-6 col-xl-2 col-lg-2 col-md-3 text-right");
    $("dl.row dd").addClass("col-6 col-sm-6 col-xl-2 col-lg-2 col-md-3 text-left");
    $("dl.row.checklist dt").removeClass().addClass("col-6 col-sm-6 col-xl-2 col-lg-2 col-md-3 text-right");
    $("dl.row.checklist dd").removeClass().addClass("col-sm-2");

});



//TODO: This for minimizing and Maximizing the Side Bar depending on the Screen Size, Remove if u are going to change the Side Bar
$(window).on("load resize", function () {
    //Assuming you consider anything >= 1240 as desktop
    $('div.page-wrapper').toggleClass('toggled', $(window).width() > 1320);
});
