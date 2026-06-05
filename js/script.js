
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Live clock
function updateTime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    document.getElementById("time").innerText = `${hours}:${minutes}`;
}

// update every second
setInterval(updateTime, 1000);
updateTime();
  if (window.firebaseHelpers) {
    window.firebaseHelpers.incrementVisitorCount();
    }

// Skill bars
window.onload = function () {
    document.querySelector(".html").style.width = "90%";
    document.querySelector(".css").style.width = "82%";
    document.querySelector(".js").style.width = "75%";
    document.querySelector(".bootstrap").style.width = "80%";
    document.querySelector(".python").style.width = "55%";
    document.querySelector(".git").style.width = "65%";
      if (window.firebaseHelpers) {
    window.firebaseHelpers.incrementVisitorCount();
    }
};
//contact form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name    = form.querySelector("#name").value.trim();
  const email   = form.querySelector("#email").value.trim();
  const subject = form.querySelector("#subject")?.value.trim() || "";
  const message = form.querySelector("#message").value.trim();

  // Validation (keep your existing checks here)
  if (!name || !email || !message) {
    result.textContent = "Please fill in all fields.";
    result.className = "error"; return;

  }

  // Show loading state
  result.textContent = "Sending...";
  result.className = "info";

  // Save to Firebase
  try {
    const id = await window.firebaseHelpers.saveMessage(
                 name, email, subject, message);
    result.textContent = `Thank you, ${name}! Message saved.`;
    result.className = "success";
    form.reset();
  } catch (err) {
    result.textContent = "Could not send. Please email me directly.";
    result.className = "error";
  }
    if (window.firebaseHelpers) {
    window.firebaseHelpers.incrementVisitorCount();
    }
});
