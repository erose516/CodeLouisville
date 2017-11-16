// Changes font to bold when user hovers over it

$('.pink').hover(
    function(){
        $(this).html("<strong>Handy Miss</strong>");
    },
    function(){
        $(this).html("Handy Miss");
    }
);

//Create button to simulate action of requesting a call

//Hide "complete/thank you" message
$(".callButton span").hide();

//Add a button to request call
$(".callButton").append("<button>Request a call from Handy Miss</button>");

//Show "complete/thank you" message when button pressed, then hide button
$("button").click(function(){
  $(this).prev().show();
  $(this).remove();
});