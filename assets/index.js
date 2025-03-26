const images = ["art1.jpg", "art2.jpg", "art3.jpg", "art4.jpg", "art5.jpg", "art6.jpg", "art7.jpg", "art8.jpg", "art9.jpg"];

const isV4 = document.getElementById("art");
const isV1orV2 = document.getElementById("cards");

const cycleArt = () => {
    let index = parseInt(localStorage.getItem("imageIndex"), 10);

    if (isNaN(index)) {
        index = -1;
    }
    index = (index + 1) % images.length;
    localStorage.setItem("imageIndex", index);

    document.getElementById("art").src = "/assets/imgs/" + images[index];
}

if (isV4) {
    document.addEventListener("DOMContentLoaded", cycleArt);
    isV4.addEventListener("click", cycleArt);
}

// mouse effect for v1 & v2
if (isV1orV2) {
    document.getElementById("cards").onmousemove = e => {
        for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };
    }
}