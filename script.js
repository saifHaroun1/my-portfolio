document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("homeLink");
    const projectsSection = document.getElementById("projects");

    // عند الضغط على Home
    homeLink.addEventListener("click", function (e) {
        e.preventDefault();
        projectsSection.style.display = "block"; // إظهار قسم المشاريع
    });
});
