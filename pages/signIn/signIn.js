const userName = document.querySelector(".username");
const dateOfBirth = document.querySelector(".dateOfBirth");
const email = document.querySelector(".email");
const phoneNumber = document.querySelector(".phoneNumber");
const sexUser = document.querySelector("#sexUser");
const linkFace = document.querySelector(".linkFace");
const linkGithub = document.querySelector(".linkGithub");
const linkPortfolio = document.querySelector(".linkPortfolio");
const tracks = document.querySelector("#tracks");
const textareaBox1 = document.querySelector("#textareaBox1");
const textareaBox2 = document.querySelector("#textareaBox2");
const textareaBox3 = document.querySelector("#textareaBox3");

const allCheckBoxes = [...document.querySelectorAll(".checkBoxs")];
const allCheckRadios = [...document.querySelectorAll(".checkRadio")];

function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkUrl(url) {
    const urlRegex = /^(https?:\/\/)/i;
    return urlRegex.test(url);
}

function isGroupChecked(group) {
    return Array.from(group).some((input) => input.checked);
}
function setReport(target, message) {
    const element = Array.isArray(target) ? target[0] : target;
    const parent = element.closest(".blockSignIn") || element.closest(".blockSignInChangeWidth");
    if (parent) {
        const report = parent.querySelector(".reports");
        if (report) {
            report.textContent = message;
        }
    }
}
function makeMutuallyExclusive(group) {
    group.forEach((checkbox, index) => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                group.forEach((other, otherIndex) => {
                    if (otherIndex !== index) other.checked = false;
                });
            }
        });
    });
}

const projectGroup = allCheckBoxes.slice(0, 2);
makeMutuallyExclusive(projectGroup);

const reactGroup = allCheckBoxes.slice(2, 4);
makeMutuallyExclusive(reactGroup);

const uiuxGroup = allCheckBoxes.slice(4, 6);
makeMutuallyExclusive(uiuxGroup);

const baGroup = allCheckBoxes.slice(6, 8);
makeMutuallyExclusive(baGroup);

const nodejsGroup = allCheckBoxes.slice(8, 10);
makeMutuallyExclusive(nodejsGroup);

const termsGroup = allCheckBoxes.slice(10, 12);
makeMutuallyExclusive(termsGroup);

const learningGroup = allCheckRadios.slice(0, 2);

const workshopGroup = allCheckRadios.slice(2, 4);

function validateForm() {
    let isValid = true;
    document.querySelectorAll(".reports").forEach((rp) => (rp.textContent = ""));
    if (!userName.value.trim()) {
        console.log("lỗi");
        setReport(userName, "Vui lòng nhập họ tên!");
        isValid = false;
    }
    if (!dateOfBirth.value) {
        console.log("lỗi");
        setReport(dateOfBirth, "Vui lòng chọn ngày!");
        isValid = false;
    }
    if (!email.value.trim() || !checkEmail(email.value)) {
        console.log("lỗi");
        setReport(email, "Vui lòng nhập email!");
        isValid = false;
    }
    if (!phoneNumber.value.trim() || phoneNumber.value.length !== 10) {
        console.log("lỗi");
        setReport(phoneNumber, "Vui lòng điền số điện thoại!");
        isValid = false;
    }
    if (!linkFace.value.trim() || !checkUrl(linkFace.value)) {
        console.log("lỗi");
        setReport(linkFace, "Vui lòng điền link facebook!");
        isValid = false;
    }
    if (!sexUser.value) {
        console.log("lỗi");
        setReport(sexUser, "Vui lòng chọn giới tính!");
        isValid = false;
    }
    if (!tracks.value) {
        console.log("lỗi");
        setReport(tracks, "Vui lòng chọn track!");
        isValid = false;
    }

    if (!textareaBox1.value.trim()) {
        console.log("lỗi");
        setReport(textareaBox1, "Vui lòng cho biết tại sao bạn muốn tham gia chương trình này!");
        isValid = false;
    }
    if (!textareaBox2.value.trim()) {
        console.log("lỗi");
        setReport(textareaBox2, "Vui lòng cho biết bạn muốn đạt điều gì sau 3 tháng!");
        isValid = false;
    }

    if (!isGroupChecked(projectGroup)) {
        console.log("lỗi");
        setReport(projectGroup, "Vui lòng tích đầy đủ!");
        isValid = false;
    }
    if (!isGroupChecked(reactGroup)) {
        console.log("lỗi");
        setReport(reactGroup, "Vui lòng tích đầy đủ!");
        isValid = false;
    }
    if (!isGroupChecked(uiuxGroup)) {
        console.log("lỗi");
        setReport(uiuxGroup, "Vui lòng tích đầy đủ!");
        isValid = false;
    }
    if (!isGroupChecked(baGroup)) {
        console.log("lỗi");
        setReport(baGroup, "Vui lòng tích đầy đủ!");
        isValid = false;
    }
    if (!isGroupChecked(nodejsGroup)) {
        console.log("lỗi");
        setReport(nodejsGroup, "Vui lòng tích đầy đủ!");
        isValid = false;
    }

    if (!isGroupChecked(learningGroup)) {
        console.log("lỗi");
        setReport(learningGroup, "Vui lòng tích đầy đủ!");
        isValid = false;
    }
    if (!isGroupChecked(workshopGroup)) {
        console.log("lỗi");
        setReport(workshopGroup, "Vui lòng tích đầy đủ!");
        isValid = false;
    }

    if (!isGroupChecked(termsGroup)) {
        console.log("lỗi");
        setReport(termsGroup, "Vui lòng tích đầy đủ!");
        isValid = false;
    } else {
        if (termsGroup[1].checked && !textareaBox3.value.trim()) {
            console.log("lỗi");
            setReport(termsGroup, "Vui lòng cho biết lý do không đồng ý!");
            isValid = false;
        }
    }

    return isValid;
}

document.querySelector(".finished").addEventListener("click", () => {
    const boxNotification = document.querySelector(".boxNotification");
    const shadowWin = document.querySelector(".shadowWin");
    const dateStart = new Date("2026-02-15");
    const dateNow = new Date();
    let result = (dateNow - dateStart) / (1000 * 60 * 60 * 24);
    if (validateForm() && result <= 6 && result >= 0) {
        console.log("Form hợp lệ, đang submit...");
        boxNotification.style.display = "flex";
        shadowWin.style.display = "block";
    } else {
        boxNotification.style.display = "flex";
        shadowWin.style.display = "block";
        document.querySelector(".titleNoti").textContent = "Form đăng ký gửi thất bại";
        document.querySelector(".titleNoti").style.color = "rgb(255, 24, 24)";
        document.querySelector(".contentNoti").textContent = "Vì quá thời gian đăng ký nên chúng tôi không nhận form của bạn nữa!";
    }
});
