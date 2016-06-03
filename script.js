$("#previewframe").hide();
$("#buttondiv").hide();

$(".moveon").click(function() {
$("#previewframe").show();
$("#buttondiv").show();
console.log($("#width").val());
console.log($("#height").val());
console.log($("#marginal").val());
console.log($("#frame option:selected").val());
console.log($("#comment").val());
var totalwidth = parseInt($("#width").val()) + parseInt($("#marginal").val()) + parseInt($("#marginal").val());
var totalheight = parseInt($("#height").val()) + parseInt($("#marginal").val()) + parseInt($("#marginal").val());
$("#previewframe").css("width", totalwidth);
$("#previewframe").css("height", totalheight);
$("img").css("margin-top", parseInt($("#marginal").val()));
$("img").css("width", $("#width").val());
$("img").css("height", $("#height").val());
var target = $('#frame option:selected').val();
if (target == "Test 1") {
    $("#previewframe").css("border-style", "solid");
    $("#previewframe").css("border-width", "10px");
} else if (target == "Test 2") {
    $("#previewframe").css("border-style", "solid");
    $("#previewframe").css("border-width", "5px");
    $("#previewframe").css("border-color", "brown");
} else if (target == "Test 3") {
    $("#previewframe").css("border-style", "solid");
    $("#previewframe").css("border-width", "4px");
    $("#previewframe").css("border-color", "yellow");
} else if (target == "Test 4") {
    $("#previewframe").css("border-style", "solid");
    $("#previewframe").css("border-width", "6px");
    $("#previewframe").css("border-color", "grey");
}
$("#textdiv").empty();
var sum = totalwidth * totalheight;
$("#textdiv").append("<h2>Du valde:</h2><h3>En ram med storlek " + totalwidth + "x" + totalheight +
" eftersom ditt motiv är " + $("#width").val() + "x" + $("#height").val() + " och du har en marginal på " + $("#marginal").val() + ".</h3><h3>Du valde typen " +
$("#frame option:selected").val() + ".</h3><h3>En tavla av typen " + $("#frame option:selected").val() +" med storlek " +
totalwidth +  "x" + totalheight + " skulle kosta " + parseInt($("#frame option:selected").data("cost") * sum) + "kr.</h3>" +
'<h3>Du kommenterade:"' + $("#comment").val() +'"</h3>');
});

$("#accept").click(function(){
  alert("höjd på bild:" + $("#width").val() +
  "\nbredd på bild: " + $("#height").val() +
  "\nramhöjd: " + parseInt(parseInt($("#height").val()) + parseInt($("#marginal").val()) + parseInt($("#marginal").val())) +
  "\nrambredd: " + parseInt(parseInt($("#width").val()) + parseInt($("#marginal").val()) + parseInt($("#marginal").val())) +
  "\nmarginal: " + $("#marginal").val()+
  "\nkommentar: " + $("#comment").val());
});
$(".clearall").click(function(){
  $("#width").val('');
  $("#height").val('');
  $("#marginal").val('');
  $("#comment").val('');
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
