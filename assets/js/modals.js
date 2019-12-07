window.onload = function(){ 

    // Opens modals
    var cityDiv = document.getElementsByClassName('city-div');

    for (var i = 0; i < cityDiv.length; i++) {
        var thisCityDiv = cityDiv[i];
        thisCityDiv.onclick = function() {
            var modal = document.getElementById(this.dataset.modal);
            $(modal).show();
        }, false;

    };

    // Closes modals when clicking outside of it

    window.onclick = function(event) {
        if (event.target.className == 'modal') {
            $('.modal').hide();
        };
    };

    // Closes modals when clicking on close button

    var closeModal = document.getElementsByClassName('modal-close');
    for (var i = 0; i < closeModal.length; i++) {
        closeModal[i].onclick = function() {
            $('.modal').hide();
        };
    };

};