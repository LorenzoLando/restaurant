var modal = document.querySelector(".modal");
    var trigger = document.querySelectorAll(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger[0].addEventListener("click", toggleModal);
    trigger[1].addEventListener("click", toggleModal);
     trigger[2].addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);