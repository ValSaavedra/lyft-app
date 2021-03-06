$(document).ready(function() {

    
    $("#chile").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/chile.png");
    $("#inputt").attr("placeholder", "123 123 123");
    $("#code").text("+56");
    $("#inputt").click(function(ev){
        ev.preventDefault();
        if($(".required").val() == "" || $(".required").length != 9){
            $("#next-button").hide();
            $(".alert").text("You must enter 9 numbers");
         }else{
            $("#next-button").show();
         }
    });

});

    $("#mex").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/mexico.png");
    $("#inputt").attr("placeholder", "123 123 1234 ");
    $("#code").text("+52");
    $("#inputt").click(function(ev){
        ev.preventDefault();
        if($(".required").val() == "" || $(".required").length != 10){
            $("#next-button").hide();
            $(".alert").text("You must enter 10 numbers");
         }else{
            $("#next-button").show();
         }
    });

});
    $("#peru").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/peru.png");
    $("#inputt").attr("placeholder", "123 123 123");
    $("#code").text("+51");
    $("#inputt").click(function(ev){
        ev.preventDefault();
        if($(".required").val() == "" || $(".required").length != 9){
            $("#next-button").hide();
            $(".alert").text("You must enter 9 numbers");
         }else{
            $("#next-button").show();
         }
    });

});
    $("#arg").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/argentina.png");
    $("#inputt").attr("placeholder", "123 123 1234");
    $("#code").text("+54");
    $("#inputt").click(function(ev){
        ev.preventDefault();
        if($(".required").val() == "" || $(".required").length != 10){
            $("#next-button").hide();
            $(".alert").text("You must enter 10 numbers");
         }else{
            $("#next-button").show();
         }
    }); 

});
    $("#col").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/colombia.png");
    $("#inputt").attr("placeholder", "123 12 123 12");
    $("#code").text("+57");
    $("#inputt").click(function(ev){
        ev.preventDefault();
        if($(".required").val() == "" || $(".required").length != 10){
            $("#next-button").hide();
            $(".alert").text("You must enter 10 numbers");
         }else{
            $("#next-button").show();
         }
    });
});
    $("#ecu").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/ecuador.png");
    $("#inputt").attr("placeholder", "123 123");
    $("#code").text("+593");
    $("#inputt").click(function(ev){
        ev.preventDefault();
        if($(".required").val() == "" || $(".required").length != 6){
            $("#next-button").hide();
            $(".alert").text("You must enter 6 numbers");
         }else{
            $("#next-button").show();
         }
    });
});
    $("#bra").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/brasil.png");
    $("#inputt").attr("placeholder", "123 123 123");
    $("#code").text("+55");
    $("#inputt").click(function(ev){
        ev.preventDefault();
        if($(".required").val() == "" || $(".required").length != 9){
            $("#next-button").hide();
            $(".alert").text("You must enter 9 numbers");
         }else{
            $("#next-button").show();
         }
    });

});
    $("#bol").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/bolivia.png");
    $("#inputt").attr("placeholder", "123 123 12");
    $("#code").text("+591");
    $("#inputt").click(function(ev){
        ev.preventDefault();
        if($(".required").val() == "" || $(".required").length != 8){
            $("#next-button").hide();
            $(".alert").text("You must enter 8 numbers");
         }else{
            $("#next-button").show();
         }
    });

});
    $("#uru").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/uruguay.png");
    $("#inputt").attr("placeholder", "123 123 12");
    $("#code").text("+598");
    $("#inputt").click(function(ev){
        ev.preventDefault();
        if($(".required").val() == "" || $(".required").length != 8){
            $("#next-button").hide();
            $(".alert").text("You must enter 8 numbers");
         }else{
            $("#next-button").show();
         }
    });

});
    $("#vene").click(function(event){
    event.preventDefault();
    $(this).unbind(event);

    $("#showflag").attr("src", "assets/img/flags/venezuela.png");
    $("#inputt").attr("placeholder", "123 12 123");
    $("#code").text("+58");
    $("#inputt").click(function(ev){
        ev.preventDefault();
        if($(".required").val() == "" || $(".required").length != 8){
            $("#next-button").hide();
            $(".alert").text("You must enter 8 numbers");
         }else{
            $("#next-button").show();
         }
    });

});

    $("#next-button").hide();

    $('.required').on('keyup', function (){                    
           ToggleSubmitButton();
    }); 

});

function ToggleSubmitButton(){

    $("#next-button").hide();
    var getRequiredLength = $('.required').length;
    var nonempty = $('.required').filter(function(){
        return this.value != ''
    }).length;

    if(getRequiredLength == nonempty){
        $("#next-button").show();
    }
}

