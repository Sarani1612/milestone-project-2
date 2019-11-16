window.onload = function(){ 

    var modal = document.getElementById("modal-paris");
    var pDiv = document.getElementById("paris-div");

    pDiv.onclick = function() {
        modal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

};