let header = document.getElementsByTagName("header")[0] ?? [];
let footer = document.getElementsByTagName("footer")[0] ?? [];
header.innerHTML = `
            <div class="shadow"></div>
            <ul class="wrapNav">
                <li class="navMenu">
                    <i class="fa-solid fa-xmark closed"></i>
                    <ul class="nav">
                        <li><a href="../../pages/homepage/index.html" class="content active">Trang chủ</a></li>
                        <li><a href="../../pages/homepage/index.html#sectionTime" class="content">Timeline</a></li>
                        <li><a href="../../pages/homepage/index.html#sectionPrograme" class="content">Chương trình</a></li>
                        <li><a href="../../pages/homepage/index.html#sectionFAQ" class="content">FAQ</a></li>
                    </ul>
                </li>
            </ul>
            <div class="header">
                <i class="fa-solid fa-bars menuMobile"></i>
                <ul class="menu">
                    <li><a href="../../pages/homepage/index.html" class="content active">Trang chủ</a></li>
                    <li><a href="../../pages/homepage/index.html#sectionTime" class="content">Timeline</a></li>
                </ul>
                <img src="../../assets/logo.png" class="logo" />
                <ul class="menu">
                    <li><a href="../../pages/homepage/index.html#sectionPrograme" class="content">Chương trình</a></li>
                    <li><a href="../../pages/homepage/index.html#sectionFAQ" class="content">FAQ</a></li>
                </ul>
            </div>
        `;
footer.innerHTML = `
            <div class="footer">
                <div class="container containerFooter">
                    <div class="wrapInformation">
                        <div class="blockInfor">
                            <div class="titleInfor">Địa điểm</div>
                            <div class="contentInfors">
                                <div class="content">Onsite: Quận 12, TP.HCM</div>
                                <div class="content">Remote: toàn quốc</div>
                            </div>
                        </div>
                        <div class="blockInfor">
                            <div class="titleInfor">Khám phá</div>
                            <div class="contentInfors">
                                <a href="../../pages/homepage/index.html" class="content contentHover">Trang chủ</a>
                                <a href="../../pages/homepage/index.html#sectionTime" class="content contentHover">Timeline</a>
                                <a href="../../pages/homepage/index.html#sectionPrograme" class="content contentHover">Chương trình</a>
                                <a href="../../pages/homepage/index.html#sectionFAQ" class="content contentHover">FAQ</a>
                            </div>
                        </div>
                        <div class="blockInfor">
                            <div class="titleInfor">Liên hệ và Hỗ trợ</div>
                            <div class="contentInfors">
                                <div class="content">
                                    <span><i class="fa-solid fa-phone"></i></span>: 0909 888 777
                                </div>
                                <div class="content">
                                    <span><i class="fa-solid fa-envelope"></i></span>: internship@iuh.edu.vn
                                </div>
                                <div class="content">
                                    <span><i class="fa-brands fa-weebly"></i></span>: iuh-internship.dev
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
document.querySelector(".menuMobile").addEventListener("click", () => {
    document.querySelector(".wrapNav").classList.add("wrapNavShow");
    document.querySelector(".shadow").style.display = "block";
});
document.querySelector(".closed").addEventListener("click", () => {
    document.querySelector(".wrapNav").classList.remove("wrapNavShow");
    document.querySelector(".shadow").style.display = "none";
});
function updateActiveMenu() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".menu a, .nav a");
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks.forEach((link) => {
        if (currentPath.includes("homepage") && link.textContent.trim() === "Trang chủ") {
            link.classList.add("active");
        }
        if (currentPath.includes("programe") && link.textContent.trim() === "Chương trình") {
            link.classList.add("active");
        }
        if (currentPath.includes("signIn") && link.textContent.trim() === "Chương trình") {
            link.classList.add("active");
        }
    });
}

updateActiveMenu();

document.querySelectorAll(".content").forEach((link) => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href").startsWith("#")) {
            document.querySelectorAll(".content.active").forEach((item) => {
                item.classList.remove("active");
            });
            e.currentTarget.classList.add("active");
        }
    });
});
