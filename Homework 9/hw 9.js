//--------------task 1----------------------
$(document).ready(function () {
    let element = $("a");

    element.on("click",function() {
        if(element.getAttribute("href").has("https://")){
            element.attr("target", "_blank");
        }    
    });
    
    //--------------task 2----------------------
    
    $("h2.head").each(function() {
        $(this).css( "background-color", "green");
        $(this).find("span.inner").css("font-size", "35px");//.style.font = "35px";
    })
    
    //--------------task 3----------------------

    $("h3+div").each(function(i, el) {
        $(el).prev().before($(el));
    });

    //--------------task 4----------------------

    let checkboxes = $("input[type=checkbox]");

    $(checkboxes).change(function() {
        console.log($(".checkbox:checked").length);
            if($(".checkbox:checked").length >= 4) {
                $(checkboxes).prop("checked", false)
            }      
    })
});
