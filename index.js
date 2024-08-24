
let frases = {
    es: {
        bienvenido: "BIENVENIDO A SWIFTGRAMMAR",
        aprende: "Aprendé idiomas con profesores nativos",
        certifica: "Certifica tu nivel con exámenes internacionales",
        contacto: "Contactanos",
        ver: "Ver Más"       
    },
    en: {
        bienvenido: "WELCOME TO SWIFTGRAMMAR",
        aprende: "Learn languages with native teachers",
        certifica: "Certificate your level with international exams",
        contacto: "Contact us",
        ver:"See More"
    },
    ita:{
        bienvenido: "BENVENUTO A SWIFTGRAMMAR",
        aprende: "Impara lingue con profsessori nativi",
        certifica: "Certifica il tuo nivello con essami internazionali",
        contacto: "Contattaci",
        ver: "Vedere di più"
    },
    fr:{
      bienvenido: "BIENVENUE À SWIFTGRAMMAR",
      aprende: "Apprenez des langues avec des professeurs natifs",
      certifica: "Certifiez votre niveau avec des examens internationaux",
      contacto: "Contactez-nous",
      ver: "Voir plus"
    },
    al:{
        bienvenido: "WillkommenWILLKOMMEN BEI SWIFTGRAMMAR",
        aprende: "Lernen Sie Sprachen mit muttersprachlichen Lehrern",
        certifica: "Zertifizieren Sie Ihr Niveau mit internationalen Prüfungen",
        contacto: "Kontaktieren Sie uns",
        ver: "Mehr sehen",
    },
    port:{
        bienvenido: "BEM-VINDO A SWIFTGRAMMAR",
        aprende: "Aprenda idiomas com professores nativos",
        certifica: "Certifique seu nível com exames internacionais",
        contacto: "Contate-nos",
        ver: "Ver mais"
    }
    };

function seleccionarIdioma(){
    let idiomaSeleccionado = document.getElementById("idioma").value;

    let bienvenido = document.getElementById("bienvenido");
    bienvenido.innerText = frases[idiomaSeleccionado].bienvenido;

    let aprende = document.getElementById("aprende");
    aprende.innerText = frases[idiomaSeleccionado].aprende;

    let certifica = document.getElementById("certifica");
    certifica.innerText = frases[idiomaSeleccionado].certifica;

    let contacto = document.getElementById("contacto");
    contacto.innerText = frases[idiomaSeleccionado].contacto;

    let ver = document.getElementById("ver-idiomas");
    ver.innerText = frases[idiomaSeleccionado].ver;
}