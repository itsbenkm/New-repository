window.onload = function() {
    const welcomeText = document.getElementById("welcome-text");
    welcomeText.classList.add("fade-in");
};

function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    welcomeText.textContent = "You clicked the button! Welcome to the world of JavaScript.";
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light");
}
