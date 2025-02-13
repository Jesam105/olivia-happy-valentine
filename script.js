document.getElementById("surpriseBtn").addEventListener("click", function () {
    // Show the surprise message
    document.getElementById("surpriseMessage").classList.add("show");

    // Wait for 3 seconds before navigating
    setTimeout(function () {
        window.location.href = "gallery.html";
    }, 3000);
});

// Generate Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Random positioning
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // 3s - 6s floating speed

    // Random size for variation
    let size = Math.random() * 20 + 10; // 10px - 30px
    heart.style.fontSize = size + "px";

    document.getElementById("heartsContainer").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000); // Remove after animation completes
}

// Create hearts every 400ms
setInterval(createHeart, 400);
