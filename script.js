
function showDishDetails(dish) {
    const details = document.getElementById(dish + "-details");

    if (details.hidden) {
        details.hidden = false;
    } else {
        details.hidden = true;
    }
}

const reservationForm = document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;
    const reservationDate = document.getElementById("reservationDate").value;
    const reservationTime = document.getElementById("reservationTime").value;
    const guestCount = document.getElementById("guestCount").value;

    const message = document.getElementById("reservationMessage");

   

message.textContent =
    "Thank you, " + customerName + "!\n" +
    "Reservation date: " + reservationDate + "\n" +
    "Reservation time: " + reservationTime + "\n" +
    "Number of guests: " + guestCount + "\n" +
    "This is a demo request and has not been sent to a restaurant.";


    reservationForm.reset();
});

const reservationDateInput = document.getElementById("reservationDate");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

reservationDateInput.min = `${year}-${month}-${day}`;

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
