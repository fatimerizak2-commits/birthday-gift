document.addEventListener("DOMContentLoaded", () => {

    const backBtn = document.getElementById("backBtn");

    backBtn.addEventListener("click", () => {

        document.body.classList.add("fade");

        setTimeout(() => {

            window.location.href = "gift.html";

        },800);

    });

});