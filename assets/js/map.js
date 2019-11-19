window.onload = function(){ 

//Loop for opening modals

    var cityDiv = document.getElementsByClassName("city-div");

    for (var i = 0; i < cityDiv.length; i++) {
        var thisCityDiv = cityDiv[i];
        thisCityDiv.addEventListener("click", function(){
            var modal = document.getElementById(this.dataset.modal);
            $(modal).show();
        }, false);

    }

// event for closing modals when clicking outside of it

    window.onclick = function(event) {
        if (event.target.className == "modal") {
            $(".modal").hide();
        }
    }

};