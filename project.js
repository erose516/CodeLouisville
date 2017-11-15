/* Changes font to bold when user hovers over it*/

$('.pink').hover(
    function(){
        $(this).html("<strong>Handy Miss</strong>");
    },
    function(){
        $(this).html("Handy Miss");
    }
);

