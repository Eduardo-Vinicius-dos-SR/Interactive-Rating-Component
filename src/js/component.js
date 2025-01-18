let activeButton = document.querySelector(".checked");

const rateButtons = document.querySelectorAll(".rating a");

rateButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (activeButton) {
            activeButton.classList.remove("checked");
            if (activeButton === button) {
                activeButton = null;
                return;
            }
        }
        button.classList.add("checked");
        activeButton = button;

        document.querySelector(".thanks-rate").innerHTML = `<p>You selected ${index + 1} out of 5</p>`;
    });
});

const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
    const components = document.querySelectorAll("section.component");
    if (activeButton) {
        components[0].classList.remove("show");
        components[1].classList.add("show");
    }
});