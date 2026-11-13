function updateDateTime() {
    const now = new Date();

    const dateTime = now.toLocaleString("en-CA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    document.getElementById("dateTime").textContent = dateTime;
}

updateDateTime();

setInterval(updateDateTime, 1000);

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const formMessage = document.getElementById("formMessage");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "") {
        formMessage.textContent = "Please fill in all required fields.";
        formMessage.style.color = "red";
        return;
    }

    if (!emailRegex.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
});

contactForm.addEventListener("reset", function() {
    document.getElementById("formMessage").textContent = "";
});