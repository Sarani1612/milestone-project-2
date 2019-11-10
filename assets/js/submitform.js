function submitForm(contactForm) {

    var formDetails = {
        "fullname": contactForm.name.value,
        "emailaddress": contactForm.emailaddress.value,
        "comments": contactForm.comments.value,
        "dates": contactForm.dates.value,
        "nights": contactForm.nights.value
    };

    emailjs.send("gmail", "theatre_travels", formDetails)
    .then(
        function(response) {
            document.querySelector("button").text("Sent!");
            console.log("Success!", response);
        },
        function(error) {
            alert("Form failed to submit. \r\n Response:\n " + JSON.stringify(err));
            console.log("Failed", error);
        });
}