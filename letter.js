document.addEventListener("DOMContentLoaded", () => {

    const text = document.querySelector(".letter-text p");
    const signature = document.querySelector(".signature");
    const backBtn = document.getElementById("backBtn");

    // Save the text only (no HTML tags)
    const fullText = text.innerText;

    // Clear the letter
    text.innerHTML = "";
    signature.style.opacity = "0";

    let i = 0;

    function typeLetter() {

        if (i < fullText.length) {

            const current = fullText.substring(0, i + 1);

            // Preserve line breaks
            text.innerHTML = current.replace(/\n/g, "<br>");

            i++;

            setTimeout(typeLetter, 20);

        } else {

            signature.style.transition = "opacity 1.2s";
            signature.style.opacity = "1";

        }

    }

    typeLetter();

    document.querySelector(".paper").scrollTop = 0;

    backBtn.addEventListener("click", function () {

        document.body.classList.add("fade");

        setTimeout(function () {

            window.location.href = "message.html";

        }, 800);

    });

});