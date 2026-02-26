const openQuestion = document.querySelectorAll(".blockFAQ");
openQuestion.forEach((opens) => {
    opens.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("active");
    });
});
const barBlue = document.querySelector(".bar");
const circles = document.querySelectorAll(".circle");
const contents = document.querySelectorAll(".contentTime .content");
function updateDefault() {
    const dayDefault = new Date("2026-02-15");
    const dayNow = new Date();
    const spaceMili = dayNow - dayDefault;
    const spaceDay = Math.floor(spaceMili / (1000 * 60 * 60 * 24));
    let heightPercent = 0;
    if (spaceDay <= 0) {
        heightPercent = 0;
    } else if (spaceDay >= 105) {
        heightPercent = 105;
    } else {
        switch (spaceDay) {
            case 6:
                heightPercent = 19;
                break;
            case 8:
                heightPercent = 38;
                break;
            case 14:
                heightPercent = 56;
                break;
            case 59:
                heightPercent = 75;
                break;
            default:
                if (spaceDay > 6 && spaceDay < 8) {
                    heightPercent = (38 - 19) / 2 + 19;
                } else if (spaceDay > 8 && spaceDay < 14) {
                    heightPercent = 3 * Math.floor((new Date() - new Date("2026-02-23")) / (1000 * 60 * 60 * 24)) + 38;
                } else if (spaceDay > 14 && spaceDay < 59) {
                    heightPercent = 0.45 * Math.floor((new Date() - new Date("2026-03-1")) / (1000 * 60 * 60 * 24)) + 56;
                } else if (spaceDay > 59 && spaceDay < 105) {
                    heightPercent = 0.58 * Math.floor((new Date() - new Date("2026-03-1")) / (1000 * 60 * 60 * 24)) + 75;
                }
        }
    }
    if (barBlue) {
        barBlue.style.height = heightPercent + "%";
    }
    circles.forEach((circle, index) => {
        const miles = [0, 6, 8, 14, 59, 105];
        if (spaceDay >= miles[index]) {
            circle.classList.add("active");
        }
    });
    contents.forEach((content, indexs) => {
        const miles = [0, 6, 8, 14, 59, 105];
        if (spaceDay >= miles[indexs]) {
            content.classList.add("active");
        }
    });
}
updateDefault();
