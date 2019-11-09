function submitForm(contactForm) {
    emailjs.send("gmail", "theatre_travels", {
        "fullname": contactForm.name.value,
        "emailaddress": contactForm.emailaddress.value,
        "comments": contactForm.comments.value,
        "dates": contactForm.dates.value,
        "nights": contactForm.nights.value
    })
    .then(
        function(response) {
            console.log("Success!", response);
        },
        function(error) {
            console.log("Failed", error);
        });
}