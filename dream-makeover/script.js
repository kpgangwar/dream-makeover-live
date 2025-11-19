
// // const buttons = document.querySelectorAll(".book-btn");

// // buttons.forEach(btn => {
// //   btn.addEventListener("click", () => {
// //     const service = btn.parentElement.getAttribute("data-service");
// //     const msg = `Hi Dream Makeover Team 💖, I’d like to book a ${service} session 💅`;
// //     window.open(`https://wa.me/918909087801?text=${encodeURIComponent(msg)}`, "_blank");
// //   });
// // });



// // // ❤️ Floating hearts animation
// // function createHeart() {
// //   const heart = document.createElement("div");
// //   heart.classList.add("heart");

// //   // Random left position
// //   heart.style.left = Math.random() * 100 + "vw";

// //   // Random size and speed
// //   const size = Math.random() * 20 + 10;
// //   heart.style.width = `${size}px`;
// //   heart.style.height = `${size}px`;
// //   heart.style.animationDuration = Math.random() * 3 + 2 + "s";

// //   // Add to container
// //   document.querySelector(".hearts-container").appendChild(heart);

// //   // Remove after animation
// //   setTimeout(() => heart.remove(), 5000);
// // }

// // // Start generating hearts
// // setInterval(createHeart, 300);




// // Open form on any Book Now click
// const buttons = document.querySelectorAll(".book-btn");
// const bookingForm = document.getElementById("bookingForm");
// const closeFormBtn = document.getElementById("closeFormBtn");
// const selectedServiceText = document.getElementById("selectedService");
// const appointmentForm = document.getElementById("appointmentForm");

// let currentService = "";

// // When any "Book Now" is clicked
// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     currentService = btn.parentElement.getAttribute("data-service");
//     selectedServiceText.textContent = `Selected Service: ${currentService}`;
//     bookingForm.style.display = "block";
//   });
// });

// // Close form
// closeFormBtn.addEventListener("click", () => {
//   bookingForm.style.display = "none";
// });

// // Handle booking submission
// appointmentForm.addEventListener("submit", e => {
//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const phone = document.getElementById("phone").value;

//   const msg = `New Booking 💅%0A👩 Name: ${name}%0A📞 Phone: ${phone}%0A💖 Service: ${currentService}`;
//   window.open(`https://wa.me/918909087801?text=${msg}`, "_blank");

//   bookingForm.style.display = "none";
//   appointmentForm.reset();
// });

// // ❤️ Floating hearts animation
// function createHeart() {
//   const heart = document.createElement("div");
//   heart.classList.add("heart");
//   heart.style.left = Math.random() * 100 + "vw";
//   const size = Math.random() * 20 + 10;
//   heart.style.width = `${size}px`;
//   heart.style.height = `${size}px`;
//   heart.style.animationDuration = Math.random() * 3 + 2 + "s";
//   document.querySelector(".hearts-container").appendChild(heart);
//   setTimeout(() => heart.remove(), 5000);
// }
// setInterval(createHeart, 300);




// Open form on any Book Now click
const buttons = document.querySelectorAll(".book-btn");
const bookingForm = document.getElementById("bookingForm");
const closeFormBtn = document.getElementById("closeFormBtn");
const selectedServiceText = document.getElementById("selectedService");
const appointmentForm = document.getElementById("appointmentForm");

let currentService = "";

// When any "Book Now" is clicked
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentService = btn.parentElement.getAttribute("data-service");
    selectedServiceText.textContent = `Selected Service: ${currentService}`;
    bookingForm.style.display = "block";
  });
});

// Close form
closeFormBtn.addEventListener("click", () => {
  bookingForm.style.display = "none";
});

// Handle booking submission
appointmentForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // ✅ PHONE VALIDATION (Only 10 digits allowed)
  if (!/^\d{10}$/.test(phone)) {
    alert("❌ Please enter a valid 10-digit phone number.");
    return;
  }

  const msg = `New Booking 💅%0A👩 Name: ${name}%0A📞 Phone: ${phone}%0A💖 Service: ${currentService}`;
  window.open(`https://wa.me/918909087801?text=${msg}`, "_blank");

  bookingForm.style.display = "none";
  appointmentForm.reset();
});

// ❤️ Floating hearts animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  const size = Math.random() * 20 + 10;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.querySelector(".hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

