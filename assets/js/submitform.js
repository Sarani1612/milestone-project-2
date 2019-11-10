function submitForm(contactForm) {

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
            document.querySelector("button").innerHTML="Sent!";
            document.querySelector("button").classList.replace("form-button", "form-button-sent");
            alert("Success!", response);
            document.getElementById("contact-form").reset();
            console.log("Success!", response);
        },
        function(error) {
            alert("Form failed to submit. \r\n Response:\n " + JSON.stringify(err));
            console.log("Failed", error);
        });

    return false;
}