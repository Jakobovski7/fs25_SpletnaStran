document.addEventListener("DOMContentLoaded", () => {
    // Ta skripta oznaci izbrano temo (Giants editor, Giants studio, Blender...) //

    const gumbi = document.querySelectorAll(".GumbTeme");
    const prikazanaStran = window.location.pathname.split("/").pop();

    gumbi.forEach(gumb => {
        const stran = gumb.dataset.page;
        if (stran === prikazanaStran) {
            gumb.classList.add("active");
        }
    });

    // Ta skripta odpre sidebar za izbiro poglavij //

    const hamburger = document.querySelector(".HamburgerGumb");
    const sidebar = document.getElementById("sidebar");

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
})


