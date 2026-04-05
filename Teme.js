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

    // Scroll na ustrezno poglavje //

    const poglavjaGumbi = document.querySelectorAll(".poglavje"); // pridobivanje gumbov za poglavja

    poglavjaGumbi.forEach(gumb => {  // dodajanje, kaj se bo zgodilo ob kliku
        gumb.addEventListener("click", () => {
            const targetId = gumb.dataset.target;   // določanje cilja za skrolanje
            const targetElement = document.getElementById(targetId);

            if (targetElement) {    // preverjanje, če zadani cilj obstaja
                const yOffset = -200; // določi višino glave
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset; // izračun, koliko je potrebno skrolati

                window.scrollTo({ // skrolanje na cilj, v tem primeru je to Y
                    top: y,
                    behavior: "smooth"
                });
            }
            
            sidebar.classList.remove("open"); // zapre sidebar po kliku
        });
    });
});


