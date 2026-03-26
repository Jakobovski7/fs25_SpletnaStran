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

    // Ta skripta izpiše datum zadnje spremembe //

    const outputElement = document.getElementById("lastModified"); 
    const lastModified = document.lastModified;
    
    const deli = lastModified.split(" ");  //razcleni datum iz osnovne oblike (dd/mm/yyy hh/mm/ss), vmes je presledek, po katerem se lahko to loci.
    const datum = deli[0];  //naredi konstanto datum
    const cas = deli[1];    //naredi konstanto cas

    const danDel = datum.split("/");    //razdelimo konstanto datum ob /
    const mesec = danDel[0];    //naredimo konstanto mesec
    const dan = danDel[1];  //naredimo konstanto dan 
    const leto = danDel[2]; //naredrmo konstanto leto

    const casDel = cas.split(":");  //razdelimo konsranto cas ob :
    const ura = casDel[0];  //naredimo konstanto ura
    const minuta = casDel[1];   //naredimo konstanto minuta
    const sekunda = casDel[2];  //naredimo konstanto sekunda

    const skupaj = `Zadnja sprememba strani: ${dan}. ${mesec}. ${leto} ob ${ura}:${minuta}:${sekunda}`; //vse konstante sestavimo skupaj v koncno obliko zapisa
    outputElement.textContent = skupaj; //izpisemo koncno obliko
})


