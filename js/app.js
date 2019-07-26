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

const init = () => {
    changeColor();
};

document.addEventListener("DOMContentLoaded", init);
