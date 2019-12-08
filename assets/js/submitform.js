function submitForm(contactForm) {

    (function(){
            emailjs.init("user_ewAp2WLr4rekNLnkVnUvN");
        })();
        
    var formDetails = {
        "fullname": contactForm.fullname.value,
        "emailaddress": contactForm.emailaddress.value,
        "comments": contactForm.comments.value,
        "dates": contactForm.date.value,
        "nights": contactForm.nights.value
    };

    emailjs.send("gmail", "theatre_travels", formDetails)
    .then(
        function(response) {
            document.querySelector("button").classList.replace("form-button", "form-button-sent");
            alert("Success!", response);
            document.getElementById("contact-form").reset();
            document.getElementById("contact-btn").innerHTML="Sent!";
            console.log("Success!", response);
        },
        function(error) {
            alert("Form failed to submit. \r\n Response:\n " + JSON.stringify(err));
            console.log("Failed", error);
        });

    return false;
}