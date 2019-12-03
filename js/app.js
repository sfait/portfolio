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

function changeColorIcon() {
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

function changeColorBorder() {
    const projects = document.querySelectorAll(".project");

    for (let i=0; i<projects.length; i++) {
        projects[i].addEventListener("mouseover", function() {
            this.style.borderColor = "#" + getRandomColor();
        })

        projects[i].addEventListener("mouseout", function() {
            this.style.borderColor = "#fff";
        })
    }
}

const init = function() {
    showHeader();
    changeColorIcon();
    changeColorBorder();
};

document.addEventListener("DOMContentLoaded", init);
