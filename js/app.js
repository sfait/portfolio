function getDate() {
    const today = new Date();
    let hours = today.getHours();

    if (hours >= 6 && hours < 12) {
        return "Miłego dnia!";
    } else if (hours >= 12 && hours < 18) {
        return "Miłego popołudnia!";
    } else if (hours >= 18 && hours <= 21) {
        return "Miłego wieczoru!";
    } else {
        return "Miłej nocy!";
    }
}

function showHeader() {
    const secondHeader = document.querySelector(".second-header");
    secondHeader.textContent = getDate();
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function changeColor() {
    const technology = document.querySelectorAll(".technology");

    for (let i=0; i<technology.length; i++) {
        technology[i].addEventListener("mouseover", function() {
            this.style.color = "#" + getRandomColor();
        })

        technology[i].addEventListener("mouseout", function() {
            this.style.color = "#fff";
        })
    }
}

// function checkSlide(e) {
//     console.log(e);
// }
//
// window.addEventListener("scroll", checkSlide);

const init = () => {
    showHeader();
    changeColor();
};

document.addEventListener("DOMContentLoaded", init);
