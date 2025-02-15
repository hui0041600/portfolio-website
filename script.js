// Get Elements
/*const profilePhoto = document.getElementById("profile-photo");*/

// Load saved profile picture from localStorage (if exists)
document.addEventListener("DOMContentLoaded", function () {
    const savedImage = localStorage.getItem("profilePhoto");
    if (savedImage) {
        profilePhoto.src = savedImage;
        console.log("Loaded Image:", savedImage); // Debugging
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const githubIcon = document.getElementById("github-icon");

    // Function to create a simulated click effect
    function simulateClickEffect() {
        const rect = githubIcon.getBoundingClientRect();
        const clickEffect = document.createElement("div");
        clickEffect.classList.add("click-animation");

        // Set position at GitHub icon center
        clickEffect.style.left = `${rect.left + window.scrollX + rect.width / 2 - 15}px`;
        clickEffect.style.top = `${rect.top + window.scrollY + rect.height / 2 - 15}px`;

        document.body.appendChild(clickEffect);

        // Remove effect after animation ends
        setTimeout(() => {
            clickEffect.remove();
        }, 500);
    }

    // Trigger the animation 1.5 seconds after page loads
    setTimeout(simulateClickEffect, 1500);
});

document.addEventListener("DOMContentLoaded", function () {
    const speechBubble = document.getElementById("click-bubble");
    });
