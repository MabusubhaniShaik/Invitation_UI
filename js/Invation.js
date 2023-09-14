// Function to update the countdown timer
function updateCountdown() {
    const targetDate = new Date("2024-02-14T00:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }
  
  // Update the countdown immediately
  updateCountdown();
  
  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  