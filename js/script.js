// SELECT ELEMENTS

const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("navMenu");

// TOGGLE MENU

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});
function updateTime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    // add leading zero if minutes are less than 10
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    document.getElementById("time").innerText = hours + ":" + minutes;
}

// update every second
setInterval(updateTime, 1000);

// run immediately when page loads
updateTime();
window.onload = function () {
  document.querySelector(".html").style.width = "90%";
  document.querySelector(".css").style.width = "82%";
  document.querySelector(".js").style.width = "75%";
  document.querySelector(".bootstrap").style.width = "80%";
  document.querySelector(".python").style.width = "55%";
  document.querySelector(".git").style.width = "65%";
};