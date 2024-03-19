let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function selecionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcssjavascript");
        habilidades[1].classList.add("aspnetmvc");
        habilidades[2].classList.add("csharp");
        habilidades[3].classList.add("cpp");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("sql");
        habilidades[6].classList.add("java");
        habilidades[7].classList.add("visualbasicnet");
        habilidades[8].classList.add("comunication");
        habilidades[9].classList.add("teamwork");
        habilidades[10].classList.add("creativity");
        habilidades[11].classList.add("dedication");
        habilidades[12].classList.add("project");
    }
}


window.onscroll = function () {
    efectoHabilidades();
} 