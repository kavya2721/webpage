function renderStars(rating) {
  const starContainer = document.getElementById("starRating");
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "☆";
  }
  starContainer.innerHTML = stars;
}

renderStars(4);

// Booking form logic
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("blue lagoonn restarant").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  const confirmation = `Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been reserved.`;
  document.getElementById("confirmation").textContent = confirmation;
});

