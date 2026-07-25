document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("openLetter");
    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");
    const seal = document.querySelector(".seal");
    const backBtn = document.getElementById("backBtn");

    /*==========================
            OPEN LETTER
    ==========================*/

    button.addEventListener("click", () => {

        // Prevent multiple clicks
        button.disabled = true;

        // Hide the wax seal
        if (seal) {

            seal.style.opacity = "0";
            seal.style.transform = "translateX(-50%) scale(0)";

        }

        // Open the flap
        setTimeout(() => {

            flap.classList.add("open");

        }, 200);

        // Pull the letter out
        setTimeout(() => {

            letter.classList.add("open");

        }, 700);

        // Fade page
        setTimeout(() => {

            document.body.classList.add("fade");

        }, 1900);

        // Go to letter page
        setTimeout(() => {

            window.location.href = "letter.html";

        }, 2700);

    });

    /*==========================
            BACK BUTTON
    ==========================*/

    backBtn.addEventListener("click", () => {

        document.body.classList.add("fade");

        setTimeout(() => {

            window.location.href = "gift.html";

        }, 800);

    });

});