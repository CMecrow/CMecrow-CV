function sendMail(contactForm) {
    emailjs.send("service_szg7x5s", "template_js7iswb", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact": contactForm.userinput.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}