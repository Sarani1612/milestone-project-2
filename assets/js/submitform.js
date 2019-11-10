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
            console.log("Success!", response);
        },
        function(error) {
            console.log("Failed", error);
        });
}