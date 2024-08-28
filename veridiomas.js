let frases={
    es:{
        aprende : "Aprendé idiomas en un solo click",
        español: "Clases de español",
        ingles: "Clases de inglés",
        italiano: "Clases de italiano",
        frances: "Clases de francés",
        aleman: "Clases de alemán",
        portugues: "Clases de portugués",
        contacto: "Contactanos",
        eligeEs: "Elige entre más de 7.991 profesores nativos",
        eligeEn: "Elige entre más de 18.564 profesores nativos",
        eligeIta: "Elige entre más de 1.727 profesores nativos",
        eligeFr: "Elige entre más de 2.496 profesores nativos",
        eligeAl: "Elige entre más de 957 profesores nativos",
        eligePort: "Elige entre más de 1.153 profesores nativos"
    },
    en:{
        aprende : "Learn languages ​​in just one click",
        español: "Spanish classes",
        ingles: "English classes",
        italiano: "Italian classes",
        frances: "French",
        aleman: "German classes",
        portugues: "Potuguese classes",
        contacto: "Contact us",
        eligeEs: "Choose from more than 7.991 native teachers",
        eligeEn: "Choose from more than 18.564 native teachers",
        eligeIta: "Choose from more than 1.727 native teachers",
        eligeFr: "Choose from more than 2.496 native teachers",
        eligeAl: "Choose from more than 957 native teachers",
        eligePort: "Choose from more than 1.153 native teachers"
    },
    ita:{
        aprende : "Impara le lingue in un solo clic",
        español: "Lezioni di spagnolo",
        ingles: "Lezioni di inglese",
        italiano: "Lezioni di italiano",
        frances: "Lezioni di francese",
        aleman: "Lezioni di tedesco",
        portugues: "Lezioni di portoghese",
        contacto: "Contattaci",
        eligeEs: "Scegli tra oltre 7.991 insegnanti madrelingua",
        eligeEn: "Scegli tra oltre 18.564 insegnanti madrelingua",
        eligeIta: "Scegli tra oltre  1.727 insegnanti madrelingua",
        eligeFr: "Scegli tra oltre 2.496 insegnanti madrelingua",
        eligeAl: "Scegli tra oltre 957 insegnanti madrelingua",
        eligePort: "Scegli tra oltre 1.153 insegnanti madrelingua"
    },
    fr:{
        aprende : "Apprenez des langues en un seul clic",
        español: "Cours d'espagnol",
        ingles: "Cours d'anglais",
        italiano: "Cours d'italien",
        frances: "Cours de français",
        aleman: "Cours d'allemand",
        portugues: "Cours de portugais",
        contacto: "Contactez-nous",
        eligeEs: "Choisissez parmi plus de 7.991 enseignants natifs",
        eligeEn: "Choisissez parmi plus de 18.564 enseignants natifs",
        eligeIta: "Choisissez parmi plus de 1.727 enseignants natifs",
        eligeFr: "Choisissez parmi plus de 2.496 enseignants natifs",
        eligeAl: "Choisissez parmi plus de 957 enseignants natifs",
        eligePort: "Choisissez parmi plus de 1.153 enseignants natifs"
    },
    al:{
        aprende : "Lernen Sie Sprachen mit nur einem Klick",
        español: "Spanischunterricht",
        ingles: "Englischunterricht",
        italiano: "Italienischunterricht",
        frances: "Französischunterricht",
        aleman: "Deutschunterricht",
        portugues: "Portugiesischunterricht",
        contacto: "Kontaktieren Sie uns",
        eligeEs: "Wählen Sie aus mehr als 7.991 Muttersprachliche Lehrer",
        eligeEn: "Wählen Sie aus mehr als 18.564 Muttersprachliche Lehrer",
        eligeIta: "Wählen Sie aus mehr als 1.727 Muttersprachliche Lehrer",
        eligeFr: "Wählen Sie aus mehr als 2.496 Muttersprachliche Lehrer",
        eligeAl: "Wählen Sie aus mehr als 957 Muttersprachliche Lehrer",
        eligePort: "Wählen Sie aus mehr als 1.153 Muttersprachliche Lehrer"
    },
    port:{
        aprende : "Aprenda idiomas com apenas um clique",
        español: "Aulas de espanhol",
        ingles: "Aulas de inglês",
        italiano: "Aulas de italiano",
        frances: "Aulas de francês",
        aleman: "Aulas de alemão",
        portugues: "Aulas de português",
        contacto: "Contate-nos",
        eligeEs: "Escolha entre mais de 7.991 professores nativos",
        eligeEn: "Escolha entre mais de 18.564 professores nativos",
        eligeIta: "Escolha entre mais de 1.727 professores nativos",
        eligeFr: "Escolha entre mais de 2.496 professores nativos",
        eligeAl: "Escolha entre mais de 957 professores nativos",
        eligePort: "Escolha entre mais de 1.153 professores nativos"

    }
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

    let contacto = document.getElementById("contacto");
    contacto.innerText = frases[idiomaSeleccionado].contacto;

    let eligeEs = document.getElementById("elige-es");
    eligeEs.innerText = frases[idiomaSeleccionado].eligeEs;

    let eligeEn = document.getElementById("elige-en");
    eligeEn.innerText = frases[idiomaSeleccionado].eligeEn; 

    let eligeIta = document.getElementById("elige-ita");
    eligeIta.innerText = frases[idiomaSeleccionado].eligeIta; 

    let eligeFr = document.getElementById("elige-fr");
    eligeFr.innerText = frases[idiomaSeleccionado].eligeFr; 

    let eligeAl = document.getElementById("elige-al");
    eligeAl.innerText = frases[idiomaSeleccionado].eligeAl; 

    let eligePort = document.getElementById("elige-port");
    eligePort.innerText = frases[idiomaSeleccionado].eligePort; 

}
