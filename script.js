var menuVisible = false;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList = "";
        menuVisible = false;
    } else {
        nav.classList = "responsive";
        menuVisible = true;
    }
}

function efectoHabilidades() {
    var skills = document.getElementById("skills")
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("excel");
        habilidades[3].classList.add("rstudio");
        habilidades[4].classList.add("wordpress");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("tomardecision");
    }
}

function efectoHabilidades2() {
    var johari = document.getElementById("johari")
    var distancia_johari = window.innerHeight - johari.getBoundingClientRect().top;
    if (distancia_johari >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("humilde");
        habilidades[1].classList.add("abierto");
        habilidades[2].classList.add("creativo");
        habilidades[3].classList.add("paciente");
        habilidades[4].classList.add("sincero");
        habilidades[5].classList.add("entusiasta");
        habilidades[6].classList.add("generoso");
        habilidades[7].classList.add("metodico");
        habilidades[8].classList.add("honesto");
        habilidades[9].classList.add("justo");
    }
}

function efectoHabilidades3() {
    var johari = document.getElementById("johari")
    var distancia_johari = window.innerHeight - johari.getBoundingClientRect().top;
    if (distancia_johari >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("amable");
        habilidades[1].classList.add("leal");
        habilidades[2].classList.add("innovador");
        habilidades[3].classList.add("minucioso");
        habilidades[4].classList.add("optimista");
        habilidades[5].classList.add("empatico");
        habilidades[6].classList.add("logico");
        habilidades[7].classList.add("puntual");
        habilidades[8].classList.add("honesto");
        habilidades[9].classList.add("justo");
    }
}

window.onscroll = function () {
    efectoHabilidades();
};
