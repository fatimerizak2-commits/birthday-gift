const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {
        document.body.classList.add("fade-out");
    }, 1800);

    setTimeout(() => {
        window.location.href = "welcome.html";
    }, 2600);

});