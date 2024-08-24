let frases={
    es:{
        aprende : "Aprendé idiomas en un solo click",
        español: "Clases de español",
        ingles: "Clases de inglés",
        italiano: "Clases de italiano",
        frances: "Clases de francés",
        aleman: "Clases de alemán",
        portugues: "Clases de portugués"
    },
    en:{
        aprende : "Learn languages ​​in just one click",
        español: "Spanish classes",
        ingles: "English classes",
        italiano: "Italian classes",
        frances: "French",
        aleman: "German classes",
        portugues: "Potuguese classes"
    },
    ita:{
        aprende : "Impara le lingue in un solo clic",
        español: "Lezioni di spagnolo",
        ingles: "Lezioni di inglese",
        italiano: "Lezioni di italiano",
        frances: "Lezioni di francese",
        aleman: "Lezioni di tedesco",
        portugues: "Lezioni di portoghese"
    },
    fr:{
        aprende : "Apprenez des langues en un seul clic",
        español: "Cours d'espagnol",
        ingles: "Cours d'anglais",
        italiano: "Cours d'italien",
        frances: "Cours de français",
        aleman: "Cours d'allemand",
        portugues: "Cours de portugais"
    },

}

function seleccionarIdioma(){
    let idiomaSeleccionado = document.getElementById("idioma").value;

    let aprende = document.getElementById("aprende");
    aprende.innerText = frases[idiomaSeleccionado].aprende;

    let español = document.getElementById("español");
    español.innerText = frases[idiomaSeleccionado].español;

    let ingles = document.getElementById("ingles");
    ingles.innerText = frases[idiomaSeleccionado].ingles;
  
    let italiano = document.getElementById("italiano");
    italiano.innerText = frases[idiomaSeleccionado].italiano;

    let frances = document.getElementById("frances");
    frances.innerText = frases[idiomaSeleccionado].frances;

    let aleman = document.getElementById("aleman");
    aleman.innerText = frases[idiomaSeleccionado].aleman;

    let portugues = document.getElementById("portugues");
    portugues.innerText = frases[idiomaSeleccionado].portugues;
}
